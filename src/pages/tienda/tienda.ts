import { Component, PLATFORM_ID, inject, signal, OnInit, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { API_BASE_URL, API_IMAGES_URL } from '../../app/api-base';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tienda.html',
  styleUrls: ['./tienda.css']
})
export class Tienda implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly productsUrl = `${API_BASE_URL}/products/all`;
  private router = inject(Router);
  private http = inject(HttpClient);

  // Constants
  public readonly imagesUrl = API_IMAGES_URL;

  // State
  productsList = signal<any[]>([]);
  isLoading = signal<boolean>(true);

  // Filters state
  searchQuery = signal<string>('');
  selectedCategory = signal<string>('todas');
  minPrice = signal<number | null>(null);
  maxPrice = signal<number | null>(null);

  // Available categories (can be dynamic or static)
  categories = [
    { id: 'todas', name: 'Todas las categorías' },
    { id: 'celulares', name: 'Celulares y Tablets' },
    { id: 'computadoras', name: 'Computadoras y Laptops' },
    { id: 'accesorios', name: 'Accesorios y Audio' },
    { id: 'repuestos', name: 'Repuestos Generales' }
  ];

  // Computed signal for filtered products
  filteredProducts = computed(() => {
    let list = this.productsList();
    const query = this.searchQuery().toLowerCase().trim();
    const cat = this.selectedCategory();
    const minP = this.minPrice();
    const maxP = this.maxPrice();

    if (query) {
      list = list.filter(p => p.name?.toLowerCase().includes(query) || p.details?.toLowerCase().includes(query));
    }

    if (cat !== 'todas') {
      list = list.filter(p => p.category === cat);
    }

    if (minP !== null && minP > 0) {
      list = list.filter(p => p.price >= minP);
    }

    if (maxP !== null && maxP > 0) {
      list = list.filter(p => p.price <= maxP);
    }

    return list;
  });

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.fetchProducts();
  }

  fetchProducts() {
    this.isLoading.set(true);
    this.http.get<any[]>(this.productsUrl).subscribe({
      next: (data) => {
        const reversed = [...data].reverse(); // Newest first
        this.productsList.set(reversed);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Error obteniendo productos:", err);
        this.isLoading.set(false);
      }
    });
  }

  setCategory(catId: string) {
    this.selectedCategory.set(catId);
  }

  resetFilters() {
    this.searchQuery.set('');
    this.selectedCategory.set('todas');
    this.minPrice.set(null);
    this.maxPrice.set(null);
  }

  viewProductDetails(product: any) {
    // Navigate to product details page, passing the product via state
    // Alternatively, the detail page could fetch it by ID if we implement that endpoint.
    this.router.navigate(['/producto', product.id], { state: { product } });
  }

  buyDirectly(product: any, event: Event) {
    event.stopPropagation(); // Prevent clicking the card behind the button
    
    // Send to WhatsApp
    // PhoneNumber should probably come from configuration, using a placeholder for now
    const phoneNumber = "593999999999"; // Replace with actual seller number
    const message = `Hola! Me interesa comprar el producto: *${product.name}* que está publicado en la tienda por $${product.price}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  }

  addToCart(product: any, event: Event) {
    event.stopPropagation();
    alert(`El producto ${product.name} se agregó al carrito (Funcionalidad en desarrollo).`);
  }
}
