
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
    "route": "/tienda/*"
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
    "route": "/privacidad"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "route": "/torneo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4181, hash: '667c04ca7358c410f9ca8a28ec8b7f94cc4252eae0599b4c3fee2c4c65a11d30', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 984, hash: '5b33130ae8180d3457d1a5e1d3bf5f56b867a044167abf9c37c3fcb446759732', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'empresas/index.html': {size: 40994, hash: '7cd4ff69cee4d7f2c20e47a9deb4ea8a13428f1759f2ca8e634d5caac72458e5', text: () => import('./assets-chunks/empresas_index_html.mjs').then(m => m.default)},
    'index.html': {size: 83408, hash: '33f0de0c18f6ba568b75d32d6d54c10cff90243f8b36e6aec61d51f0ebb1a532', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'privacidad/index.html': {size: 33140, hash: 'ea31a290a8376a665306bffcd45afd11ebfb83ee8b476357e041602295b4f2bc', text: () => import('./assets-chunks/privacidad_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 41896, hash: '9712e6a2ae2c14990e17d1834cc2ebb7356c6b5c1fd225c62b8e9731239b7ace', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'accesorios/index.html': {size: 38530, hash: '6b036e396208b768675f8ba2045f030b54a78afc6d59642a0d662241fb0d641f', text: () => import('./assets-chunks/accesorios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 37732, hash: 'd67e0d1143333cb28bb891602a16282a35a5ddd082001081dffbd608a2b9fb0d', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'torneo/index.html': {size: 37881, hash: '69773409cca5f0cdb6fad1940c60346804f918a30938ac65cfb702393fbd86cd', text: () => import('./assets-chunks/torneo_index_html.mjs').then(m => m.default)},
    'reparacion-celulares/index.html': {size: 41328, hash: 'f1f94cde4704477369e663885315a07e4509d3a5ef8a3365f8f3746f663c1062', text: () => import('./assets-chunks/reparacion-celulares_index_html.mjs').then(m => m.default)},
    'locales/index.html': {size: 49334, hash: 'ad51602fd086a20da253b83654ca620c9691314c66fcc9411ebf2e3701bfb99b', text: () => import('./assets-chunks/locales_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 39985, hash: '982740695d41fba27b1f5efb8bdda27c83605e93e0d6e319adabe994f00fbc8e', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'reparacion-laptops/index.html': {size: 39957, hash: '41572a6e35d9d28d11d84ff69da9362d7fb0a5a97c98f0218f2991676bfd2cad', text: () => import('./assets-chunks/reparacion-laptops_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 36835, hash: 'c89327c226035dbbf3be190e9bc8327fe3fb03d88c49283d2952a9bf3a0a9d0a', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'tienda/index.html': {size: 35967, hash: '2b15fb278143d299707dd3779ca7ff28a4e6022a3ca9da5e03f4107ef5509e1c', text: () => import('./assets-chunks/tienda_index_html.mjs').then(m => m.default)},
    'styles-GYNZFHA3.css': {size: 16814, hash: 'xWeVJMmCKBk', text: () => import('./assets-chunks/styles-GYNZFHA3_css.mjs').then(m => m.default)}
  },
};
