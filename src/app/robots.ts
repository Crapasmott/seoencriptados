// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://encriptados.io';
  const lastModified = new Date();
  
  // Idiomas soportados
  const languages = ['es', 'en', 'fr', 'it', 'pt'];
  
  // Rutas principales
  const mainRoutes = [
    {
      url: baseUrl, // Canonical español
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...languages.slice(1).map(lang => ({
      url: `${baseUrl}/${lang}`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    }))
  ];

  // Rutas de aplicaciones/productos
  const appRoutes = [
    'armadillo',
    'armadillo-v2', 
    'chat-mail',
    'cryptcom',
    'dec-secure',
    'elyon',
    'intact-phone',
    'nord-vpn',
    'renati',
    'salt',
    'secure-mdm-android',
    'secure-mdm-iphone',
    'silent-circle',
    't2-communicator',
    'threema',
    'threema-work',
    'ultrax',
    'vault-chat',
    'vault-chat-v2',
    'vnc-lagoon'
  ];

  const appSitemapEntries = appRoutes.flatMap(app => 
    languages.map(lang => ({
      url: lang === 'es' ? `${baseUrl}/apps/${app}` : `${baseUrl}/${lang}/apps/${app}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  // Páginas de contenido
  const contentPages = [
    'about-us',
    'blog', 
    'news',
    'offers',
    'our-products',
    'security-test',
    'where-to-find-encrypted',
    'where-to-find-us',
    'become-an-encrypted-partner',
    'distributors',
    'encrypted-phones-distributors',
    'fast-delivery',
    'identity-verification'
  ];

  const contentSitemapEntries = contentPages.flatMap(page =>
    languages.map(lang => ({
      url: lang === 'es' ? `${baseUrl}/${page}` : `${baseUrl}/${lang}/${page}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // SIM y servicios especiales
  const simServices = [
    'encrypted-sim',
    'ira-sim', 
    'tim-sim',
    'deliveries',
    'encrypted-test',
    'products-test'
  ];

  const simSitemapEntries = simServices.flatMap(service =>
    languages.map(lang => ({
      url: lang === 'es' ? `${baseUrl}/${service}` : `${baseUrl}/${lang}/${service}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  return [
    ...mainRoutes,
    ...appSitemapEntries,
    ...contentSitemapEntries,
    ...simSitemapEntries
  ];
}