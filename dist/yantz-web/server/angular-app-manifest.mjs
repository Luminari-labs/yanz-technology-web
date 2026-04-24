
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
    'index.csr.html': {size: 4147, hash: '6bedcc140fcadaf1707ca23ed48c3a91a1755deed288f2a53df4d2ca75f7a4e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'c2a0ec8ff3316ddd999f8f8a6ffb569d2186ec2ac4ef2d94dea7acf41bea7d2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 41672, hash: '2a4641cdc9082a29d9945e7bc35d83c05c57a71c7f0be07102fa2e66081ce952', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'empresas/index.html': {size: 40893, hash: '05a7dbbacd515d2070bf36351b3a6b418d30debabdfbfdec6a151d278a9b05cd', text: () => import('./assets-chunks/empresas_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 36733, hash: 'e9ab3eb78d0376a0a52203dfe230d702c7948eccebc042fda0a6a9903c60942f', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'reparacion-celulares/index.html': {size: 41226, hash: 'bf4a49b9eb4494a373a7315990333a914d6e2d392dd3fcb9e7667634e931a0c4', text: () => import('./assets-chunks/reparacion-celulares_index_html.mjs').then(m => m.default)},
    'index.html': {size: 83306, hash: 'b48c71b9f5d3f432c5fa205511fa452dea843952fcc6c42221e7b47f27f7da4b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'locales/index.html': {size: 49232, hash: '6e229a67004e32c31ee80570cdd4bb6d124066759768815271c07a2af82dd4c6', text: () => import('./assets-chunks/locales_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 37630, hash: '0c2d77a2e2deb0d1f616a2ac112c2d9551369e40266cf28b17e3fecc54110e31', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'reparacion-laptops/index.html': {size: 39855, hash: '6ccc76f11d92f4d40b65113ca695351e02e8e438827c240bc52cd77860acaf81', text: () => import('./assets-chunks/reparacion-laptops_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 39883, hash: 'e7de118cf373d8b77d2070c3d64c76e15170027593a863ea38c4ad83912b77a6', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'accesorios/index.html': {size: 38428, hash: '260ab70bba1b4143d50d438696255c9d9975965984ef725039d2636e1c3939d6', text: () => import('./assets-chunks/accesorios_index_html.mjs').then(m => m.default)},
    'tienda/index.html': {size: 36529, hash: '9f86dc9b7d1cae3bbade68015e508c17c1967c24d86d0470d6402c5583da5bc5', text: () => import('./assets-chunks/tienda_index_html.mjs').then(m => m.default)},
    'styles-GYNZFHA3.css': {size: 16814, hash: 'xWeVJMmCKBk', text: () => import('./assets-chunks/styles-GYNZFHA3_css.mjs').then(m => m.default)}
  },
};
