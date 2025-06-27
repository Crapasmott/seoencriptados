// src/app/[locale]/encrypted-sim/page.tsx
import { Metadata } from 'next';
import EncryptedSimClient from './EncryptedSimClient';

interface EncryptedSimPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA ENCRYPTED SIM
const encryptedSimSpintax = {
  es: {
    titles: [
      "SIM {Encriptada|Cifrada|Segura} 2025 - {Tarjetas|Chips} SIM {Ultra Seguras|Completamente Privadas|Totalmente Protegidas} | {Comunicaciones|Llamadas|Mensajes} {Anónimas|Privadas|Secretas}",
      "{Comprar|Adquirir|Obtener} SIM {Encriptada|Cifrada|Segura} - {Tarjeta|Chip} SIM {Anónima|Privada|Secreta} con {Cifrado|Encriptación} {Militar|Bancario|Extremo}",
      "SIM {Segura|Encriptada|Protegida} {Profesional|Empresarial|Premium} - {Comunicaciones|Llamadas|Mensajes} {Privadas|Anónimas|Secretas} {Sin Rastro|Cero Registros|Completamente Anónimas}",
      "Encrypted SIM {España|Mexico|Colombia|Argentina} - {Tarjetas|Chips} SIM {Seguras|Encriptadas|Privadas} para {Profesionales|Empresarios|Ejecutivos|Periodistas}",
      "SIM {Anti-Espionaje|Ultra Privada|Completamente Segura} - {Comunicaciones|Llamadas|Mensajes} {Encriptadas|Cifradas|Protegidas} con {Máxima|Total|Absoluta} {Privacidad|Seguridad|Protección}"
    ],
    descriptions: [
      "SIM {encriptada|cifrada|segura} de {alta|máxima|extrema} seguridad para {comunicaciones|llamadas|mensajes} {completamente privadas|totalmente anónimas|ultra seguras}. {Cifrado|Encriptación} {militar|bancario|extremo}, {sin registros|cero metadatos|ningún rastro}, {compatible|funciona|disponible} en {150+|más de 150} países. {Ideal|Perfecta|Diseñada} para {profesionales|empresarios|ejecutivos|periodistas|abogados} que {necesitan|requieren|buscan} {máxima|total|absoluta} {privacidad|seguridad|protección}.",
      "Descubre las {tarjetas|chips} SIM {más seguras|ultra protegidas|completamente privadas} del mercado. {Comunicaciones|Llamadas|Mensajes} {anónimas|privadas|secretas} con {tecnología|cifrado|encriptación} {avanzada|militar|bancaria}. {Sin|Cero|Ningún} {registro|metadato|rastro} de {llamadas|mensajes|comunicaciones}. {Planes|Opciones|Tarifas} desde {50$|$50 USD} con {activación|disponibilidad|uso} {inmediata|instantánea|rápida}.",
      "SIM {encriptada|cifrada|segura} {profesional|empresarial|premium} con {protección|seguridad|privacidad} {máxima|total|absoluta}. {Algoritmos|Protocolos|Tecnología} de {cifrado|encriptación|seguridad} {militar|bancario|gubernamental}. {Comunicaciones|Llamadas|Mensajes} {100%|completamente|totalmente} {anónimas|privadas|secretas}. {Compatible|Funciona|Disponible} con {cualquier|todos los|iPhone y Android} dispositivo {móvil|celular|smartphone}.",
      "La {mejor|más avanzada|única} SIM {encriptada|cifrada|segura} para {comunicaciones|llamadas|mensajes} {ultra privadas|completamente anónimas|totalmente secretas}. {Usada|Utilizada|Preferida} por {profesionales|empresarios|ejecutivos|periodistas|activistas} en {todo el mundo|150+ países|nivel global}. {Cifrado|Encriptación} {extremo a extremo|militar|bancario}, {activación|disponibilidad|uso} {inmediata|instantánea|rápida}."
    ],
    keywords: [
      "SIM {encriptada|cifrada|segura}, {tarjeta|chip} SIM {anónima|privada|secreta}, {comunicaciones|llamadas|mensajes} {seguras|encriptadas|privadas}, SIM {anti-espionaje|ultra privada|completamente segura}, {comprar|adquirir} SIM {encriptada|cifrada|segura}",
      "SIM {profesional|empresarial|premium} {segura|encriptada|privada}, {comunicaciones|llamadas} {anónimas|privadas|secretas}, {tarjeta|chip} SIM {sin registros|cero metadatos|ningún rastro}, SIM {cifrado militar|encriptación bancaria|seguridad extrema}",
      "Encrypted SIM {España|Mexico|Colombia|Argentina}, SIM {segura|encriptada} {profesionales|empresarios|periodistas}, {comunicaciones|llamadas} {privadas|anónimas|secretas} SIM, {mejor|más segura} SIM {encriptada|cifrada|protegida}"
    ]
  },
  en: {
    titles: [
      "{Encrypted|Secure|Private} SIM 2025 - {Ultra Secure|Completely Private|Totally Protected} SIM {Cards|Chips} | {Anonymous|Private|Secret} {Communications|Calls|Messages}",
      "{Buy|Acquire|Get} {Encrypted|Secure|Private} SIM - {Anonymous|Private|Secret} SIM {Card|Chip} with {Military|Banking|Extreme} {Encryption|Security}",
      "{Professional|Enterprise|Premium} {Secure|Encrypted|Protected} SIM - {Private|Anonymous|Secret} {Communications|Calls|Messages} with {Zero|No} {Traces|Records|Logs}",
      "Encrypted SIM {Spain|Mexico|Colombia|USA} - {Secure|Encrypted|Private} SIM {Cards|Chips} for {Professionals|Entrepreneurs|Executives|Journalists}",
      "{Anti-Surveillance|Ultra Private|Completely Secure} SIM - {Encrypted|Secure|Protected} {Communications|Calls|Messages} with {Maximum|Total|Absolute} {Privacy|Security|Protection}"
    ],
    descriptions: [
      "{High|Maximum|Extreme} security {encrypted|secure|private} SIM for {completely private|totally anonymous|ultra secure} {communications|calls|messages}. {Military|Banking|Extreme} {encryption|security}, {no records|zero metadata|no traces}, {compatible|works|available} in {150+|over 150} countries. {Ideal|Perfect|Designed} for {professionals|entrepreneurs|executives|journalists|lawyers} who {need|require|seek} {maximum|total|absolute} {privacy|security|protection}.",
      "Discover the {most secure|ultra protected|completely private} SIM {cards|chips} on the market. {Anonymous|Private|Secret} {communications|calls|messages} with {advanced|military|banking} {technology|encryption|security}. {No|Zero|None} {record|metadata|trace} of {calls|messages|communications}. {Plans|Options|Rates} from {$50|50 USD} with {immediate|instant|fast} {activation|availability|use}.",
      "{Professional|Enterprise|Premium} {encrypted|secure|private} SIM with {maximum|total|absolute} {protection|security|privacy}. {Military|Banking|Government} {encryption|security|protection} {algorithms|protocols|technology}. {100%|Completely|Totally} {anonymous|private|secret} {communications|calls|messages}. {Compatible|Works|Available} with {any|all|iPhone and Android} {mobile|cell|smartphone} device.",
      "The {best|most advanced|only} {encrypted|secure|private} SIM for {ultra private|completely anonymous|totally secret} {communications|calls|messages}. {Used|Utilized|Preferred} by {professionals|entrepreneurs|executives|journalists|activists} {worldwide|in 150+ countries|globally}. {End-to-end|Military|Banking} {encryption|security}, {immediate|instant|fast} {activation|availability|use}."
    ],
    keywords: [
      "{encrypted|secure|private} SIM, {anonymous|private|secret} SIM {card|chip}, {secure|encrypted|private} {communications|calls|messages}, {anti-surveillance|ultra private|completely secure} SIM, {buy|acquire} {encrypted|secure|private} SIM",
      "{professional|enterprise|premium} {secure|encrypted|private} SIM, {anonymous|private|secret} {communications|calls}, SIM {card|chip} {no records|zero metadata|no traces}, SIM {military encryption|banking security|extreme protection}",
      "Encrypted SIM {Spain|Mexico|Colombia|USA}, {secure|encrypted} SIM {professionals|entrepreneurs|journalists}, {private|anonymous|secret} SIM {communications|calls}, {best|most secure} {encrypted|secure|protected} SIM"
    ]
  },
  fr: {
    titles: [
      "SIM {Cryptée|Sécurisée|Privée} 2025 - Cartes SIM {Ultra Sécurisées|Complètement Privées|Totalement Protégées} | Communications {Anonymes|Privées|Secrètes}",
      "{Acheter|Acquérir|Obtenir} SIM {Cryptée|Sécurisée|Privée} - Carte SIM {Anonyme|Privée|Secrète} avec {Cryptage|Chiffrement} {Militaire|Bancaire|Extrême}"
    ],
    descriptions: [
      "SIM {cryptée|sécurisée|privée} de {haute|maximale|extrême} sécurité pour communications {complètement privées|totalement anonymes|ultra sécurisées}. {Cryptage|Chiffrement} {militaire|bancaire|extrême}, {sans registres|zéro métadonnées|aucune trace}, {compatible|fonctionne|disponible} dans {150+|plus de 150} pays.",
      "Découvrez les cartes SIM les plus {sécurisées|protégées|privées} du marché. Communications {anonymes|privées|secrètes} avec {technologie|cryptage|sécurité} {avancée|militaire|bancaire}."
    ],
    keywords: [
      "SIM {cryptée|sécurisée|privée}, carte SIM {anonyme|privée|secrète}, communications {sécurisées|cryptées|privées}, SIM {anti-surveillance|ultra privée|complètement sécurisée}"
    ]
  }
};

// 🎯 FUNCIÓN PROCESADORA DE SPINTAX (igual que Armadillo)
function processSpintax(text: string): string {
  return text.replace(/\{([^}]+)\}/g, (match, options) => {
    const choices = options.split('|').map((choice: string) => choice.trim());
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  });
}

// 🎯 FUNCIÓN OBTENER CONTENIDO SPINTAX
function getEncryptedSimContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = encryptedSimSpintax[locale as keyof typeof encryptedSimSpintax] || encryptedSimSpintax.es;
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
export async function generateMetadata({ params: { locale } }: EncryptedSimPageProps): Promise<Metadata> {
  const title = getEncryptedSimContent(locale, 'titles');
  const description = getEncryptedSimContent(locale, 'descriptions');
  const keywords = getEncryptedSimContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/encrypted-sim` : `${baseUrl}/${locale}/encrypted-sim`;

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
          url: `${baseUrl}/images/encrypted-sim/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/encrypted-sim/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/encrypted-sim`,
        'en': `${baseUrl}/en/encrypted-sim`,
        'fr': `${baseUrl}/fr/encrypted-sim`,
        'it': `${baseUrl}/it/encrypted-sim`,
        'pt': `${baseUrl}/pt/encrypted-sim`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Encrypted SIM',
      'product-category': 'Secure Communication Hardware',
      'product-price-from': '50 USD',
      'product-price-professional': '150 USD',
      'product-price-enterprise': '300 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Express Worldwide',
      'countries-supported': '150+',
      'activation-time': 'Immediate'
    }
  };
}

// 🎯 STRUCTURED DATA PARA ENCRYPTED SIM
function getEncryptedSimStructuredData(locale: string) {
  const description = getEncryptedSimContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'SIM Encriptada - Comunicaciones Seguras',
    en: 'Encrypted SIM - Secure Communications',
    fr: 'SIM Cryptée - Communications Sécurisées',
    it: 'SIM Crittografata - Comunicazioni Sicure',
    pt: 'SIM Criptografada - Comunicações Seguras'
  };

  const features = {
    es: [
      "Cifrado militar extremo a extremo",
      "Comunicaciones completamente anónimas",
      "Sin registros ni metadatos",
      "Compatible con cualquier dispositivo",
      "Cobertura en 150+ países",
      "Activación inmediata"
    ],
    en: [
      "Military-grade end-to-end encryption",
      "Completely anonymous communications",
      "No logs or metadata",
      "Compatible with any device",
      "Coverage in 150+ countries",
      "Immediate activation"
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
        "url": locale === 'es' ? `${baseUrl}/encrypted-sim` : `${baseUrl}/${locale}/encrypted-sim`,
        "category": "Secure Communication Hardware",
        "brand": {
          "@type": "Brand",
          "name": "Encriptados"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": locale === 'es' ? "SIM Básica" : "Basic SIM",
            "price": "50",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ]
          },
          {
            "@type": "Offer",
            "name": locale === 'es' ? "SIM Profesional" : "Professional SIM",
            "price": "150",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ]
          },
          {
            "@type": "Offer",
            "name": locale === 'es' ? "SIM Enterprise" : "Enterprise SIM",
            "price": "300",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ]
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
          "name": "Encriptados"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Encryption Level",
            "value": "Military Grade"
          },
          {
            "@type": "PropertyValue", 
            "name": "Countries Supported",
            "value": "150+"
          },
          {
            "@type": "PropertyValue",
            "name": "Activation Time",
            "value": "Immediate"
          },
          {
            "@type": "PropertyValue",
            "name": "Privacy Level",
            "value": "Complete Anonymity"
          }
        ],
        "featureList": productFeatures
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es una SIM encriptada?" : "What is an encrypted SIM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Una SIM encriptada es una tarjeta SIM especial que utiliza cifrado militar para proteger todas las comunicaciones, garantizando total anonimato y privacidad en llamadas y mensajes."
                : "An encrypted SIM is a special SIM card that uses military-grade encryption to protect all communications, ensuring complete anonymity and privacy for calls and messages."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿En qué países funciona?" : "In which countries does it work?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "Nuestras SIM encriptadas funcionan en más de 150 países en todo el mundo con la misma seguridad y privacidad garantizada."
                : "Our encrypted SIMs work in over 150 countries worldwide with the same guaranteed security and privacy."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Es compatible con mi teléfono?" : "Is it compatible with my phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, nuestras SIM encriptadas son compatibles con cualquier dispositivo móvil que soporte GSM/LTE, incluyendo iPhone, Android y smartphones de cualquier marca."
                : "Yes, our encrypted SIMs are compatible with any mobile device that supports GSM/LTE, including iPhone, Android, and smartphones of any brand."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL SIN CAMBIOS EN TU LÓGICA
export default async function EncryptedSimPage({ params: { locale } }: EncryptedSimPageProps) {
  const structuredData = getEncryptedSimStructuredData(locale);

  return (
    <>
      {/* 🎯 STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      {/* 🎯 PRELOADS PARA RENDIMIENTO */}
      <link rel="preload" href="/images/encrypted-sim/hero-bg.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL - SIN CAMBIOS */}
      <EncryptedSimClient />
    </>
  );
}