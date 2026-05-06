import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-torneo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './torneo.html',
  styleUrl: './torneo.css'
})
export class Torneo implements AfterViewInit {

  whatsappNumber: string = '+593 98 252 5224';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  get formattedNumber(): string {
    return this.whatsappNumber.replace(/\s+/g, '').replace('+', '');
  }

  get whatsappLink(): string {
    const message = encodeURIComponent('Hola Yanz Tecnología, quiero inscribirme en el torneo de MK1 y EA FC 26.');
    return `https://wa.me/${this.formattedNumber}?text=${message}`;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
