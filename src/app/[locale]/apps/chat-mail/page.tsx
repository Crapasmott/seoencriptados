// src/app/[locale]/apps/chat-mail/page.tsx - CON SEO Y SPINTAX
import React from "react";
import { Metadata } from 'next';
import ChatMailClient from "./ChatMailClient";

interface ChatMailPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA CHATMAIL
const chatMailSpintax = {
  es: {
    titles: [
      "ChatMail 2025 - {Celular|Smartphone|Dispositivo} {Encriptado|Cifrado|Seguro} | {Sistema Operativo|OS|Software} {Blindado|Protegido|Seguro} + {Bitcoin|Criptomonedas|Crypto}",
      "ChatMail {Encriptado|Cifrado|Seguro} - {Celular|Smartphone|Dispositivo} {Anti-Hackeo|Blindado|Protegido} con {Comunicaciones|Mensajes|Chats} {Cifradas|Encriptadas|Seguras}",
      "{Celular|Smartphone|Dispositivo} ChatMail - {Encriptado|Cifrado|Seguro} con {Sistema Operativo|OS|Software} {Blindado|Protegido|Anti-Hackeo}",
      "ChatMail {Blindado|Protegido|Seguro} - {Celular|Smartphone|Dispositivo} {Encriptado|Cifrado|Anti-Hackeo} para {Comunicaciones|Mensajes|Datos} {Seguras|Protegidas|Blindadas}",
      "🔒 ChatMail - {Celular|Smartphone} {Encriptado|Blindado} | {Evita|Previene|Bloquea} {Hackeos|Espionaje|Interceptación} + {Bitcoin|Criptomonedas|Crypto}",
      "ChatMail vs {iPhone|Samsung|Xiaomi} - {Celular|Smartphone} {Ultra Seguro|Completamente Encriptado|Totalmente Blindado}",
      "⚡ {Comprar|Adquirir|Obtener} ChatMail con {Bitcoin|Criptomonedas|Crypto} - {Celular|Smartphone} {Encriptado|Blindado|Protegido}",
      "ChatMail {2025|Premium|Pro} - {Protege|Blinda|Asegura} tus {Comunicaciones|Datos|Mensajes} con {Celular|Smartphone} {Encriptado|Blindado}"
    ],
    descriptions: [
      "ChatMail: {Celular|Smartphone|Dispositivo} {encriptado|cifrado|blindado} con {sistema operativo|OS|software} {versátil|seguro|protegido} que {protege|blinda|asegura} tus {comunicaciones|mensajes|datos} con {seguridad|protección|cifrado} de {grado militar|nivel bancario|máxima calidad}. {Evita|Previene|Bloquea} {hackeos|espionaje|interceptación}, {comunicaciones|mensajes|chats} {cifradas|encriptadas|protegidas}. {Acepta|Soporta|Compatible con} {pagos|compras|adquisición} con {Bitcoin|criptomonedas|crypto}.",
      "Descubre ChatMail, el {celular|smartphone|dispositivo} {encriptado|cifrado|blindado} más {seguro|protegido|avanzado} para {comunicaciones|mensajes|datos} {ultra seguras|completamente protegidas|totalmente blindadas}. {Sistema operativo|OS|Software} {blindado|protegido|seguro}, {aplicaciones|programas|apps} {exclusivas|especializadas|seguras}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {disponible|aceptado|soportado}.",
      "{Celular|Smartphone|Dispositivo} {encriptado|cifrado|blindado} ChatMail - {Protección|Seguridad|Blindaje} {total|completa|absoluta} contra {hackeos|espionaje|interceptación}. {Sistema operativo|OS|Software} {seguro|protegido|blindado}, {comunicaciones|mensajes|chats} {cifradas|encriptadas|protegidas}. {Ideal|Perfecto|Diseñado} para usuarios que {requieren|necesitan|demandan} {máxima|extrema|total} {privacidad|seguridad|protección}.",
      "ChatMail ofrece {comunicaciones|mensajes|datos} {seguras|protegidas|encriptadas} con {tecnología|sistema|hardware} {blindado|protegido|seguro} y {protocolos|sistemas|algoritmos} de {seguridad|protección|cifrado} {inquebrantables|rigurosos|militares}. {Celular|Smartphone|Dispositivo} {anti-hackeo|blindado|protegido}, {acepta|soporta|compatible con} {Bitcoin|criptomonedas|crypto}.",
      "⚡ {Protege|Blinda|Asegura} tus {comunicaciones|mensajes|datos} con ChatMail - El {celular|smartphone|dispositivo} {más seguro|ultra protegido|completamente blindado} {disponible|del mercado|existente}. {Sistema operativo|OS|Software} {blindado|protegido|seguro}, {aplicaciones|programas|funciones} {exclusivas|especializadas|seguras}, {pago|compra} con {Bitcoin|criptomonedas|crypto}."
    ],
    keywords: [
      "ChatMail {celular|smartphone|dispositivo} {encriptado|cifrado|blindado}, {celular|smartphone} {anti-hackeo|blindado|protegido}, ChatMail {sistema operativo|OS} {seguro|blindado|protegido}, ChatMail {Bitcoin|criptomonedas|crypto} {pago|compra|adquisición}",
      "{celular|smartphone} {encriptado|cifrado} {seguro|blindado|protegido}, ChatMail vs {iPhone|Samsung|Xiaomi} {seguridad|protección|blindaje}, {dispositivo|celular} {anti-hackeo|blindado} {comunicaciones|mensajes}, ChatMail {comprar|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "ChatMail {celular|smartphone} {encriptado|blindado} {España|México|Argentina|Colombia}, {dispositivo|celular} {comunicaciones|mensajes} {seguras|protegidas}, {smartphone|celular} {sistema operativo|OS} {blindado|seguro}, ChatMail {evitar|prevenir} {hackeos|espionaje}"
    ]
  },
  en: {
    titles: [
      "ChatMail 2025 - {Encrypted|Secure|Protected} {Phone|Smartphone|Device} | {Secure|Shielded|Protected} {Operating System|OS|Software} + {Bitcoin|Cryptocurrency|Crypto}",
      "ChatMail {Encrypted|Secure|Protected} - {Anti-Hacking|Shielded|Protected} {Phone|Smartphone|Device} with {Encrypted|Secure|Protected} {Communications|Messages|Chats}",
      "ChatMail {Phone|Smartphone|Device} - {Encrypted|Secure|Protected} with {Secure|Shielded|Protected} {Operating System|OS|Software}",
      "ChatMail {Shielded|Protected|Secure} - {Encrypted|Secure|Anti-Hacking} {Phone|Smartphone|Device} for {Secure|Protected|Shielded} {Communications|Messages|Data}",
      "🔒 ChatMail - {Encrypted|Shielded} {Phone|Smartphone} | {Prevents|Blocks|Stops} {Hacking|Spying|Interception} + {Bitcoin|Cryptocurrency|Crypto}",
      "ChatMail vs {iPhone|Samsung|Xiaomi} - {Ultra Secure|Completely Encrypted|Totally Shielded} {Phone|Smartphone}",
      "⚡ {Buy|Purchase|Get} ChatMail with {Bitcoin|Cryptocurrency|Crypto} - {Encrypted|Shielded|Protected} {Phone|Smartphone}",
      "ChatMail {2025|Premium|Pro} - {Protect|Shield|Secure} your {Communications|Data|Messages} with {Encrypted|Shielded} {Phone|Smartphone}"
    ],
    descriptions: [
      "ChatMail: {Encrypted|Secure|Shielded} {phone|smartphone|device} with {versatile|secure|protected} {operating system|OS|software} that {protects|shields|secures} your {communications|messages|data} with {military-grade|banking-level|maximum} {security|protection|encryption}. {Prevents|Blocks|Stops} {hacking|spying|interception}, {encrypted|secure|protected} {communications|messages|chats}. {Accepts|Supports|Compatible with} {Bitcoin|cryptocurrency|crypto} {payments|purchases}.",
      "Discover ChatMail, the most {secure|protected|advanced} {encrypted|secure|shielded} {phone|smartphone|device} for {ultra secure|completely protected|totally shielded} {communications|messages|data}. {Shielded|Protected|Secure} {operating system|OS|software}, {exclusive|specialized|secure} {applications|programs|apps}. {Bitcoin|Cryptocurrency|Crypto} {payment|purchase} {available|accepted|supported}.",
      "{Encrypted|Secure|Shielded} ChatMail {phone|smartphone|device} - {Total|Complete|Absolute} {protection|security|shielding} against {hacking|spying|interception}. {Secure|Protected|Shielded} {operating system|OS|software}, {encrypted|secure|protected} {communications|messages|chats}. {Ideal|Perfect|Designed} for users who {require|need|demand} {maximum|extreme|total} {privacy|security|protection}.",
      "ChatMail offers {secure|protected|encrypted} {communications|messages|data} with {shielded|protected|secure} {technology|system|hardware} and {unbreakable|rigorous|military} {security|protection|encryption} {protocols|systems|algorithms}. {Anti-hacking|Shielded|Protected} {phone|smartphone|device}, {accepts|supports|compatible with} {Bitcoin|cryptocurrency|crypto}.",
      "⚡ {Protect|Shield|Secure} your {communications|messages|data} with ChatMail - The most {secure|ultra protected|completely shielded} {phone|smartphone|device} {available|on the market|existing}. {Shielded|Protected|Secure} {operating system|OS|software}, {exclusive|specialized|secure} {applications|programs|functions}, {Bitcoin|cryptocurrency|crypto} {payment|purchase}."
    ],
    keywords: [
      "ChatMail {encrypted|secure|shielded} {phone|smartphone|device}, {anti-hacking|shielded|protected} {phone|smartphone}, ChatMail {secure|shielded|protected} {operating system|OS}, ChatMail {Bitcoin|cryptocurrency|crypto} {payment|purchase}",
      "{encrypted|secure} {shielded|protected} {phone|smartphone}, ChatMail vs {iPhone|Samsung|Xiaomi} {security|protection|shielding}, {anti-hacking|shielded} {device|phone} {communications|messages}, ChatMail {buy|purchase} with {Bitcoin|cryptocurrency|crypto}",
      "ChatMail {encrypted|shielded} {phone|smartphone} {USA|UK|Canada|Australia}, {secure|protected} {communications|messages} {device|phone}, {smartphone|phone} {secure|shielded} {operating system|OS}, ChatMail {prevent|stop} {hacking|spying}"
    ]
  },
  fr: {
    titles: [
      "ChatMail 2025 - {Téléphone|Smartphone|Appareil} {Chiffré|Sécurisé|Protégé} | {Système d'Exploitation|OS|Logiciel} {Blindé|Protégé|Sécurisé} + {Bitcoin|Cryptomonnaies|Crypto}",
      "ChatMail {Chiffré|Sécurisé|Protégé} - {Téléphone|Smartphone|Appareil} {Anti-Piratage|Blindé|Protégé} avec Communications {Chiffrées|Sécurisées|Protégées}",
      "Téléphone ChatMail - {Chiffré|Sécurisé|Protégé} avec {Système d'Exploitation|OS|Logiciel} {Blindé|Protégé|Sécurisé}",
      "ChatMail {Blindé|Protégé|Sécurisé} - {Téléphone|Smartphone} {Chiffré|Anti-Piratage} pour Communications {Sécurisées|Protégées|Blindées}",
      "🔒 ChatMail - {Téléphone|Smartphone} {Chiffré|Blindé} | {Évite|Prévient|Bloque} le {Piratage|Espionnage|Interception} + {Bitcoin|Cryptomonnaies|Crypto}"
    ],
    descriptions: [
      "ChatMail: {Téléphone|Smartphone|Appareil} {chiffré|sécurisé|blindé} avec {système d'exploitation|OS|logiciel} {polyvalent|sécurisé|protégé} qui {protège|blinde|sécurise} vos {communications|messages|données} avec une {sécurité|protection|chiffrement} de {niveau militaire|niveau bancaire|qualité maximale}.",
      "Découvrez ChatMail, le {téléphone|smartphone|appareil} {chiffré|sécurisé|blindé} le plus {sécurisé|protégé|avancé} pour des {communications|messages|données} {ultra sécurisées|complètement protégées|totalement blindées}."
    ],
    keywords: [
      "ChatMail {téléphone|smartphone|appareil} {chiffré|sécurisé|blindé}, {téléphone|smartphone} {anti-piratage|blindé|protégé}, ChatMail {système d'exploitation|OS} {sécurisé|blindé}, ChatMail {Bitcoin|cryptomonnaies|crypto} {paiement|achat}"
    ]
  },
  it: {
    titles: [
      "ChatMail 2025 - {Telefono|Smartphone|Dispositivo} {Crittografato|Sicuro|Protetto} | {Sistema Operativo|OS|Software} {Blindato|Protetto|Sicuro} + {Bitcoin|Criptovalute|Crypto}",
      "ChatMail {Crittografato|Sicuro|Protetto} - {Telefono|Smartphone|Dispositivo} {Anti-Hacking|Blindato|Protetto} con Comunicazioni {Crittografate|Sicure|Protette}",
      "Telefono ChatMail - {Crittografato|Sicuro|Protetto} con {Sistema Operativo|OS|Software} {Blindato|Protetto|Sicuro}",
      "ChatMail {Blindato|Protetto|Sicuro} - {Telefono|Smartphone} {Crittografato|Anti-Hacking} per Comunicazioni {Sicure|Protette|Blindate}",
      "🔒 ChatMail - {Telefono|Smartphone} {Crittografato|Blindato} | {Evita|Previene|Blocca} {Hacking|Spionaggio|Intercettazione} + {Bitcoin|Criptovalute|Crypto}"
    ],
    descriptions: [
      "ChatMail: {Telefono|Smartphone|Dispositivo} {crittografato|sicuro|blindato} con {sistema operativo|OS|software} {versatile|sicuro|protetto} che {protegge|blinda|assicura} le tue {comunicazioni|messaggi|dati} con {sicurezza|protezione|crittografia} di {livello militare|livello bancario|qualità massima}.",
      "Scopri ChatMail, il {telefono|smartphone|dispositivo} {crittografato|sicuro|blindato} più {sicuro|protetto|avanzato} per {comunicazioni|messaggi|dati} {ultra sicure|completamente protette|totalmente blindate}."
    ],
    keywords: [
      "ChatMail {telefono|smartphone|dispositivo} {crittografato|sicuro|blindato}, {telefono|smartphone} {anti-hacking|blindato|protetto}, ChatMail {sistema operativo|OS} {sicuro|blindato}, ChatMail {Bitcoin|criptovalute|crypto} {pagamento|acquisto}"
    ]
  },
  pt: {
    titles: [
      "ChatMail 2025 - {Telefone|Smartphone|Dispositivo} {Encriptado|Seguro|Protegido} | {Sistema Operacional|OS|Software} {Blindado|Protegido|Seguro} + {Bitcoin|Criptomoedas|Crypto}",
      "ChatMail {Encriptado|Seguro|Protegido} - {Telefone|Smartphone|Dispositivo} {Anti-Hacking|Blindado|Protegido} com Comunicações {Encriptadas|Seguras|Protegidas}",
      "Telefone ChatMail - {Encriptado|Seguro|Protegido} com {Sistema Operacional|OS|Software} {Blindado|Protegido|Seguro}",
      "ChatMail {Blindado|Protegido|Seguro} - {Telefone|Smartphone} {Encriptado|Anti-Hacking} para Comunicações {Seguras|Protegidas|Blindadas}",
      "🔒 ChatMail - {Telefone|Smartphone} {Encriptado|Blindado} | {Evita|Previne|Bloqueia} {Hacking|Espionagem|Interceptação} + {Bitcoin|Criptomoedas|Crypto}"
    ],
    descriptions: [
      "ChatMail: {Telefone|Smartphone|Dispositivo} {encriptado|seguro|blindado} com {sistema operacional|OS|software} {versátil|seguro|protegido} que {protege|blinda|assegura} suas {comunicações|mensagens|dados} com {segurança|proteção|encriptação} de {nível militar|nível bancário|qualidade máxima}.",
      "Descubra ChatMail, o {telefone|smartphone|dispositivo} {encriptado|seguro|blindado} mais {seguro|protegido|avançado} para {comunicações|mensagens|dados} {ultra seguras|completamente protegidas|totalmente blindadas}."
    ],
    keywords: [
      "ChatMail {telefone|smartphone|dispositivo} {encriptado|seguro|blindado}, {telefone|smartphone} {anti-hacking|blindado|protegido}, ChatMail {sistema operacional|OS} {seguro|blindado}, ChatMail {Bitcoin|criptomoedas|crypto} {pagamento|compra}"
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
function getChatMailContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = chatMailSpintax[locale as keyof typeof chatMailSpintax] || chatMailSpintax.es;
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
export async function generateMetadata({ params: { locale } }: ChatMailPageProps): Promise<Metadata> {
  const title = getChatMailContent(locale, 'titles');
  const description = getChatMailContent(locale, 'descriptions');
  const keywords = getChatMailContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/chat-mail` : `${baseUrl}/${locale}/apps/chat-mail`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Encrypted Mobile Device',
    
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
          url: `${baseUrl}/images/apps/chat-mail/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/chat-mail/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/chat-mail`,
        'en': `${baseUrl}/en/apps/chat-mail`,
        'fr': `${baseUrl}/fr/apps/chat-mail`,
        'it': `${baseUrl}/it/apps/chat-mail`,
        'pt': `${baseUrl}/pt/apps/chat-mail`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'ChatMail',
      'product-category': 'Encrypted Mobile Device',
      'product-type': 'Secure Smartphone',
      'product-price-3months': '425 USD',
      'product-price-6months': '825 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'crypto-payments': 'Bitcoin, Ethereum, Litecoin, Monero, USDT, USDC',
      'availability': 'In Stock',
      'shipping': 'Worldwide Shipping',
      'target-audience': 'Privacy-Conscious Users, Security Professionals, High-Risk Individuals',
      'device-type': 'Encrypted Smartphone',
      'operating-system': 'Secure Custom OS',
      'security-level': 'Military-Grade Security',
      'anti-hacking': 'Advanced Anti-Hacking Protection',
      'encryption-type': 'Hardware-Level Encryption',
      'use-cases': 'Secure Communications, Anti-Surveillance, Privacy Protection',
      'competitors': 'iPhone, Samsung Galaxy, Google Pixel, BlackBerry',
      'features': 'Encrypted OS, Secure Communications, Anti-Hacking, Hardware Security',
      'security-features': 'Encrypted Messaging, Secure OS, Hardware Protection, Anti-Surveillance',
      'rating': '4.8/5',
      'review-count': '2567',
      'device-version': '2.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'manufacturer': 'ChatMail Technologies',
      'manufacturer-website': baseUrl,
      'support-email': 'support@encriptados.io',
      'device-focus': 'Complete Mobile Security, Anti-Hacking Protection',
      'target-market': 'Security-Conscious Mobile Users',
      'protection-level': 'Maximum Mobile Security',
      'communication-security': 'Encrypted Voice, Text, Video, Data',
    }
  };
}

// 🎯 STRUCTURED DATA PARA CHATMAIL
function getChatMailStructuredData(locale: string) {
  const description = getChatMailContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'ChatMail - Celular Encriptado Seguro',
    en: 'ChatMail - Secure Encrypted Phone',
    fr: 'ChatMail - Téléphone Chiffré Sécurisé',
    it: 'ChatMail - Telefono Crittografato Sicuro',
    pt: 'ChatMail - Telefone Encriptado Seguro'
  };

  const features = {
    es: [
      "Sistema operativo blindado",
      "Comunicaciones cifradas",
      "Protección anti-hackeo",
      "Seguridad de grado militar",
      "Aplicaciones exclusivas seguras",
      "Pagos con Bitcoin y criptomonedas",
      "Hardware protegido",
      "Mensajes auto-destructivos",
      "Protección contra espionaje",
      "Cifrado de nivel hardware"
    ],
    en: [
      "Shielded operating system",
      "Encrypted communications",
      "Anti-hacking protection",
      "Military-grade security",
      "Exclusive secure applications",
      "Bitcoin and cryptocurrency payments",
      "Protected hardware",
      "Self-destructing messages",
      "Anti-surveillance protection",
      "Hardware-level encryption"
    ],
    fr: [
      "Système d'exploitation blindé",
      "Communications chiffrées",
      "Protection anti-piratage",
      "Sécurité de niveau militaire",
      "Applications exclusives sécurisées",
      "Paiements Bitcoin et cryptomonnaies",
      "Matériel protégé",
      "Messages auto-destructeurs",
      "Protection anti-espionnage",
      "Chiffrement au niveau matériel"
    ],
    it: [
      "Sistema operativo blindato",
      "Comunicazioni crittografate",
      "Protezione anti-hacking",
      "Sicurezza di livello militare",
      "Applicazioni esclusive sicure",
      "Pagamenti Bitcoin e criptovalute",
      "Hardware protetto",
      "Messaggi auto-distruttivi",
      "Protezione anti-spionaggio",
      "Crittografia a livello hardware"
    ],
    pt: [
      "Sistema operacional blindado",
      "Comunicações encriptadas",
      "Proteção anti-hacking",
      "Segurança de nível militar",
      "Aplicações exclusivas seguras",
      "Pagamentos Bitcoin e criptomoedas",
      "Hardware protegido",
      "Mensagens auto-destrutivas",
      "Proteção anti-espionagem",
      "Encriptação de nível hardware"
    ]
  };

  const productName = productNames[locale as keyof typeof productNames] || productNames.es;
  const productFeatures = features[locale as keyof typeof features] || features.en;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "category": locale === 'es' ? "Dispositivos Móviles Encriptados" : "Encrypted Mobile Devices",
        "brand": {
          "@type": "Brand",
          "name": "ChatMail"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 3 Meses" : "3 Months Plan",
            "price": "425",
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
            "price": "825",
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
          "ratingValue": "4.8",
          "reviewCount": "2567",
          "bestRating": "5"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "ChatMail Technologies"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Device Type",
            "value": "Encrypted Smartphone"
          },
          {
            "@type": "PropertyValue",
            "name": "Operating System",
            "value": "Secure Custom OS"
          },
          {
            "@type": "PropertyValue",
            "name": "Security Level",
            "value": "Military-Grade"
          },
          {
            "@type": "PropertyValue",
            "name": "Anti-Hacking",
            "value": "Advanced Protection"
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
            "name": locale === 'es' ? "¿Es difícil usar un celular encriptado como ChatMail?" : "Is it difficult to use an encrypted phone like ChatMail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Contrario a lo que se cree, los celulares encriptados son bastante fáciles de usar. Cuentan con sistemas operativos intuitivos y amigables para que cualquier persona pueda manipularlos de forma sencilla y rápida."
                : "Contrary to what is believed, encrypted phones are quite easy to use. They have intuitive and user-friendly operating systems so that anyone can operate them simply and quickly."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo funcionan los chat cifrados en ChatMail?" : "How do encrypted chats work in ChatMail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Puedes enviar textos, imágenes, notas de voz, videos o documentos de forma cifrada y segura. Además se pueden configurar tiempos para que esta información se elimine en ambos dispositivos sin dejar rastro. Toda la información estará segura."
                : "You can send texts, images, voice notes, videos, or documents in an encrypted and secure way. Additionally, you can configure times for this information to be deleted on both devices without leaving a trace. All information will be secure."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Se puede hackear un celular encriptado?" : "Can an encrypted phone be hacked?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Los celulares encriptados como ChatMail, están diseñados para ser impenetrables y cuentan con seguridad de grado militar que los hace imposibles de hackear. Nadie va a poder tener acceso a las comunicaciones que se emitan o reciban en un celular cifrado como ChatMail."
                : "Encrypted phones like ChatMail are designed to be impenetrable and have military-grade security that makes them impossible to hack. No one will be able to access communications sent or received on an encrypted phone like ChatMail."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿ChatMail acepta pagos con criptomonedas?" : "Does ChatMail accept cryptocurrency payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, ChatMail acepta múltiples criptomonedas incluyendo Bitcoin, Ethereum, Litecoin, Monero, USDT y USDC. Esto permite a los usuarios mantener su privacidad también en las transacciones de compra del dispositivo."
                : "Yes, ChatMail accepts multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, Monero, USDT, and USDC. This allows users to maintain their privacy also in device purchase transactions."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function ChatMailPage({ params: { locale } }: ChatMailPageProps) {
  const structuredData = getChatMailStructuredData(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      <link rel="preload" href="/images/apps/chat-mail/banner-3-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/chat-mail/banner-6-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/chat-mail/details.png" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      <div itemScope itemType="https://schema.org/Product" style={{ display: 'none' }}>
        <meta itemProp="name" content={getChatMailContent(locale, 'titles')} />
        <meta itemProp="description" content={getChatMailContent(locale, 'descriptions')} />
        <meta itemProp="category" content="Encrypted Mobile Devices" />
        <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
          <meta itemProp="lowPrice" content="425" />
          <meta itemProp="highPrice" content="825" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.8" />
          <meta itemProp="reviewCount" content="2567" />
          <meta itemProp="bestRating" content="5" />
        </div>
        <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <meta itemProp="name" content="ChatMail" />
        </div>
      </div>

      <ChatMailClient />
    </>
  );
}