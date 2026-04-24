
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "route": "/tienda"
  },
  {
    "renderMode": 2,
    "route": "/reparacion-celulares"
  },
  {
    "renderMode": 2,
    "route": "/reparacion-laptops"
  },
  {
    "renderMode": 2,
    "route": "/empresas"
  },
  {
    "renderMode": 2,
    "route": "/accesorios"
  },
  {
    "renderMode": 2,
    "route": "/locales"
  },
  {
    "renderMode": 2,
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/contacto"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2423, hash: 'b4e73cb87e39a26acbaba8f786ddedea73859ef9bee0bde08abaef4d9d5243e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'dca2b3fe51a5fd0db2db25a619f4d17a94476b3dbf54d443e949a9e4178f8fe9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'accesorios/index.html': {size: 36616, hash: '2e697584bffaa1d02561c23e12446ea9376020a0265f1f1b96a585314eead202', text: () => import('./assets-chunks/accesorios_index_html.mjs').then(m => m.default)},
    'empresas/index.html': {size: 39081, hash: '1fadd492680b47029f26a275c0277b531a9cdb18b24433dda37fa25ee0084fd3', text: () => import('./assets-chunks/empresas_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 34921, hash: '521495b56c7a54f83129ae7bc57dc39af59e84218b370c4988f3d50dcc0ede1b', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81494, hash: '997e86a23a6c94d2185dc75eab4f6357b033a814d8778b4bcf50131566a2ad62', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'reparacion-celulares/index.html': {size: 39414, hash: 'ab7ce775c45678ac65d02d58789dd34ed5d000fc642b93dead60b00dc7e59e98', text: () => import('./assets-chunks/reparacion-celulares_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 39860, hash: '530c53d1c02e6aec789434d16aaebae3474fbe6f08c30b984916489893a8237d', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'locales/index.html': {size: 47420, hash: '72a89a5ee42380206b7e01390e87ef0748233bc8fdad3205e7d00ccea78a95f6', text: () => import('./assets-chunks/locales_index_html.mjs').then(m => m.default)},
    'reparacion-laptops/index.html': {size: 38043, hash: 'e4b58677dc7d87805b7cbae281a7bf0e048a499ad46bd8933011a22b40c5e0dd', text: () => import('./assets-chunks/reparacion-laptops_index_html.mjs').then(m => m.default)},
    'tienda/index.html': {size: 27022, hash: '6dfb96c732d21806dac117030cc61be7414d29e045e4b4f41f7e68d6aa7965b3', text: () => import('./assets-chunks/tienda_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 35818, hash: '06bd95c9c1a7d6bc7b6d82d3a56cef6377e8a41f445d1bd351b07ead4f4f2d53', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 38071, hash: 'ef520e4b42e44ee162245a4fc2302f71062f21c73429939d4d0bba2edfad89c5', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'styles-OKLENS4X.css': {size: 13090, hash: 'pRNvoNv0R0s', text: () => import('./assets-chunks/styles-OKLENS4X_css.mjs').then(m => m.default)}
  },
};
