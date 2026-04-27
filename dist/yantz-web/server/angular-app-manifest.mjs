
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
    "route": "/blog"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2423, hash: 'b25981d53e0d13c11f197c9251f64fceb3fa72c28d29d7fd8ae4f52c10e5b847', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '4ecae64d6798c27be65ebac89484eb837be5974417efbaf93e1e93284aee5237', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'empresas/index.html': {size: 39081, hash: 'b4aebd48906149bcbc60f2197c6ed69eeff23ed91f14e2967bac02217e62af7b', text: () => import('./assets-chunks/empresas_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 39860, hash: 'deb78bc6dc023e8790737c436aece883cccf615cbf0ef35a97de39f6a468b0a1', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'accesorios/index.html': {size: 36616, hash: 'd9b49563e2c47b74bda00aff6b599651e30b0a0a6dbabc024388e7d2251a75c8', text: () => import('./assets-chunks/accesorios_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81494, hash: '6456724b0b07769a5e6cc1c304937bce9f8bb631b82cc9d605ea2a17e40a57b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 34921, hash: '262700fabd5fa0ff03e1607c11063fc04ed6d4ebab7c3a0b78c464b2f84fcb6e', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'reparacion-celulares/index.html': {size: 39414, hash: 'd9b78cda63a98f2f16d80169554f9dca10bce6272b01bdbc71c72c31b4312927', text: () => import('./assets-chunks/reparacion-celulares_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 35818, hash: '7744f16cb07a5504af278356b360c258c4d1167dd4256db47fe2987d23ad1356', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'locales/index.html': {size: 47420, hash: '6324744f3fbf0ae5efd919756a717d2d6ea0a65b9313d81be0ff3ab79c8a3f1d', text: () => import('./assets-chunks/locales_index_html.mjs').then(m => m.default)},
    'reparacion-laptops/index.html': {size: 38043, hash: '4fa318b1335102502148d7098e277034823e33736ab766fb86909f00fafca218', text: () => import('./assets-chunks/reparacion-laptops_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 38071, hash: '5e599688c706c5cc43e3e92f865c77b7d1ae53c20f7a474dd7c0d544b7d152c0', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'tienda/index.html': {size: 34053, hash: '0046981829f9f2010031f126b12920dfa57c29f1dff8f65a4c3590487ba971ff', text: () => import('./assets-chunks/tienda_index_html.mjs').then(m => m.default)},
    'styles-PDADAJD5.css': {size: 13118, hash: 'OPdEtOSQ4Ro', text: () => import('./assets-chunks/styles-PDADAJD5_css.mjs').then(m => m.default)}
  },
};
