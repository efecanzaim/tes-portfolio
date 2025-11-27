// GitHub Pages için basePath
export const basePath = process.env.NODE_ENV === 'production' ? '/tes-portfolio' : '';

// Görsel yollarını basePath ile birleştir
export const getImagePath = (path: string) => `${basePath}${path}`;

