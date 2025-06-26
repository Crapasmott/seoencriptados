// src/app/[locale]/apps/armadillo/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import ArmadilloClient from './ArmadilloClient';

interface ArmadilloPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA ARMADILLO
const armadilloSpintax = {
  es: {
    titles: [
      "Armadillo Chat 2025 - {Mensajería|Comunicación|Chat} {Instantánea|Segura|Encriptada} de {Alta|Máxima|Extrema} Seguridad | {Privacidad|Confidencialidad|Anonimato} {Total|Absoluta|Completa}",
      "Armadillo {Mensajero|Chat|Aplicación} {Seguro|Encriptado|Protegido} - {Mensajería|Comunicación|Chat} {Instantánea|Privada|Cifrada} con {Autodestrucción|Eliminación Automática|Borrado Programado}",
      "{Mensajería|Chat|Comunicación} {Segura|Encriptada|Protegida} Armadillo - {Aplicación|Plataforma|Sistema} de {Alta|Máxima|Extrema} {Seguridad|Privacidad|Protección} para {Profesionales|Empresarios|Ejecutivos}",
      "Armadillo Chat {Encriptado|Cifrado|Seguro} - {Mensajería|Comunicación|Chat} {Instantánea|Privada|Secreta} con {Cifrado|Encriptación} {Extremo a Extremo|Militar|Bancario}",
      "{Aplicación|Plataforma|Sistema} Armadillo - {Mensajería|Chat|Comunicación} {Ultra Segura|Completamente Privada|Totalmente Protegida} con {Protección|Seguridad|Privacidad} {Avanzada|Militar|Profesional}"
    ],
    descriptions: [
      "Armadillo Chat: La {aplicación|plataforma|solución} de {mensajería|comunicación|chat} {instantánea|segura|encriptada} de {alta|máxima|extrema} seguridad que {respeta|protege|garantiza} tu {privacidad|confidencialidad|anonimato}. {Cifrado|Encriptación} {extremo a extremo|militar|bancario}, {mensajes|conversaciones|chats} con {autodestrucción|eliminación automática|borrado programado}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {aceptado|disponible|soportado}.",
      "Descubre Armadillo, la {aplicación|plataforma|solución} de {mensajería|comunicación|chat} {instantánea|segura|encriptada} {más segura|ultra protegida|completamente privada} para {profesionales|empresarios|ejecutivos} que valoran su {privacidad|confidencialidad|seguridad}. {Planes|Opciones|Suscripciones} desde {15$|$15 USD} con {soporte|aceptación|disponibilidad} para {Bitcoin|criptomonedas|crypto}.",
      "{Mensajería|Chat|Comunicación} {instantánea|segura|encriptada} de {alta|máxima|extrema} seguridad con Armadillo Chat. {Mensajes|Conversaciones|Chats} {autodestructivos|que se eliminan|con borrado automático}, {privacidad|confidencialidad|anonimato} {total|absoluta|completa}, {sin|cero} {metadatos|registros|rastros}. {Ideal|Perfecto|Diseñado} para {profesionales|empresarios|ejecutivos} {exigentes|selectos|premium}.",
      "Armadillo Chat ofrece {mensajería|comunicación|chat} {instantánea|segura|encriptada} con {tecnología|cifrado|encriptación} {avanzada|militar|bancaria} y {protocolos|sistemas|algoritmos} de {privacidad|seguridad|protección} {estrictos|rigurosos|inquebrantables}. {Planes|Opciones|Suscripciones} {flexibles|variados|adaptables} desde {1|6|12} {mes|meses} de duración."
    ],
    keywords: [
      "Armadillo Chat {mensajería|comunicación} {instantánea|segura|encriptada}, {aplicación|plataforma} {mensajería|chat} {segura|encriptada|protegida}, {mensajes|conversaciones} {autodestructivos|eliminación automática|borrado programado}, {cifrado|encriptación} {extremo a extremo|militar|bancario} {mensajería|chat}, Armadillo {comprar|precio|suscripción} con {Bitcoin|criptomonedas|crypto}",
      "{aplicación|plataforma} {chat|mensajería} {alta seguridad|ultra segura|completamente privada}, {mensajería|comunicación} {instantánea|privada|secreta} {profesional|empresarial}, Armadillo Chat {sin metadatos|cero registros|sin rastros}, {privacidad|confidencialidad|anonimato} {total|absoluta|completa} {mensajería|chat}",
      "Armadillo vs {WhatsApp|Telegram|Signal} {seguridad|privacidad|protección}, {aplicación|plataforma} {mensajería|chat} {segura|encriptada|protegida} {España|Europa|mundial}, {mensajería|chat} {instantánea|segura} {alta seguridad|máxima privacidad|protección total}, Armadillo Chat {15 USD|planes|suscripción}"
    ]
  },
  en: {
    titles: [
      "Armadillo Chat 2025 - {High|Maximum|Extreme} Security {Instant|Secure|Encrypted} {Messaging|Communication|Chat} | {Total|Absolute|Complete} {Privacy|Confidentiality|Anonymity}",
      "Armadillo {Secure|Encrypted|Protected} {Messenger|Chat|Application} - {Instant|Private|Encrypted} {Messaging|Communication|Chat} with {Self-Destruction|Auto-Deletion|Programmed Erasure}",
      "{Secure|Encrypted|Protected} {Messaging|Chat|Communication} Armadillo - {High|Maximum|Extreme} {Security|Privacy|Protection} {Application|Platform|System} for {Professionals|Entrepreneurs|Executives}",
      "Armadillo Chat {Encrypted|Secure|Protected} - {Instant|Private|Secret} {Messaging|Communication|Chat} with {End-to-End|Military|Banking} {Encryption|Security}",
      "Armadillo {Application|Platform|System} - {Ultra Secure|Completely Private|Totally Protected} {Messaging|Chat|Communication} with {Advanced|Military|Professional} {Protection|Security|Privacy}"
    ],
    descriptions: [
      "Armadillo Chat: The {high|maximum|extreme} security {instant|secure|encrypted} {messaging|communication|chat} {application|platform|solution} that {respects|protects|guarantees} your {privacy|confidentiality|anonymity}. {End-to-end|Military|Banking} {encryption|security}, {messages|conversations|chats} with {self-destruction|auto-deletion|programmed erasure}. {Payment|Purchase|Acquisition} with {Bitcoin|cryptocurrencies|crypto} {accepted|available|supported}.",
      "Discover Armadillo, the most {secure|protected|private} {instant|secure|encrypted} {messaging|communication|chat} {application|platform|solution} for {professionals|entrepreneurs|executives} who value their {privacy|confidentiality|security}. {Plans|Options|Subscriptions} from {$15|15 USD} with {Bitcoin|cryptocurrencies|crypto} {support|acceptance|availability}.",
      "{High|Maximum|Extreme} security {instant|secure|encrypted} {messaging|chat|communication} with Armadillo Chat. {Self-destructing|Auto-deleting|Automatically erasing} {messages|conversations|chats}, {total|absolute|complete} {privacy|confidentiality|anonymity}, {zero|no} {metadata|logs|traces}. {Ideal|Perfect|Designed} for {demanding|select|premium} {professionals|entrepreneurs|executives}.",
      "Armadillo Chat offers {instant|secure|encrypted} {messaging|communication|chat} with {advanced|military|banking} {technology|encryption|security} and {strict|rigorous|unbreakable} {privacy|security|protection} {protocols|systems|algorithms}. {Flexible|Varied|Adaptable} {plans|options|subscriptions} from {1|6|12} {month|months} duration."
    ],
    keywords: [
      "Armadillo Chat {instant|secure|encrypted} {messaging|communication}, {secure|encrypted|protected} {messaging|chat} {application|platform}, {self-destructing|auto-deletion|programmed erasure} {messages|conversations}, {end-to-end|military|banking} {encryption|security} {messaging|chat}, Armadillo {buy|price|subscription} with {Bitcoin|cryptocurrencies|crypto}",
      "{high security|ultra secure|completely private} {chat|messaging} {application|platform}, {instant|private|secret} {professional|enterprise} {messaging|communication}, Armadillo Chat {no metadata|zero logs|no traces}, {total|absolute|complete} {privacy|confidentiality|anonymity} {messaging|chat}",
      "Armadillo vs {WhatsApp|Telegram|Signal} {security|privacy|protection}, {secure|encrypted|protected} {messaging|chat} {application|platform} {Spain|Europe|worldwide}, {high security|maximum privacy|total protection} {instant|secure} {messaging|chat}, Armadillo Chat {15 USD|plans|subscription}"
    ]
  },
  fr: {
    titles: [
      "Armadillo Chat 2025 - Messagerie {Instantanée|Sécurisée|Cryptée} de {Haute|Maximale|Extrême} Sécurité | Confidentialité {Totale|Absolue|Complète}",
      "Armadillo {Messager|Chat|Application} {Sécurisé|Crypté|Protégé} - Messagerie {Instantanée|Privée|Cryptée} avec {Auto-Destruction|Suppression Automatique|Effacement Programmé}"
    ],
    descriptions: [
      "Armadillo Chat: L'application de {messagerie|communication|chat} {instantanée|sécurisée|cryptée} de {haute|maximale|extrême} sécurité qui {respecte|protège|garantit} votre {confidentialité|vie privée|anonymat}. {Chiffrement|Cryptage} {bout en bout|militaire|bancaire}, {messages|conversations} avec {auto-destruction|suppression automatique}.",
      "Découvrez Armadillo, l'application de {messagerie|communication|chat} {instantanée|sécurisée|cryptée} la plus {sécurisée|protégée|privée} pour {professionnels|entrepreneurs|dirigeants} qui valorisent leur {confidentialité|vie privée|sécurité}."
    ],
    keywords: [
      "Armadillo Chat messagerie {instantanée|sécurisée|cryptée}, application {messagerie|chat} {sécurisée|cryptée|protégée}, messages {auto-destructeurs|suppression automatique}, {chiffrement|cryptage} {bout en bout|militaire} messagerie"
    ]
  },
  it: {
    titles: [
      "Armadillo Chat 2025 - Messaggistica {Istantanea|Sicura|Crittografata} di {Alta|Massima|Estrema} Sicurezza | Privacy {Totale|Assoluta|Completa}",
      "Armadillo {Messenger|Chat|Applicazione} {Sicuro|Crittografato|Protetto} - Messaggistica {Istantanea|Privata|Crittografata} con {Auto-Distruzione|Cancellazione Automatica|Eliminazione Programmata}"
    ],
    descriptions: [
      "Armadillo Chat: L'applicazione di {messaggistica|comunicazione|chat} {istantanea|sicura|crittografata} di {alta|massima|estrema} sicurezza che {rispetta|protegge|garantisce} la tua {privacy|riservatezza|anonimato}. {Crittografia|Cifratura} {end-to-end|militare|bancaria}, {messaggi|conversazioni} con {auto-distruzione|cancellazione automatica}.",
      "Scopri Armadillo, l'applicazione di {messaggistica|comunicazione|chat} {istantanea|sicura|crittografata} più {sicura|protetta|privata} per {professionisti|imprenditori|dirigenti} che valorizzano la loro {privacy|riservatezza|sicurezza}."
    ],
    keywords: [
      "Armadillo Chat messaggistica {istantanea|sicura|crittografata}, applicazione {messaggistica|chat} {sicura|crittografata|protetta}, messaggi {auto-distruttivi|cancellazione automatica}, {crittografia|cifratura} {end-to-end|militare} messaggistica"
    ]
  },
  pt: {
    titles: [
      "Armadillo Chat 2025 - Mensagens {Instantâneas|Seguras|Encriptadas} de {Alta|Máxima|Extrema} Segurança | Privacidade {Total|Absoluta|Completa}",
      "Armadillo {Mensageiro|Chat|Aplicação} {Seguro|Encriptado|Protegido} - Mensagens {Instantâneas|Privadas|Encriptadas} com {Auto-Destruição|Eliminação Automática|Apagamento Programado}"
    ],
    descriptions: [
      "Armadillo Chat: A aplicação de {mensagens|comunicação|chat} {instantâneas|seguras|encriptadas} de {alta|máxima|extrema} segurança que {respeita|protege|garante} sua {privacidade|confidencialidade|anonimato}. {Encriptação|Criptografia} {end-to-end|militar|bancária}, {mensagens|conversações} com {auto-destruição|eliminação automática}.",
      "Descubra Armadillo, a aplicação de {mensagens|comunicação|chat} {instantâneas|seguras|encriptadas} mais {segura|protegida|privada} para {profissionais|empresários|executivos} que valorizam sua {privacidade|confidencialidade|segurança}."
    ],
    keywords: [
      "Armadillo Chat mensagens {instantâneas|seguras|encriptadas}, aplicação {mensagens|chat} {segura|encriptada|protegida}, mensagens {auto-destrutivas|eliminação automática}, {encriptação|criptografia} {end-to-end|militar} mensagens"
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
function getArmadilloContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = armadilloSpintax[locale as keyof typeof armadilloSpintax] || armadilloSpintax.es;
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
export async function generateMetadata({ params: { locale } }: ArmadilloPageProps): Promise<Metadata> {
  const title = getArmadilloContent(locale, 'titles');
  const description = getArmadilloContent(locale, 'descriptions');
  const keywords = getArmadilloContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/armadillo` : `${baseUrl}/${locale}/apps/armadillo`;

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
          url: `${baseUrl}/images/apps/armadillo/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/armadillo/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/armadillo`,
        'en': `${baseUrl}/en/apps/armadillo`,
        'fr': `${baseUrl}/fr/apps/armadillo`,
        'it': `${baseUrl}/it/apps/armadillo`,
        'pt': `${baseUrl}/pt/apps/armadillo`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Armadillo Chat',
      'product-category': 'Secure Messaging Application',
      'product-price-from': '15 USD',
      'product-price-6months': '75 USD',
      'product-price-12months': '125 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'subscription-plans': '1, 6, 12 months'
    }
  };
}

// 🎯 STRUCTURED DATA PARA ARMADILLO
function getArmadilloStructuredData(locale: string) {
  const description = getArmadilloContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Armadillo Chat - Mensajería Instantánea Segura',
    en: 'Armadillo Chat - Secure Instant Messaging',
    fr: 'Armadillo Chat - Messagerie Instantanée Sécurisée',
    it: 'Armadillo Chat - Messaggistica Istantanea Sicura',
    pt: 'Armadillo Chat - Mensagens Instantâneas Seguras'
  };

  const features = {
    es: [
      "Mensajería instantánea encriptada",
      "Mensajes con autodestrucción",
      "Cifrado extremo a extremo",
      "Sin metadatos almacenados",
      "Máxima privacidad",
      "Planes flexibles 1, 6, 12 meses"
    ],
    en: [
      "Encrypted instant messaging",
      "Self-destructing messages",
      "End-to-end encryption",
      "No metadata stored",
      "Maximum privacy",
      "Flexible plans 1, 6, 12 months"
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
        "url": locale === 'es' ? `${baseUrl}/apps/armadillo` : `${baseUrl}/${locale}/apps/armadillo`,
        "applicationCategory": "CommunicationApplication",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": [
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 1 Mes" : "1 Month Plan",
            "price": "15",
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
            "name": locale === 'es' ? "Plan 6 Meses" : "6 Months Plan",
            "price": "75",
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
            "name": locale === 'es' ? "Plan 12 Meses" : "12 Months Plan",
            "price": "125",
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
          "ratingValue": "4.9",
          "reviewCount": "2183",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Armadillo Technologies"
        },
        "publisher": {
          "@type": "Organization", 
          "name": "Encriptados"
        },
        "featureList": productFeatures,
        "screenshot": `${baseUrl}/images/apps/armadillo/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/armadillo`,
        "installUrl": `${baseUrl}/apps/armadillo`,
        "softwareVersion": "2.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "applicationSubCategory": "Secure Instant Messaging"
      },
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "Armadillo"
        },
        "category": locale === 'es' ? "Aplicaciones de Mensajería Segura" : "Secure Messaging Applications",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "15",
          "highPrice": "125",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offerCount": "3",
          "seller": {
            "@type": "Organization",
            "name": "Encriptados"
          }
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Subscription Plans",
            "value": "1, 6, 12 months"
          },
          {
            "@type": "PropertyValue", 
            "name": "Message Encryption",
            "value": "End-to-End"
          },
          {
            "@type": "PropertyValue",
            "name": "Self-Destruction",
            "value": "Available"
          }
        ]
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo funciona Armadillo Chat?" : "How does Armadillo Chat work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Armadillo Chat utiliza cifrado extremo a extremo para proteger tus mensajes. Los mensajes pueden configurarse para autodestruirse después de un tiempo determinado, garantizando máxima privacidad."
                : "Armadillo Chat uses end-to-end encryption to protect your messages. Messages can be set to self-destruct after a specified time, ensuring maximum privacy."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿En qué celular puedo instalar Armadillo Chat?" : "On which phones can I install Armadillo Chat?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "Armadillo Chat es compatible con iOS, Android, Windows, macOS y Linux. Funciona en smartphones, tablets y computadoras."
                : "Armadillo Chat is compatible with iOS, Android, Windows, macOS, and Linux. It works on smartphones, tablets, and computers."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Por qué usar Armadillo Chat?" : "Why use Armadillo Chat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Armadillo Chat ofrece la más alta seguridad con cifrado extremo a extremo, mensajes autodestructivos y cero almacenamiento de metadatos. Ideal para profesionales que requieren máxima privacidad."
                : "Armadillo Chat offers the highest security with end-to-end encryption, self-destructing messages, and zero metadata storage. Ideal for professionals requiring maximum privacy."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cuáles son los precios de Armadillo Chat?" : "What are Armadillo Chat prices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Armadillo Chat ofrece planes flexibles: 1 mes por $15 USD, 6 meses por $75 USD, y 12 meses por $125 USD. Aceptamos Bitcoin y otras criptomonedas."
                : "Armadillo Chat offers flexible plans: 1 month for $15 USD, 6 months for $75 USD, and 12 months for $125 USD. We accept Bitcoin and other cryptocurrencies."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function ArmadilloPage({ params: { locale } }: ArmadilloPageProps) {
  const structuredData = getArmadilloStructuredData(locale);

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
      <link rel="preload" href="/images/apps/armadillo/banner.png" as="image" />
      <link rel="preload" href="/images/apps/armadillo/youtube.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getArmadilloContent(locale, 'titles')} />
        <meta itemProp="description" content={getArmadilloContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="CommunicationApplication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
          <meta itemProp="lowPrice" content="15" />
          <meta itemProp="highPrice" content="125" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <ArmadilloClient />
    </>
  );
}