// src/app/[locale]/apps/silent-circle/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import SilentCircleClient from './SilentCircleClient';

interface SilentCirclePageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA SILENT CIRCLE
const silentCircleSpintax = {
  es: {
    titles: [
      "Silent Phone 2025 - {Llamadas|Comunicación|Conversaciones} {Encriptadas|Cifradas|Seguras} | {Máxima|Total|Absoluta} Privacidad {Telefónica|Móvil|Digital}",
      "Silent Circle {Profesional|Empresarial|Premium} - {Aplicación|Plataforma|Sistema} de {Comunicación|Llamadas|Mensajería} {Ultra Segura|Completamente Privada|Totalmente Protegida}",
      "{Comunicación|Llamadas|Conversaciones} {Encriptadas|Cifradas|Seguras} Silent Phone - {Protección|Seguridad|Privacidad} {Militar|Gubernamental|Bancaria} para {Profesionales|Ejecutivos|Empresarios}",
      "Silent Circle {Encriptado|Cifrado|Seguro} - {Llamadas|Comunicación|Conversaciones} {Privadas|Secretas|Confidenciales} con {Cifrado|Encriptación} {Extremo a Extremo|Militar|Bancario}",
      "{Aplicación|Plataforma|Sistema} Silent Phone - {Comunicación|Llamadas|Mensajería} {Ultra Segura|Completamente Privada|Totalmente Protegida} {Sin Rastro|Anónima|Invisible}"
    ],
    descriptions: [
      "Silent Phone: La {aplicación|plataforma|solución} de {comunicación|llamadas|mensajería} {más segura|ultra protegida|completamente privada} del mundo. {Cifrado|Encriptación} {extremo a extremo|militar|bancario}, {llamadas|conversaciones|comunicación} {sin rastro|anónimas|privadas}, {cobertura|disponibilidad|alcance} en más de 200 países. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {aceptado|disponible|soportado}.",
      "Descubre Silent Circle, la {solución|aplicación|plataforma} de {comunicación|llamadas|mensajería} {profesional|empresarial|premium} con {tecnología|cifrado|encriptación} {suiza|europea|avanzada}. {Protección|Seguridad|Privacidad} {total|completa|absoluta} para {ejecutivos|empresarios|profesionales} que valoran su {confidencialidad|privacidad|anonimato}. {Acepta|Soporta|Permite} pagos con {Bitcoin|criptomonedas|crypto}.",
      "{Comunicación|Llamadas|Conversaciones} {ultra segura|completamente privada|totalmente protegida} con Silent Phone. {Mensajes|Archivos|Datos} con {autodestrucción|eliminación automática|borrado programado}, {notas de voz|grabaciones|audios} {encriptadas|cifradas|seguras}. {Ideal|Perfecto|Diseñado} para {empresas|organizaciones|profesionales} {exigentes|selectos|premium}.",
      "Silent Circle ofrece {comunicación|llamadas|mensajería} {profesional|empresarial|premium} con {cifrado|encriptación} {militar|gubernamental|bancario} y {protocolos|sistemas|tecnologías} de {privacidad|seguridad|protección} {avanzados|estrictos|inquebrantables}. {Cobertura|Disponibilidad|Alcance} {global|mundial|internacional} en más de 200 países."
    ],
    keywords: [
      "Silent Phone {llamadas|comunicación} {encriptadas|cifradas|seguras}, Silent Circle {aplicación|plataforma} {segura|protegida|privada}, {comunicación|llamadas|mensajería} {sin rastro|anónima|privada}, {cifrado|encriptación} {extremo a extremo|militar|bancario} {llamadas|conversaciones}, Silent Phone {comprar|precio|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "{aplicación|plataforma} {llamadas|comunicación} {seguras|encriptadas|protegidas}, {comunicación|conversaciones} {privadas|secretas|confidenciales} {profesionales|empresariales}, Silent Circle {mensajes|archivos} {autodestrucción|eliminación automática}, {notas de voz|grabaciones|audios} {encriptadas|cifradas|seguras}",
      "Silent Phone vs {WhatsApp|Telegram|Signal} {llamadas|comunicación}, {aplicación|plataforma} {comunicación|llamadas} {segura|encriptada|protegida} {empresas|profesionales} {España|Europa|mundial}, {cobertura|disponibilidad} 200 países {comunicación|llamadas} {segura|encriptada|protegida}"
    ]
  },
  en: {
    titles: [
      "Silent Phone 2025 - {Encrypted|Secure|Protected} {Calls|Communication|Conversations} | {Maximum|Total|Absolute} {Phone|Mobile|Digital} Privacy",
      "Silent Circle {Professional|Enterprise|Premium} - {Ultra Secure|Completely Private|Totally Protected} {Communication|Calls|Messaging} {Application|Platform|System}",
      "{Encrypted|Secure|Protected} {Communication|Calls|Conversations} Silent Phone - {Military|Government|Banking} {Protection|Security|Privacy} for {Professionals|Executives|Entrepreneurs}",
      "Silent Circle {Encrypted|Secure|Protected} - {Private|Secret|Confidential} {Calls|Communication|Conversations} with {End-to-End|Military|Banking} {Encryption|Security}",
      "Silent Phone {Application|Platform|System} - {Ultra Secure|Completely Private|Totally Protected} {Communication|Calls|Messaging} {Traceless|Anonymous|Invisible}"
    ],
    descriptions: [
      "Silent Phone: The world's most {secure|protected|private} {communication|calls|messaging} {application|platform|solution}. {End-to-end|Military|Banking} {encryption|security}, {traceless|anonymous|private} {calls|conversations|communication}, {coverage|availability|reach} in over 200 countries. {Payment|Purchase|Acquisition} with {Bitcoin|cryptocurrencies|crypto} {accepted|available|supported}.",
      "Discover Silent Circle, the {professional|enterprise|premium} {communication|calls|messaging} {solution|application|platform} with {Swiss|European|advanced} {technology|encryption|security}. {Total|Complete|Absolute} {protection|security|privacy} for {executives|entrepreneurs|professionals} who value their {confidentiality|privacy|anonymity}. {Accepts|Supports|Allows} payments with {Bitcoin|cryptocurrencies|crypto}.",
      "{Ultra secure|Completely private|Totally protected} {communication|calls|conversations} with Silent Phone. {Messages|Files|Data} with {self-destruction|automatic deletion|programmed erasure}, {encrypted|secure|protected} {voice notes|recordings|audio}. {Ideal|Perfect|Designed} for {demanding|select|premium} {businesses|organizations|professionals}.",
      "Silent Circle offers {professional|enterprise|premium} {communication|calls|messaging} with {military|government|banking} {encryption|security} and {advanced|strict|unbreakable} {privacy|security|protection} {protocols|systems|technologies}. {Global|Worldwide|International} {coverage|availability|reach} in over 200 countries."
    ],
    keywords: [
      "Silent Phone {encrypted|secure|protected} {calls|communication}, Silent Circle {secure|protected|private} {application|platform}, {traceless|anonymous|private} {communication|calls|messaging}, {end-to-end|military|banking} {encryption|security} {calls|conversations}, Silent Phone {buy|price|purchase} with {Bitcoin|cryptocurrencies|crypto}",
      "{secure|encrypted|protected} {calls|communication} {application|platform}, {private|secret|confidential} {professional|enterprise} {communication|conversations}, Silent Circle {self-destructing|auto-deletion} {messages|files}, {encrypted|secure|protected} {voice notes|recordings|audio}",
      "Silent Phone vs {WhatsApp|Telegram|Signal} {calls|communication}, {secure|encrypted|protected} {business|professional} {communication|calls} {application|platform} {Spain|Europe|worldwide}, 200 countries {coverage|availability} {secure|encrypted|protected} {communication|calls}"
    ]
  },
  fr: {
    titles: [
      "Silent Phone 2025 - Appels {Cryptés|Sécurisés|Protégés} | Confidentialité {Maximale|Totale|Absolue} {Téléphonique|Mobile|Numérique}",
      "Silent Circle {Professionnel|Entreprise|Premium} - {Application|Plateforme|Système} de {Communication|Appels|Messagerie} {Ultra Sécurisée|Complètement Privée|Totalement Protégée}"
    ],
    descriptions: [
      "Silent Phone: L'application de {communication|appels|messagerie} la plus {sécurisée|protégée|privée} au monde. {Chiffrement|Cryptage} {bout en bout|militaire|bancaire}, {appels|conversations|communication} {sans trace|anonymes|privés}, {couverture|disponibilité} dans plus de 200 pays.",
      "Découvrez Silent Circle, la {solution|application|plateforme} de {communication|appels|messagerie} {professionnelle|d'entreprise|premium} avec {technologie|chiffrement|sécurité} {suisse|européenne|avancée}."
    ],
    keywords: [
      "Silent Phone appels {cryptés|sécurisés|protégés}, Silent Circle application {sécurisée|cryptée|protégée}, {communication|appels} {sans trace|anonyme|privée}, {chiffrement|cryptage} {bout en bout|militaire} appels"
    ]
  },
  it: {
    titles: [
      "Silent Phone 2025 - Chiamate {Crittografate|Sicure|Protette} | Privacy {Massima|Totale|Assoluta} {Telefonica|Mobile|Digitale}",
      "Silent Circle {Professionale|Aziendale|Premium} - {Applicazione|Piattaforma|Sistema} di {Comunicazione|Chiamate|Messaggistica} {Ultra Sicura|Completamente Privata|Totalmente Protetta}"
    ],
    descriptions: [
      "Silent Phone: L'applicazione di {comunicazione|chiamate|messaggistica} più {sicura|protetta|privata} al mondo. {Crittografia|Cifratura} {end-to-end|militare|bancaria}, {chiamate|conversazioni|comunicazione} {senza traccia|anonime|private}, {copertura|disponibilità} in oltre 200 paesi.",
      "Scopri Silent Circle, la {soluzione|applicazione|piattaforma} di {comunicazione|chiamate|messaggistica} {professionale|aziendale|premium} con {tecnologia|crittografia|sicurezza} {svizzera|europea|avanzata}."
    ],
    keywords: [
      "Silent Phone chiamate {crittografate|sicure|protette}, Silent Circle applicazione {sicura|crittografata|protetta}, {comunicazione|chiamate} {senza traccia|anonima|privata}, {crittografia|cifratura} {end-to-end|militare} chiamate"
    ]
  },
  pt: {
    titles: [
      "Silent Phone 2025 - Chamadas {Encriptadas|Seguras|Protegidas} | Privacidade {Máxima|Total|Absoluta} {Telefônica|Móvel|Digital}",
      "Silent Circle {Profissional|Empresarial|Premium} - {Aplicação|Plataforma|Sistema} de {Comunicação|Chamadas|Mensagens} {Ultra Segura|Completamente Privada|Totalmente Protegida}"
    ],
    descriptions: [
      "Silent Phone: A aplicação de {comunicação|chamadas|mensagens} mais {segura|protegida|privada} do mundo. {Encriptação|Criptografia} {end-to-end|militar|bancária}, {chamadas|conversações|comunicação} {sem rastro|anônimas|privadas}, {cobertura|disponibilidade} em mais de 200 países.",
      "Descubra Silent Circle, a {solução|aplicação|plataforma} de {comunicação|chamadas|mensagens} {profissional|empresarial|premium} com {tecnologia|encriptação|segurança} {suíça|europeia|avançada}."
    ],
    keywords: [
      "Silent Phone chamadas {encriptadas|seguras|protegidas}, Silent Circle aplicação {segura|encriptada|protegida}, {comunicação|chamadas} {sem rastro|anônima|privada}, {encriptação|criptografia} {end-to-end|militar} chamadas"
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
function getSilentCircleContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = silentCircleSpintax[locale as keyof typeof silentCircleSpintax] || silentCircleSpintax.es;
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
export async function generateMetadata({ params: { locale } }: SilentCirclePageProps): Promise<Metadata> {
  const title = getSilentCircleContent(locale, 'titles');
  const description = getSilentCircleContent(locale, 'descriptions');
  const keywords = getSilentCircleContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/silent-circle` : `${baseUrl}/${locale}/apps/silent-circle`;

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
          url: `${baseUrl}/images/apps/silent-circle/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/silent-circle/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/silent-circle`,
        'en': `${baseUrl}/en/apps/silent-circle`,
        'fr': `${baseUrl}/fr/apps/silent-circle`,
        'it': `${baseUrl}/it/apps/silent-circle`,
        'pt': `${baseUrl}/pt/apps/silent-circle`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Silent Phone - Silent Circle',
      'product-category': 'Secure Communication Application',
      'product-price': '99 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'coverage': '200+ Countries'
    }
  };
}

// 🎯 STRUCTURED DATA PARA SILENT CIRCLE
function getSilentCircleStructuredData(locale: string) {
  const description = getSilentCircleContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Silent Phone - Comunicación Encriptada Segura',
    en: 'Silent Phone - Secure Encrypted Communication',
    fr: 'Silent Phone - Communication Cryptée Sécurisée',
    it: 'Silent Phone - Comunicazione Crittografata Sicura',
    pt: 'Silent Phone - Comunicação Encriptada Segura'
  };

  const features = {
    es: [
      "Llamadas encriptadas extremo a extremo",
      "Mensajes con autodestrucción",
      "Notas de voz encriptadas",
      "Compartir archivos cifrados hasta 100MB",
      "Cobertura en más de 200 países",
      "Sin dependencia de números de teléfono"
    ],
    en: [
      "End-to-end encrypted calls",
      "Self-destructing messages",
      "Encrypted voice notes",
      "Encrypted file sharing up to 100MB",
      "Coverage in 200+ countries",
      "No phone number dependency"
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
        "url": locale === 'es' ? `${baseUrl}/apps/silent-circle` : `${baseUrl}/${locale}/apps/silent-circle`,
        "applicationCategory": "CommunicationApplication",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": {
          "@type": "Offer",
          "price": "99",
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
          ],
          "paymentMethodAccepted": ["Credit Card", "Bank Transfer", "Bitcoin", "Cryptocurrency", "Ethereum", "USDT", "Monero"]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "1547",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Silent Circle"
        },
        "publisher": {
          "@type": "Organization", 
          "name": "Encriptados"
        },
        "featureList": productFeatures,
        "screenshot": `${baseUrl}/images/apps/silent-circle/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/silent-circle`,
        "installUrl": `${baseUrl}/apps/silent-circle`,
        "softwareVersion": "3.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "applicationSubCategory": "Secure Communication",
        "countriesSupported": "200+ Countries"
      },
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "Silent Circle"
        },
        "category": locale === 'es' ? "Aplicaciones de Comunicación Segura" : "Secure Communication Applications",
        "offers": {
          "@type": "Offer",
          "price": "99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Encriptados"
          },
          "acceptedPaymentMethod": [
            "https://schema.org/CreditCard",
            "https://schema.org/Bitcoin",
            "https://schema.org/Cryptocurrency"
          ]
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Coverage",
            "value": "200+ Countries"
          },
          {
            "@type": "PropertyValue", 
            "name": "File Sharing Limit",
            "value": "100 MB"
          },
          {
            "@type": "PropertyValue",
            "name": "Encryption Type",
            "value": "End-to-End"
          }
        ]
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué tan segura es la aplicación Silent Phone - Silent Circle?" : "How secure is the Silent Phone - Silent Circle application?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Silent Phone utiliza cifrado extremo a extremo de grado militar, asegurando que solo el emisor y receptor puedan acceder a las comunicaciones. No almacenamos metadatos ni registros de llamadas."
                : "Silent Phone uses military-grade end-to-end encryption, ensuring that only the sender and receiver can access communications. We don't store metadata or call logs."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿En qué celular puedo instalar la aplicación Silent Phone de Silent Circle?" : "On which phones can I install the Silent Phone application from Silent Circle?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "Silent Phone es compatible con iOS, Android, Windows, macOS y Linux. Funciona en smartphones, tablets y computadoras con conexión a internet."
                : "Silent Phone is compatible with iOS, Android, Windows, macOS, and Linux. It works on smartphones, tablets, and computers with internet connection."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Acepta pagos con Bitcoin?" : "Do you accept Bitcoin payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, aceptamos pagos con Bitcoin, Ethereum, USDT, Monero y otras criptomonedas principales, además de métodos tradicionales como tarjetas de crédito y transferencias bancarias."
                : "Yes, we accept payments with Bitcoin, Ethereum, USDT, Monero and other major cryptocurrencies, in addition to traditional methods like credit cards and bank transfers."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function SilentCirclePage({ params: { locale } }: SilentCirclePageProps) {
  const structuredData = getSilentCircleStructuredData(locale);

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
      <link rel="preload" href="/images/apps/silent-circle/banner.png" as="image" />
      <link rel="preload" href="/images/apps/silent-circle/world-coverage-mobile.webp" as="image" media="(max-width: 768px)" />
      <link rel="preload" href="/images/apps/silent-circle/world-coverage-desktop.png" as="image" media="(min-width: 769px)" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getSilentCircleContent(locale, 'titles')} />
        <meta itemProp="description" content={getSilentCircleContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="CommunicationApplication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <meta itemProp="countriesSupported" content="200+ Countries" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="99" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <SilentCircleClient />
    </>
  );
}