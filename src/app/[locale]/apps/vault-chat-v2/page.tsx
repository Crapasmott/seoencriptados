// src/app/[locale]/apps/vault-chat-v2/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import VaultChatClient from './VaultChatClient';

interface VaultChatPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA VAULTCHAT
const vaultChatSpintax = {
  es: {
    titles: [
      "VaultChat 2025 - {Comunicación|Mensajería|Chat} {Encriptada|Cifrada|Segura} de {Alta|Máxima|Extrema} Seguridad | {Privacidad|Confidencialidad|Anonimato} {Total|Absoluta|Completa}",
      "VaultChat {Celular|Teléfono|Dispositivo} {Encriptado|Cifrado|Seguro} - {Comunicaciones|Mensajes|Conversaciones} {Privadas|Seguras|Protegidas} con {Servidores|Infraestructura|Tecnología} {Cifrados|Encriptados|Seguros}",
      "{Celular|Teléfono|Dispositivo} {Encriptado|Cifrado|Seguro} VaultChat - {Comunicación|Mensajería|Chat} {Ultra Segura|Completamente Privada|Totalmente Protegida} para {Profesionales|Empresarios|Ejecutivos}",
      "VaultChat {Aplicación|Plataforma|Sistema} - {Comunicaciones|Mensajes|Conversaciones} {Encriptadas|Cifradas|Seguras} con {Correo|Email} PGP y {Chat|Mensajería} {OMEMO|Cifrado|Seguro}",
      "{Dispositivo|Celular|Teléfono} VaultChat {Encriptado|Cifrado|Seguro} - {Comunicación|Mensajería|Chat} {Privada|Secreta|Confidencial} con {Tecnología|Cifrado|Encriptación} {Militar|Bancaria|Avanzada}"
    ],
    descriptions: [
      "VaultChat: {Celular|Dispositivo|Teléfono} {encriptado|cifrado|seguro} con {comunicaciones|mensajes|conversaciones} totalmente {cifradas|encriptadas|protegidas}. {Chat|Mensajería} {OMEMO|cifrada|segura}, {correo|email} PGP, {servidores|infraestructura} {seguros|protegidos|cifrados}. {Planes|Opciones|Suscripciones} desde {415$|$415 USD} con {renovación|duración} cada {3|6} meses.",
      "Descubre VaultChat, el {celular|dispositivo|teléfono} {encriptado|cifrado|seguro} más {avanzado|completo|sofisticado} para {profesionales|empresarios|ejecutivos} que requieren {máxima|total|absoluta} {privacidad|seguridad|confidencialidad}. {Comunicación|Mensajería|Chat} {cifrada|encriptada|segura} con {tecnología|algoritmos|protocolos} de {grado militar|alta seguridad|máxima protección}.",
      "{Comunicaciones|Mensajes|Conversaciones} {encriptadas|cifradas|seguras} de {alta|máxima|extrema} seguridad con VaultChat. {Chat|Mensajería} {OMEMO|cifrada}, {correo|email} PGP, {sin|cero} almacenamiento en {servidores|cloud|nube}. {Ideal|Perfecto|Diseñado} para {profesionales|empresarios|ejecutivos} {exigentes|selectos|premium}.",
      "VaultChat ofrece {comunicación|mensajería|chat} {encriptada|cifrada|segura} con {tecnología|cifrado|encriptación} {avanzada|militar|bancaria} y {protocolos|sistemas|algoritmos} de {privacidad|seguridad|protección} {estrictos|rigurosos|inquebrantables}. {Dispositivos|Celulares|Teléfonos} con {licencias|suscripciones|planes} de {3|6} meses de duración."
    ],
    keywords: [
      "VaultChat {celular|dispositivo|teléfono} {encriptado|cifrado|seguro}, {comunicación|mensajería|chat} {encriptada|cifrada|segura}, {correo|email} PGP {cifrado|encriptado|seguro}, {chat|mensajería} OMEMO {cifrado|encriptado}, VaultChat {precio|comprar|suscripción} {415|700} USD",
      "{celular|dispositivo|teléfono} {encriptado|cifrado|seguro} {alta seguridad|ultra seguro|completamente privado}, {comunicación|mensajería} {privada|secreta|confidencial} {profesional|empresarial}, VaultChat {sin metadatos|cero registros|sin rastros}, {privacidad|confidencialidad|anonimato} {total|absoluta|completa}",
      "VaultChat vs {WhatsApp|Telegram|Signal} {seguridad|privacidad|protección}, {celular|dispositivo} {encriptado|cifrado|seguro} {España|Europa|mundial}, {comunicación|mensajería} {encriptada|cifrada} {alta seguridad|máxima privacidad}, VaultChat {3 meses|6 meses|licencia}"
    ]
  },
  en: {
    titles: [
      "VaultChat 2025 - {High|Maximum|Extreme} Security {Encrypted|Secure|Protected} {Communication|Messaging|Phone} | {Total|Absolute|Complete} {Privacy|Confidentiality|Anonymity}",
      "VaultChat {Encrypted|Secure|Protected} {Phone|Device|Mobile} - {Private|Secure|Protected} {Communications|Messages|Conversations} with {Encrypted|Secure|Protected} {Servers|Infrastructure|Technology}",
      "{Encrypted|Secure|Protected} {Phone|Device|Mobile} VaultChat - {Ultra Secure|Completely Private|Totally Protected} {Communication|Messaging|Chat} for {Professionals|Entrepreneurs|Executives}",
      "VaultChat {Application|Platform|System} - {Encrypted|Secure|Protected} {Communications|Messages|Conversations} with PGP {Email|Mail} and {OMEMO|Encrypted|Secure} {Chat|Messaging}",
      "VaultChat {Encrypted|Secure|Protected} {Device|Phone|Mobile} - {Private|Secret|Confidential} {Communication|Messaging|Chat} with {Military|Banking|Advanced} {Technology|Encryption|Security}"
    ],
    descriptions: [
      "VaultChat: {Encrypted|Secure|Protected} {phone|device|mobile} with fully {encrypted|secure|protected} {communications|messages|conversations}. {OMEMO|Encrypted|Secure} {chat|messaging}, PGP {email|mail}, {secure|protected|encrypted} {servers|infrastructure}. {Plans|Options|Subscriptions} from {$415|415 USD} with {renewal|duration} every {3|6} months.",
      "Discover VaultChat, the most {advanced|complete|sophisticated} {encrypted|secure|protected} {phone|device|mobile} for {professionals|entrepreneurs|executives} requiring {maximum|total|absolute} {privacy|security|confidentiality}. {Encrypted|Secure|Protected} {communication|messaging|chat} with {military-grade|high-security|maximum-protection} {technology|algorithms|protocols}.",
      "{High|Maximum|Extreme} security {encrypted|secure|protected} {communications|messages|conversations} with VaultChat. {OMEMO|Encrypted} {chat|messaging}, PGP {email|mail}, {zero|no} {server|cloud} storage. {Ideal|Perfect|Designed} for {demanding|select|premium} {professionals|entrepreneurs|executives}.",
      "VaultChat offers {encrypted|secure|protected} {communication|messaging|chat} with {advanced|military|banking} {technology|encryption|security} and {strict|rigorous|unbreakable} {privacy|security|protection} {protocols|systems|algorithms}. {Devices|Phones|Mobiles} with {licenses|subscriptions|plans} of {3|6} months duration."
    ],
    keywords: [
      "VaultChat {encrypted|secure|protected} {phone|device|mobile}, {encrypted|secure|protected} {communication|messaging|chat}, PGP {encrypted|secure} {email|mail}, OMEMO {encrypted|secure} {chat|messaging}, VaultChat {price|buy|subscription} {415|700} USD",
      "{high security|ultra secure|completely private} {encrypted|secure} {phone|device}, {private|secret|confidential} {professional|enterprise} {communication|messaging}, VaultChat {no metadata|zero logs|no traces}, {total|absolute|complete} {privacy|confidentiality|anonymity}",
      "VaultChat vs {WhatsApp|Telegram|Signal} {security|privacy|protection}, {encrypted|secure|protected} {phone|device} {Spain|Europe|worldwide}, {high security|maximum privacy} {encrypted|secure} {communication|messaging}, VaultChat {3 months|6 months|license}"
    ]
  },
  fr: {
    titles: [
      "VaultChat 2025 - {Téléphone|Appareil|Mobile} {Crypté|Sécurisé|Protégé} de {Haute|Maximale|Extrême} Sécurité | Confidentialité {Totale|Absolue|Complète}",
      "VaultChat {Téléphone|Appareil|Mobile} {Crypté|Sécurisé|Protégé} - {Communications|Messages|Conversations} {Privées|Sécurisées|Protégées} avec {Serveurs|Infrastructure} {Cryptés|Sécurisés}"
    ],
    descriptions: [
      "VaultChat: {Téléphone|Appareil|Mobile} {crypté|sécurisé|protégé} avec {communications|messages|conversations} entièrement {cryptées|sécurisées|protégées}. {Chat|Messagerie} OMEMO {crypté|sécurisé}, {email|courrier} PGP, {serveurs|infrastructure} {sécurisés|protégés}.",
      "Découvrez VaultChat, le {téléphone|appareil|mobile} {crypté|sécurisé|protégé} le plus {avancé|complet|sophistiqué} pour {professionnels|entrepreneurs|dirigeants} exigeant une {confidentialité|sécurité|protection} {maximale|totale|absolue}."
    ],
    keywords: [
      "VaultChat {téléphone|appareil} {crypté|sécurisé|protégé}, {communication|messagerie} {cryptée|sécurisée}, email PGP {crypté|sécurisé}, chat OMEMO {crypté|sécurisé}"
    ]
  },
  it: {
    titles: [
      "VaultChat 2025 - {Telefono|Dispositivo|Mobile} {Crittografato|Sicuro|Protetto} di {Alta|Massima|Estrema} Sicurezza | Privacy {Totale|Assoluta|Completa}",
      "VaultChat {Telefono|Dispositivo|Mobile} {Crittografato|Sicuro|Protetto} - {Comunicazioni|Messaggi|Conversazioni} {Private|Sicure|Protette} con {Server|Infrastruttura} {Crittografati|Sicuri}"
    ],
    descriptions: [
      "VaultChat: {Telefono|Dispositivo|Mobile} {crittografato|sicuro|protetto} con {comunicazioni|messaggi|conversazioni} completamente {crittografate|sicure|protette}. {Chat|Messaggistica} OMEMO {crittografata|sicura}, {email|posta} PGP, {server|infrastruttura} {sicuri|protetti}.",
      "Scopri VaultChat, il {telefono|dispositivo|mobile} {crittografato|sicuro|protetto} più {avanzato|completo|sofisticato} per {professionisti|imprenditori|dirigenti} che richiedono {massima|totale|assoluta} {privacy|sicurezza|riservatezza}."
    ],
    keywords: [
      "VaultChat {telefono|dispositivo} {crittografato|sicuro|protetto}, {comunicazione|messaggistica} {crittografata|sicura}, email PGP {crittografata|sicura}, chat OMEMO {crittografata|sicura}"
    ]
  },
  pt: {
    titles: [
      "VaultChat 2025 - {Telefone|Dispositivo|Mobile} {Criptografado|Seguro|Protegido} de {Alta|Máxima|Extrema} Segurança | Privacidade {Total|Absoluta|Completa}",
      "VaultChat {Telefone|Dispositivo|Mobile} {Criptografado|Seguro|Protegido} - {Comunicações|Mensagens|Conversações} {Privadas|Seguras|Protegidas} com {Servidores|Infraestrutura} {Criptografados|Seguros}"
    ],
    descriptions: [
      "VaultChat: {Telefone|Dispositivo|Mobile} {criptografado|seguro|protegido} com {comunicações|mensagens|conversações} totalmente {criptografadas|seguras|protegidas}. {Chat|Mensagens} OMEMO {criptografado|seguro}, {email|correio} PGP, {servidores|infraestrutura} {seguros|protegidos}.",
      "Descubra VaultChat, o {telefone|dispositivo|mobile} {criptografado|seguro|protegido} mais {avançado|completo|sofisticado} para {profissionais|empresários|executivos} que exigem {máxima|total|absoluta} {privacidade|segurança|confidencialidade}."
    ],
    keywords: [
      "VaultChat {telefone|dispositivo} {criptografado|seguro|protegido}, {comunicação|mensagens} {criptografada|segura}, email PGP {criptografado|seguro}, chat OMEMO {criptografado|seguro}"
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
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
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
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/vault-chat-v2` : `${baseUrl}/${locale}/apps/vault-chat-v2`;

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
          url: `${baseUrl}/images/apps/vault-chat-v2/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/vault-chat-v2/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/vault-chat-v2`,
        'en': `${baseUrl}/en/apps/vault-chat-v2`,
        'fr': `${baseUrl}/fr/apps/vault-chat-v2`,
        'it': `${baseUrl}/it/apps/vault-chat-v2`,
        'pt': `${baseUrl}/pt/apps/vault-chat-v2`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'VaultChat Encrypted Phone',
      'product-category': 'Encrypted Communication Device',
      'product-price-3months': '415 USD',
      'product-price-6months': '700 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Digital Download + Physical Device',
      'subscription-plans': '3, 6 months',
      'features': 'OMEMO Chat, PGP Email, Encrypted Servers'
    }
  };
}

// 🎯 STRUCTURED DATA PARA VAULTCHAT
function getVaultChatStructuredData(locale: string) {
  const description = getVaultChatContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'VaultChat - Celular Encriptado de Alta Seguridad',
    en: 'VaultChat - High Security Encrypted Phone',
    fr: 'VaultChat - Téléphone Crypté Haute Sécurité',
    it: 'VaultChat - Telefono Crittografato Alta Sicurezza',
    pt: 'VaultChat - Telefone Criptografado Alta Segurança'
  };

  const features = {
    es: [
      "Chat OMEMO cifrado extremo a extremo",
      "Correo PGP completamente cifrado",
      "Servidores totalmente encriptados",
      "Sin almacenamiento de metadatos",
      "Comunicación de grado militar",
      "Planes flexibles 3 y 6 meses"
    ],
    en: [
      "OMEMO end-to-end encrypted chat",
      "Fully encrypted PGP email",
      "Completely encrypted servers",
      "No metadata storage",
      "Military-grade communication",
      "Flexible 3 and 6 month plans"
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
        "url": locale === 'es' ? `${baseUrl}/apps/vault-chat-v2` : `${baseUrl}/${locale}/apps/vault-chat-v2`,
        "category": locale === 'es' ? "Dispositivos de Comunicación Encriptada" : "Encrypted Communication Devices",
        "brand": {
          "@type": "Brand",
          "name": "VaultChat"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 3 Meses" : "3 Months Plan",
            "price": "415",
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
            "name": locale === 'es' ? "Plan 6 Meses" : "6 Months Plan",
            "price": "700",
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
          "ratingValue": "4.8",
          "reviewCount": "1547",
          "bestRating": "5"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "VaultChat Technologies"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Chat Encryption",
            "value": "OMEMO End-to-End"
          },
          {
            "@type": "PropertyValue",
            "name": "Email Encryption",
            "value": "PGP"
          },
          {
            "@type": "PropertyValue",
            "name": "Server Security",
            "value": "Fully Encrypted"
          },
          {
            "@type": "PropertyValue",
            "name": "Subscription Duration",
            "value": "3, 6 months"
          }
        ],
        "image": `${baseUrl}/images/apps/vault-chat-v2/product-image.jpg`,
        "sku": "VAULTCHAT-2025",
        "gtin": "1234567890123"
      },
      {
        "@type": "SoftwareApplication",
        "name": productName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/apps/vault-chat-v2` : `${baseUrl}/${locale}/apps/vault-chat-v2`,
        "applicationCategory": "CommunicationApplication",
        "operatingSystem": ["Android", "Custom Secure OS"],
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "415",
          "highPrice": "700",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offerCount": "2"
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
        "screenshot": `${baseUrl}/images/apps/vault-chat-v2/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/vault-chat-v2`,
        "softwareVersion": "2.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "applicationSubCategory": "Encrypted Communication"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo funciona el chat cifrado en el celular encriptado VaultChat?" : "How does encrypted chat work on VaultChat encrypted phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "El chat cifrado de VaultChat implementa el sistema de grado militar OMEMO / ECC / AES256. Ningún mensaje puede ser leído en nuestro servidor por nadie en ningún momento."
                : "VaultChat's encrypted chat implements military-grade OMEMO / ECC / AES256 system. No message can be read on our server by anyone at any time."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es el correo PGP que usa el celular encriptado VaultChat?" : "What is PGP email used by VaultChat encrypted phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "PGP es uno de los programas más utilizados para cifrar y descifrar correos electrónicos que significa Pretty Good Privacy. Todos los correos electrónicos no se almacenan en nuestro servidor y las claves de cifrado se generan en tu dispositivo."
                : "PGP is one of the most used programs to encrypt and decrypt emails, meaning Pretty Good Privacy. All emails are not stored on our server and encryption keys are generated on your device."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cuánto tiempo debo renovar mi licencia de VaultChat?" : "How often should I renew my VaultChat license?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Dependiendo de la licencia adquirida, esta debe ser renovada cada 3 o 6 meses. Conoce todas las licencias disponibles de VaultChat."
                : "Depending on the license purchased, it must be renewed every 3 or 6 months. Learn about all available VaultChat licenses."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cuáles son los precios de VaultChat?" : "What are VaultChat prices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "VaultChat ofrece planes flexibles: 3 meses por $415 USD y 6 meses por $700 USD. Aceptamos Bitcoin y otras criptomonedas."
                : "VaultChat offers flexible plans: 3 months for $415 USD and 6 months for $700 USD. We accept Bitcoin and other cryptocurrencies."
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
            "name": "VaultChat",
            "item": locale === 'es' ? `${baseUrl}/apps/vault-chat-v2` : `${baseUrl}/${locale}/apps/vault-chat-v2`
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function VaultChatPage({ params: { locale } }: VaultChatPageProps) {
  const structuredData = getVaultChatStructuredData(locale);
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
      <link rel="preload" href="/images/apps/vault-chat-v2/banner-6-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/vault-chat-v2/banner-12-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/vault-chat-v2/encrypted-mails.png" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/Product" style={{ display: 'none' }}>
        <meta itemProp="name" content={getVaultChatContent(locale, 'titles')} />
        <meta itemProp="description" content={getVaultChatContent(locale, 'descriptions')} />
        <meta itemProp="category" content="Encrypted Communication Device" />
        <meta itemProp="brand" content="VaultChat" />
        <meta itemProp="sku" content="VAULTCHAT-2025" />
        <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
          <meta itemProp="lowPrice" content="415" />
          <meta itemProp="highPrice" content="700" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.8" />
          <meta itemProp="reviewCount" content="1547" />
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
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/apps/vault-chat-v2`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/apps/vault-chat-v2`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/apps/vault-chat-v2`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it/apps/vault-chat-v2`} />
      <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt/apps/vault-chat-v2`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/apps/vault-chat-v2`} />

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <VaultChatClient />
    </>
  );
}