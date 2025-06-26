// src/app/[locale]/apps/dec-secure/page.tsx - CON SEO Y SPINTAX
import React from "react";
import { Metadata } from 'next';
import DecSecureClient from "./DecSecureClient";

interface DecSecurePageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA DEC SECURE
const decSecureSpintax = {
  es: {
    titles: [
      "DEC Secure 2025 - {Dispositivo|Celular|Smartphone} {Móvil|Portátil} {Seguro|Protegido|Blindado} con {VPN|Privacidad|Conexión} {Integrada|Incluida|Nativa}",
      "DEC Secure {Móvil|Dispositivo|Celular} - {Privacidad|Seguridad|Protección} {Total|Completa|Absoluta} para tu {Información|Datos|Comunicaciones}",
      "{Dispositivo|Celular|Smartphone} DEC Secure - {Conectividad|Conexión|Comunicación} {Segura|Protegida|Privada} con {Gestión|Control|Administración} de {Aplicaciones|Apps|Software}",
      "DEC Secure {Premium|Pro|Advanced} - {Tranquilidad|Seguridad|Privacidad} {Total|Completa|Absoluta} en tu {Dispositivo|Celular|Smartphone} {Móvil|Portátil}",
      "🔒 DEC Secure - {Dispositivo|Celular} {Móvil|Portátil} {Seguro|Protegido} | {VPN|Privacidad|Conexión} {Integrada|Incluida} + {Bitcoin|Criptomonedas|Crypto}",
      "DEC Secure vs {iPhone|Samsung|Huawei} - {Dispositivo|Celular} {Móvil|Portátil} con {Máxima|Extrema|Total} {Privacidad|Seguridad|Protección}",
      "⚡ {Comprar|Adquirir|Obtener} DEC Secure con {Bitcoin|Criptomonedas|Crypto} - {Dispositivo|Celular} {Móvil|Portátil} {Seguro|Protegido}",
      "DEC Secure {2025|Premium|Pro} - {Protege|Asegura|Blinda} tu {Información|Datos|Privacidad} con {Dispositivo|Celular} {Móvil|Seguro}"
    ],
    descriptions: [
      "DEC Secure: {Dispositivo|Celular|Smartphone} {móvil|portátil} {seguro|protegido|blindado} que ofrece {total|completa|absoluta} {tranquilidad|seguridad|privacidad} cuando se trata de la {privacidad|seguridad|protección} de la {información|datos|comunicaciones} en tu {dispositivo|celular|smartphone} {móvil|portátil}. {VPN|Conexión|Privacidad} {integrada|incluida|nativa}, {gestión|control|administración} de {aplicaciones|apps|software} {seguras|protegidas|verificadas}. {Acepta|Soporta|Compatible con} {pagos|compras|adquisición} con {Bitcoin|criptomonedas|crypto}.",
      "Descubre DEC Secure, el {dispositivo|celular|smartphone} {móvil|portátil} que te {mantiene|conserva|preserva} {conectado|comunicado|enlazado} de forma {segura|protegida|privada}. {Gestión|Control|Administración} de {aplicaciones|apps|software} {móviles|portátiles}, {biblioteca|catálogo|colección} de {aplicaciones|apps} {privadas|seguras|verificadas}, {lista blanca|control|filtro} de {aplicaciones|apps|software}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {disponible|aceptado|soportado}.",
      "{Dispositivo|Celular|Smartphone} {móvil|portátil} {seguro|protegido|blindado} DEC Secure - La {seguridad|protección|privacidad} de tus {datos|información|comunicaciones} es nuestra {máxima|principal|primera} {prioridad|preocupación|objetivo}. {Solo|Únicamente|Exclusivamente} {aplicaciones|apps|software} {aprobadas|verificadas|seguras}, {gestión|control|administración} {completa|total|absoluta}. {Ideal|Perfecto|Diseñado} para usuarios que {requieren|necesitan|demandan} {máxima|extrema|total} {privacidad|seguridad|protección}.",
      "DEC Secure ofrece {conectividad|conexión|comunicación} {segura|protegida|privada} con {tecnología|sistemas|protocolos} {avanzada|premium|de vanguardia} y {gestión|control|administración} {rigurosa|estricta|completa} de {aplicaciones|apps|software}. {Biblioteca|Catálogo|Colección} de {aplicaciones|apps} {privadas|seguras|verificadas}, {acepta|soporta|compatible con} {Bitcoin|criptomonedas|crypto}.",
      "⚡ {Mantente|Permanece|Quédate} {conectado|comunicado|enlazado} de forma {segura|protegida|privada} con DEC Secure - El {dispositivo|celular|smartphone} {móvil|portátil} más {seguro|protegido|privado} para {comunicaciones|conexiones|datos} {privadas|seguras|protegidas}. {VPN|Privacidad|Conexión} {integrada|incluida|nativa}, {aplicaciones|apps} {verificadas|seguras|aprobadas}, {pago|compra} con {Bitcoin|criptomonedas|crypto}."
    ],
    keywords: [
      "DEC Secure {dispositivo|celular|smartphone} {móvil|portátil} {seguro|protegido|blindado}, {dispositivo|celular} {móvil|portátil} {privacidad|seguridad} {total|completa}, DEC Secure {VPN|conexión} {integrada|incluida}, DEC Secure {Bitcoin|criptomonedas|crypto} {pago|compra|adquisición}",
      "{dispositivo|celular} {móvil|portátil} {seguro|protegido} {gestión|control} {aplicaciones|apps}, DEC Secure vs {iPhone|Samsung|Huawei} {privacidad|seguridad}, {dispositivo|celular} {aplicaciones|apps} {verificadas|seguras|aprobadas}, DEC Secure {comprar|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "DEC Secure {dispositivo|celular} {móvil|seguro} {España|México|Argentina|Colombia}, {smartphone|celular} {privacidad|seguridad} {total|completa}, {dispositivo|celular} {gestión|control} {aplicaciones|software}, DEC Secure {tranquilidad|seguridad} {información|datos}"
    ]
  },
  en: {
    titles: [
      "DEC Secure 2025 - {Secure|Protected|Shielded} {Mobile|Portable} {Device|Phone|Smartphone} with {Integrated|Built-in|Native} {VPN|Privacy|Connection}",
      "DEC Secure {Mobile|Device|Phone} - {Total|Complete|Absolute} {Privacy|Security|Protection} for your {Information|Data|Communications}",
      "DEC Secure {Device|Phone|Smartphone} - {Secure|Protected|Private} {Connectivity|Connection|Communication} with {Application|App|Software} {Management|Control|Administration}",
      "DEC Secure {Premium|Pro|Advanced} - {Total|Complete|Absolute} {Peace of Mind|Security|Privacy} for your {Mobile|Portable} {Device|Phone|Smartphone}",
      "🔒 DEC Secure - {Secure|Protected} {Mobile|Portable} {Device|Phone} | {Integrated|Built-in} {VPN|Privacy|Connection} + {Bitcoin|Cryptocurrency|Crypto}",
      "DEC Secure vs {iPhone|Samsung|Huawei} - {Mobile|Portable} {Device|Phone} with {Maximum|Extreme|Total} {Privacy|Security|Protection}",
      "⚡ {Buy|Purchase|Get} DEC Secure with {Bitcoin|Cryptocurrency|Crypto} - {Secure|Protected} {Mobile|Portable} {Device|Phone}",
      "DEC Secure {2025|Premium|Pro} - {Protect|Secure|Shield} your {Information|Data|Privacy} with {Secure|Protected} {Mobile|Portable} {Device|Phone}"
    ],
    descriptions: [
      "DEC Secure: {Secure|Protected|Shielded} {mobile|portable} {device|phone|smartphone} that offers {total|complete|absolute} {peace of mind|security|privacy} when it comes to the {privacy|security|protection} of {information|data|communications} on your {mobile|portable} {device|phone|smartphone}. {Integrated|Built-in|Native} {VPN|connection|privacy}, {secure|protected|verified} {application|app|software} {management|control|administration}. {Accepts|Supports|Compatible with} {Bitcoin|cryptocurrency|crypto} {payments|purchases}.",
      "Discover DEC Secure, the {mobile|portable} {device|phone|smartphone} that {keeps|maintains|preserves} you {connected|linked|communicated} in a {secure|protected|private} way. {Mobile|Portable} {application|app|software} {management|control|administration}, {private|secure|verified} {application|app} {library|catalog|collection}, {application|app|software} {whitelist|control|filter}. {Bitcoin|Cryptocurrency|Crypto} {payment|purchase} {available|accepted|supported}.",
      "{Secure|Protected|Shielded} {mobile|portable} DEC Secure {device|phone|smartphone} - The {security|protection|privacy} of your {data|information|communications} is our {top|main|first} {priority|concern|objective}. {Only|Exclusively|Solely} {approved|verified|secure} {applications|apps|software}, {complete|total|absolute} {management|control|administration}. {Ideal|Perfect|Designed} for users who {require|need|demand} {maximum|extreme|total} {privacy|security|protection}.",
      "DEC Secure offers {secure|protected|private} {connectivity|connection|communication} with {advanced|premium|cutting-edge} {technology|systems|protocols} and {rigorous|strict|complete} {application|app|software} {management|control|administration}. {Private|Secure|Verified} {application|app} {library|catalog|collection}, {accepts|supports|compatible with} {Bitcoin|cryptocurrency|crypto}.",
      "⚡ {Stay|Remain|Keep} {connected|linked|communicated} {securely|safely|privately} with DEC Secure - The most {secure|protected|private} {mobile|portable} {device|phone|smartphone} for {private|secure|protected} {communications|connections|data}. {Integrated|Built-in|Native} {VPN|privacy|connection}, {verified|secure|approved} {applications|apps}, {Bitcoin|cryptocurrency|crypto} {payment|purchase}."
    ],
    keywords: [
      "DEC Secure {secure|protected|shielded} {mobile|portable} {device|phone|smartphone}, {mobile|portable} {device|phone} {total|complete} {privacy|security}, DEC Secure {integrated|built-in} {VPN|connection}, DEC Secure {Bitcoin|cryptocurrency|crypto} {payment|purchase}",
      "{secure|protected} {mobile|portable} {device|phone} {application|app} {management|control}, DEC Secure vs {iPhone|Samsung|Huawei} {privacy|security}, {device|phone} {verified|secure|approved} {applications|apps}, DEC Secure {buy|purchase} with {Bitcoin|cryptocurrency|crypto}",
      "DEC Secure {secure|protected} {mobile|portable} {device|phone} {USA|UK|Canada|Australia}, {smartphone|phone} {total|complete} {privacy|security}, {device|phone} {application|software} {management|control}, DEC Secure {peace of mind|security} {information|data}"
    ]
  },
  fr: {
    titles: [
      "DEC Secure 2025 - {Appareil|Téléphone|Smartphone} {Mobile|Portable} {Sécurisé|Protégé|Blindé} avec {VPN|Confidentialité|Connexion} {Intégré|Inclus|Natif}",
      "DEC Secure {Mobile|Appareil|Téléphone} - {Confidentialité|Sécurité|Protection} {Totale|Complète|Absolue} pour vos {Informations|Données|Communications}",
      "Appareil DEC Secure - {Connectivité|Connexion|Communication} {Sécurisée|Protégée|Privée} avec {Gestion|Contrôle|Administration} d'{Applications|Apps|Logiciels}",
      "DEC Secure {Premium|Pro|Avancé} - {Tranquillité|Sécurité|Confidentialité} {Totale|Complète|Absolue} pour votre {Appareil|Téléphone} {Mobile|Portable}",
      "🔒 DEC Secure - {Appareil|Téléphone} {Mobile|Portable} {Sécurisé|Protégé} | {VPN|Confidentialité} {Intégré|Inclus} + {Bitcoin|Cryptomonnaies|Crypto}"
    ],
    descriptions: [
      "DEC Secure: {Appareil|Téléphone|Smartphone} {mobile|portable} {sécurisé|protégé|blindé} qui offre une {tranquillité|sécurité|confidentialité} {totale|complète|absolue} en matière de {confidentialité|sécurité|protection} des {informations|données|communications} sur votre {appareil|téléphone} {mobile|portable}.",
      "Découvrez DEC Secure, l'appareil {mobile|portable} qui vous {maintient|conserve|préserve} {connecté|lié|en communication} de manière {sécurisée|protégée|privée}. {Gestion|Contrôle|Administration} d'{applications|apps} {mobiles|portables}, {bibliothèque|catalogue} d'{applications|apps} {privées|sécurisées|vérifiées}."
    ],
    keywords: [
      "DEC Secure {appareil|téléphone|smartphone} {mobile|portable} {sécurisé|protégé}, {appareil|téléphone} {mobile|portable} {confidentialité|sécurité} {totale|complète}, DEC Secure {VPN|connexion} {intégré|inclus}, DEC Secure {Bitcoin|cryptomonnaies|crypto} {paiement|achat}"
    ]
  },
  it: {
    titles: [
      "DEC Secure 2025 - {Dispositivo|Telefono|Smartphone} {Mobile|Portatile} {Sicuro|Protetto|Blindato} con {VPN|Privacy|Connessione} {Integrata|Inclusa|Nativa}",
      "DEC Secure {Mobile|Dispositivo|Telefono} - {Privacy|Sicurezza|Protezione} {Totale|Completa|Assoluta} per le tue {Informazioni|Dati|Comunicazioni}",
      "Dispositivo DEC Secure - {Connettività|Connessione|Comunicazione} {Sicura|Protetta|Privata} con {Gestione|Controllo|Amministrazione} {Applicazioni|App|Software}",
      "DEC Secure {Premium|Pro|Avanzato} - {Tranquillità|Sicurezza|Privacy} {Totale|Completa|Assoluta} per il tuo {Dispositivo|Telefono} {Mobile|Portatile}",
      "🔒 DEC Secure - {Dispositivo|Telefono} {Mobile|Portatile} {Sicuro|Protetto} | {VPN|Privacy} {Integrata|Inclusa} + {Bitcoin|Criptovalute|Crypto}"
    ],
    descriptions: [
      "DEC Secure: {Dispositivo|Telefono|Smartphone} {mobile|portatile} {sicuro|protetto|blindato} che offre {totale|completa|assoluta} {tranquillità|sicurezza|privacy} quando si tratta della {privacy|sicurezza|protezione} delle {informazioni|dati|comunicazioni} sul tuo {dispositivo|telefono} {mobile|portatile}.",
      "Scopri DEC Secure, il {dispositivo|telefono} {mobile|portatile} che ti {mantiene|conserva|preserva} {connesso|collegato|in comunicazione} in modo {sicuro|protetto|privato}. {Gestione|Controllo|Amministrazione} {applicazioni|app} {mobili|portatili}, {libreria|catalogo} {applicazioni|app} {private|sicure|verificate}."
    ],
    keywords: [
      "DEC Secure {dispositivo|telefono|smartphone} {mobile|portatile} {sicuro|protetto}, {dispositivo|telefono} {mobile|portatile} {privacy|sicurezza} {totale|completa}, DEC Secure {VPN|connessione} {integrata|inclusa}, DEC Secure {Bitcoin|criptovalute|crypto} {pagamento|acquisto}"
    ]
  },
  pt: {
    titles: [
      "DEC Secure 2025 - {Dispositivo|Telefone|Smartphone} {Móvel|Portátil} {Seguro|Protegido|Blindado} com {VPN|Privacidade|Conexão} {Integrada|Incluída|Nativa}",
      "DEC Secure {Móvel|Dispositivo|Telefone} - {Privacidade|Segurança|Proteção} {Total|Completa|Absoluta} para suas {Informações|Dados|Comunicações}",
      "Dispositivo DEC Secure - {Conectividade|Conexão|Comunicação} {Segura|Protegida|Privada} com {Gestão|Controle|Administração} de {Aplicações|Apps|Software}",
      "DEC Secure {Premium|Pro|Avançado} - {Tranquilidade|Segurança|Privacidade} {Total|Completa|Absoluta} para seu {Dispositivo|Telefone} {Móvel|Portátil}",
      "🔒 DEC Secure - {Dispositivo|Telefone} {Móvel|Portátil} {Seguro|Protegido} | {VPN|Privacidade} {Integrada|Incluída} + {Bitcoin|Criptomoedas|Crypto}"
    ],
    descriptions: [
      "DEC Secure: {Dispositivo|Telefone|Smartphone} {móvel|portátil} {seguro|protegido|blindado} que oferece {total|completa|absoluta} {tranquilidade|segurança|privacidade} quando se trata da {privacidade|segurança|proteção} das {informações|dados|comunicações} no seu {dispositivo|telefone} {móvel|portátil}.",
      "Descubra DEC Secure, o {dispositivo|telefone} {móvel|portátil} que te {mantém|conserva|preserva} {conectado|ligado|em comunicação} de forma {segura|protegida|privada}. {Gestão|Controle|Administração} de {aplicações|apps} {móveis|portáteis}, {biblioteca|catálogo} de {aplicações|apps} {privadas|seguras|verificadas}."
    ],
    keywords: [
      "DEC Secure {dispositivo|telefone|smartphone} {móvel|portátil} {seguro|protegido}, {dispositivo|telefone} {móvel|portátil} {privacidade|segurança} {total|completa}, DEC Secure {VPN|conexão} {integrada|incluída}, DEC Secure {Bitcoin|criptomoedas|crypto} {pagamento|compra}"
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
function getDecSecureContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = decSecureSpintax[locale as keyof typeof decSecureSpintax] || decSecureSpintax.es;
  const items = content[type];
  
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
  const hourOfDay = now.getHours();
  const timeSlot = Math.floor(hourOfDay / 6);
  const seed = (dayOfYear * 4 + timeSlot) % items.length;
  
  const selectedTemplate = items[seed];
  return processSpintax(selectedTemplate);
}

// 🎯 METADATOS SEO DINÁMICOS
export async function generateMetadata({ params: { locale } }: DecSecurePageProps): Promise<Metadata> {
  const title = getDecSecureContent(locale, 'titles');
  const description = getDecSecureContent(locale, 'descriptions');
  const keywords = getDecSecureContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/dec-secure` : `${baseUrl}/${locale}/apps/dec-secure`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Secure Mobile Device with VPN',
    
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
          url: `${baseUrl}/images/apps/dec-secure/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/dec-secure/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/dec-secure`,
        'en': `${baseUrl}/en/apps/dec-secure`,
        'fr': `${baseUrl}/fr/apps/dec-secure`,
        'it': `${baseUrl}/it/apps/dec-secure`,
        'pt': `${baseUrl}/pt/apps/dec-secure`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'DEC Secure',
      'product-category': 'Secure Mobile Device with VPN',
      'product-type': 'Managed Secure Smartphone',
      'product-price-3months': '349 USD',
      'product-price-6months': '600 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'crypto-payments': 'Bitcoin, Ethereum, Litecoin, Monero, USDT, USDC',
      'availability': 'In Stock',
      'shipping': 'Worldwide Shipping',
      'target-audience': 'Privacy-Conscious Users, Business Professionals, Security-Aware Individuals',
      'device-type': 'Managed Secure Smartphone',
      'vpn-integration': 'Built-in VPN Connection',
      'app-management': 'Private Application Library',
      'security-level': 'Enhanced Privacy Protection',
      'connectivity': 'Secure Private Connection',
      'use-cases': 'Secure Mobile Communications, Private Connectivity, Managed Applications',
      'competitors': 'iPhone, Samsung Galaxy, Google Pixel, Huawei',
      'features': 'Integrated VPN, App Management, Private Library, Secure Connectivity',
      'security-features': 'VPN Integration, App Whitelist, Private App Store, Secure Connection',
      'rating': '4.7/5',
      'review-count': '1987',
      'device-version': '2.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'manufacturer': 'DEC Secure Technologies',
      'manufacturer-website': baseUrl,
      'support-email': 'support@encriptados.io',
      'device-focus': 'Mobile Privacy and Connectivity Security',
      'target-market': 'Privacy-Focused Mobile Users',
      'protection-level': 'Enhanced Mobile Privacy',
      'connectivity-security': 'VPN-Protected Mobile Communications',
    }
  };
}

// 🎯 STRUCTURED DATA PARA DEC SECURE
function getDecSecureStructuredData(locale: string) {
  const description = getDecSecureContent(locale, 'descriptions');
  
  const productNames = {
    es: 'DEC Secure - Dispositivo Móvil Seguro con VPN',
    en: 'DEC Secure - Secure Mobile Device with VPN',
    fr: 'DEC Secure - Appareil Mobile Sécurisé avec VPN',
    it: 'DEC Secure - Dispositivo Mobile Sicuro con VPN',
    pt: 'DEC Secure - Dispositivo Móvel Seguro com VPN'
  };


  const productName = productNames[locale as keyof typeof productNames] || productNames.es;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "category": locale === 'es' ? "Dispositivos Móviles Seguros con VPN" : "Secure Mobile Devices with VPN",
        "brand": {
          "@type": "Brand",
          "name": "DEC Secure"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 3 Meses" : "3 Months Plan",
            "price": "349",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ],
            "seller": {
              "@type": "Organization",
              "name": "Encriptados"
            }
          },
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 6 Meses" : "6 Months Plan",
            "price": "600",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ],
            "seller": {
              "@type": "Organization",
              "name": "Encriptados"
            }
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "1987",
          "bestRating": "5"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "DEC Secure Technologies"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Device Type",
            "value": "Managed Secure Smartphone"
          },
          {
            "@type": "PropertyValue",
            "name": "VPN Integration",
            "value": "Built-in Native VPN"
          },
          {
            "@type": "PropertyValue",
            "name": "App Management",
            "value": "Private Application Library"
          },
          {
            "@type": "PropertyValue",
            "name": "Security Level",
            "value": "Enhanced Privacy Protection"
          },
          {
            "@type": "PropertyValue",
            "name": "Crypto Payments",
            "value": "Bitcoin, Ethereum, Litecoin, Monero"
          }
        ]
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
                : "Intactphone is a military-grade encrypted phone with strong hardware and software. It not only protects the device from cyber attacks or security breaches but also against environmental situations like water, drops, or impacts."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿IntactPhone, cuál es el precio?" : "What is the price of IntactPhone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "El precio del celular Intactphone varía de acuerdo a su modelo y licencia. Se puede adquirir en Encriptados.io desde un valor aproximado de $1000 USD."
                : "The price of the Intactphone varies according to its model and license. It can be purchased at Encriptados.io from an approximate value of $1000 USD."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿DEC Secure acepta pagos con criptomonedas?" : "Does DEC Secure accept cryptocurrency payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, DEC Secure acepta múltiples criptomonedas incluyendo Bitcoin, Ethereum, Litecoin, Monero, USDT y USDC. Esto permite a los usuarios mantener su privacidad también en las transacciones de compra del dispositivo."
                : "Yes, DEC Secure accepts multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, Monero, USDT, and USDC. This allows users to maintain their privacy also in device purchase transactions."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function DecSecurePage({ params: { locale } }: DecSecurePageProps) {
  const structuredData = getDecSecureStructuredData(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      <link rel="preload" href="/images/apps/dec-secure/banner-3-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/dec-secure/banner-6-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/dec-secure/vpn-active.png" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      <div itemScope itemType="https://schema.org/Product" style={{ display: 'none' }}>
        <meta itemProp="name" content={getDecSecureContent(locale, 'titles')} />
        <meta itemProp="description" content={getDecSecureContent(locale, 'descriptions')} />
        <meta itemProp="category" content="Secure Mobile Devices with VPN" />
        <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
          <meta itemProp="lowPrice" content="349" />
          <meta itemProp="highPrice" content="600" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.7" />
          <meta itemProp="reviewCount" content="1987" />
          <meta itemProp="bestRating" content="5" />
        </div>
        <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <meta itemProp="name" content="DEC Secure" />
        </div>
      </div>

      <DecSecureClient />
    </>
  );
}