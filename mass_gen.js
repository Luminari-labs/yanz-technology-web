const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'reparacion-celulares', className: 'ReparacionCelulares', title: 'Reparación de Celulares en Cuenca', desc: 'Diagnóstico sin costo, repuestos de calidad certificada y garantía escrita. Sin sorpresas, sin rodeos.' },
  { name: 'reparacion-laptops', className: 'ReparacionLaptops', title: 'Reparación de Laptops', desc: 'Diagnóstico completo, mantenimiento preventivo, cambio de pasta térmica, reparación de placa, reballing.' },
  { name: 'empresas', className: 'Empresas', title: 'Servicio Técnico Empresarial', desc: 'Mantenimiento preventivo, soporte correctivo, contratos formales con SLA. Para empresas exigentes.' },
  { name: 'accesorios', className: 'Accesorios', title: 'Accesorios y Tecnología', desc: 'Cables, cargadores, power banks, periféricos. Originales y compatibles AAA certificados.' },
  { name: 'locales', className: 'Locales', title: '7 Puntos en Cuenca y Chordeleg', desc: 'Presencia física real que ninguna tienda online puede replicar — porque la confianza también tiene dirección.' },
  { name: 'nosotros', className: 'Nosotros', title: 'Historia y Valores', desc: 'No somos una multinacional. Somos una empresa nacida en Cuenca, construida con trabajo real.' },
  { name: 'contacto', className: 'Contacto', title: 'Contacto y Diagnóstico', desc: 'Escríbenos por WhatsApp, completa el formulario o visítanos. En menos de 15 minutos tienes respuesta.' },
  { name: 'blog', className: 'Blog', title: 'Blog y Noticias (Próximamente)', desc: 'Aquí encontrarás notas sobre tecnología, cuidado de equipos y noticias de Yanz.' }
];

const basePath = path.join(__dirname, 'src', 'pages');

pages.forEach(p => {
  const dir = path.join(basePath, p.name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const tsContent = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../common/directives/scroll-reveal.directive';

@Component({
  selector: 'app-${p.name}',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './${p.name}.html',
  styleUrl: './${p.name}.css'
})
export class ${p.className} {}
`;
  fs.writeFileSync(path.join(dir, `${p.name}.ts`), tsContent);

  fs.writeFileSync(path.join(dir, `${p.name}.css`), '/* Se usan estilos globales de styles.css */\n');

  let gridHTML = '';
  if(p.name === 'nosotros') {
      gridHTML = `<div class="rv d3" style="max-width: 800px; margin: 60px auto 0; text-align: left;">
          <h3 style="margin-bottom: 20px;">Nuestra Historia</h3>
          <p style="color: var(--ivory-2); line-height: 1.6; margin-bottom: 20px;">Primer local en Cuenca con una convicción clara: la tecnología de calidad debía llegar acompañada de asesoría honesta y servicio técnico real. Sin engaños, sin venderte lo más caro.</p>
      </div>`;
  } else if (p.name === 'locales') {
      gridHTML = `<div class="rv d3" style="max-width: 800px; margin: 60px auto 0; text-align: left;">
          <div style="background: var(--black-c); border: 1px solid var(--blue-border); border-radius: 16px; padding: 30px; margin-bottom: 20px;">
              <h3 style="color: var(--blue); margin-bottom: 5px;">Sede Principal</h3>
              <p style="color: var(--ivory-2); font-size: 14px; margin-bottom: 10px;">Calle Gran Colombia y Tarqui, Centro Histórico</p>
              <a href="https://wa.me/593984097455" class="btn btn-sm btn-ghost">Contactar Local</a>
          </div>
          <div style="background: var(--black-c); border: 1px solid var(--blue-border); border-radius: 16px; padding: 30px;">
              <h3 style="color: var(--blue); margin-bottom: 5px;">Sucursal Norte</h3>
              <p style="color: var(--ivory-2); font-size: 14px; margin-bottom: 10px;">Av. Remigio Crespo, sector El Batán</p>
              <a href="https://wa.me/593984097455" class="btn btn-sm btn-ghost">Contactar Local</a>
          </div>
      </div>`;
  }

  const htmlContent = `<section class="section" style="padding-top: 160px; padding-bottom: 80px;">
    <div class="wrap-sm center">
        <h1 class="rv">${p.title}</h1>
        <p class="lead rv d1" style="max-width: 600px; margin: 20px auto;">${p.desc}</p>
        <div class="cta-acts rv d2" style="margin-top: 40px; justify-content: center;">
            <a href="https://wa.me/593984097455?text=Hola+Yanz" class="btn btn-primary" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
        </div>
        ${gridHTML}
    </div>
</section>

<!-- Repeating Global CTA -->
<section class="cta-section" style="padding-top: 80px;">
    <div class="wrap-sm">
        <h2 class="cta-h2 rv">Diagnóstico en menos de 15 minutos <em>Sin costo.</em></h2>
        <p class="lead cta-p rv d1">Te decimos qué tiene tu equipo antes de cobrarte un centavo. Sin compromiso para que decidas libremente.</p>
        <div class="cta-acts rv d2" style="justify-content: center;">
            <a href="https://wa.me/593984097455" target="_blank" rel="noopener" class="btn btn-primary">Hablar con un técnico</a>
        </div>
    </div>
</section>
`;
  fs.writeFileSync(path.join(dir, `${p.name}.html`), htmlContent);
  console.log(`Created component: ${p.name}`);
});
