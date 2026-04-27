import { Component, PLATFORM_ID, inject, signal, OnInit, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  private route = inject(ActivatedRoute);
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

  // Available categories generated from DB data
  categories = computed(() => {
    const mapped = new Map<string, string>();

    for (const product of this.productsList()) {
      const rawCategory = this.readCategory(product);
      const normalizedCategory = this.normalizeCategory(rawCategory);
      if (!normalizedCategory) {
        continue;
      }
      if (!mapped.has(normalizedCategory)) {
        mapped.set(normalizedCategory, rawCategory.trim());
      }
    }

    const dynamicCategories = [...mapped.entries()]
      .sort((a, b) => a[1].localeCompare(b[1], 'es', { sensitivity: 'base' }))
      .map(([id, name]) => ({ id, name }));

    return [{ id: 'todas', name: 'Todas las categorías' }, ...dynamicCategories];
  });

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
      list = list.filter(p => this.normalizeCategory(this.readCategory(p)) === cat);
    }

    if (minP !== null && minP > 0) {
      list = list.filter(p => this.toNumber(p.price) >= minP);
    }

    if (maxP !== null && maxP > 0) {
      list = list.filter(p => this.toNumber(p.price) <= maxP);
    }

    return list;
  });

  ngOnInit() {
    const initialCategoryParam = this.route.snapshot.paramMap.get('category');
    if (initialCategoryParam) {
      this.selectedCategory.set(this.normalizeCategory(initialCategoryParam));
    }
    this.fetchProducts();
  }

  fetchProducts() {
    this.isLoading.set(true);
    console.log(`[Tienda] Solicitando productos al backend: ${this.productsUrl}`);
    this.http.get<any[]>(this.productsUrl).subscribe({
      next: (data) => {
        console.log(`[Tienda] Productos recibidos exitosamente:`, data);
        const reversed = [...data].reverse(); // Newest first
        this.productsList.set(reversed);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("[Tienda] Error obteniendo productos:", err);
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
    const message = `Hola! Me interesa comprar el producto: *${product.name}* que está publicado en la tienda por $${this.formatPrice(product.price)}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  }

  addToCart(product: any, event: Event) {
    event.stopPropagation();
    alert(`El producto ${product.name} se agregó al carrito (Funcionalidad en desarrollo).`);
  }

  formatPrice(value: number | string | null | undefined): string {
    if (value === null || value === undefined || value === '') {
      return '0.00';
    }

    const numericValue = Number(value);
    if (!Number.isFinite(numericValue)) {
      return '0.00';
    }

    return numericValue.toFixed(2);
  }

  private readCategory(product: any): string {
    if (!product?.category || typeof product.category !== 'string') {
      return 'Varios';
    }
    return product.category;
  }

  private normalizeCategory(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    return value.trim().toLowerCase();
  }

  private toNumber(value: unknown): number {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
  }
}
