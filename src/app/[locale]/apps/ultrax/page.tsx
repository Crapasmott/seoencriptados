// src/app/[locale]/apps/ultrax/page.tsx - CON SEO Y SPINTAX
import React from "react";
import { Metadata } from 'next';
import UltraxClient from "./UltraxClient";

interface UltraxPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA ULTRAX
const ultraxSpintax = {
  es: {
    titles: [
      "Ultrax 2025 - {Comunicación|Mensajería|Chat} {Ultra|Súper|Mega} {Segura|Encriptada|Protegida} | {Tecnología|Cifrado|Seguridad} {Extrema|Máxima|Ultra}",
      "Ultrax {Ultra|Súper|Mega} - {Mensajería|Comunicación|Chat} {Instantánea|Privada|Segura} con {Pago|Compra} {Bitcoin|Criptomonedas|Crypto}",
      "{Mensajería|Comunicación|Chat} Ultrax - {Aplicación|Plataforma|Sistema} {Ultra Segura|Súper Protegida|Mega Encriptada} con {Tecnología|Cifrado|Seguridad} {Extrema|Avanzada|Superior}",
      "Ultrax {Extreme|Ultra|Mega} - {Comunicación|Mensajería|Chat} con {Máxima|Extrema|Ultra} {Seguridad|Protección|Privacidad}",
      "🚀 Ultrax - {Mensajería|Chat} {Ultra|Súper|Mega} {Segura|Avanzada|Potente} | {Acepta|Soporta|Compatible} {Bitcoin|Criptomonedas|Crypto}",
      "Ultrax vs {WhatsApp|Telegram|Signal} - {Mensajería|Chat} {Ultra Segura|Súper Protegida|Mega Encriptada}",
      "⚡ {Comprar|Adquirir|Obtener} Ultrax con {Bitcoin|Criptomonedas|Crypto} - {Mensajería|Chat} {Ultra|Súper|Mega} {Potente|Segura|Avanzada}",
      "Ultrax {2025|Ultra|Extreme} - {Máxima|Extrema|Ultra} {Potencia|Seguridad|Protección} con {Pago|Compra} {Bitcoin|Criptomonedas|Crypto}"
    ],
    descriptions: [
      "Ultrax: La {aplicación|plataforma|solución} de {comunicación|mensajería|chat} {ultra|súper|mega} {segura|potente|avanzada} que {lleva|eleva|maximiza} la {seguridad|protección|privacidad} al {límite|extremo|máximo}. {Tecnología|Cifrado|Seguridad} {ultra avanzada|súper potente|mega protegida}, {rendimiento|velocidad|eficiencia} {extremo|máximo|superior}. {Acepta|Soporta|Compatible con} {pagos|compras|adquisición} con {Bitcoin|criptomonedas|crypto}.",
      "Descubre Ultrax, la {aplicación|plataforma|solución} de {mensajería|comunicación|chat} más {potente|avanzada|extrema} {jamás creada|del mercado|disponible}. {Tecnología|Cifrado|Seguridad} {ultra avanzada|súper potente|mega desarrollada}, {rendimiento|velocidad|capacidad} {extremo|máximo|superior}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {disponible|aceptado|soportado}.",
      "{Mensajería|Comunicación|Chat} {ultra|súper|mega} {segura|potente|avanzada} con Ultrax. {Aplicación|Plataforma|Sistema} {ultra desarrollada|súper protegida|mega optimizada}, {tecnología|cifrado|seguridad} de {última generación|vanguardia|punta}, {potencia|capacidad|rendimiento} {extremo|máximo|superior}. {Ideal|Perfecta|Diseñada} para usuarios que {demandan|requieren|necesitan} {máxima|extrema|ultra} {potencia|seguridad|capacidad}.",
      "Ultrax ofrece {comunicación|mensajería|chat} {ultra|súper|mega} {segura|potente|avanzada} con {tecnología|cifrado|sistemas} {ultra desarrollada|súper avanzada|mega optimizada} y {capacidades|funcionalidades|características} {extremas|máximas|superiores}. {Rendimiento|Velocidad|Potencia} {ultra optimizado|súper rápido|mega eficiente}, {acepta|soporta|compatible con} {Bitcoin|criptomonedas|crypto}.",
      "⚡ {Experimenta|Vive|Disfruta} la {comunicación|mensajería|chat} más {potente|avanzada|extrema} con Ultrax - La {aplicación|plataforma} {ultra desarrollada|súper optimizada|mega potente}. {Tecnología|Cifrado|Sistemas} {ultra avanzada|súper potente|mega desarrollada}, {capacidades|funcionalidades|características} {extremas|máximas|superiores}, {pago|compra} con {Bitcoin|criptomonedas|crypto}."
    ],
    keywords: [
      "Ultrax {mensajería|comunicación|chat} {ultra|súper|mega} {segura|potente|avanzada}, {aplicación|plataforma} {mensajería|chat} {ultra desarrollada|súper optimizada}, Ultrax {tecnología|cifrado} {ultra avanzada|súper potente}, Ultrax {Bitcoin|criptomonedas|crypto} {pago|compra|adquisición}",
      "{mensajería|comunicación} {ultra|súper|mega} {segura|potente|avanzada}, Ultrax vs {WhatsApp|Telegram|Signal} {potencia|seguridad|capacidad}, {aplicación|plataforma} {mensajería|chat} {ultra|súper|mega} {potente|desarrollada}, Ultrax {comprar|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "Ultrax {aplicación|plataforma} {ultra|súper} {potente|segura} {España|México|Argentina|Colombia}, {mensajería|chat} {ultra desarrollada|súper optimizada}, {comunicación|chat} {mega|ultra|súper} {potente|avanzada}, Ultrax {tecnología|sistemas} {ultra|súper|mega} {avanzada|potente}"
    ]
  },
  en: {
    titles: [
      "Ultrax 2025 - {Ultra|Super|Mega} {Secure|Encrypted|Protected} {Communication|Messaging|Chat} | {Extreme|Maximum|Ultra} {Technology|Encryption|Security}",
      "Ultrax {Ultra|Super|Mega} - {Instant|Private|Secure} {Messaging|Communication|Chat} with {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}",
      "Ultrax {Messaging|Communication|Chat} - {Ultra Secure|Super Protected|Mega Encrypted} {Application|Platform|System} with {Extreme|Advanced|Superior} {Technology|Encryption|Security}",
      "Ultrax {Extreme|Ultra|Mega} - {Communication|Messaging|Chat} with {Maximum|Extreme|Ultra} {Security|Protection|Privacy}",
      "🚀 Ultrax - {Ultra|Super|Mega} {Secure|Advanced|Powerful} {Messaging|Chat} | {Accepts|Supports|Compatible} {Bitcoin|Cryptocurrency|Crypto}",
      "Ultrax vs {WhatsApp|Telegram|Signal} - {Ultra Secure|Super Protected|Mega Encrypted} {Messaging|Chat}",
      "⚡ {Buy|Purchase|Get} Ultrax with {Bitcoin|Cryptocurrency|Crypto} - {Ultra|Super|Mega} {Powerful|Secure|Advanced} {Messaging|Chat}",
      "Ultrax {2025|Ultra|Extreme} - {Maximum|Extreme|Ultra} {Power|Security|Protection} with {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}"
    ],
    descriptions: [
      "Ultrax: The {ultra|super|mega} {secure|powerful|advanced} {communication|messaging|chat} {application|platform|solution} that {takes|elevates|maximizes} {security|protection|privacy} to the {limit|extreme|maximum}. {Ultra advanced|Super powerful|Mega protected} {technology|encryption|security}, {extreme|maximum|superior} {performance|speed|efficiency}. {Accepts|Supports|Compatible with} {Bitcoin|cryptocurrency|crypto} {payments|purchases}.",
      "Discover Ultrax, the most {powerful|advanced|extreme} {messaging|communication|chat} {application|platform|solution} {ever created|on the market|available}. {Ultra advanced|Super powerful|Mega developed} {technology|encryption|security}, {extreme|maximum|superior} {performance|speed|capacity}. {Bitcoin|Cryptocurrency|Crypto} {payment|purchase} {available|accepted|supported}.",
      "{Ultra|Super|Mega} {secure|powerful|advanced} {messaging|communication|chat} with Ultrax. {Ultra developed|Super protected|Mega optimized} {application|platform|system}, {cutting-edge|state-of-the-art|advanced} {technology|encryption|security}, {extreme|maximum|superior} {power|capacity|performance}. {Ideal|Perfect|Designed} for users who {demand|require|need} {maximum|extreme|ultra} {power|security|capacity}.",
      "Ultrax offers {ultra|super|mega} {secure|powerful|advanced} {communication|messaging|chat} with {ultra developed|super advanced|mega optimized} {technology|encryption|systems} and {extreme|maximum|superior} {capabilities|functionalities|features}. {Ultra optimized|Super fast|Mega efficient} {performance|speed|power}, {accepts|supports|compatible with} {Bitcoin|cryptocurrency|crypto}.",
      "⚡ {Experience|Live|Enjoy} the most {powerful|advanced|extreme} {communication|messaging|chat} with Ultrax - The {ultra developed|super optimized|mega powerful} {application|platform}. {Ultra advanced|Super powerful|Mega developed} {technology|encryption|systems}, {extreme|maximum|superior} {capabilities|functionalities|features}, {Bitcoin|cryptocurrency|crypto} {payment|purchase}."
    ],
    keywords: [
      "Ultrax {ultra|super|mega} {secure|powerful|advanced} {messaging|communication|chat}, {ultra developed|super optimized} {messaging|chat} {application|platform}, Ultrax {ultra advanced|super powerful} {technology|encryption}, Ultrax {Bitcoin|cryptocurrency|crypto} {payment|purchase}",
      "{ultra|super|mega} {secure|powerful|advanced} {messaging|communication}, Ultrax vs {WhatsApp|Telegram|Signal} {power|security|capacity}, {ultra|super|mega} {powerful|developed} {messaging|chat} {application|platform}, Ultrax {buy|purchase} with {Bitcoin|cryptocurrency|crypto}",
      "Ultrax {ultra|super} {powerful|secure} {application|platform} {USA|UK|Canada|Australia}, {ultra developed|super optimized} {messaging|chat}, {mega|ultra|super} {powerful|advanced} {communication|chat}, Ultrax {ultra|super|mega} {advanced|powerful} {technology|systems}"
    ]
  },
  fr: {
    titles: [
      "Ultrax 2025 - Communication {Ultra|Super|Méga} {Sécurisée|Chiffrée|Protégée} | {Technologie|Chiffrement|Sécurité} {Extrême|Maximale|Ultra}",
      "Ultrax {Ultra|Super|Méga} - Messagerie {Instantanée|Privée|Sécurisée} avec {Paiement|Achat} {Bitcoin|Cryptomonnaies|Crypto}",
      "Messagerie Ultrax - {Application|Plateforme|Système} {Ultra Sécurisée|Super Protégée|Méga Chiffrée} avec {Technologie|Chiffrement|Sécurité} {Extrême|Avancée|Supérieure}",
      "Ultrax {Extrême|Ultra|Méga} - Communication avec {Sécurité|Protection|Confidentialité} {Maximale|Extrême|Ultra}",
      "🚀 Ultrax - Messagerie {Ultra|Super|Méga} {Sécurisée|Avancée|Puissante} | {Accepte|Supporte|Compatible} {Bitcoin|Cryptomonnaies|Crypto}"
    ],
    descriptions: [
      "Ultrax: L'application de communication {ultra|super|méga} {sécurisée|puissante|avancée} qui {porte|élève|maximise} la {sécurité|protection|confidentialité} à l'{extrême|limite|maximum}. {Technologie|Chiffrement|Sécurité} {ultra avancée|super puissante|méga protégée}, {performance|vitesse|efficacité} {extrême|maximale|supérieure}.",
      "Découvrez Ultrax, l'application de messagerie la plus {puissante|avancée|extrême} {jamais créée|du marché|disponible}. {Technologie|Chiffrement|Sécurité} {ultra avancée|super puissante|méga développée}, {performance|vitesse|capacité} {extrême|maximale|supérieure}."
    ],
    keywords: [
      "Ultrax messagerie {ultra|super|méga} {sécurisée|puissante|avancée}, {application|plateforme} messagerie {ultra développée|super optimisée}, Ultrax {technologie|chiffrement} {ultra avancée|super puissante}, Ultrax {Bitcoin|cryptomonnaies|crypto} {paiement|achat}"
    ]
  },
  it: {
    titles: [
      "Ultrax 2025 - Comunicazione {Ultra|Super|Mega} {Sicura|Crittografata|Protetta} | {Tecnologia|Crittografia|Sicurezza} {Estrema|Massima|Ultra}",
      "Ultrax {Ultra|Super|Mega} - Messaggistica {Istantanea|Privata|Sicura} con {Pagamento|Acquisto} {Bitcoin|Criptovalute|Crypto}",
      "Messaggistica Ultrax - {Applicazione|Piattaforma|Sistema} {Ultra Sicura|Super Protetta|Mega Crittografata} con {Tecnologia|Crittografia|Sicurezza} {Estrema|Avanzata|Superiore}",
      "Ultrax {Estremo|Ultra|Mega} - Comunicazione con {Sicurezza|Protezione|Privacy} {Massima|Estrema|Ultra}",
      "🚀 Ultrax - Messaggistica {Ultra|Super|Mega} {Sicura|Avanzata|Potente} | {Accetta|Supporta|Compatibile} {Bitcoin|Criptovalute|Crypto}"
    ],
    descriptions: [
      "Ultrax: L'applicazione di comunicazione {ultra|super|mega} {sicura|potente|avanzata} che {porta|eleva|massimizza} la {sicurezza|protezione|privacy} al {limite|estremo|massimo}. {Tecnologia|Crittografia|Sicurezza} {ultra avanzata|super potente|mega protetta}, {prestazioni|velocità|efficienza} {estreme|massime|superiori}.",
      "Scopri Ultrax, l'applicazione di messaggistica più {potente|avanzata|estrema} {mai creata|del mercato|disponibile}. {Tecnologia|Crittografia|Sicurezza} {ultra avanzata|super potente|mega sviluppata}, {prestazioni|velocità|capacità} {estreme|massime|superiori}."
    ],
    keywords: [
      "Ultrax messaggistica {ultra|super|mega} {sicura|potente|avanzata}, {applicazione|piattaforma} messaggistica {ultra sviluppata|super ottimizzata}, Ultrax {tecnologia|crittografia} {ultra avanzata|super potente}, Ultrax {Bitcoin|criptovalute|crypto} {pagamento|acquisto}"
    ]
  },
  pt: {
    titles: [
      "Ultrax 2025 - Comunicação {Ultra|Super|Mega} {Segura|Encriptada|Protegida} | {Tecnologia|Encriptação|Segurança} {Extrema|Máxima|Ultra}",
      "Ultrax {Ultra|Super|Mega} - Mensagens {Instantâneas|Privadas|Seguras} com {Pagamento|Compra} {Bitcoin|Criptomoedas|Crypto}",
      "Mensagens Ultrax - {Aplicação|Plataforma|Sistema} {Ultra Segura|Super Protegida|Mega Encriptada} com {Tecnologia|Encriptação|Segurança} {Extrema|Avançada|Superior}",
      "Ultrax {Extremo|Ultra|Mega} - Comunicação com {Segurança|Proteção|Privacidade} {Máxima|Extrema|Ultra}",
      "🚀 Ultrax - Mensagens {Ultra|Super|Mega} {Seguras|Avançadas|Potentes} | {Aceita|Suporta|Compatível} {Bitcoin|Criptomoedas|Crypto}"
    ],
    descriptions: [
      "Ultrax: A aplicação de comunicação {ultra|super|mega} {segura|potente|avançada} que {leva|eleva|maximiza} a {segurança|proteção|privacidade} ao {limite|extremo|máximo}. {Tecnologia|Encriptação|Segurança} {ultra avançada|super potente|mega protegida}, {desempenho|velocidade|eficiência} {extremo|máximo|superior}.",
      "Descubra Ultrax, a aplicação de mensagens mais {potente|avançada|extrema} {jamais criada|do mercado|disponível}. {Tecnologia|Encriptação|Segurança} {ultra avançada|super potente|mega desenvolvida}, {desempenho|velocidade|capacidade} {extremo|máximo|superior}."
    ],
    keywords: [
      "Ultrax mensagens {ultra|super|mega} {seguras|potentes|avançadas}, {aplicação|plataforma} mensagens {ultra desenvolvida|super otimizada}, Ultrax {tecnologia|encriptação} {ultra avançada|super potente}, Ultrax {Bitcoin|criptomoedas|crypto} {pagamento|compra}"
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
function getUltraxContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = ultraxSpintax[locale as keyof typeof ultraxSpintax] || ultraxSpintax.es;
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
export async function generateMetadata({ params: { locale } }: UltraxPageProps): Promise<Metadata> {
  const title = getUltraxContent(locale, 'titles');
  const description = getUltraxContent(locale, 'descriptions');
  const keywords = getUltraxContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/ultrax` : `${baseUrl}/${locale}/apps/ultrax`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Ultra Powerful Communication Application',
    
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
          url: `${baseUrl}/images/apps/ultrax/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/ultrax/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/ultrax`,
        'en': `${baseUrl}/en/apps/ultrax`,
        'fr': `${baseUrl}/fr/apps/ultrax`,
        'it': `${baseUrl}/it/apps/ultrax`,
        'pt': `${baseUrl}/pt/apps/ultrax`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Ultrax',
      'product-category': 'Ultra Powerful Communication Application',
      'product-type': 'Ultra Performance Messaging App',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Ethereum, Litecoin, Bank Transfer',
      'crypto-payments': 'Bitcoin, Ethereum, Litecoin, Monero, USDT, USDC, BNB, ADA',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'target-audience': 'Power Users, Performance Enthusiasts, Advanced Professionals',
      'supported-platforms': 'iOS, Android, Windows, macOS, Linux, Web',
      'encryption-type': 'Ultra Advanced Encryption',
      'privacy-level': 'Maximum Privacy with Ultra Performance',
      'security-level': 'Ultra Security Standards',
      'performance-level': 'Ultra High Performance',
      'use-cases': 'Ultra Performance Communication, Maximum Power Messaging, Extreme Efficiency',
      'competitors': 'WhatsApp, Telegram, Signal, Wickr, Element',
      'features': 'Ultra Encryption, Maximum Performance, Extreme Speed, Crypto Payments',
      'performance-features': 'Ultra Speed, Maximum Efficiency, Extreme Optimization, Superior Performance',
      'rating': '4.9/5',
      'review-count': '3421',
      'app-version': '3.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'developer': 'Ultrax Technologies',
      'developer-website': baseUrl,
      'support-email': 'support@encriptados.io',
      'performance-focus': 'Ultra Performance, Maximum Speed, Extreme Efficiency',
      'target-market': 'Power Users, Performance Segment',
      'optimization-level': 'Ultra Optimized',
    }
  };
}

// 🎯 STRUCTURED DATA PARA ULTRAX
function getUltraxStructuredData(locale: string) {
  const description = getUltraxContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Ultrax - Comunicación Ultra Potente',
    en: 'Ultrax - Ultra Powerful Communication',
    fr: 'Ultrax - Communication Ultra Puissante',
    it: 'Ultrax - Comunicazione Ultra Potente',
    pt: 'Ultrax - Comunicação Ultra Potente'
  };

  const features = {
    es: [
      "Tecnología ultra avanzada",
      "Rendimiento extremo optimizado",
      "Velocidad ultra rápida",
      "Capacidad máxima de procesamiento",
      "Pagos con Bitcoin y criptomonedas",
      "Eficiencia ultra superior",
      "Funcionalidades extremas",
      "Soporte ultra completo",
      "Optimización ultra avanzada",
      "Potencia máxima garantizada"
    ],
    en: [
      "Ultra advanced technology",
      "Extreme optimized performance",
      "Ultra fast speed",
      "Maximum processing capacity",
      "Bitcoin and cryptocurrency payments",
      "Ultra superior efficiency",
      "Extreme functionalities",
      "Ultra complete support",
      "Ultra advanced optimization",
      "Maximum power guaranteed"
    ],
    fr: [
      "Technologie ultra avancée",
      "Performance extrême optimisée",
      "Vitesse ultra rapide",
      "Capacité maximale de traitement",
      "Paiements Bitcoin et cryptomonnaies",
      "Efficacité ultra supérieure",
      "Fonctionnalités extrêmes",
      "Support ultra complet",
      "Optimisation ultra avancée",
      "Puissance maximale garantie"
    ],
    it: [
      "Tecnologia ultra avanzata",
      "Prestazioni estreme ottimizzate",
      "Velocità ultra veloce",
      "Capacità massima di elaborazione",
      "Pagamenti Bitcoin e criptovalute",
      "Efficienza ultra superiore",
      "Funzionalità estreme",
      "Supporto ultra completo",
      "Ottimizzazione ultra avanzata",
      "Potenza massima garantita"
    ],
    pt: [
      "Tecnologia ultra avançada",
      "Desempenho extremo otimizado",
      "Velocidade ultra rápida",
      "Capacidade máxima de processamento",
      "Pagamentos Bitcoin e criptomoedas",
      "Eficiência ultra superior",
      "Funcionalidades extremas",
      "Suporte ultra completo",
      "Otimização ultra avançada",
      "Potência máxima garantida"
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
        "url": locale === 'es' ? `${baseUrl}/apps/ultrax` : `${baseUrl}/${locale}/apps/ultrax`,
        "applicationCategory": "CommunicationApplication",
        "applicationSubCategory": "Ultra Performance Communication",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": {
          "@type": "Offer",
          "price": "149.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "3421",
          "bestRating": "5"
        },
        "featureList": productFeatures,
        "author": {
          "@type": "Organization",
          "name": "Ultrax Technologies"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué hace ultra potente a Ultrax?" : "What makes Ultrax ultra powerful?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Ultrax utiliza tecnología ultra avanzada con optimización extrema para ofrecer rendimiento máximo. Combina velocidad ultra rápida, capacidad de procesamiento extrema y eficiencia superior para usuarios que demandan máxima potencia en comunicación."
                : "Ultrax uses ultra advanced technology with extreme optimization to deliver maximum performance. It combines ultra fast speed, extreme processing capacity, and superior efficiency for users who demand maximum power in communication."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Ultrax acepta pagos con criptomonedas?" : "Does Ultrax accept cryptocurrency payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, Ultrax acepta múltiples criptomonedas incluyendo Bitcoin, Ethereum, Litecoin, Monero, USDT, USDC, BNB y ADA. Esto proporciona máxima flexibilidad de pago para usuarios que valoran rendimiento extremo y privacidad."
                : "Yes, Ultrax accepts multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, Monero, USDT, USDC, BNB, and ADA. This provides maximum payment flexibility for users who value extreme performance and privacy."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function UltraxPage({ params: { locale } }: UltraxPageProps) {
  const structuredData = getUltraxStructuredData(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      <link rel="preload" href="/images/apps/ultrax/banner.png" as="image" />
      <link rel="preload" href="/images/apps/ultrax/hero-ultra.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getUltraxContent(locale, 'titles')} />
        <meta itemProp="description" content={getUltraxContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="CommunicationApplication" />
        <meta itemProp="applicationSubCategory" content="Ultra Performance Communication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="149.99" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.9" />
          <meta itemProp="reviewCount" content="3421" />
          <meta itemProp="bestRating" content="5" />
        </div>
        <div itemProp="author" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Ultrax Technologies" />
        </div>
      </div>

      <UltraxClient />
    </>
  );
}