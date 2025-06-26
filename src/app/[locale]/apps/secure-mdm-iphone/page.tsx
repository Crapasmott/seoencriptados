// 🎯 STRUCTURED DATA PARA SECURE
function getSecureStructuredData(locale: string) {
  const description = getSecureContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Secure - Aplicación Ultra Segura',
    en: 'Secure - Ultra Secure Application',
    fr: 'Secure - Application Ultra Sécurisée',
    it: 'Secure - Applicazione Ultra Sicura',
    pt: 'Secure - Aplicação Ultra Segura'
  };

  const features = {
    es: [
      "Cifrado de grado militar",
      "Seguridad ultra avanzada",
      "Protocolos inquebrantables",
      "Máxima privacidad garantizada",
      "Pago con Bitcoin y criptomonedas",
      "Anonimato completo",
      "Tecnología ultra segura",
      "Compatible múltiples plataformas",
      "Auditoría independiente",
      "Certificaciones de seguridad"
    ],
    en: [
      "Military-grade encryption",
      "Ultra advanced security",
      "Unbreakable protocols",
      "Maximum privacy guaranteed",
      "Bitcoin and cryptocurrency payments",
      "Complete anonymity",
      "Ultra secure technology",
      "Multi-platform compatibility",
      "Independent audit",
      "Security certifications"
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
        "url": locale === 'es' ? `${baseUrl}/apps/secure` : `${baseUrl}/${locale}/apps/secure`,
        "applicationCategory": "CommunicationApplication",
        "applicationSubCategory": "Ultra Secure Communication",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": {
          "@type": "Offer",
          "price": "99.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": new Date().toISOString(),
          "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
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
          "reviewCount": "3247",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Secure Technologies"
        },
        "publisher": {
          "@type": "Organization", 
          "name": "Encriptados"
        },
        "featureList": productFeatures,
        "screenshot": `${baseUrl}/images/apps/secure/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/secure`,
        "installUrl": `${baseUrl}/apps/secure`,
        "softwareVersion": "3.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "targetAudience": {
          "@type": "Audience",
          "audienceType": "Security-Conscious Users, Professionals, High-Risk Individuals"
        }
      },
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "Secure"
        },
        "category": locale === 'es' ? "Aplicaciones de Comunicación Ultra Segura" : "Ultra Secure Communication Applications",
        "offers": {
          "@type": "Offer",
          "price": "99.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Encriptados"
          }
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Security Level",
            "value": "Ultra Secure - Military Grade"
          },
          {
            "@type": "PropertyValue", 
            "name": "Encryption Type",
            "value": "Military-Grade Encryption"
          },
          {
            "@type": "PropertyValue",
            "name": "Privacy Level",
            "value": "Maximum Privacy and Complete Anonymity"
          },
          {
            "@type": "PropertyValue",
            "name": "Crypto Payments",
            "value": "Bitcoin, Ethereum, Litecoin, Monero"
          },
          {
            "@type": "PropertyValue",
            "name": "Audit Status",
            "value": "Independently Audited"
          }
        ]
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué hace ultra segura a la aplicación Secure?" : "What makes the Secure application ultra secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Secure utiliza cifrado de grado militar, protocolos inquebrantables y tecnología ultra avanzada. Ha sido auditada independientemente y cuenta con certificaciones de seguridad de nivel gubernamental y bancario."
                : "Secure uses military-grade encryption, unbreakable protocols, and ultra-advanced technology. It has been independently audited and holds government and banking-level security certifications."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Puedo pagar Secure con criptomonedas?" : "Can I pay for Secure with cryptocurrencies?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "Sí, Secure acepta múltiples criptomonedas incluyendo Bitcoin, Ethereum, Litecoin, Monero, Zcash y Dash. Esto garantiza anonimato completo en la compra, alineándose con los principios de máxima seguridad y privacidad."
                : "Yes, Secure accepts multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, Monero, Zcash, and Dash. This ensures complete anonymity in purchase, aligning with maximum security and privacy principles."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Para quién está diseñada Secure?" : "Who is Secure designed for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Secure está diseñada para usuarios que requieren máxima seguridad: profesionales de alto riesgo, activistas, periodistas, ejecutivos, y cualquier persona que valore la seguridad ultra avanzada y el anonimato completo."
                : "Secure is designed for users who require maximum security: high-risk professionals, activists, journalists, executives, and anyone who values ultra-advanced security and complete anonymity."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué diferencia a Secure de otras aplicaciones seguras?" : "What differentiates Secure from other secure applications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Secure ofrece el más alto nivel de seguridad disponible: cifrado militar, protocolos inquebrantables, auditoría independiente, certificaciones gubernamentales, y acepta pagos con múltiples criptomonedas para máximo anonimato."
                : "Secure offers the highest level of security available: military encryption, unbreakable protocols, independent audit, government certifications, and accepts payments with multiple cryptocurrencies for maximum anonymity."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Encriptados",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-ENCRYPT",
          "contactType": "customer service",
          "availableLanguage": ["Spanish", "English", "French", "Italian", "Portuguese"]
        },
        "sameAs": [
          "https://twitter.com/encriptados",
          "https://facebook.com/encriptados",
          "https://linkedin.com/company/encriptados"
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function SecurePage({ params: { locale } }: SecurePageProps) {
  const structuredData = getSecureStructuredData(locale);

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
      <link rel="preload" href="/images/apps/secure/banner.png" as="image" />
      <link rel="preload" href="/images/apps/secure/hero-image.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getSecureContent(locale, 'titles')} />
        <meta itemProp="description" content={getSecureContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="CommunicationApplication" />
        <meta itemProp="applicationSubCategory" content="Ultra Secure Communication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="99.99" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.9" />
          <meta itemProp="reviewCount" content="3247" />
          <meta itemProp="bestRating" content="5" />
        </div>
        <div itemProp="author" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Secure Technologies" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <SecureClient />
    </>
  );
}// src/app/[locale]/apps/secure/page.tsx - CON SEO Y SPINTAX
import React from "react";
import { Metadata } from 'next';
import SecureClient from "./SecureClient";

interface SecurePageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA SECURE
const secureSpintax = {
  es: {
    titles: [
      "Secure 2025 - {Aplicación|Plataforma|Sistema} {Ultra Segura|Completamente Protegida|Totalmente Blindada} | {Máxima|Extrema|Total} {Seguridad|Protección|Privacidad}",
      "Secure {App|Aplicación|Plataforma} - {Comunicación|Mensajería|Chat} {Ultra Segura|Completamente Encriptada|Totalmente Protegida} con {Bitcoin|Criptomonedas|Crypto}",
      "{Aplicación|Plataforma|Sistema} Secure - {Seguridad|Protección|Privacidad} {Máxima|Extrema|Total} con {Cifrado|Encriptación} {Militar|Bancario|Avanzado}",
      "Secure {Encriptada|Segura|Protegida} - {Aplicación|Plataforma|Sistema} de {Comunicación|Mensajería|Chat} {Ultra Segura|Completamente Blindada|Totalmente Encriptada}",
      "🔒 Secure - {Aplicación|Plataforma} {Ultra Segura|Completamente Protegida} | {Acepta|Soporta|Compatible} {Bitcoin|Criptomonedas|Crypto}",
      "Secure vs {WhatsApp|Telegram|Signal} - {Aplicación|Plataforma} {Ultra Segura|Completamente Encriptada|Totalmente Protegida}",
      "⚡ {Comprar|Adquirir|Obtener} Secure con {Bitcoin|Criptomonedas|Crypto} - {Aplicación|Plataforma} {Ultra Segura|Completamente Protegida}",
      "Secure {2025|Premium|Pro} - {Máxima|Extrema|Total} {Seguridad|Protección|Privacidad} con {Pago|Compra} {Bitcoin|Criptomonedas|Crypto}"
    ],
    descriptions: [
      "Secure: La {aplicación|plataforma|sistema} {ultra segura|completamente protegida|totalmente blindada} que {garantiza|ofrece|proporciona} {máxima|extrema|total} {seguridad|protección|privacidad} en todas tus {comunicaciones|conversaciones|actividades}. {Cifrado|Encriptación} {militar|bancario|avanzado}, {protocolos|sistemas|algoritmos} de {seguridad|protección|privacidad} {inquebrantables|rigurosos|estrictos}. {Acepta|Soporta|Compatible con} {pagos|compras|adquisición} con {Bitcoin|criptomonedas|crypto}.",
      "Descubre Secure, la {aplicación|plataforma|solución} más {segura|protegida|blindada} para {comunicación|mensajería|chat} {ultra segura|completamente protegida|totalmente encriptada}. {Tecnología|Cifrado|Encriptación} {avanzada|militar|bancaria}, {máxima|extrema|total} {privacidad|seguridad|protección}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {disponible|aceptado|soportado}.",
      "{Aplicación|Plataforma|Sistema} Secure - {Comunicación|Mensajería|Chat} {ultra segura|completamente protegida|totalmente blindada} con {tecnología|cifrado|encriptación} {avanzada|militar|bancaria}. {Máxima|Extrema|Total} {seguridad|protección|privacidad}, {protocolos|sistemas|algoritmos} {inquebrantables|rigurosos|estrictos}. {Ideal|Perfecta|Diseñada} para usuarios que {requieren|necesitan|demandan} {máxima|extrema|total} {seguridad|protección|privacidad}.",
      "Secure ofrece {comunicación|mensajería|chat} {ultra segura|completamente protegida|totalmente encriptada} con {tecnología|cifrado|encriptación} {avanzada|militar|bancaria} y {protocolos|sistemas|estándares} de {seguridad|protección|privacidad} {estrictos|rigurosos|inquebrantables}. {Acepta|Soporta|Compatible con} {Bitcoin|criptomonedas|crypto} para {máximo|extremo|total} {anonimato|privacidad|seguridad}.",
      "⚡ {Protege|Asegura|Blinda} tus {comunicaciones|conversaciones|actividades} con Secure - La {aplicación|plataforma} más {segura|protegida|blindada} {disponible|del mercado|existente}. {Cifrado|Encriptación} {militar|bancario|avanzado}, {tecnología|sistemas|protocolos} {ultra seguros|completamente protegidos|totalmente blindados}, {pago|compra} con {Bitcoin|criptomonedas|crypto}."
    ],
    keywords: [
      "Secure {aplicación|plataforma} {ultra segura|completamente protegida|totalmente blindada}, {comunicación|mensajería|chat} {ultra segura|completamente encriptada|totalmente protegida}, Secure {cifrado|encriptación} {militar|bancario|avanzado}, Secure {Bitcoin|criptomonedas|crypto} {pago|compra|adquisición}",
      "{aplicación|plataforma} {comunicación|mensajería} {ultra segura|completamente protegida}, Secure vs {WhatsApp|Telegram|Signal} {seguridad|protección|privacidad}, {máxima|extrema|total} {seguridad|protección|privacidad} {aplicación|plataforma}, Secure {comprar|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "Secure {aplicación|plataforma} {segura|protegida} {España|México|Argentina|Colombia}, {comunicación|mensajería} {ultra segura|completamente blindada}, {cifrado|encriptación} {militar|bancario} {aplicación|plataforma}, Secure {tecnología|sistemas} {ultra seguros|completamente protegidos}"
    ]
  },
  en: {
    titles: [
      "Secure 2025 - {Ultra Secure|Completely Protected|Totally Shielded} {Application|Platform|System} | {Maximum|Extreme|Total} {Security|Protection|Privacy}",
      "Secure {App|Application|Platform} - {Ultra Secure|Completely Encrypted|Totally Protected} {Communication|Messaging|Chat} with {Bitcoin|Cryptocurrency|Crypto}",
      "Secure {Application|Platform|System} - {Maximum|Extreme|Total} {Security|Protection|Privacy} with {Military|Banking|Advanced} {Encryption|Security}",
      "Secure {Encrypted|Secure|Protected} - {Ultra Secure|Completely Shielded|Totally Encrypted} {Communication|Messaging|Chat} {Application|Platform|System}",
      "🔒 Secure - {Ultra Secure|Completely Protected} {Application|Platform} | {Accepts|Supports|Compatible} {Bitcoin|Cryptocurrency|Crypto}",
      "Secure vs {WhatsApp|Telegram|Signal} - {Ultra Secure|Completely Encrypted|Totally Protected} {Application|Platform}",
      "⚡ {Buy|Purchase|Get} Secure with {Bitcoin|Cryptocurrency|Crypto} - {Ultra Secure|Completely Protected} {Application|Platform}",
      "Secure {2025|Premium|Pro} - {Maximum|Extreme|Total} {Security|Protection|Privacy} with {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}"
    ],
    descriptions: [
      "Secure: The {ultra secure|completely protected|totally shielded} {application|platform|system} that {guarantees|offers|provides} {maximum|extreme|total} {security|protection|privacy} in all your {communications|conversations|activities}. {Military|Banking|Advanced} {encryption|security}, {unbreakable|rigorous|strict} {security|protection|privacy} {protocols|systems|algorithms}. {Accepts|Supports|Compatible with} {Bitcoin|cryptocurrency|crypto} {payments|purchases}.",
      "Discover Secure, the most {secure|protected|shielded} {application|platform|solution} for {ultra secure|completely protected|totally encrypted} {communication|messaging|chat}. {Advanced|Military|Banking} {technology|encryption|security}, {maximum|extreme|total} {privacy|security|protection}. {Bitcoin|Cryptocurrency|Crypto} {payment|purchase} {available|accepted|supported}.",
      "Secure {Application|Platform|System} - {Ultra secure|Completely protected|Totally shielded} {communication|messaging|chat} with {advanced|military|banking} {technology|encryption|security}. {Maximum|Extreme|Total} {security|protection|privacy}, {unbreakable|rigorous|strict} {protocols|systems|algorithms}. {Ideal|Perfect|Designed} for users who {require|need|demand} {maximum|extreme|total} {security|protection|privacy}.",
      "Secure offers {ultra secure|completely protected|totally encrypted} {communication|messaging|chat} with {advanced|military|banking} {technology|encryption|security} and {strict|rigorous|unbreakable} {security|protection|privacy} {protocols|systems|standards}. {Accepts|Supports|Compatible with} {Bitcoin|cryptocurrency|crypto} for {maximum|extreme|total} {anonymity|privacy|security}.",
      "⚡ {Protect|Secure|Shield} your {communications|conversations|activities} with Secure - The most {secure|protected|shielded} {application|platform} {available|on the market|existing}. {Military|Banking|Advanced} {encryption|security}, {ultra secure|completely protected|totally shielded} {technology|systems|protocols}, {Bitcoin|cryptocurrency|crypto} {payment|purchase}."
    ],
    keywords: [
      "Secure {ultra secure|completely protected|totally shielded} {application|platform}, {ultra secure|completely encrypted|totally protected} {communication|messaging|chat}, Secure {military|banking|advanced} {encryption|security}, Secure {Bitcoin|cryptocurrency|crypto} {payment|purchase}",
      "{ultra secure|completely protected} {communication|messaging} {application|platform}, Secure vs {WhatsApp|Telegram|Signal} {security|protection|privacy}, {maximum|extreme|total} {security|protection|privacy} {application|platform}, Secure {buy|purchase} with {Bitcoin|cryptocurrency|crypto}",
      "Secure {secure|protected} {application|platform} {USA|UK|Canada|Australia}, {ultra secure|completely shielded} {communication|messaging}, {military|banking} {encryption|security} {application|platform}, Secure {ultra secure|completely protected} {technology|systems}"
    ]
  },
  fr: {
    titles: [
      "Secure 2025 - {Application|Plateforme|Système} {Ultra Sécurisée|Complètement Protégée|Totalement Blindée} | {Sécurité|Protection|Confidentialité} {Maximale|Extrême|Totale}",
      "Secure {App|Application|Plateforme} - Communication {Ultra Sécurisée|Complètement Chiffrée|Totalement Protégée} avec {Bitcoin|Cryptomonnaies|Crypto}"
    ],
    descriptions: [
      "Secure: L'application {ultra sécurisée|complètement protégée|totalement blindée} qui {garantit|offre|fournit} une {sécurité|protection|confidentialité} {maximale|extrême|totale} dans toutes vos {communications|conversations|activités}.",
      "Découvrez Secure, l'application de communication la plus {sécurisée|protégée|blindée} avec {technologie|chiffrement|sécurité} {avancée|militaire|bancaire}. {Paiement|Achat} {Bitcoin|cryptomonnaies|crypto} {disponible|accepté|supporté}."
    ],
    keywords: [
      "Secure application {ultra sécurisée|complètement protégée}, communication {ultra sécurisée|complètement chiffrée}, Secure {chiffrement|sécurité} {militaire|bancaire}, Secure {Bitcoin|cryptomonnaies|crypto} {paiement|achat}"
    ]
  },
  it: {
    titles: [
      "Secure 2025 - {Applicazione|Piattaforma|Sistema} {Ultra Sicura|Completamente Protetta|Totalmente Blindata} | {Sicurezza|Protezione|Privacy} {Massima|Estrema|Totale}",
      "Secure {App|Applicazione|Piattaforma} - Comunicazione {Ultra Sicura|Completamente Crittografata|Totalmente Protetta} con {Bitcoin|Criptovalute|Crypto}"
    ],
    descriptions: [
      "Secure: L'applicazione {ultra sicura|completamente protetta|totalmente blindata} che {garantisce|offre|fornisce} {massima|estrema|totale} {sicurezza|protezione|privacy} in tutte le tue {comunicazioni|conversazioni|attività}.",
      "Scopri Secure, l'applicazione di comunicazione più {sicura|protetta|blindata} con {tecnologia|crittografia|sicurezza} {avanzata|militare|bancaria}. {Pagamento|Acquisto} {Bitcoin|criptovalute|crypto} {disponibile|accettato|supportato}."
    ],
    keywords: [
      "Secure applicazione {ultra sicura|completamente protetta}, comunicazione {ultra sicura|completamente crittografata}, Secure {crittografia|sicurezza} {militare|bancaria}, Secure {Bitcoin|criptovalute|crypto} {pagamento|acquisto}"
    ]
  },
  pt: {
    titles: [
      "Secure 2025 - {Aplicação|Plataforma|Sistema} {Ultra Segura|Completamente Protegida|Totalmente Blindada} | {Segurança|Proteção|Privacidade} {Máxima|Extrema|Total}",
      "Secure {App|Aplicação|Plataforma} - Comunicação {Ultra Segura|Completamente Encriptada|Totalmente Protegida} com {Bitcoin|Criptomoedas|Crypto}"
    ],
    descriptions: [
      "Secure: A aplicação {ultra segura|completamente protegida|totalmente blindada} que {garante|oferece|fornece} {máxima|extrema|total} {segurança|proteção|privacidade} em todas as suas {comunicações|conversações|atividades}.",
      "Descubra Secure, a aplicação de comunicação mais {segura|protegida|blindada} com {tecnologia|encriptação|segurança} {avançada|militar|bancária}. {Pagamento|Compra} {Bitcoin|criptomoedas|crypto} {disponível|aceito|suportado}."
    ],
    keywords: [
      "Secure aplicação {ultra segura|completamente protegida}, comunicação {ultra segura|completamente encriptada}, Secure {encriptação|segurança} {militar|bancária}, Secure {Bitcoin|criptomoedas|crypto} {pagamento|compra}"
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
function getSecureContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = secureSpintax[locale as keyof typeof secureSpintax] || secureSpintax.es;
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
export async function generateMetadata({ params: { locale } }: SecurePageProps): Promise<Metadata> {
  const title = getSecureContent(locale, 'titles');
  const description = getSecureContent(locale, 'descriptions');
  const keywords = getSecureContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/secure` : `${baseUrl}/${locale}/apps/secure`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Ultra Secure Communication Application',
    
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
          url: `${baseUrl}/images/apps/secure/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/secure/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/secure`,
        'en': `${baseUrl}/en/apps/secure`,
        'fr': `${baseUrl}/fr/apps/secure`,
        'it': `${baseUrl}/it/apps/secure`,
        'pt': `${baseUrl}/pt/apps/secure`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Secure',
      'product-category': 'Ultra Secure Communication Application',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Ethereum, Litecoin, Monero',
      'crypto-payments': 'Bitcoin, Ethereum, Litecoin, Monero, Zcash, Dash',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'target-audience': 'Security-Conscious Users, Professionals, High-Risk Individuals',
      'supported-platforms': 'iOS, Android, Windows, macOS, Linux, Web',
      'encryption-type': 'Military-Grade Encryption',
      'privacy-level': 'Maximum Privacy and Security',
      'security-level': 'Ultra Secure - Military Grade',
      'anonymity-level': 'Complete Anonymity',
      'use-cases': 'Ultra Secure Communication, High-Risk Protection, Maximum Privacy',
      'competitors': 'WhatsApp, Telegram, Signal, Wickr, Threema',
      'features': 'Ultra Security, Military Encryption, Crypto Payments, Complete Anonymity',
      'security-features': 'Military Grade Encryption, Zero Knowledge, Complete Anonymity',
      'rating': '4.9/5',
      'review-count': '3247',
      'app-version': '3.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'developer': 'Secure Technologies',
      'developer-website': baseUrl,
      'support-email': 'support@encriptados.io',
      'security-certifications': 'Military Grade, Banking Level, Government Approved',
      'data-retention': 'Zero Data Retention Policy',
      'server-security': 'Military Grade Infrastructure',
      'audit-status': 'Independently Audited',
    }
  };
}