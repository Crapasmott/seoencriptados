// src/app/[locale]/deliveries/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import DeliveriePage from './components/DeliveriePage';

interface DeliveriesPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA DELIVERIES
const deliveriesSpintax = {
  es: {
    titles: [
      "Deliveries 2025 - {Envío|Entrega|Delivery} {Seguro|Encriptado|Protegido} de {Dispositivos|Celulares|Productos} {Encriptados|Cifrados|Seguros} | {Logística|Distribución|Envío} {Especializada|Segura|Confiable}",
      "Deliveries {Encriptados|Seguros|Protegidos} - {Envío|Entrega|Delivery} {Discreto|Confidencial|Privado} de {Tecnología|Dispositivos|Productos} de {Alta Seguridad|Máxima Protección|Grado Militar}",
      "{Envío|Entrega|Delivery} {Seguro|Encriptado|Protegido} Deliveries - {Logística|Distribución|Transporte} {Especializada|Profesional|Confiable} para {Dispositivos|Productos|Tecnología} {Sensibles|Críticos|Seguros}",
      "Deliveries {Logística|Distribución|Envío} - {Entrega|Delivery|Transporte} {Segura|Protegida|Encriptada} de {Celulares|Dispositivos|Productos} {Encriptados|Cifrados|Blindados} {Mundial|Internacional|Global}",
      "{Distribución|Logística|Envío} Deliveries {Segura|Protegida|Confiable} - {Entrega|Delivery|Transporte} {Especializada|Profesional|Experta} en {Tecnología|Dispositivos|Productos} de {Seguridad|Privacidad|Protección}"
    ],
    descriptions: [
      "Deliveries: {Servicio|Sistema|Plataforma} de {envío|entrega|delivery} {seguro|encriptado|protegido} para {dispositivos|celulares|productos} {encriptados|cifrados|seguros}. {Logística|Distribución|Transporte} {especializada|profesional|confiable} con {entrega|delivery|envío} {discreta|confidencial|privada}. {Cobertura|Alcance|Servicio} {mundial|internacional|global} para {tecnología|dispositivos|productos} {sensibles|críticos|seguros}.",
      "Descubre Deliveries, el {servicio|sistema|plataforma} de {logística|distribución|envío} más {seguro|confiable|profesional} para {dispositivos|productos|tecnología} {encriptados|cifrados|seguros}. {Entrega|Delivery|Envío} {discreta|confidencial|privada} con {seguimiento|tracking|monitoreo} {completo|total|detallado} y {garantía|seguridad|protección} {total|absoluta|completa}.",
      "{Envío|Entrega|Delivery} {seguro|encriptado|protegido} de {dispositivos|celulares|productos} {encriptados|cifrados|seguros} con Deliveries. {Logística|Distribución|Transporte} {especializada|profesional|experta} con {protocolos|procedimientos|medidas} de {seguridad|protección|confidencialidad} {estrictos|rigurosos|avanzados}. {Ideal|Perfecto|Diseñado} para {empresas|organizaciones|profesionales} que requieren {máxima|total|absoluta} {discreción|confidencialidad|privacidad}.",
      "Deliveries ofrece {logística|distribución|envío} {especializada|profesional|segura} para {dispositivos|productos|tecnología} de {alta seguridad|máxima protección|grado militar}. {Envío|Entrega|Delivery} {mundial|internacional|global} con {seguimiento|tracking|monitoreo} {avanzado|completo|detallado} y {protección|seguridad|garantía} {total|absoluta|completa} durante el {transporte|envío|traslado}."
    ],
    keywords: [
      "Deliveries {envío|entrega|delivery} {seguro|encriptado|protegido}, {logística|distribución} {dispositivos|celulares} {encriptados|cifrados|seguros}, {envío|entrega} {discreto|confidencial|privado} {tecnología|productos} seguridad, Deliveries {servicio|cobertura|alcance} {mundial|internacional|global}",
      "{distribución|logística|envío} {especializada|profesional} {dispositivos|productos} {sensibles|críticos|seguros}, {entrega|delivery} {confidencial|discreta|privada} {tecnología|productos} encriptados, Deliveries {seguimiento|tracking|monitoreo} {completo|avanzado|detallado}",
      "Deliveries vs {DHL|FedEx|UPS} {seguridad|protección|confidencialidad}, {envío|entrega|delivery} {seguro|protegido} {España|Europa|mundial}, {logística|distribución} {especializada|profesional} {alta seguridad|máxima protección}, Deliveries {precios|costos|tarifas}"
    ]
  },
  en: {
    titles: [
      "Deliveries 2025 - {Secure|Encrypted|Protected} {Shipping|Delivery|Transport} of {Encrypted|Secure|Protected} {Devices|Phones|Products} | {Specialized|Secure|Reliable} {Logistics|Distribution|Shipping}",
      "Deliveries {Encrypted|Secure|Protected} - {Discreet|Confidential|Private} {Shipping|Delivery|Transport} of {High-Security|Maximum-Protection|Military-Grade} {Technology|Devices|Products}",
      "{Secure|Encrypted|Protected} {Shipping|Delivery|Transport} Deliveries - {Specialized|Professional|Reliable} {Logistics|Distribution|Transport} for {Sensitive|Critical|Secure} {Devices|Products|Technology}",
      "Deliveries {Logistics|Distribution|Shipping} - {Secure|Protected|Encrypted} {Delivery|Transport|Shipping} of {Encrypted|Secure|Hardened} {Phones|Devices|Products} {Worldwide|International|Global}",
      "{Secure|Protected|Reliable} Deliveries {Distribution|Logistics|Shipping} - {Specialized|Professional|Expert} {Delivery|Transport|Shipping} in {Security|Privacy|Protection} {Technology|Devices|Products}"
    ],
    descriptions: [
      "Deliveries: {Secure|Encrypted|Protected} {shipping|delivery|transport} {service|system|platform} for {encrypted|secure|protected} {devices|phones|products}. {Specialized|Professional|Reliable} {logistics|distribution|transport} with {discreet|confidential|private} {delivery|shipping|transport}. {Worldwide|International|Global} {coverage|reach|service} for {sensitive|critical|secure} {technology|devices|products}.",
      "Discover Deliveries, the most {secure|reliable|professional} {logistics|distribution|shipping} {service|system|platform} for {encrypted|secure|protected} {devices|products|technology}. {Discreet|Confidential|Private} {delivery|shipping|transport} with {complete|total|detailed} {tracking|monitoring} and {total|absolute|complete} {guarantee|security|protection}.",
      "{Secure|Encrypted|Protected} {shipping|delivery|transport} of {encrypted|secure|protected} {devices|phones|products} with Deliveries. {Specialized|Professional|Expert} {logistics|distribution|transport} with {strict|rigorous|advanced} {security|protection|confidentiality} {protocols|procedures|measures}. {Ideal|Perfect|Designed} for {companies|organizations|professionals} requiring {maximum|total|absolute} {discretion|confidentiality|privacy}.",
      "Deliveries offers {specialized|professional|secure} {logistics|distribution|shipping} for {high-security|maximum-protection|military-grade} {devices|products|technology}. {Worldwide|International|Global} {shipping|delivery|transport} with {advanced|complete|detailed} {tracking|monitoring} and {total|absolute|complete} {protection|security|guarantee} during {transport|shipping|transit}."
    ],
    keywords: [
      "Deliveries {secure|encrypted|protected} {shipping|delivery|transport}, {logistics|distribution} {encrypted|secure|protected} {devices|phones}, {discreet|confidential|private} {shipping|delivery} security {technology|products}, Deliveries {worldwide|international|global} {service|coverage|reach}",
      "{specialized|professional} {distribution|logistics|shipping} {sensitive|critical|secure} {devices|products}, {confidential|discreet|private} {delivery|transport} encrypted {technology|products}, Deliveries {complete|advanced|detailed} {tracking|monitoring}",
      "Deliveries vs {DHL|FedEx|UPS} {security|protection|confidentiality}, {secure|protected} {shipping|delivery|transport} {Spain|Europe|worldwide}, {specialized|professional} {logistics|distribution} {high-security|maximum-protection}, Deliveries {prices|costs|rates}"
    ]
  },
  fr: {
    titles: [
      "Deliveries 2025 - {Expédition|Livraison|Transport} {Sécurisée|Cryptée|Protégée} d'{Appareils|Téléphones|Produits} {Cryptés|Sécurisés|Protégés} | {Logistique|Distribution|Expédition} {Spécialisée|Sécurisée|Fiable}",
      "Deliveries {Cryptées|Sécurisées|Protégées} - {Expédition|Livraison|Transport} {Discrète|Confidentielle|Privée} de {Technologie|Appareils|Produits} de {Haute Sécurité|Protection Maximale|Grade Militaire}"
    ],
    descriptions: [
      "Deliveries: {Service|Système|Plateforme} d'{expédition|livraison|transport} {sécurisée|cryptée|protégée} pour {appareils|téléphones|produits} {cryptés|sécurisés|protégés}. {Logistique|Distribution|Transport} {spécialisée|professionnelle|fiable} avec {livraison|expédition|transport} {discrète|confidentielle|privée}.",
      "Découvrez Deliveries, le {service|système|plateforme} de {logistique|distribution|expédition} le plus {sécurisé|fiable|professionnel} pour {appareils|produits|technologie} {cryptés|sécurisés|protégés}. {Livraison|Expédition|Transport} {discrète|confidentielle|privée} avec {suivi|surveillance} {complet|total|détaillé}."
    ],
    keywords: [
      "Deliveries {expédition|livraison|transport} {sécurisée|cryptée|protégée}, {logistique|distribution} {appareils|téléphones} {cryptés|sécurisés}, {expédition|livraison} {discrète|confidentielle} technologie sécurité"
    ]
  },
  it: {
    titles: [
      "Deliveries 2025 - {Spedizione|Consegna|Trasporto} {Sicura|Crittografata|Protetta} di {Dispositivi|Telefoni|Prodotti} {Crittografati|Sicuri|Protetti} | {Logistica|Distribuzione|Spedizione} {Specializzata|Sicura|Affidabile}",
      "Deliveries {Crittografate|Sicure|Protette} - {Spedizione|Consegna|Trasporto} {Discreta|Confidenziale|Privata} di {Tecnologia|Dispositivi|Prodotti} ad {Alta Sicurezza|Massima Protezione|Grado Militare}"
    ],
    descriptions: [
      "Deliveries: {Servizio|Sistema|Piattaforma} di {spedizione|consegna|trasporto} {sicura|crittografata|protetta} per {dispositivi|telefoni|prodotti} {crittografati|sicuri|protetti}. {Logistica|Distribuzione|Trasporto} {specializzata|professionale|affidabile} con {consegna|spedizione|trasporto} {discreta|confidenziale|privata}.",
      "Scopri Deliveries, il {servizio|sistema|piattaforma} di {logistica|distribuzione|spedizione} più {sicuro|affidabile|professionale} per {dispositivi|prodotti|tecnologia} {crittografati|sicuri|protetti}. {Consegna|Spedizione|Trasporto} {discreta|confidenziale|privata} con {tracciamento|monitoraggio} {completo|totale|dettagliato}."
    ],
    keywords: [
      "Deliveries {spedizione|consegna|trasporto} {sicura|crittografata|protetta}, {logistica|distribuzione} {dispositivi|telefoni} {crittografati|sicuri}, {spedizione|consegna} {discreta|confidenziale} tecnologia sicurezza"
    ]
  },
  pt: {
    titles: [
      "Deliveries 2025 - {Envio|Entrega|Transporte} {Seguro|Criptografado|Protegido} de {Dispositivos|Telefones|Produtos} {Criptografados|Seguros|Protegidos} | {Logística|Distribuição|Envio} {Especializada|Segura|Confiável}",
      "Deliveries {Criptografadas|Seguras|Protegidas} - {Envio|Entrega|Transporte} {Discreto|Confidencial|Privado} de {Tecnologia|Dispositivos|Produtos} de {Alta Segurança|Máxima Proteção|Grau Militar}"
    ],
    descriptions: [
      "Deliveries: {Serviço|Sistema|Plataforma} de {envio|entrega|transporte} {seguro|criptografado|protegido} para {dispositivos|telefones|produtos} {criptografados|seguros|protegidos}. {Logística|Distribuição|Transporte} {especializada|profissional|confiável} com {entrega|envio|transporte} {discreta|confidencial|privada}.",
      "Descubra Deliveries, o {serviço|sistema|plataforma} de {logística|distribuição|envio} mais {seguro|confiável|profissional} para {dispositivos|produtos|tecnologia} {criptografados|seguros|protegidos}. {Entrega|Envio|Transporte} {discreta|confidencial|privada} com {rastreamento|monitoramento} {completo|total|detalhado}."
    ],
    keywords: [
      "Deliveries {envio|entrega|transporte} {seguro|criptografado|protegido}, {logística|distribuição} {dispositivos|telefones} {criptografados|seguros}, {envio|entrega} {discreta|confidencial} tecnologia segurança"
    ]
  }
};

// 🎯 FUNCIÓN PROCESADORA DE SPINTAX
function processSpintax(text: string): string {
  return text.replace(/\{([^}]+)\}/g, (match, options) => {
    const choices = options.split('|').map((choice: string) => choice.trim());
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  });
}

// 🎯 FUNCIÓN OBTENER CONTENIDO SPINTAX
function getDeliveriesContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = deliveriesSpintax[locale as keyof typeof deliveriesSpintax] || deliveriesSpintax.es;
  const items = content[type];
  
  // Rotación diaria + horaria para más variedad
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
  const hourOfDay = now.getHours();
  const timeSlot = Math.floor(hourOfDay / 6); // Cambia cada 6 horas
  const seed = (dayOfYear * 4 + timeSlot) % items.length;
  
  const selectedTemplate = items[seed];
  return processSpintax(selectedTemplate);
}

// 🎯 METADATOS SEO DINÁMICOS
export async function generateMetadata({ params: { locale } }: DeliveriesPageProps): Promise<Metadata> {
  const title = getDeliveriesContent(locale, 'titles');
  const description = getDeliveriesContent(locale, 'descriptions');
  const keywords = getDeliveriesContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/deliveries` : `${baseUrl}/${locale}/deliveries`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : `${locale}_${locale.toUpperCase()}`,
      url: canonicalUrl,
      title,
      description,
      siteName: 'Encriptados',
      images: [
        {
          url: `${baseUrl}/images/deliveries/og-image-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/deliveries/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/deliveries`,
        'en': `${baseUrl}/en/deliveries`,
        'fr': `${baseUrl}/fr/deliveries`,
        'it': `${baseUrl}/it/deliveries`,
        'pt': `${baseUrl}/pt/deliveries`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'service-name': 'Deliveries Secure Shipping',
      'service-category': 'Specialized Logistics',
      'coverage': 'Worldwide',
      'security-level': 'Maximum',
      'tracking': 'Advanced Real-time',
      'delivery-type': 'Secure Encrypted Devices',
      'confidentiality': 'Complete Discretion'
    }
  };
}

// 🎯 STRUCTURED DATA PARA DELIVERIES
function getDeliveriesStructuredData(locale: string) {
  const description = getDeliveriesContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const serviceNames = {
    es: 'Deliveries - Envío Seguro de Dispositivos Encriptados',
    en: 'Deliveries - Secure Shipping of Encrypted Devices',
    fr: 'Deliveries - Expédition Sécurisée d\'Appareils Cryptés',
    it: 'Deliveries - Spedizione Sicura di Dispositivi Crittografati',
    pt: 'Deliveries - Envio Seguro de Dispositivos Criptografados'
  };

  const features = {
    es: [
      "Envío seguro de dispositivos encriptados",
      "Logística especializada en alta seguridad",
      "Entrega discreta y confidencial",
      "Seguimiento avanzado en tiempo real",
      "Cobertura mundial",
      "Protocolos de seguridad estrictos"
    ],
    en: [
      "Secure shipping of encrypted devices",
      "Specialized high-security logistics",
      "Discreet and confidential delivery",
      "Advanced real-time tracking",
      "Worldwide coverage",
      "Strict security protocols"
    ]
  };

  const serviceName = serviceNames[locale as keyof typeof serviceNames] || serviceNames.es;
  const serviceFeatures = features[locale as keyof typeof features] || features.en;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": serviceName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/deliveries` : `${baseUrl}/${locale}/deliveries`,
        "serviceType": locale === 'es' ? "Logística Especializada" : "Specialized Logistics",
        "provider": {
          "@type": "Organization",
          "name": "Encriptados",
          "url": baseUrl
        },
        "areaServed": {
          "@type": "Place",
          "name": locale === 'es' ? "Mundial" : "Worldwide"
        },
        "category": locale === 'es' ? "Envío Seguro" : "Secure Shipping",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": locale === 'es' ? "Servicios de Entrega Segura" : "Secure Delivery Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": locale === 'es' ? "Envío Estándar Seguro" : "Standard Secure Shipping",
                "description": locale === 'es' ? "Envío seguro con seguimiento básico" : "Secure shipping with basic tracking"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": locale === 'es' ? "Envío Premium Encriptado" : "Premium Encrypted Shipping",
                "description": locale === 'es' ? "Envío ultra seguro con seguimiento avanzado" : "Ultra secure shipping with advanced tracking"
              }
            }
          ]
        },
        "additionalProperty": serviceFeatures.map(feature => ({
          "@type": "PropertyValue",
          "name": "Feature",
          "value": feature
        }))
      },
      {
        "@type": "Organization",
        "name": "Deliveries by Encriptados",
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/deliveries` : `${baseUrl}/${locale}/deliveries`,
        "logo": `${baseUrl}/images/deliveries/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["Spanish", "English", "French", "Italian", "Portuguese"]
        },
        "areaServed": "Worldwide",
        "serviceArea": {
          "@type": "Place",
          "name": "Global"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es el servicio Deliveries?" : "What is the Deliveries service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Deliveries es un servicio de logística especializada para el envío seguro de dispositivos encriptados y productos de alta seguridad. Ofrecemos entrega discreta con seguimiento avanzado y protocolos de seguridad estrictos."
                : "Deliveries is a specialized logistics service for secure shipping of encrypted devices and high-security products. We offer discreet delivery with advanced tracking and strict security protocols."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Tienen cobertura mundial?" : "Do you have worldwide coverage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, nuestro servicio Deliveries tiene cobertura mundial. Podemos enviar dispositivos encriptados y productos de seguridad a cualquier parte del mundo con la máxima discreción y seguridad."
                : "Yes, our Deliveries service has worldwide coverage. We can ship encrypted devices and security products anywhere in the world with maximum discretion and security."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo garantizan la seguridad en el envío?" : "How do you guarantee security in shipping?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Utilizamos protocolos de seguridad estrictos, empaque especializado, seguimiento avanzado en tiempo real y entrega discreta. Nuestro personal está capacitado específicamente para manejar dispositivos y productos sensibles."
                : "We use strict security protocols, specialized packaging, advanced real-time tracking, and discreet delivery. Our staff is specifically trained to handle sensitive devices and products."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué tipos de productos pueden enviar?" : "What types of products can you ship?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Nos especializamos en el envío de dispositivos encriptados, celulares seguros, productos de alta seguridad y tecnología sensible. Cualquier producto que requiera máxima discreción y protocolos de seguridad especiales."
                : "We specialize in shipping encrypted devices, secure phones, high-security products, and sensitive technology. Any product that requires maximum discretion and special security protocols."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": locale === 'es' ? "Inicio" : "Home",
            "item": locale === 'es' ? baseUrl : `${baseUrl}/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Deliveries",
            "item": locale === 'es' ? `${baseUrl}/deliveries` : `${baseUrl}/${locale}/deliveries`
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function DeliveriesPage({ params: { locale } }: DeliveriesPageProps) {
  const structuredData = getDeliveriesStructuredData(locale);
  const baseUrl = 'https://encriptados.io';

  return (
    <>
      {/* 🎯 STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      {/* 🎯 PRELOADS Y OPTIMIZACIONES */}
      <link rel="preload" href="/images/deliveries/hero-banner.jpg" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/Service" style={{ display: 'none' }}>
        <meta itemProp="name" content={getDeliveriesContent(locale, 'titles')} />
        <meta itemProp="description" content={getDeliveriesContent(locale, 'descriptions')} />
        <meta itemProp="serviceType" content="Specialized Logistics" />
        <meta itemProp="areaServed" content="Worldwide" />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Encriptados" />
        </div>
      </div>

      {/* 🎯 ADDITIONAL SEO TAGS */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* 🎯 MOBILE OPTIMIZATION */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* 🎯 SECURITY HEADERS */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* 🎯 LANGUAGE ALTERNATES META */}
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/deliveries`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/deliveries`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/deliveries`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it/deliveries`} />
      <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt/deliveries`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/deliveries`} />

      {/* 🎯 TU COMPONENTE ORIGINAL */}
      <DeliveriePage />
    </>
  );
}