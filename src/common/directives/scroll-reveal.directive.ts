import { Directive, ElementRef, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '.rv',
    standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    private observer!: IntersectionObserver;

    constructor(
        private el: ElementRef,
        @Inject(PLATFORM_ID) private platformId: Object,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            // Asegurar que tenga la clase base
            if (!this.el.nativeElement.classList.contains('rv')) {
                 this.el.nativeElement.classList.add('rv');
            }

            this.ngZone.runOutsideAngular(() => {
                this.observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('on');
                            this.observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.12 });

                this.observer.observe(this.el.nativeElement);
            });
        }
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
