
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
    "renderMode": 0,
    "route": "/producto/*"
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
    'index.csr.html': {size: 2423, hash: '0aa7ca5d41679d73a579a5f56ebf054c91da78ae2e3741271ffb09f8315e47bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '7e8dec1b38f9c80b10a831dd0408135ce70da031decd2ec53931cea20d6ceb3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'empresas/index.html': {size: 39081, hash: '7c7c1a32dcc2854f67c43e132bf5132ec7dfdd4f3ce47c87fbf5c5efe40435fd', text: () => import('./assets-chunks/empresas_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 39860, hash: '2664cc0a9f8d2fb2b56a01988b6d3a903cc1cde41e3231984952189b60e798bf', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'accesorios/index.html': {size: 36616, hash: 'd447f4d9d2b277781b00451b3ac16f112d37cfe385b060103e5e4d268e124d1a', text: () => import('./assets-chunks/accesorios_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 34921, hash: '1a3cac118be8ce69a7080f7537d4c85da954bd397a26f7dfc0266a2a386d2caf', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81494, hash: 'b434ef9194bfe6179ba6ee4dacf96f376b5e8b2b5878e9be85f48ce5dc83c9f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 35818, hash: '84f2111b726a060c21f8273eab0c6d89bdf6a617df371e1f0b9898a703e764d7', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'reparacion-celulares/index.html': {size: 39414, hash: 'c7a78757b589d07d1f297a69dd90195f4c4f675059bd1a9bd79980b2452efdae', text: () => import('./assets-chunks/reparacion-celulares_index_html.mjs').then(m => m.default)},
    'locales/index.html': {size: 47420, hash: '7eb0f9a9051c01003cea89bdaa12a444dcb838ea44e5fb16205dd3e0dd24557b', text: () => import('./assets-chunks/locales_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 38071, hash: '5646dae9ffe16e80bdd29e045e212b36614db6dd434882f87ed8cffa80c1aa2a', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'reparacion-laptops/index.html': {size: 38043, hash: 'd331e2c1efc094c6f22e59e2aba96e1cefb2302414d8bd5e116329a32e7fe36a', text: () => import('./assets-chunks/reparacion-laptops_index_html.mjs').then(m => m.default)},
    'tienda/index.html': {size: 34050, hash: '9e29e53af3bcac53d7627577927efa6f7fb5e7afbadcd3cfb31d6279b5c4dfc6', text: () => import('./assets-chunks/tienda_index_html.mjs').then(m => m.default)},
    'styles-OKLENS4X.css': {size: 13090, hash: 'pRNvoNv0R0s', text: () => import('./assets-chunks/styles-OKLENS4X_css.mjs').then(m => m.default)}
  },
};
