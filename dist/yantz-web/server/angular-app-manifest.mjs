
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
    'index.csr.html': {size: 4147, hash: '2f819f5645e932dbad2b6d97434973aac244a86db56f1fd411d06fd8f469c5e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '6dbc44fc25aaca9408b402c6f412adb106daed331e1d004172b308f471903a34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83306, hash: 'f7b8dac7b731e4bc7feb722b9f064ca5e1037703694092ee2a0c4e4156255ae7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'accesorios/index.html': {size: 38428, hash: '6813859b7ffb40a9ed4591b6c36c294e2351f83af5ec0993e63ec06ad3cb363f', text: () => import('./assets-chunks/accesorios_index_html.mjs').then(m => m.default)},
    'empresas/index.html': {size: 40893, hash: 'b9057b2c9daae246c21dc2df436e5ce1e6e5b591db0e8c1843b415aca0ff6d83', text: () => import('./assets-chunks/empresas_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 36733, hash: '506a27de6b94df2eea60bec20c606eaa716ce091fefad6c2851fa3a35bdc090d', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'reparacion-celulares/index.html': {size: 41226, hash: '91fe5e1aae7a59954b54e41228aad19df9fde9907f65e59ac520d6286f163c7b', text: () => import('./assets-chunks/reparacion-celulares_index_html.mjs').then(m => m.default)},
    'locales/index.html': {size: 49232, hash: 'a108acd4c514f4c167bb95c0926e1ab6579f44b6226f3b64f97a507811de557c', text: () => import('./assets-chunks/locales_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 41672, hash: '124d75069c5094f37ecde572c4f895edbc22ef2ed7d8d7c57712967667ed855b', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 37630, hash: 'b6b0c30c95c8b7e4db50302d73c8826ea78fe951d6585b3fa79f5c8ce4560510', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'tienda/index.html': {size: 35863, hash: 'b56948040bb279b3c7f33d62dc558423c42da64d079d6fe39356cfc867947448', text: () => import('./assets-chunks/tienda_index_html.mjs').then(m => m.default)},
    'reparacion-laptops/index.html': {size: 39855, hash: 'caa6c2c34c36b9b87cb396004c720894eac69abcc2f39874c6fef2bd0d396986', text: () => import('./assets-chunks/reparacion-laptops_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 39883, hash: 'ac58e80f928f1c5b0c3a46ff4e332c2fe2074b2ea61e86dede2e24d87b39b03e', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'styles-GYNZFHA3.css': {size: 16814, hash: 'xWeVJMmCKBk', text: () => import('./assets-chunks/styles-GYNZFHA3_css.mjs').then(m => m.default)}
  },
};
