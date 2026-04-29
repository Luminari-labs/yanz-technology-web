import { Routes } from '@angular/router';
import { Landing } from '../common/landing/landing';
import { Home } from '../pages/home/home';
import { Servicios } from '../pages/servicios/servicios';
import { ReparacionCelulares } from '../pages/reparacion-celulares/reparacion-celulares';
import { ReparacionLaptops } from '../pages/reparacion-laptops/reparacion-laptops';
import { Empresas } from '../pages/empresas/empresas';
import { Accesorios } from '../pages/accesorios/accesorios';
import { Locales } from '../pages/locales/locales';
import { Nosotros } from '../pages/nosotros/nosotros';
import { Contacto } from '../pages/contacto/contacto';
import { Blog } from '../pages/blog/blog';
import { Privacidad } from '../pages/privacidad/privacidad';
import { Tienda } from '../pages/tienda/tienda';
import { ProductoDetalle } from '../pages/producto-detalle/producto-detalle';

export const routes: Routes = [
    {
        path: '',
        component: Landing,
        children: [
            { path: '', component: Home },
            { path: 'servicios', component: Servicios },
            { path: 'tienda', component: Tienda },
            { path: 'tienda/:category', component: Tienda },
            { path: 'producto/:id', component: ProductoDetalle },
            { path: 'reparacion-celulares', component: ReparacionCelulares },
            { path: 'reparacion-laptops', component: ReparacionLaptops },
            { path: 'empresas', component: Empresas },
            { path: 'accesorios', component: Accesorios },
            { path: 'locales', component: Locales },
            { path: 'nosotros', component: Nosotros },
            { path: 'contacto', component: Contacto },
            { path: 'privacidad', component: Privacidad },
            { path: 'blog', component: Blog }
        ]
    },

];
