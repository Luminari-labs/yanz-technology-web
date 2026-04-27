
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
    'index.csr.html': {size: 2423, hash: '8b468f29472fc99e440d70fcc9b923bcc90017bd95d3b2d67dfdd2c0f905c0c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '0313bfc6925a9b434b50e21b1d6fb1d202bd655e9ed143f796c79c45083a96ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81494, hash: '2b8a0a86f521398fadff5c6088965808165beedf42e4435da1c95447b71b13ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tienda/index.html': {size: 34717, hash: 'caf72161a0fb70eab8514c93d9f3dd40616f8c8537b7e82024ede253c8c929f6', text: () => import('./assets-chunks/tienda_index_html.mjs').then(m => m.default)},
    'reparacion-laptops/index.html': {size: 38043, hash: '6cf504b12cebd32db25f76a29f82e41fb27559e890465f6b8db56ef0b563e9df', text: () => import('./assets-chunks/reparacion-laptops_index_html.mjs').then(m => m.default)},
    'accesorios/index.html': {size: 36616, hash: 'b3a98aa328eaa0c9eced7399630d122545ebe8973b3d9dc3eeac1afc9ba22000', text: () => import('./assets-chunks/accesorios_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 38071, hash: '64c38a2dfdf93a64cc52acae60c4a9a96f2be7bcfbc4acccbc7982c6f379a10e', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 34921, hash: 'e8290fd0dd8de38c05dfa706c7f650f1ab02deb037a4cde1eb734b110fc31910', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'reparacion-celulares/index.html': {size: 39414, hash: '00c627efbf4810866bb09a43d6d09fcb06f8adda8ff34825a874dedb3d4d23bb', text: () => import('./assets-chunks/reparacion-celulares_index_html.mjs').then(m => m.default)},
    'locales/index.html': {size: 47420, hash: '00c26faff2d3ab21d3020445381a2e00e4b00af6232e597ee2e315986fa7a4ec', text: () => import('./assets-chunks/locales_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 39860, hash: '618d25846c9453f472c70ca59d39454858a22cf70c1716e9792920bf2bb5e9a1', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 35818, hash: 'e5960b2adb62725fe14856b93111da1b8dafd5e3c1298f54e61d10985ce0b2cc', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'empresas/index.html': {size: 39081, hash: '67e37432ed2e173c23b1c2ad2624b25cf223a6fa081bc9681c763b687d6b038b', text: () => import('./assets-chunks/empresas_index_html.mjs').then(m => m.default)},
    'styles-PDADAJD5.css': {size: 13118, hash: 'OPdEtOSQ4Ro', text: () => import('./assets-chunks/styles-PDADAJD5_css.mjs').then(m => m.default)}
  },
};
