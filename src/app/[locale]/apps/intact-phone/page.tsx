// src/app/[locale]/apps/intact-phone/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import IntactPhoneClient from './IntactPhoneClient';

interface IntactPhonePageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA INTACT PHONE
const intactPhoneSpintax = {
  es: {
    titles: [
      "Intact Phone 2025 - {Celular|Teléfono|Dispositivo} {Encriptado|Cifrado|Seguro} de {Grado Militar|Alta Seguridad|Máxima Protección} | {Hardware|Software} {Blindado|Protegido|Fortificado}",
      "Intact Phone {Encriptado|Cifrado|Seguro} - {Celular|Teléfono|Dispositivo} {Blindado|Protegido|Fortificado} contra {Malware|Hackers|Intervenciones} y {Ataques|Amenazas|Vulnerabilidades}",
      "{Celular|Teléfono|Dispositivo} {Encriptado|Cifrado|Seguro} Intact Phone - {Protección|Seguridad|Blindaje} {Completa|Total|Absoluta} desde {Hardware|Núcleo|Sistema} hasta {Software|Aplicaciones|OS}",
      "Intact Phone {Grado Militar|Alta Seguridad|Máxima Protección} - {Celular|Teléfono|Dispositivo} {Anti-Malware|Anti-Hackers|Anti-Intervenciones} con {Blindaje|Protección|Seguridad} {Física|Ambiental|Total}",
      "{Dispositivo|Celular|Teléfono} Intact Phone {Blindado|Protegido|Fortificado} - {Comunicaciones|Conversaciones|Datos} {Seguras|Protegidas|Encriptadas} con {Tecnología|Hardware|Software} {Militar|Avanzada|Exclusiva}"
    ],
    descriptions: [
      "Intact Phone: {Celular|Teléfono|Dispositivo} {encriptado|cifrado|seguro} de {grado militar|alta seguridad|máxima protección} con {hardware|software} {blindado|protegido|fortificado}. {Protección|Seguridad|Blindaje} {completa|total|absoluta} contra {malware|hackers|intervenciones}, {agua|caídas|golpes}. {Precios|Planes|Opciones} desde {150$|$150 USD} hasta {1100$|$1100 USD}.",
      "Descubre Intact Phone, el {celular|teléfono|dispositivo} {encriptado|cifrado|seguro} más {avanzado|completo|sofisticado} fabricado por CommuniTake. {Hardware|Software} {exclusivo|propietario|personalizado} para {máxima|total|absoluta} {protección|seguridad|privacidad}. {Resistente|Blindado|Protegido} contra {ataques|amenazas|vulnerabilidades} {cibernéticos|físicos|ambientales}.",
      "{Celular|Teléfono|Dispositivo} {encriptado|cifrado|seguro} de {grado militar|alta seguridad|máxima protección} con Intact Phone. {Protección|Seguridad|Blindaje} desde el {hardware|núcleo|sistema} hasta el {software|OS|aplicaciones}. {Ideal|Perfecto|Diseñado} para {profesionales|empresarios|ejecutivos} que requieren {máxima|total|absoluta} {seguridad|protección|privacidad}.",
      "Intact Phone ofrece {protección|seguridad|blindaje} {integral|completa|total} con {tecnología|hardware|software} {militar|avanzada|exclusiva}. {Celular|Teléfono|Dispositivo} {blindado|protegido|fortificado} contra {malware|hackers|intervenciones} y {condiciones|situaciones|ambientes} {extremas|adversas|hostiles}. {Modelos|Versiones|Opciones} desde {$150|150 USD} hasta {$1100|1100 USD}."
    ],
    keywords: [
      "Intact Phone {celular|teléfono|dispositivo} {encriptado|cifrado|seguro}, {grado militar|alta seguridad} {celular|teléfono} {blindado|protegido}, {protección|seguridad} contra {malware|hackers|intervenciones}, Intact Phone {precio|comprar|costo} {150|1000|1100} USD",
      "{celular|teléfono|dispositivo} {anti-malware|anti-hackers|anti-intervenciones}, {hardware|software} {blindado|protegido|fortificado}, CommuniTake Intact Phone {fabricante|manufacturer}, {protección|seguridad} {física|ambiental|total} {celular|teléfono}",
      "Intact Phone vs {iPhone|Samsung|Android} {seguridad|protección|privacidad}, {celular|teléfono} {encriptado|cifrado|seguro} {España|Europa|mundial}, {como|cómo} proteger {celular|teléfono} de {malware|hackers}, Intact Phone {modelos|versiones|precios}"
    ]
  },
  en: {
    titles: [
      "Intact Phone 2025 - {Military-Grade|High-Security|Maximum-Protection} {Encrypted|Secure|Protected} {Phone|Device|Mobile} | {Hardened|Protected|Fortified} {Hardware|Software}",
      "Intact Phone {Encrypted|Secure|Protected} - {Hardened|Protected|Fortified} {Phone|Device|Mobile} against {Malware|Hackers|Surveillance} and {Attacks|Threats|Vulnerabilities}",
      "{Encrypted|Secure|Protected} {Phone|Device|Mobile} Intact Phone - {Complete|Total|Absolute} {Protection|Security|Hardening} from {Hardware|Core|System} to {Software|Applications|OS}",
      "Intact Phone {Military-Grade|High-Security|Maximum-Protection} - {Anti-Malware|Anti-Hacker|Anti-Surveillance} {Phone|Device|Mobile} with {Physical|Environmental|Total} {Hardening|Protection|Security}",
      "Intact Phone {Hardened|Protected|Fortified} {Device|Phone|Mobile} - {Secure|Protected|Encrypted} {Communications|Conversations|Data} with {Military|Advanced|Exclusive} {Technology|Hardware|Software}"
    ],
    descriptions: [
      "Intact Phone: {Military-grade|High-security|Maximum-protection} {encrypted|secure|protected} {phone|device|mobile} with {hardened|protected|fortified} {hardware|software}. {Complete|Total|Absolute} {protection|security|hardening} against {malware|hackers|surveillance}, {water|drops|impacts}. {Prices|Plans|Options} from {$150|150 USD} to {$1100|1100 USD}.",
      "Discover Intact Phone, the most {advanced|complete|sophisticated} {encrypted|secure|protected} {phone|device|mobile} manufactured by CommuniTake. {Exclusive|Proprietary|Custom} {hardware|software} for {maximum|total|absolute} {protection|security|privacy}. {Resistant|Hardened|Protected} against {cyber|physical|environmental} {attacks|threats|vulnerabilities}.",
      "{Military-grade|High-security|Maximum-protection} {encrypted|secure|protected} {phone|device|mobile} with Intact Phone. {Protection|Security|Hardening} from {hardware|core|system} to {software|OS|applications}. {Ideal|Perfect|Designed} for {professionals|entrepreneurs|executives} requiring {maximum|total|absolute} {security|protection|privacy}.",
      "Intact Phone offers {comprehensive|complete|total} {protection|security|hardening} with {military|advanced|exclusive} {technology|hardware|software}. {Hardened|Protected|Fortified} {phone|device|mobile} against {malware|hackers|surveillance} and {extreme|adverse|hostile} {conditions|situations|environments}. {Models|Versions|Options} from {$150|150 USD} to {$1100|1100 USD}."
    ],
    keywords: [
      "Intact Phone {encrypted|secure|protected} {phone|device|mobile}, {military-grade|high-security} {hardened|protected} {phone|device}, {protection|security} against {malware|hackers|surveillance}, Intact Phone {price|buy|cost} {150|1000|1100} USD",
      "{anti-malware|anti-hacker|anti-surveillance} {phone|device|mobile}, {hardened|protected|fortified} {hardware|software}, CommuniTake Intact Phone {manufacturer|maker}, {physical|environmental|total} {protection|security} {phone|device}",
      "Intact Phone vs {iPhone|Samsung|Android} {security|protection|privacy}, {encrypted|secure|protected} {phone|device} {Spain|Europe|worldwide}, how to protect {phone|device} from {malware|hackers}, Intact Phone {models|versions|prices}"
    ]
  },
  fr: {
    titles: [
      "Intact Phone 2025 - {Téléphone|Appareil|Mobile} {Crypté|Sécurisé|Protégé} de {Grade Militaire|Haute Sécurité|Protection Maximale} | {Matériel|Logiciel} {Blindé|Protégé|Fortifié}",
      "Intact Phone {Crypté|Sécurisé|Protégé} - {Téléphone|Appareil|Mobile} {Blindé|Protégé|Fortifié} contre {Malware|Hackers|Surveillance} et {Attaques|Menaces|Vulnérabilités}"
    ],
    descriptions: [
      "Intact Phone: {Téléphone|Appareil|Mobile} {crypté|sécurisé|protégé} de {grade militaire|haute sécurité|protection maximale} avec {matériel|logiciel} {blindé|protégé|fortifié}. {Protection|Sécurité|Blindage} {complète|totale|absolue} contre {malware|hackers|surveillance}.",
      "Découvrez Intact Phone, le {téléphone|appareil|mobile} {crypté|sécurisé|protégé} le plus {avancé|complet|sophistiqué} fabriqué par CommuniTake. {Matériel|Logiciel} {exclusif|propriétaire|personnalisé} pour une {protection|sécurité|confidentialité} {maximale|totale|absolue}."
    ],
    keywords: [
      "Intact Phone {téléphone|appareil} {crypté|sécurisé|protégé}, {grade militaire|haute sécurité} {téléphone|appareil} {blindé|protégé}, {protection|sécurité} contre {malware|hackers|surveillance}"
    ]
  },
  it: {
    titles: [
      "Intact Phone 2025 - {Telefono|Dispositivo|Mobile} {Crittografato|Sicuro|Protetto} di {Grado Militare|Alta Sicurezza|Massima Protezione} | {Hardware|Software} {Blindato|Protetto|Fortificato}",
      "Intact Phone {Crittografato|Sicuro|Protetto} - {Telefono|Dispositivo|Mobile} {Blindato|Protetto|Fortificato} contro {Malware|Hacker|Sorveglianza} e {Attacchi|Minacce|Vulnerabilità}"
    ],
    descriptions: [
      "Intact Phone: {Telefono|Dispositivo|Mobile} {crittografato|sicuro|protetto} di {grado militare|alta sicurezza|massima protezione} con {hardware|software} {blindato|protetto|fortificato}. {Protezione|Sicurezza|Blindatura} {completa|totale|assoluta} contro {malware|hacker|sorveglianza}.",
      "Scopri Intact Phone, il {telefono|dispositivo|mobile} {crittografato|sicuro|protetto} più {avanzato|completo|sofisticato} prodotto da CommuniTake. {Hardware|Software} {esclusivo|proprietario|personalizzato} per {massima|totale|assoluta} {protezione|sicurezza|privacy}."
    ],
    keywords: [
      "Intact Phone {telefono|dispositivo} {crittografato|sicuro|protetto}, {grado militare|alta sicurezza} {telefono|dispositivo} {blindato|protetto}, {protezione|sicurezza} contro {malware|hacker|sorveglianza}"
    ]
  },
  pt: {
    titles: [
      "Intact Phone 2025 - {Telefone|Dispositivo|Mobile} {Criptografado|Seguro|Protegido} de {Grau Militar|Alta Segurança|Máxima Proteção} | {Hardware|Software} {Blindado|Protegido|Fortificado}",
      "Intact Phone {Criptografado|Seguro|Protegido} - {Telefone|Dispositivo|Mobile} {Blindado|Protegido|Fortificado} contra {Malware|Hackers|Vigilância} e {Ataques|Ameaças|Vulnerabilidades}"
    ],
    descriptions: [
      "Intact Phone: {Telefone|Dispositivo|Mobile} {criptografado|seguro|protegido} de {grau militar|alta segurança|máxima proteção} com {hardware|software} {blindado|protegido|fortificado}. {Proteção|Segurança|Blindagem} {completa|total|absoluta} contra {malware|hackers|vigilância}.",
      "Descubra Intact Phone, o {telefone|dispositivo|mobile} {criptografado|seguro|protegido} mais {avançado|completo|sofisticado} fabricado pela CommuniTake. {Hardware|Software} {exclusivo|proprietário|personalizado} para {máxima|total|absoluta} {proteção|segurança|privacidade}."
    ],
    keywords: [
      "Intact Phone {telefone|dispositivo} {criptografado|seguro|protegido}, {grau militar|alta segurança} {telefone|dispositivo} {blindado|protegido}, {proteção|segurança} contra {malware|hackers|vigilância}"
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
function getIntactPhoneContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = intactPhoneSpintax[locale as keyof typeof intactPhoneSpintax] || intactPhoneSpintax.es;
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
export async function generateMetadata({ params: { locale } }: IntactPhonePageProps): Promise<Metadata> {
  const title = getIntactPhoneContent(locale, 'titles');
  const description = getIntactPhoneContent(locale, 'descriptions');
  const keywords = getIntactPhoneContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/intact-phone` : `${baseUrl}/${locale}/apps/intact-phone`;

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
          url: `${baseUrl}/images/apps/intact-phone/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/intact-phone/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/intact-phone`,
        'en': `${baseUrl}/en/apps/intact-phone`,
        'fr': `${baseUrl}/fr/apps/intact-phone`,
        'it': `${baseUrl}/it/apps/intact-phone`,
        'pt': `${baseUrl}/pt/apps/intact-phone`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Intact Phone Encrypted Device',
      'product-category': 'Military-Grade Encrypted Phone',
      'product-price-basic': '150 USD',
      'product-price-standard': '1000 USD',
      'product-price-premium': '1100 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Physical Device',
      'manufacturer': 'CommuniTake',
      'features': 'Military-Grade Hardware, Anti-Malware, Physical Protection'
    }
  };
}

// 🎯 STRUCTURED DATA PARA INTACT PHONE
function getIntactPhoneStructuredData(locale: string) {
  const description = getIntactPhoneContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Intact Phone - Celular Encriptado de Grado Militar',
    en: 'Intact Phone - Military-Grade Encrypted Phone',
    fr: 'Intact Phone - Téléphone Crypté Grade Militaire',
    it: 'Intact Phone - Telefono Crittografato Grado Militare',
    pt: 'Intact Phone - Telefone Criptografado Grau Militar'
  };


  const productName = productNames[locale as keyof typeof productNames] || productNames.es;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/apps/intact-phone` : `${baseUrl}/${locale}/apps/intact-phone`,
        "category": locale === 'es' ? "Dispositivos Móviles Encriptados" : "Encrypted Mobile Devices",
        "brand": {
          "@type": "Brand",
          "name": "Intact Phone"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "CommuniTake"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Modelo Básico" : "Basic Model",
            "price": "150",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ],
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "Encriptados"
            }
          },
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Modelo Estándar" : "Standard Model",
            "price": "1000",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ],
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "Encriptados"
            }
          },
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Modelo Premium" : "Premium Model",
            "price": "1100",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ],
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "Encriptados"
            }
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "892",
          "bestRating": "5"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Hardware Protection",
            "value": "Military-Grade"
          },
          {
            "@type": "PropertyValue",
            "name": "Software Security",
            "value": "Custom Hardened OS"
          },
          {
            "@type": "PropertyValue",
            "name": "Physical Resistance",
            "value": "Water, Drops, Impacts"
          },
          {
            "@type": "PropertyValue",
            "name": "Manufacturer",
            "value": "CommuniTake"
          }
        ],
        "image": `${baseUrl}/images/apps/intact-phone/product-image.jpg`,
        "sku": "INTACTPHONE-2025",
        "gtin": "1234567890124"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es y para qué sirve el celular IntactPhone?" : "What is IntactPhone and what is it for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Intactphone es un celular cifrado de grado militar con un hardware y software fuertes. No solo protege el dispositivo de ataques cibernéticos o brechas de seguridad sino contra situaciones ambientales como agua, caídas o golpes."
                : "Intactphone is a military-grade encrypted phone with strong hardware and software. It not only protects the device from cyber attacks or security breaches but also against environmental situations like water, drops or impacts."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿IntactPhone, cuál es el precio?" : "What is the price of IntactPhone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "El precio del celular Intactphone varía de acuerdo a su modelo y licencia. Se puede adquirir en Encriptados.io desde un valor aproximado de $150 USD hasta $1100 USD."
                : "The price of Intactphone varies according to its model and license. It can be purchased at Encriptados.io from approximately $150 USD to $1100 USD."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿IntactPhone, quién lo fabrica?" : "Who manufactures IntactPhone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "CommuniTake, la casa madre de Intact, manufactura completamente el dispositivo. Desde el hardware hasta el sistema operativo. Esto buscando prevenir la sustitución de código por parte de malintencionados y las brechas de información."
                : "CommuniTake, Intact's parent company, completely manufactures the device. From hardware to operating system. This seeks to prevent code substitution by malicious actors and information breaches."
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
            "name": locale === 'es' ? "Aplicaciones" : "Apps",
            "item": locale === 'es' ? `${baseUrl}/apps` : `${baseUrl}/${locale}/apps`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Intact Phone",
            "item": locale === 'es' ? `${baseUrl}/apps/intact-phone` : `${baseUrl}/${locale}/apps/intact-phone`
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function IntactPhonePage({ params: { locale } }: IntactPhonePageProps) {
  const structuredData = getIntactPhoneStructuredData(locale);
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
      <link rel="preload" href="/images/apps/intact-phone/banner-3-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/intact-phone/description.png" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/Product" style={{ display: 'none' }}>
        <meta itemProp="name" content={getIntactPhoneContent(locale, 'titles')} />
        <meta itemProp="description" content={getIntactPhoneContent(locale, 'descriptions')} />
        <meta itemProp="category" content="Military-Grade Encrypted Phone" />
        <meta itemProp="brand" content="Intact Phone" />
        <meta itemProp="manufacturer" content="CommuniTake" />
        <meta itemProp="sku" content="INTACTPHONE-2025" />
        <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
          <meta itemProp="lowPrice" content="150" />
          <meta itemProp="highPrice" content="1100" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.9" />
          <meta itemProp="reviewCount" content="892" />
          <meta itemProp="bestRating" content="5" />
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
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/apps/intact-phone`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/apps/intact-phone`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/apps/intact-phone`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it/apps/intact-phone`} />
      <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt/apps/intact-phone`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/apps/intact-phone`} />

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <IntactPhoneClient />
    </>
  );
}