declare global {
  interface Window {
    __APP_CONFIG__?: {
      BACKEND_URL?: string;
    };
  }
}

const runtimeBackendUrl =
  typeof window !== 'undefined'
    ? window.__APP_CONFIG__?.BACKEND_URL?.trim()
    : undefined;
const defaultBackendUrl = 'http://yanzacademy-backendbuyfast-avgzzn:8080';

const normalizeBaseUrl = (value: string) => {
  const withoutTrailingSlash = value.replace(/\/+$/, '');
  return withoutTrailingSlash.endsWith('/api')
    ? withoutTrailingSlash
    : `${withoutTrailingSlash}/api`;
};

export const API_BASE_URL =
  runtimeBackendUrl && runtimeBackendUrl.length > 0
    ? normalizeBaseUrl(runtimeBackendUrl)
    : normalizeBaseUrl(defaultBackendUrl);

export const API_IMAGES_URL = `${API_BASE_URL}/images`;
