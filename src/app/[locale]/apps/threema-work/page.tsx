// src/app/[locale]/apps/threema-work/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import ThreemaWorkClient from './ThreemaWorkClient';

interface ThreemaWorkPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA THREEMA WORK
const threemaWorkSpintax = {
  es: {
    titles: [
      "Threema Work 2025 - {Mensajería|Comunicación} {Empresarial|Corporativa|Organizacional} {Segura|Encriptada|Protegida} | {Máxima|Total|Absoluta} Privacidad {Profesional|Empresarial|Corporativa}",
      "Threema Work {Profesional|Empresarial|Corporativo} - {Aplicación|Plataforma|Sistema} de {Mensajería|Comunicación} {Segura|Encriptada|Protegida} para {Empresas|Organizaciones|Corporaciones}",
      "{Comunicación|Mensajería} {Empresarial|Corporativa|Organizacional} Threema Work - {Seguridad|Privacidad|Protección} {Máxima|Total|Absoluta} para {Equipos|Empresas|Organizaciones}",
      "Threema Work {Encriptado|Cifrado|Seguro} - {Mensajero|Aplicación|Plataforma} {Profesional|Empresarial|Corporativo} con {Cifrado|Encriptación} {Extremo a Extremo|Militar|Bancario}",
      "{Aplicación|Plataforma|Sistema} Threema Work - {Mensajería|Comunicación} {Ultra Segura|Completamente Privada|Totalmente Protegida} para {Profesionales|Empresarios|Ejecutivos}"
    ],
    descriptions: [
      "Threema Work: La {aplicación|plataforma|solución} de {mensajería|comunicación} {empresarial|corporativa|organizacional} más {segura|protegida|privada} del mundo. {Cifrado|Encriptación} {extremo a extremo|militar|bancario}, {sin|cero} {registros|logs|rastros}, {máxima|total|absoluta} privacidad para {empresas|organizaciones|corporaciones}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {aceptado|disponible|soportado}.",
      "Descubre Threema Work, la {solución|aplicación|plataforma} de {comunicación|mensajería} {empresarial|corporativa|profesional} con {tecnología|cifrado|encriptación} {suiza|europea|avanzada}. {Protección|Seguridad|Privacidad} {total|completa|absoluta} para {equipos|empresas|organizaciones} que valoran su {confidencialidad|privacidad|seguridad}. {Acepta|Soporta|Permite} pagos con {Bitcoin|criptomonedas|crypto}.",
      "{Comunicación|Mensajería} {empresarial|corporativa|organizacional} {ultra segura|completamente privada|totalmente protegida} con Threema Work. {Sin|Cero} dependencia de {números|teléfonos|contactos}, {máxima|total|absoluta} {anonimidad|privacidad|confidencialidad}. {Ideal|Perfecto|Diseñado} para {empresas|organizaciones|corporaciones} {exigentes|selectas|premium}.",
      "Threema Work ofrece {comunicación|mensajería} {profesional|empresarial|corporativa} con {cifrado|encriptación} {suizo|europeo|avanzado} y {políticas|sistemas|protocolos} de {privacidad|seguridad|protección} {estrictas|rigurosas|inquebrantables}. {Gestión|Administración|Control} {centralizada|unificada|completa} para {administradores|IT|sistemas}."
    ],
    keywords: [
      "Threema Work {mensajería|comunicación} {empresarial|corporativa|organizacional}, {aplicación|plataforma} {segura|encriptada|protegida} {empresas|organizaciones|corporaciones}, {cifrado|encriptación} {extremo a extremo|militar|bancario} {profesional|empresarial}, {comunicación|mensajería} {sin registros|privada|anónima} {equipos|empresas}, Threema Work {comprar|precio|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "{mensajero|aplicación} {empresarial|corporativo|organizacional} {suizo|europeo|seguro}, {comunicación|mensajería} {profesional|empresarial} {sin teléfono|anónima|privada}, Threema Work {administración|gestión|control} {centralizada|unificada|empresarial}, {plataforma|sistema|solución} {comunicación|mensajería} {GDPR|cumplimiento|regulaciones}",
      "Threema Work vs {WhatsApp|Telegram|Signal} {empresarial|business|corporativo}, {mensajería|comunicación} {segura|encriptada|protegida} {empresas|organizaciones} {España|Europa|mundial}, {aplicación|plataforma} {comunicación|mensajería} {profesional|empresarial} {sin metadatos|privada|anónima}"
    ]
  },
  en: {
    titles: [
      "Threema Work 2025 - {Secure|Encrypted|Protected} {Enterprise|Corporate|Business} {Messaging|Communication} | {Maximum|Total|Absolute} {Professional|Enterprise|Corporate} Privacy",
      "Threema Work {Professional|Enterprise|Corporate} - {Secure|Encrypted|Protected} {Messaging|Communication} {Application|Platform|System} for {Businesses|Organizations|Corporations}",
      "{Enterprise|Corporate|Business} {Communication|Messaging} Threema Work - {Maximum|Total|Absolute} {Security|Privacy|Protection} for {Teams|Businesses|Organizations}",
      "Threema Work {Encrypted|Secure|Protected} - {Professional|Enterprise|Corporate} {Messenger|Application|Platform} with {End-to-End|Military|Banking} {Encryption|Security}",
      "Threema Work {Application|Platform|System} - {Ultra Secure|Completely Private|Totally Protected} {Messaging|Communication} for {Professionals|Entrepreneurs|Executives}"
    ],
    descriptions: [
      "Threema Work: The world's most {secure|protected|private} {enterprise|corporate|business} {messaging|communication} {application|platform|solution}. {End-to-end|Military|Banking} {encryption|security}, {zero|no} {logs|records|traces}, {maximum|total|absolute} privacy for {businesses|organizations|corporations}. {Payment|Purchase|Acquisition} with {Bitcoin|cryptocurrencies|crypto} {accepted|available|supported}.",
      "Discover Threema Work, the {enterprise|corporate|professional} {communication|messaging} {solution|application|platform} with {Swiss|European|advanced} {technology|encryption|security}. {Total|Complete|Absolute} {protection|security|privacy} for {teams|businesses|organizations} that value their {confidentiality|privacy|security}. {Accepts|Supports|Allows} payments with {Bitcoin|cryptocurrencies|crypto}.",
      "{Ultra secure|Completely private|Totally protected} {enterprise|corporate|business} {communication|messaging} with Threema Work. {No|Zero} dependency on {phone numbers|contacts|identifiers}, {maximum|total|absolute} {anonymity|privacy|confidentiality}. {Ideal|Perfect|Designed} for {demanding|select|premium} {businesses|organizations|corporations}.",
      "Threema Work offers {professional|enterprise|corporate} {communication|messaging} with {Swiss|European|advanced} {encryption|security} and {strict|rigorous|unbreakable} {privacy|security|protection} {policies|systems|protocols}. {Centralized|Unified|Complete} {management|administration|control} for {administrators|IT|systems}."
    ],
    keywords: [
      "Threema Work {enterprise|corporate|business} {messaging|communication}, {secure|encrypted|protected} {application|platform} {businesses|organizations|corporations}, {professional|enterprise} {end-to-end|military|banking} {encryption|security}, {private|anonymous|no-logs} {team|business} {communication|messaging}, Threema Work {buy|price|purchase} with {Bitcoin|cryptocurrencies|crypto}",
      "{Swiss|European|secure} {enterprise|corporate|business} {messenger|application}, {professional|enterprise} {phone-free|anonymous|private} {communication|messaging}, Threema Work {centralized|unified|enterprise} {administration|management|control}, {GDPR|compliance|regulations} {communication|messaging} {platform|system|solution}",
      "Threema Work vs {WhatsApp|Telegram|Signal} {business|enterprise|corporate}, {secure|encrypted|protected} {business|enterprise} {messaging|communication} {Spain|Europe|worldwide}, {professional|enterprise} {no-metadata|private|anonymous} {communication|messaging} {application|platform}"
    ]
  },
  fr: {
    titles: [
      "Threema Work 2025 - Messagerie {Sécurisée|Cryptée|Protégée} {Professionnelle|Entreprise|Corporative} | Confidentialité {Maximale|Totale|Absolue}",
      "Threema Work {Professionnel|Entreprise|Corporatif} - {Application|Plateforme|Solution} de {Messagerie|Communication} {Sécurisée|Cryptée|Protégée}"
    ],
    descriptions: [
      "Threema Work: L'application de {messagerie|communication} {professionnelle|d'entreprise|corporative} la plus {sécurisée|protégée|privée} au monde. {Chiffrement|Cryptage} {bout en bout|militaire|bancaire}, {zéro|aucun} {journal|enregistrement|trace}, confidentialité {maximale|totale|absolue}.",
      "Découvrez Threema Work, la {solution|application|plateforme} de {communication|messagerie} {professionnelle|d'entreprise} avec {technologie|chiffrement|sécurité} {suisse|européenne|avancée}."
    ],
    keywords: [
      "Threema Work messagerie {professionnelle|entreprise|corporative}, application {sécurisée|cryptée|protégée} {entreprises|organisations}, {chiffrement|cryptage} {bout en bout|militaire} professionnel"
    ]
  },
  it: {
    titles: [
      "Threema Work 2025 - Messaggistica {Sicura|Crittografata|Protetta} {Aziendale|Professionale|Corporativa} | Privacy {Massima|Totale|Assoluta}",
      "Threema Work {Professionale|Aziendale|Corporativo} - {Applicazione|Piattaforma|Soluzione} di {Messaggistica|Comunicazione} {Sicura|Crittografata|Protetta}"
    ],
    descriptions: [
      "Threema Work: L'applicazione di {messaggistica|comunicazione} {aziendale|professionale|corporativa} più {sicura|protetta|privata} al mondo. {Crittografia|Cifratura} {end-to-end|militare|bancaria}, {zero|nessun} {log|registro|traccia}, privacy {massima|totale|assoluta}.",
      "Scopri Threema Work, la {soluzione|applicazione|piattaforma} di {comunicazione|messaggistica} {aziendale|professionale} con {tecnologia|crittografia|sicurezza} {svizzera|europea|avanzata}."
    ],
    keywords: [
      "Threema Work messaggistica {aziendale|professionale|corporativa}, applicazione {sicura|crittografata|protetta} {aziende|organizzazioni}, {crittografia|cifratura} {end-to-end|militare} professionale"
    ]
  },
  pt: {
    titles: [
      "Threema Work 2025 - Mensagens {Seguras|Encriptadas|Protegidas} {Empresariais|Profissionais|Corporativas} | Privacidade {Máxima|Total|Absoluta}",
      "Threema Work {Profissional|Empresarial|Corporativo} - {Aplicação|Plataforma|Solução} de {Mensagens|Comunicação} {Segura|Encriptada|Protegida}"
    ],
    descriptions: [
      "Threema Work: A aplicação de {mensagens|comunicação} {empresarial|profissional|corporativa} mais {segura|protegida|privada} do mundo. {Encriptação|Criptografia} {end-to-end|militar|bancária}, {zero|nenhum} {log|registro|rastro}, privacidade {máxima|total|absoluta}.",
      "Descubra Threema Work, a {solução|aplicação|plataforma} de {comunicação|mensagens} {empresarial|profissional} com {tecnologia|encriptação|segurança} {suíça|europeia|avançada}."
    ],
    keywords: [
      "Threema Work mensagens {empresariais|profissionais|corporativas}, aplicação {segura|encriptada|protegida} {empresas|organizações}, {encriptação|criptografia} {end-to-end|militar} profissional"
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
function getThreemaWorkContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = threemaWorkSpintax[locale as keyof typeof threemaWorkSpintax] || threemaWorkSpintax.es;
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
export async function generateMetadata({ params: { locale } }: ThreemaWorkPageProps): Promise<Metadata> {
  const title = getThreemaWorkContent(locale, 'titles');
  const description = getThreemaWorkContent(locale, 'descriptions');
  const keywords = getThreemaWorkContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/threema-work` : `${baseUrl}/${locale}/apps/threema-work`;

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
          url: `${baseUrl}/images/apps/threema-work/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/threema-work/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/threema-work`,
        'en': `${baseUrl}/en/apps/threema-work`,
        'fr': `${baseUrl}/fr/apps/threema-work`,
        'it': `${baseUrl}/it/apps/threema-work`,
        'pt': `${baseUrl}/pt/apps/threema-work`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Threema Work',
      'product-category': 'Enterprise Messaging Application',
      'product-price': '45 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Digital Download'
    }
  };
}

// 🎯 STRUCTURED DATA PARA THREEMA WORK
function getThreemaWorkStructuredData(locale: string) {
  const description = getThreemaWorkContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Threema Work - Mensajería Empresarial Segura',
    en: 'Threema Work - Secure Enterprise Messaging',
    fr: 'Threema Work - Messagerie Sécurisée Entreprise',
    it: 'Threema Work - Messaggistica Aziendale Sicura',
    pt: 'Threema Work - Mensagens Empresariais Seguras'
  };

  const features = {
    es: [
      "Cifrado extremo a extremo",
      "Sin dependencia de números de teléfono",
      "Gestión centralizada",
      "Cumplimiento GDPR",
      "Servidores en Suiza"
    ],
    en: [
      "End-to-end encryption",
      "No phone number dependency", 
      "Centralized management",
      "GDPR compliance",
      "Swiss servers"
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
        "url": locale === 'es' ? `${baseUrl}/apps/threema-work` : `${baseUrl}/${locale}/apps/threema-work`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": {
          "@type": "Offer",
          "price": "45",
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
          "paymentMethodAccepted": ["Credit Card", "Bank Transfer", "Bitcoin", "Cryptocurrency", "Ethereum", "USDT"]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "892",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Threema GmbH"
        },
        "publisher": {
          "@type": "Organization", 
          "name": "Encriptados"
        },
        "featureList": productFeatures,
        "screenshot": `${baseUrl}/images/apps/threema-work/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/threema-work`,
        "installUrl": `${baseUrl}/apps/threema-work`,
        "softwareVersion": "4.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "Threema"
        },
        "category": locale === 'es' ? "Aplicaciones de Mensajería Empresarial" : "Enterprise Messaging Applications",
        "offers": {
          "@type": "Offer",
          "price": "45",
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
        }
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es Threema Work?" : "What is Threema Work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Threema Work es una aplicación de mensajería empresarial con cifrado extremo a extremo, diseñada específicamente para organizaciones que requieren máxima seguridad y privacidad."
                : "Threema Work is an enterprise messaging application with end-to-end encryption, designed specifically for organizations that require maximum security and privacy."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cuánto cuesta Threema Work?" : "How much does Threema Work cost?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "Threema Work tiene un precio desde 45$ USD por licencia. Aceptamos pagos con tarjeta de crédito, transferencia bancaria y criptomonedas como Bitcoin."
                : "Threema Work is priced from $45 USD per license. We accept payments via credit card, bank transfer, and cryptocurrencies like Bitcoin."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function ThreemaWorkPage({ params: { locale } }: ThreemaWorkPageProps) {
  const structuredData = getThreemaWorkStructuredData(locale);

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
      <link rel="preload" href="/images/apps/threema-work/banner.png" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getThreemaWorkContent(locale, 'titles')} />
        <meta itemProp="description" content={getThreemaWorkContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="BusinessApplication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="45" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <ThreemaWorkClient />
    </>
  );
}