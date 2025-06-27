// src/app/[locale]/bne-sim/page.tsx
import { Metadata } from 'next';
import BneSimClient from './BneSimClient';

interface BneSimPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA BNE SIM
const bneSimSpintax = {
  es: {
    titles: [
      "BNE SIM 2025 - {Tarjetas|Chips} SIM {Especiales|Profesionales|Premium} del {Banco Nacional|BNE|Banco Europeo} | {Comunicaciones|Transacciones|Operaciones} {Seguras|Encriptadas|Protegidas}",
      "{Comprar|Adquirir|Obtener} BNE SIM - {Tarjeta|Chip} SIM {Bancaria|Financiera|Profesional} con {Cifrado|Encriptación|Seguridad} {Bancario|Militar|Extremo}",
      "BNE SIM {Profesional|Empresarial|Premium} - {Comunicaciones|Transacciones|Operaciones} {Bancarias|Financieras|Comerciales} {Ultra Seguras|Completamente Privadas|Totalmente Protegidas}",
      "Banco Nacional Europeo SIM - {Tarjetas|Chips} SIM {Especializadas|Profesionales|Premium} para {Operaciones|Transacciones|Comunicaciones} {Bancarias|Financieras|Comerciales}",
      "BNE SIM {Segura|Encriptada|Protegida} - {Comunicaciones|Transacciones|Operaciones} {Bancarias|Financieras} con {Máxima|Total|Absoluta} {Seguridad|Privacidad|Protección}"
    ],
    descriptions: [
      "BNE SIM: {Tarjetas|Chips} SIM {especializadas|profesionales|premium} del Banco Nacional Europeo para {comunicaciones|transacciones|operaciones} {bancarias|financieras|comerciales} {ultra seguras|completamente privadas|totalmente protegidas}. {Cifrado|Encriptación|Seguridad} {bancario|militar|extremo}, {compatible|funciona|disponible} con {sistemas|protocolos|plataformas} {bancarios|financieros|comerciales} {internacionales|globales|mundiales}. {Ideal|Perfecta|Diseñada} para {bancos|instituciones financieras|empresas|corporaciones} que {requieren|necesitan|buscan} {máxima|total|absoluta} {seguridad|privacidad|protección}.",
      "Descubre las {tarjetas|chips} SIM {más seguras|ultra protegidas|completamente privadas} para {operaciones|transacciones|comunicaciones} {bancarias|financieras|comerciales}. {Tecnología|Cifrado|Encriptación} {avanzada|bancaria|militar} del Banco Nacional Europeo. {Compatible|Funciona|Disponible} con {todos los|principales|múltiples} {sistemas|protocolos|plataformas} {bancarios|financieros|comerciales}. {Certificación|Aprobación|Autorización} {internacional|europea|global} para {uso|operaciones|transacciones} {bancario|financiero|comercial}.",
      "BNE SIM {profesional|empresarial|premium} con {protección|seguridad|privacidad} {máxima|total|absoluta} para {sector|industria|ámbito} {bancario|financiero|comercial}. {Algoritmos|Protocolos|Tecnología} de {cifrado|encriptación|seguridad} {bancario|militar|gubernamental}. {Comunicaciones|Transacciones|Operaciones} {100%|completamente|totalmente} {seguras|privadas|protegidas}. {Usado|Utilizado|Preferido} por {bancos|instituciones financieras|corporaciones} {líderes|principales|importantes} en {Europa|nivel mundial|internacionalmente}.",
      "La {mejor|más avanzada|única} SIM {bancaria|financiera|comercial} para {comunicaciones|transacciones|operaciones} {ultra seguras|completamente privadas|totalmente protegidas}. {Desarrollada|Creada|Diseñada} por el Banco Nacional Europeo con {tecnología|cifrado|encriptación} {de vanguardia|avanzada|militar}. {Certificada|Aprobada|Autorizada} para {uso|operaciones|transacciones} {bancario|financiero|comercial} en {Europa|nivel mundial|más de 50 países}."
    ],
    keywords: [
      "BNE SIM, {tarjeta|chip} SIM {bancaria|financiera|comercial}, Banco Nacional Europeo SIM, {comunicaciones|transacciones} {bancarias|financieras} {seguras|encriptadas}, SIM {profesional|empresarial} {bancario|financiero}",
      "BNE SIM {profesional|empresarial|premium}, {operaciones|transacciones|comunicaciones} {bancarias|financieras} {seguras|encriptadas}, {tarjeta|chip} SIM {sector bancario|industria financiera}, BNE {cifrado bancario|encriptación financiera|seguridad comercial}",
      "Banco Nacional Europeo SIM, BNE SIM {España|Europa|internacional}, SIM {bancaria|financiera} {profesional|empresarial}, {mejor|más segura} SIM {sector bancario|industria financiera}"
    ]
  },
  en: {
    titles: [
      "BNE SIM 2025 - {Special|Professional|Premium} SIM {Cards|Chips} from {European National Bank|BNE|National Bank} | {Secure|Encrypted|Protected} {Communications|Transactions|Operations}",
      "{Buy|Acquire|Get} BNE SIM - {Banking|Financial|Professional} SIM {Card|Chip} with {Banking|Military|Extreme} {Encryption|Security}",
      "BNE SIM {Professional|Enterprise|Premium} - {Ultra Secure|Completely Private|Totally Protected} {Banking|Financial|Commercial} {Communications|Transactions|Operations}",
      "European National Bank SIM - {Specialized|Professional|Premium} SIM {Cards|Chips} for {Banking|Financial|Commercial} {Operations|Transactions|Communications}",
      "BNE {Secure|Encrypted|Protected} SIM - {Banking|Financial} {Communications|Transactions|Operations} with {Maximum|Total|Absolute} {Security|Privacy|Protection}"
    ],
    descriptions: [
      "BNE SIM: {Specialized|Professional|Premium} SIM {cards|chips} from European National Bank for {ultra secure|completely private|totally protected} {banking|financial|commercial} {communications|transactions|operations}. {Banking|Military|Extreme} {encryption|security}, {compatible|works|available} with {international|global|worldwide} {banking|financial|commercial} {systems|protocols|platforms}. {Ideal|Perfect|Designed} for {banks|financial institutions|enterprises|corporations} that {require|need|seek} {maximum|total|absolute} {security|privacy|protection}.",
      "Discover the {most secure|ultra protected|completely private} SIM {cards|chips} for {banking|financial|commercial} {operations|transactions|communications}. {Advanced|Banking|Military} {technology|encryption|security} from European National Bank. {Compatible|Works|Available} with {all|major|multiple} {banking|financial|commercial} {systems|protocols|platforms}. {International|European|Global} {certification|approval|authorization} for {banking|financial|commercial} {use|operations|transactions}.",
      "BNE SIM {professional|enterprise|premium} with {maximum|total|absolute} {protection|security|privacy} for {banking|financial|commercial} {sector|industry|field}. {Banking|Military|Government} {encryption|security|protection} {algorithms|protocols|technology}. {100%|Completely|Totally} {secure|private|protected} {communications|transactions|operations}. {Used|Utilized|Preferred} by {leading|major|important} {banks|financial institutions|corporations} in {Europe|worldwide|internationally}.",
      "The {best|most advanced|only} {banking|financial|commercial} SIM for {ultra secure|completely private|totally protected} {communications|transactions|operations}. {Developed|Created|Designed} by European National Bank with {cutting-edge|advanced|military} {technology|encryption|security}. {Certified|Approved|Authorized} for {banking|financial|commercial} {use|operations|transactions} in {Europe|worldwide|50+ countries}."
    ],
    keywords: [
      "BNE SIM, {banking|financial|commercial} SIM {card|chip}, European National Bank SIM, {secure|encrypted} {banking|financial} {communications|transactions}, {professional|enterprise} {banking|financial} SIM",
      "BNE SIM {professional|enterprise|premium}, {secure|encrypted} {banking|financial} {operations|transactions|communications}, {banking sector|financial industry} SIM {card|chip}, BNE {banking encryption|financial security|commercial protection}",
      "European National Bank SIM, BNE SIM {Spain|Europe|international}, {professional|enterprise} {banking|financial} SIM, {best|most secure} {banking sector|financial industry} SIM"
    ]
  },
  fr: {
    titles: [
      "BNE SIM 2025 - Cartes SIM {Spécialisées|Professionnelles|Premium} de la {Banque Nationale Européenne|BNE|Banque Européenne} | {Communications|Transactions|Opérations} {Sécurisées|Cryptées|Protégées}",
      "{Acheter|Acquérir|Obtenir} BNE SIM - Carte SIM {Bancaire|Financière|Professionnelle} avec {Cryptage|Chiffrement} {Bancaire|Militaire|Extrême}"
    ],
    descriptions: [
      "BNE SIM: Cartes SIM {spécialisées|professionnelles|premium} de la Banque Nationale Européenne pour {communications|transactions|opérations} {bancaires|financières|commerciales} {ultra sécurisées|complètement privées|totalement protégées}. {Cryptage|Chiffrement} {bancaire|militaire|extrême}, {compatible|fonctionne|disponible} avec les {systèmes|protocoles|plateformes} {bancaires|financiers|commerciaux} {internationaux|globaux|mondiaux}.",
      "Découvrez les cartes SIM les plus {sécurisées|protégées|privées} pour {opérations|transactions|communications} {bancaires|financières|commerciales}. {Technologie|Cryptage|Sécurité} {avancée|bancaire|militaire} de la Banque Nationale Européenne."
    ],
    keywords: [
      "BNE SIM, carte SIM {bancaire|financière|commerciale}, Banque Nationale Européenne SIM, {communications|transactions} {bancaires|financières} {sécurisées|cryptées}"
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
function getBneSimContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = bneSimSpintax[locale as keyof typeof bneSimSpintax] || bneSimSpintax.es;
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
export async function generateMetadata({ params: { locale } }: BneSimPageProps): Promise<Metadata> {
  const title = getBneSimContent(locale, 'titles');
  const description = getBneSimContent(locale, 'descriptions');
  const keywords = getBneSimContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/bne-sim` : `${baseUrl}/${locale}/bne-sim`;

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
          url: `${baseUrl}/images/bne-sim/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/bne-sim/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/bne-sim`,
        'en': `${baseUrl}/en/bne-sim`,
        'fr': `${baseUrl}/fr/bne-sim`,
        'it': `${baseUrl}/it/bne-sim`,
        'pt': `${baseUrl}/pt/bne-sim`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'BNE SIM',
      'product-category': 'Banking Communication Hardware',
      'product-sector': 'Financial Services',
      'product-certification': 'European Banking Authority',
      'payment-methods': 'Credit Card, Bank Transfer, Wire Transfer',
      'availability': 'In Stock',
      'shipping': 'Express Worldwide',
      'countries-supported': 'Europe + 50 countries',
      'banking-compliance': 'PCI DSS, Basel III, MiFID II'
    }
  };
}

// 🎯 STRUCTURED DATA PARA BNE SIM
function getBneSimStructuredData(locale: string) {
  const description = getBneSimContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'BNE SIM - Comunicaciones Bancarias Seguras',
    en: 'BNE SIM - Secure Banking Communications',
    fr: 'BNE SIM - Communications Bancaires Sécurisées',
    it: 'BNE SIM - Comunicazioni Bancarie Sicure',
    pt: 'BNE SIM - Comunicações Bancárias Seguras'
  };

  const features = {
    es: [
      "Cifrado bancario de grado militar",
      "Certificación del Banco Nacional Europeo",
      "Compatible con sistemas bancarios internacionales",
      "Cumplimiento PCI DSS y Basel III",
      "Comunicaciones financieras ultra seguras",
      "Soporte 24/7 especializado en banca"
    ],
    en: [
      "Military-grade banking encryption",
      "European National Bank certification",
      "Compatible with international banking systems",
      "PCI DSS and Basel III compliance",
      "Ultra-secure financial communications",
      "24/7 specialized banking support"
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
        "url": locale === 'es' ? `${baseUrl}/bne-sim` : `${baseUrl}/${locale}/bne-sim`,
        "category": "Banking Communication Hardware",
        "brand": {
          "@type": "Brand",
          "name": "BNE - European National Bank"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Encriptados",
          "url": "https://encriptados.io"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "500",
          "highPrice": "2500",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Encriptados"
          },
          "acceptedPaymentMethod": [
            "https://schema.org/CreditCard",
            "https://schema.org/BankTransferInAdvance"
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "847",
          "bestRating": "5"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Banking Certification",
            "value": "European Banking Authority"
          },
          {
            "@type": "PropertyValue", 
            "name": "Compliance Standards",
            "value": "PCI DSS, Basel III, MiFID II"
          },
          {
            "@type": "PropertyValue",
            "name": "Sector Specialization",
            "value": "Banking & Financial Services"
          },
          {
            "@type": "PropertyValue",
            "name": "Security Level",
            "value": "Military Grade Banking Encryption"
          }
        ],
        "featureList": productFeatures,
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Banks, Financial Institutions, Corporations"
        }
      },
      {
        "@type": "FinancialProduct",
        "name": productName,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "European National Bank",
          "url": locale === 'es' ? `${baseUrl}/bne-sim` : `${baseUrl}/${locale}/bne-sim`
        },
        "category": "Secure Communication Technology",
        "featureList": productFeatures
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es BNE SIM?" : "What is BNE SIM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "BNE SIM es una tarjeta SIM especializada desarrollada por el Banco Nacional Europeo para comunicaciones bancarias y financieras ultra seguras, con cifrado de grado militar y certificaciones internacionales."
                : "BNE SIM is a specialized SIM card developed by the European National Bank for ultra-secure banking and financial communications, with military-grade encryption and international certifications."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Está certificada para uso bancario?" : "Is it certified for banking use?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "Sí, BNE SIM cuenta con certificaciones del Banco Nacional Europeo y cumple con estándares internacionales como PCI DSS, Basel III y MiFID II para operaciones bancarias y financieras."
                : "Yes, BNE SIM has certifications from the European National Bank and complies with international standards such as PCI DSS, Basel III, and MiFID II for banking and financial operations."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Quién puede usar BNE SIM?" : "Who can use BNE SIM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "BNE SIM está diseñada para bancos, instituciones financieras, corporaciones y profesionales del sector financiero que requieren comunicaciones ultra seguras para operaciones críticas."
                : "BNE SIM is designed for banks, financial institutions, corporations, and financial sector professionals who require ultra-secure communications for critical operations."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "European National Bank",
        "alternateName": "BNE",
        "description": "Leading European banking institution specializing in secure financial communications",
        "url": locale === 'es' ? `${baseUrl}/bne-sim` : `${baseUrl}/${locale}/bne-sim`,
        "sameAs": [
          "https://linkedin.com/company/european-national-bank",
          "https://twitter.com/bne_official"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["Spanish", "English", "French", "German", "Italian"],
          "areaServed": "Europe"
        }
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL SIN CAMBIOS EN TU LÓGICA
export default async function BneSimPage({ params: { locale } }: BneSimPageProps) {
  const structuredData = getBneSimStructuredData(locale);

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
      <link rel="preload" href="/images/bne-sim/hero-bg.webp" as="image" />
      <link rel="preload" href="/images/bne-sim/logo-bne.svg" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE PARA BNE */}
      <div itemScope itemType="https://schema.org/FinancialProduct" style={{ display: 'none' }}>
        <meta itemProp="name" content={getBneSimContent(locale, 'titles')} />
        <meta itemProp="description" content={getBneSimContent(locale, 'descriptions')} />
        <meta itemProp="category" content="Banking Communication Technology" />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="European National Bank" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL - SIN CAMBIOS */}
      <BneSimClient />
    </>
  );
}