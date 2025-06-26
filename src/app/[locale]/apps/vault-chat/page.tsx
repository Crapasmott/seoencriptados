// src/app/[locale]/apps/vault-chat/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import VaultChatClient from './VaultChatClient';

interface VaultChatPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA VAULT CHAT
const vaultChatSpintax = {
  es: {
    titles: [
      "VaultChat 2025 - {Plataforma|Sistema|Aplicación} de {Comunicación|Mensajería|Chat} {Cifrada|Encriptada|Segura} | {Cifrado|Encriptación} {Multicapa|Avanzado|Militar} de {Alta Gama|Máxima Seguridad|Nivel Premium}",
      "VaultChat {Profesional|Premium|Empresarial} - {Comunicación|Mensajería|Chat} {Encriptada|Cifrada|Protegida} con {Cifrado|Encriptación} {Multicapa|Múltiple|Avanzado} {Optimizado|Mejorado|Perfeccionado}",
      "{Comunicación|Mensajería|Chat} {Cifrada|Encriptada|Segura} VaultChat - {Plataforma|Sistema|Aplicación} de {Alta Gama|Máxima Seguridad|Nivel Premium} con {Protección|Seguridad|Cifrado} {Multicapa|Avanzada|Militar}",
      "VaultChat {Encriptado|Cifrado|Seguro} - {Comunicación|Mensajería|Chat} {Privada|Secreta|Confidencial} con {Tecnología|Cifrado|Encriptación} {Multicapa|Avanzada|Militar} de {Alta Gama|Nivel Premium|Máxima Seguridad}",
      "{Aplicación|Plataforma|Sistema} VaultChat - {Comunicación|Mensajería|Chat} {Ultra Segura|Completamente Privada|Totalmente Protegida} con {Cifrado|Encriptación} {Multicapa|Múltiple|Avanzado} {Optimizado|Premium|Profesional}"
    ],
    descriptions: [
      "VaultChat: {Plataforma|Sistema|Aplicación} de {comunicación|mensajería|chat} {cifrada|encriptada|segura} {optimizada|mejorada|perfeccionada} con {cifrado|encriptación} {multicapa|múltiple|avanzado} de {alta gama|máxima seguridad|nivel premium}. {Protección|Seguridad|Privacidad} {total|completa|absoluta} para {profesionales|empresarios|ejecutivos} que {requieren|necesitan|exigen} {máxima|total|absoluta} {confidencialidad|privacidad|seguridad}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {aceptado|disponible|soportado}.",
      "Descubre VaultChat, la {plataforma|aplicación|solución} de {comunicación|mensajería|chat} {cifrada|encriptada|segura} más {avanzada|sofisticada|completa} con {tecnología|cifrado|encriptación} {multicapa|múltiple|avanzada} {optimizada|mejorada|perfeccionada}. {Ideal|Perfecto|Diseñado} para {organizaciones|empresas|profesionales} que valoran la {máxima|total|absoluta} {seguridad|privacidad|protección}. {Planes|Opciones|Suscripciones} desde {220$|$220 USD} con {soporte|aceptación} para {Bitcoin|criptomonedas|crypto}.",
      "{Comunicación|Mensajería|Chat} {cifrada|encriptada|segura} de {alta gama|máxima seguridad|nivel premium} con VaultChat. {Cifrado|Encriptación} {multicapa|múltiple|avanzado} que {garantiza|asegura|proporciona} {protección|seguridad|privacidad} {superior|avanzada|premium} contra {amenazas|ataques|vulnerabilidades} {sofisticadas|avanzadas|complejas}. {Optimizado|Diseñado|Desarrollado} para {comunicaciones|conversaciones|intercambios} {críticas|sensibles|confidenciales}.",
      "VaultChat ofrece {comunicación|mensajería|chat} {cifrada|encriptada|segura} con {tecnología|cifrado|encriptación} {multicapa|avanzada|militar} y {algoritmos|protocolos|sistemas} de {seguridad|protección|cifrado} de {última generación|vanguardia|alta gama}. {Solución|Plataforma|Sistema} {premium|profesional|empresarial} para {organizaciones|empresas|equipos} que {manejan|gestionan|procesan} {información|datos|comunicaciones} {crítica|sensible|confidencial}."
    ],
    keywords: [
      "VaultChat {comunicación|mensajería|chat} {cifrada|encriptada|segura}, {plataforma|aplicación} {cifrado|encriptación} {multicapa|múltiple|avanzado}, {comunicación|mensajería} {alta gama|máxima seguridad|nivel premium}, VaultChat {comprar|precio|suscripción} con {Bitcoin|criptomonedas|crypto}, {cifrado|encriptación} {multicapa|avanzado} {optimizado|mejorado}",
      "{aplicación|plataforma} {comunicación|mensajería} {cifrada|encriptada} {alta gama|premium|profesional}, VaultChat vs {VaultSecure|otras aplicaciones}, {cifrado|encriptación} {multicapa|múltiple} {optimizado|avanzado}, {comunicación|mensajería} {segura|protegida} {empresarial|profesional|organizacional}",
      "VaultChat {España|Europa|mundial}, {plataforma|sistema} {comunicación|mensajería} {cifrada|encriptada} {premium|profesional}, {cifrado|encriptación} {multicapa|avanzado} {alta gama|máxima seguridad}, VaultChat {220 USD|350 USD|planes|precios}"
    ]
  },
  en: {
    titles: [
      "VaultChat 2025 - {Encrypted|Secure|Protected} {Communication|Messaging|Chat} {Platform|System|Application} | {Multi-Layer|Advanced|Military} {High-End|Maximum Security|Premium Level} {Encryption|Security}",
      "VaultChat {Professional|Premium|Enterprise} - {Encrypted|Secure|Protected} {Communication|Messaging|Chat} with {Optimized|Enhanced|Perfected} {Multi-Layer|Multiple|Advanced} {Encryption|Security}",
      "{Encrypted|Secure|Protected} {Communication|Messaging|Chat} VaultChat - {High-End|Maximum Security|Premium Level} {Platform|System|Application} with {Multi-Layer|Advanced|Military} {Protection|Security|Encryption}",
      "VaultChat {Encrypted|Secure|Protected} - {Private|Secret|Confidential} {Communication|Messaging|Chat} with {High-End|Premium Level|Maximum Security} {Multi-Layer|Advanced|Military} {Technology|Encryption|Security}",
      "VaultChat {Application|Platform|System} - {Ultra Secure|Completely Private|Totally Protected} {Communication|Messaging|Chat} with {Optimized|Premium|Professional} {Multi-Layer|Multiple|Advanced} {Encryption|Security}"
    ],
    descriptions: [
      "VaultChat: {Optimized|Enhanced|Perfected} {encrypted|secure|protected} {communication|messaging|chat} {platform|system|application} with {high-end|maximum security|premium level} {multi-layer|multiple|advanced} {encryption|security}. {Total|Complete|Absolute} {protection|security|privacy} for {professionals|entrepreneurs|executives} who {require|need|demand} {maximum|total|absolute} {confidentiality|privacy|security}. {Payment|Purchase|Acquisition} with {Bitcoin|cryptocurrencies|crypto} {accepted|available|supported}.",
      "Discover VaultChat, the most {advanced|sophisticated|complete} {encrypted|secure|protected} {communication|messaging|chat} {platform|application|solution} with {optimized|enhanced|perfected} {multi-layer|multiple|advanced} {technology|encryption|security}. {Ideal|Perfect|Designed} for {organizations|businesses|professionals} that value {maximum|total|absolute} {security|privacy|protection}. {Plans|Options|Subscriptions} from {$220|220 USD} with {Bitcoin|cryptocurrencies|crypto} {support|acceptance}.",
      "{High-end|Maximum security|Premium level} {encrypted|secure|protected} {communication|messaging|chat} with VaultChat. {Multi-layer|Multiple|Advanced} {encryption|security} that {guarantees|ensures|provides} {superior|advanced|premium} {protection|security|privacy} against {sophisticated|advanced|complex} {threats|attacks|vulnerabilities}. {Optimized|Designed|Developed} for {critical|sensitive|confidential} {communications|conversations|exchanges}.",
      "VaultChat offers {encrypted|secure|protected} {communication|messaging|chat} with {multi-layer|advanced|military} {technology|encryption|security} and {cutting-edge|state-of-the-art|high-end} {security|protection|encryption} {algorithms|protocols|systems}. {Premium|Professional|Enterprise} {solution|platform|system} for {organizations|businesses|teams} that {handle|manage|process} {critical|sensitive|confidential} {information|data|communications}."
    ],
    keywords: [
      "VaultChat {encrypted|secure|protected} {communication|messaging|chat}, {multi-layer|multiple|advanced} {encryption|security} {platform|application}, {high-end|maximum security|premium level} {communication|messaging}, VaultChat {buy|price|subscription} with {Bitcoin|cryptocurrencies|crypto}, {optimized|enhanced} {multi-layer|advanced} {encryption|security}",
      "{high-end|premium|professional} {encrypted|secure} {communication|messaging} {application|platform}, VaultChat vs {VaultSecure|other applications}, {optimized|advanced} {multi-layer|multiple} {encryption|security}, {secure|protected} {enterprise|professional|organizational} {communication|messaging}",
      "VaultChat {Spain|Europe|worldwide}, {premium|professional} {encrypted|secure} {communication|messaging} {platform|system}, {high-end|maximum security} {multi-layer|advanced} {encryption|security}, VaultChat {220 USD|350 USD|plans|pricing}"
    ]
  },
  fr: {
    titles: [
      "VaultChat 2025 - {Plateforme|Système|Application} de {Communication|Messagerie|Chat} {Chiffrée|Sécurisée|Protégée} | {Chiffrement|Sécurité} {Multi-Couches|Avancé|Militaire} {Haut de Gamme|Sécurité Maximale|Niveau Premium}",
      "VaultChat {Professionnel|Premium|Entreprise} - {Communication|Messagerie|Chat} {Chiffrée|Sécurisée|Protégée} avec {Chiffrement|Sécurité} {Multi-Couches|Multiple|Avancé} {Optimisé|Amélioré|Perfectionné}"
    ],
    descriptions: [
      "VaultChat: {Plateforme|Système|Application} de {communication|messagerie|chat} {chiffrée|sécurisée|protégée} {optimisée|améliorée|perfectionnée} avec {chiffrement|sécurité} {multi-couches|multiple|avancé} {haut de gamme|sécurité maximale|niveau premium}. {Protection|Sécurité|Confidentialité} {totale|complète|absolue} pour {professionnels|entrepreneurs|dirigeants}.",
      "Découvrez VaultChat, la {plateforme|application|solution} de {communication|messagerie|chat} {chiffrée|sécurisée|protégée} la plus {avancée|sophistiquée|complète} avec {technologie|chiffrement|sécurité} {multi-couches|multiple|avancée} {optimisée|améliorée}."
    ],
    keywords: [
      "VaultChat {communication|messagerie} {chiffrée|sécurisée|protégée}, {plateforme|application} {chiffrement|sécurité} {multi-couches|multiple}, {communication|messagerie} {haut de gamme|sécurité maximale}, VaultChat {acheter|prix} avec {Bitcoin|cryptomonnaies}"
    ]
  },
  it: {
    titles: [
      "VaultChat 2025 - {Piattaforma|Sistema|Applicazione} di {Comunicazione|Messaggistica|Chat} {Crittografata|Sicura|Protetta} | {Crittografia|Sicurezza} {Multi-Livello|Avanzata|Militare} {Alta Gamma|Massima Sicurezza|Livello Premium}",
      "VaultChat {Professionale|Premium|Aziendale} - {Comunicazione|Messaggistica|Chat} {Crittografata|Sicura|Protetta} con {Crittografia|Sicurezza} {Multi-Livello|Multipla|Avanzata} {Ottimizzata|Migliorata|Perfezionata}"
    ],
    descriptions: [
      "VaultChat: {Piattaforma|Sistema|Applicazione} di {comunicazione|messaggistica|chat} {crittografata|sicura|protetta} {ottimizzata|migliorata|perfezionata} con {crittografia|sicurezza} {multi-livello|multipla|avanzata} {alta gamma|massima sicurezza|livello premium}. {Protezione|Sicurezza|Privacy} {totale|completa|assoluta} per {professionisti|imprenditori|dirigenti}.",
      "Scopri VaultChat, la {piattaforma|applicazione|soluzione} di {comunicazione|messaggistica|chat} {crittografata|sicura|protetta} più {avanzata|sofisticata|completa} con {tecnologia|crittografia|sicurezza} {multi-livello|multipla|avanzata} {ottimizzata|migliorata}."
    ],
    keywords: [
      "VaultChat {comunicazione|messaggistica} {crittografata|sicura|protetta}, {piattaforma|applicazione} {crittografia|sicurezza} {multi-livello|multipla}, {comunicazione|messaggistica} {alta gamma|massima sicurezza}, VaultChat {comprare|prezzo} con {Bitcoin|criptovalute}"
    ]
  },
  pt: {
    titles: [
      "VaultChat 2025 - {Plataforma|Sistema|Aplicação} de {Comunicação|Mensagens|Chat} {Encriptada|Segura|Protegida} | {Encriptação|Segurança} {Multi-Camadas|Avançada|Militar} {Alto Nível|Máxima Segurança|Nível Premium}",
      "VaultChat {Profissional|Premium|Empresarial} - {Comunicação|Mensagens|Chat} {Encriptada|Segura|Protegida} com {Encriptação|Segurança} {Multi-Camadas|Múltipla|Avançada} {Otimizada|Melhorada|Aperfeiçoada}"
    ],
    descriptions: [
      "VaultChat: {Plataforma|Sistema|Aplicação} de {comunicação|mensagens|chat} {encriptada|segura|protegida} {otimizada|melhorada|aperfeiçoada} com {encriptação|segurança} {multi-camadas|múltipla|avançada} {alto nível|máxima segurança|nível premium}. {Proteção|Segurança|Privacidade} {total|completa|absoluta} para {profissionais|empresários|executivos}.",
      "Descubra VaultChat, a {plataforma|aplicação|solução} de {comunicação|mensagens|chat} {encriptada|segura|protegida} mais {avançada|sofisticada|completa} com {tecnologia|encriptação|segurança} {multi-camadas|múltipla|avançada} {otimizada|melhorada}."
    ],
    keywords: [
      "VaultChat {comunicação|mensagens} {encriptada|segura|protegida}, {plataforma|aplicação} {encriptação|segurança} {multi-camadas|múltipla}, {comunicação|mensagens} {alto nível|máxima segurança}, VaultChat {comprar|preço} com {Bitcoin|criptomoedas}"
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
function getVaultChatContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = vaultChatSpintax[locale as keyof typeof vaultChatSpintax] || vaultChatSpintax.es;
  const items = content[type];
  
  // Rotación diaria + horaria para más variedad
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const hourOfDay = now.getHours();
  const timeSlot = Math.floor(hourOfDay / 6); // Cambia cada 6 horas
  const seed = (dayOfYear * 4 + timeSlot) % items.length;
  
  const selectedTemplate = items[seed];
  return processSpintax(selectedTemplate);
}

// 🎯 METADATOS SEO DINÁMICOS
export async function generateMetadata({ params: { locale } }: VaultChatPageProps): Promise<Metadata> {
  const title = getVaultChatContent(locale, 'titles');
  const description = getVaultChatContent(locale, 'descriptions');
  const keywords = getVaultChatContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/vault-chat` : `${baseUrl}/${locale}/apps/vault-chat`;

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
          url: `${baseUrl}/images/apps/vault-chat/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/vault-chat/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/vault-chat`,
        'en': `${baseUrl}/en/apps/vault-chat`,
        'fr': `${baseUrl}/fr/apps/vault-chat`,
        'it': `${baseUrl}/it/apps/vault-chat`,
        'pt': `${baseUrl}/pt/apps/vault-chat`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'VaultChat',
      'product-category': 'Multi-Layer Encrypted Communication Platform',
      'product-price-3months': '220 USD',
      'product-price-6months': '350 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'encryption-type': 'Multi-Layer Optimized',
      'subscription-plans': '3, 6 months'
    }
  };
}

// 🎯 STRUCTURED DATA PARA VAULT CHAT
function getVaultChatStructuredData(locale: string) {
  const description = getVaultChatContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'VaultChat - Plataforma de Comunicación Cifrada Multicapa',
    en: 'VaultChat - Multi-Layer Encrypted Communication Platform',
    fr: 'VaultChat - Plateforme de Communication Chiffrée Multi-Couches',
    it: 'VaultChat - Piattaforma di Comunicazione Crittografata Multi-Livello',
    pt: 'VaultChat - Plataforma de Comunicação Encriptada Multi-Camadas'
  };

  const features = {
    es: [
      "Cifrado multicapa optimizado",
      "Plataforma de comunicación cifrada",
      "Algoritmos de seguridad avanzados",
      "Protección contra amenazas sofisticadas",
      "Comunicación de alta gama",
      "Planes de 3 y 6 meses"
    ],
    en: [
      "Optimized multi-layer encryption",
      "Encrypted communication platform",
      "Advanced security algorithms",
      "Protection against sophisticated threats",
      "High-end communication",
      "3 and 6 months plans"
    ]
  };

  const productName = productNames[locale as keyof typeof productNames] || productNames.es;
  const productFeatures = features[locale as keyof typeof features] || features.en;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": productName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/apps/vault-chat` : `${baseUrl}/${locale}/apps/vault-chat`,
        "applicationCategory": "CommunicationApplication",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": [
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 3 Meses" : "3 Months Plan",
            "price": "220",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/PaymentCard",
              "https://schema.org/ByBankTransferInAdvance",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ]
          },
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 6 Meses" : "6 Months Plan",
            "price": "350",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/PaymentCard",
              "https://schema.org/ByBankTransferInAdvance",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ]
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1456",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "VaultChat Technologies"
        },
        "publisher": {
          "@type": "Organization", 
          "name": "Encriptados"
        },
        "featureList": productFeatures,
        "screenshot": `${baseUrl}/images/apps/vault-chat/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/vault-chat`,
        "installUrl": `${baseUrl}/apps/vault-chat`,
        "softwareVersion": "3.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "applicationSubCategory": "Multi-Layer Encrypted Communication"
      },
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "VaultChat"
        },
        "category": locale === 'es' ? "Plataformas de Comunicación Cifrada" : "Encrypted Communication Platforms",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "220",
          "highPrice": "350",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offerCount": "2",
          "seller": {
            "@type": "Organization",
            "name": "Encriptados"
          }
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Encryption Type",
            "value": "Multi-Layer Optimized"
          },
          {
            "@type": "PropertyValue", 
            "name": "Security Level",
            "value": "High-End"
          },
          {
            "@type": "PropertyValue",
            "name": "Subscription Plans",
            "value": "3, 6 months"
          }
        ]
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es VaultChat?" : "What is VaultChat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "VaultChat es una plataforma de comunicación cifrada optimizada con cifrado multicapa de alta gama. Utiliza algoritmos de seguridad avanzados para proteger las comunicaciones contra amenazas sofisticadas."
                : "VaultChat is an optimized encrypted communication platform with high-end multi-layer encryption. It uses advanced security algorithms to protect communications against sophisticated threats."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cuál es la diferencia de VaultChat con VaultSecure?" : "What is the difference between VaultChat and VaultSecure?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "VaultChat se enfoca en comunicación cifrada con tecnología multicapa optimizada, mientras que VaultSecure ofrece soluciones de seguridad más amplias. VaultChat está específicamente diseñado para comunicaciones de alta gama."
                : "VaultChat focuses on encrypted communication with optimized multi-layer technology, while VaultSecure offers broader security solutions. VaultChat is specifically designed for high-end communications."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué ventajas se obtienen al usar VaultChat?" : "What advantages do you get when using VaultChat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "VaultChat ofrece cifrado multicapa optimizado, protección contra amenazas sofisticadas, comunicación de alta gama y algoritmos de seguridad avanzados. Ideal para organizaciones que manejan información crítica."
                : "VaultChat offers optimized multi-layer encryption, protection against sophisticated threats, high-end communication and advanced security algorithms. Ideal for organizations handling critical information."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cuáles son los precios de VaultChat?" : "What are VaultChat prices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "VaultChat ofrece planes de 3 meses por $220 USD y 6 meses por $350 USD. Aceptamos pagos con Bitcoin, Ethereum y otras criptomonedas además de métodos tradicionales."
                : "VaultChat offers 3-month plans for $220 USD and 6-month plans for $350 USD. We accept payments with Bitcoin, Ethereum and other cryptocurrencies in addition to traditional methods."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function VaultChatPage({ params: { locale } }: VaultChatPageProps) {
  const structuredData = getVaultChatStructuredData(locale);

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
      <link rel="preload" href="/images/apps/vault-chat/banner.png" as="image" />
      <link rel="preload" href="/images/apps/vault-chat/youtube.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getVaultChatContent(locale, 'titles')} />
        <meta itemProp="description" content={getVaultChatContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="CommunicationApplication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
          <meta itemProp="lowPrice" content="220" />
          <meta itemProp="highPrice" content="350" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <VaultChatClient />
    </>
  );
}