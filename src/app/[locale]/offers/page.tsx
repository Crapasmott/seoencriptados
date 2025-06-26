// src/app/[locale]/offers/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import OffersBanner from "./components/OffersBanner";
import ListOfOffers from "./components/ListOfOffers";
import { BasicFormProvider } from "@/shared/components/BasicFormProvider";
import CardSection from "./components/CardSection";

interface OffersPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA OFFERS
const offersSpintax = {
  es: {
    titles: [
      "Offers 2025 - {Ofertas|Promociones|Descuentos} {Especiales|Exclusivas|Limitadas} en {Dispositivos|Productos|Tecnología} {Encriptados|Cifrados|Seguros} | {SIMs|Planes|Servicios} {Seguros|Encriptados|Protegidos}",
      "Offers {Encriptados|Seguros|Especiales} - {Ofertas|Promociones|Descuentos} {Exclusivas|Limitadas|Temporales} para {Celulares|Dispositivos|Productos} de {Alta Seguridad|Máxima Protección|Grado Militar}",
      "{Ofertas|Promociones|Descuentos} {Especiales|Exclusivas|Limitadas} Offers - {Precios|Tarifas|Costos} {Reducidos|Especiales|Promocionales} en {Tecnología|Dispositivos|Productos} {Encriptados|Cifrados|Seguros}",
      "Offers {Promociones|Descuentos|Ofertas} - {SIMs|Planes|Servicios} {Seguros|Encriptados|Protegidos} con {Precios|Tarifas|Costos} {Especiales|Promocionales|Reducidos} {Limitados|Temporales|Exclusivos}",
      "{Promociones|Ofertas|Descuentos} Offers {Exclusivas|Especiales|Limitadas} - {Aprovecha|Obtén|Consigue} {Precios|Tarifas|Costos} {Únicos|Especiales|Promocionales} en {Dispositivos|Productos|Tecnología} {Seguros|Encriptados|Blindados}"
    ],
    descriptions: [
      "Offers Encriptados: {Ofertas|Promociones|Descuentos} {especiales|exclusivas|limitadas} en {dispositivos|productos|tecnología} {encriptados|cifrados|seguros}. {SIMs|Planes|Servicios} {seguros|encriptados|protegidos} con {precios|tarifas|costos} {promocionales|reducidos|especiales}. {Aprovecha|Obtén|Consigue} {descuentos|ofertas|promociones} {únicos|exclusivos|limitados} en {celulares|dispositivos|productos} de {alta seguridad|máxima protección|grado militar}. {Ofertas|Promociones|Descuentos} {temporales|limitadas|por tiempo limitado}.",
      "Descubre nuestras {ofertas|promociones|descuentos} {especiales|exclusivas|limitadas} en {dispositivos|productos|tecnología} {encriptados|cifrados|seguros}. {Precios|Tarifas|Costos} {promocionales|reducidos|especiales} en {SIMs|planes|servicios} {seguros|encriptados|protegidos}, {celulares|dispositivos|productos} {blindados|protegidos|seguros} y {aplicaciones|software|herramientas} de {seguridad|privacidad|protección}. {Ofertas|Promociones|Descuentos} {por tiempo limitado|temporales|exclusivas}.",
      "{Ofertas|Promociones|Descuentos} {especiales|exclusivas|limitadas} en {tecnología|dispositivos|productos} de {seguridad|privacidad|protección} con Offers. {Aprovecha|Obtén|Consigue} {precios|tarifas|costos} {únicos|promocionales|reducidos} en {SIMs|planes|servicios} {seguros|encriptados|protegidos} y {dispositivos|productos|tecnología} {encriptados|cifrados|blindados}. {Ideal|Perfecto|Diseñado} para {profesionales|empresas|usuarios} que buscan {seguridad|privacidad|protección} a {precios|costos|tarifas} {accesibles|competitivos|especiales}.",
      "Offers presenta {promociones|ofertas|descuentos} {exclusivas|especiales|limitadas} en {dispositivos|productos|tecnología} de {alta seguridad|máxima protección|grado militar}. {SIMs|Planes|Servicios} {seguros|encriptados|protegidos} con {descuentos|ofertas|promociones} {significativos|importantes|sustanciales}. {Precios|Tarifas|Costos} {especiales|promocionales|reducidos} {por tiempo limitado|temporales|exclusivos} en toda nuestra {gama|catálogo|selección} de {productos|dispositivos|soluciones} {seguros|encriptados|protegidos}."
    ],
    keywords: [
      "Offers {ofertas|promociones|descuentos} {dispositivos|productos} {encriptados|cifrados|seguros}, {SIMs|planes|servicios} {seguros|encriptados} {ofertas|promociones|descuentos}, {precios|tarifas} {especiales|promocionales|reducidos} {tecnología|dispositivos} seguridad, Offers {ofertas|promociones} {limitadas|exclusivas|temporales}",
      "{ofertas|promociones|descuentos} {especiales|exclusivas} {celulares|dispositivos} {encriptados|seguros}, {precios|tarifas} {promocionales|reducidos} {alta seguridad|máxima protección}, Offers {SIMs|planes} {seguros|encriptados} {descuentos|ofertas|promociones}, {tecnología|dispositivos} {seguros|encriptados} {ofertas|promociones}",
      "Offers vs {competencia|otros} {ofertas|promociones|descuentos}, {ofertas|promociones} {dispositivos|productos} {seguros|encriptados} {España|Europa|mundial}, {descuentos|ofertas} {SIMs|planes|servicios} {seguros|encriptados}, Offers {precios|tarifas} {especiales|promocionales}"
    ]
  },
  en: {
    titles: [
      "Offers 2025 - {Special|Exclusive|Limited} {Offers|Promotions|Discounts} on {Encrypted|Secure|Protected} {Devices|Products|Technology} | {Secure|Encrypted|Protected} {SIMs|Plans|Services}",
      "Offers {Encrypted|Secure|Special} - {Exclusive|Limited|Temporary} {Offers|Promotions|Discounts} for {High-Security|Maximum-Protection|Military-Grade} {Phones|Devices|Products}",
      "{Special|Exclusive|Limited} {Offers|Promotions|Discounts} Offers - {Reduced|Special|Promotional} {Prices|Rates|Costs} on {Encrypted|Secure|Protected} {Technology|Devices|Products}",
      "Offers {Promotions|Discounts|Offers} - {Secure|Encrypted|Protected} {SIMs|Plans|Services} with {Special|Promotional|Reduced} {Limited|Temporary|Exclusive} {Prices|Rates|Costs}",
      "{Exclusive|Special|Limited} Offers {Promotions|Discounts|Deals} - {Take advantage|Get|Obtain} {Unique|Special|Promotional} {Prices|Rates|Costs} on {Secure|Encrypted|Hardened} {Devices|Products|Technology}"
    ],
    descriptions: [
      "Encriptados Offers: {Special|Exclusive|Limited} {offers|promotions|discounts} on {encrypted|secure|protected} {devices|products|technology}. {Secure|Encrypted|Protected} {SIMs|plans|services} with {promotional|reduced|special} {prices|rates|costs}. {Take advantage|Get|Obtain} {unique|exclusive|limited} {discounts|offers|promotions} on {high-security|maximum-protection|military-grade} {phones|devices|products}. {Temporary|Limited|Time-limited} {offers|promotions|discounts}.",
      "Discover our {special|exclusive|limited} {offers|promotions|discounts} on {encrypted|secure|protected} {devices|products|technology}. {Promotional|Reduced|Special} {prices|rates|costs} on {secure|encrypted|protected} {SIMs|plans|services}, {hardened|protected|secure} {phones|devices|products} and {security|privacy|protection} {applications|software|tools}. {Time-limited|Temporary|Exclusive} {offers|promotions|discounts}.",
      "{Special|Exclusive|Limited} {offers|promotions|discounts} on {security|privacy|protection} {technology|devices|products} with Offers. {Take advantage|Get|Obtain} {unique|promotional|reduced} {prices|rates|costs} on {secure|encrypted|protected} {SIMs|plans|services} and {encrypted|secure|hardened} {devices|products|technology}. {Ideal|Perfect|Designed} for {professionals|companies|users} seeking {security|privacy|protection} at {accessible|competitive|special} {prices|costs|rates}.",
      "Offers presents {exclusive|special|limited} {promotions|offers|discounts} on {high-security|maximum-protection|military-grade} {devices|products|technology}. {Secure|Encrypted|Protected} {SIMs|plans|services} with {significant|important|substantial} {discounts|offers|promotions}. {Special|Promotional|Reduced} {prices|rates|costs} {time-limited|temporary|exclusive} on our entire {range|catalog|selection} of {secure|encrypted|protected} {products|devices|solutions}."
    ],
    keywords: [
      "Offers {offers|promotions|discounts} {encrypted|secure|protected} {devices|products}, {secure|encrypted} {SIMs|plans|services} {offers|promotions|discounts}, {special|promotional|reduced} {prices|rates} security {technology|devices}, Offers {limited|exclusive|temporary} {offers|promotions}",
      "{special|exclusive} {offers|promotions|discounts} {encrypted|secure} {phones|devices}, {promotional|reduced} {prices|rates} {high-security|maximum-protection}, Offers {secure|encrypted} {SIMs|plans} {discounts|offers|promotions}, {secure|encrypted} {technology|devices} {offers|promotions}",
      "Offers vs {competition|others} {offers|promotions|discounts}, {secure|encrypted} {devices|products} {offers|promotions} {Spain|Europe|worldwide}, {secure|encrypted} {SIMs|plans|services} {discounts|offers}, Offers {special|promotional} {prices|rates}"
    ]
  },
  fr: {
    titles: [
      "Offers 2025 - {Offres|Promotions|Réductions} {Spéciales|Exclusives|Limitées} sur les {Appareils|Produits|Technologie} {Cryptés|Sécurisés|Protégés} | {SIMs|Plans|Services} {Sécurisés|Cryptés|Protégés}",
      "Offers {Cryptées|Sécurisées|Spéciales} - {Offres|Promotions|Réductions} {Exclusives|Limitées|Temporaires} pour {Appareils|Produits|Technologie} de {Haute Sécurité|Protection Maximale|Grade Militaire}"
    ],
    descriptions: [
      "Offers Encriptados: {Offres|Promotions|Réductions} {spéciales|exclusives|limitées} sur les {appareils|produits|technologie} {cryptés|sécurisés|protégés}. {SIMs|Plans|Services} {sécurisés|cryptés|protégés} avec {prix|tarifs|coûts} {promotionnels|réduits|spéciaux}. {Profitez|Obtenez|Bénéficiez} de {réductions|offres|promotions} {uniques|exclusives|limitées}.",
      "Découvrez nos {offres|promotions|réductions} {spéciales|exclusives|limitées} sur les {appareils|produits|technologie} {cryptés|sécurisés|protégés}. {Prix|Tarifs|Coûts} {promotionnels|réduits|spéciaux} sur les {SIMs|plans|services} {sécurisés|cryptés|protégés}."
    ],
    keywords: [
      "Offers {offres|promotions|réductions} {appareils|produits} {cryptés|sécurisés}, {SIMs|plans|services} {sécurisés|cryptés} {offres|promotions}, {prix|tarifs} {spéciaux|promotionnels} technologie sécurité"
    ]
  },
  it: {
    titles: [
      "Offers 2025 - {Offerte|Promozioni|Sconti} {Speciali|Esclusive|Limitate} su {Dispositivi|Prodotti|Tecnologia} {Crittografati|Sicuri|Protetti} | {SIMs|Piani|Servizi} {Sicuri|Crittografati|Protetti}",
      "Offers {Crittografate|Sicure|Speciali} - {Offerte|Promozioni|Sconti} {Esclusive|Limitate|Temporanee} per {Dispositivi|Prodotti|Tecnologia} ad {Alta Sicurezza|Massima Protezione|Grado Militare}"
    ],
    descriptions: [
      "Offers Encriptados: {Offerte|Promozioni|Sconti} {speciali|esclusive|limitate} su {dispositivi|prodotti|tecnologia} {crittografati|sicuri|protetti}. {SIMs|Piani|Servizi} {sicuri|crittografati|protetti} con {prezzi|tariffe|costi} {promozionali|ridotti|speciali}. {Approfitta|Ottieni|Beneficia} di {sconti|offerte|promozioni} {uniche|esclusive|limitate}.",
      "Scopri le nostre {offerte|promozioni|sconti} {speciali|esclusive|limitate} su {dispositivi|prodotti|tecnologia} {crittografati|sicuri|protetti}. {Prezzi|Tariffe|Costi} {promozionali|ridotti|speciali} su {SIMs|piani|servizi} {sicuri|crittografati|protetti}."
    ],
    keywords: [
      "Offers {offerte|promozioni|sconti} {dispositivi|prodotti} {crittografati|sicuri}, {SIMs|piani|servizi} {sicuri|crittografati} {offerte|promozioni}, {prezzi|tariffe} {speciali|promozionali} tecnologia sicurezza"
    ]
  },
  pt: {
    titles: [
      "Offers 2025 - {Ofertas|Promoções|Descontos} {Especiais|Exclusivas|Limitadas} em {Dispositivos|Produtos|Tecnologia} {Criptografados|Seguros|Protegidos} | {SIMs|Planos|Serviços} {Seguros|Criptografados|Protegidos}",
      "Offers {Criptografadas|Seguras|Especiais} - {Ofertas|Promoções|Descontos} {Exclusivas|Limitadas|Temporárias} para {Dispositivos|Produtos|Tecnologia} de {Alta Segurança|Máxima Proteção|Grau Militar}"
    ],
    descriptions: [
      "Offers Encriptados: {Ofertas|Promoções|Descontos} {especiais|exclusivas|limitadas} em {dispositivos|produtos|tecnologia} {criptografados|seguros|protegidos}. {SIMs|Planos|Serviços} {seguros|criptografados|protegidos} com {preços|tarifas|custos} {promocionais|reduzidos|especiais}. {Aproveite|Obtenha|Consiga} {descontos|ofertas|promoções} {únicos|exclusivos|limitados}.",
      "Descubra nossas {ofertas|promoções|descontos} {especiais|exclusivas|limitadas} em {dispositivos|produtos|tecnologia} {criptografados|seguros|protegidos}. {Preços|Tarifas|Custos} {promocionais|reduzidos|especiais} em {SIMs|planos|serviços} {seguros|criptografados|protegidos}."
    ],
    keywords: [
      "Offers {ofertas|promoções|descontos} {dispositivos|produtos} {criptografados|seguros}, {SIMs|planos|serviços} {seguros|criptografados} {ofertas|promoções}, {preços|tarifas} {especiais|promocionais} tecnologia segurança"
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
function getOffersContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = offersSpintax[locale as keyof typeof offersSpintax] || offersSpintax.es;
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
export async function generateMetadata({ params: { locale } }: OffersPageProps): Promise<Metadata> {
  const title = getOffersContent(locale, 'titles');
  const description = getOffersContent(locale, 'descriptions');
  const keywords = getOffersContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/offers` : `${baseUrl}/${locale}/offers`;

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
          url: `${baseUrl}/images/offers/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/offers/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/offers`,
        'en': `${baseUrl}/en/offers`,
        'fr': `${baseUrl}/fr/offers`,
        'it': `${baseUrl}/it/offers`,
        'pt': `${baseUrl}/pt/offers`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'page-type': 'Special Offers',
      'offer-category': 'Encrypted Security Products',
      'promotion-type': 'Limited Time Offers',
      'product-focus': 'Secure SIMs, Encrypted Devices, Security Services',
      'discount-availability': 'Exclusive Promotions',
      'target-audience': 'Security-Conscious Customers',
      'offer-validity': 'Limited Time Exclusive Deals'
    }
  };
}

// 🎯 STRUCTURED DATA PARA OFFERS
function getOffersStructuredData(locale: string) {
  const description = getOffersContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const offerNames = {
    es: 'Offers Encriptados - Ofertas Especiales en Seguridad Digital',
    en: 'Encriptados Offers - Special Deals on Digital Security',
    fr: 'Offers Encriptados - Offres Spéciales Sécurité Numérique',
    it: 'Offers Encriptados - Offerte Speciali Sicurezza Digitale',
    pt: 'Offers Encriptados - Ofertas Especiais Segurança Digital'
  };

  const offerTypes = {
    es: [
      "SIMs seguros con descuentos especiales",
      "Dispositivos encriptados en promoción",
      "Planes de seguridad con precios reducidos",
      "Aplicaciones seguras con ofertas limitadas",
      "Servicios de privacidad con descuentos exclusivos",
      "Paquetes de seguridad integral"
    ],
    en: [
      "Secure SIMs with special discounts",
      "Encrypted devices on promotion",
      "Security plans with reduced prices",
      "Secure applications with limited offers",
      "Privacy services with exclusive discounts",
      "Comprehensive security packages"
    ]
  };

  const offerName = offerNames[locale as keyof typeof offerNames] || offerNames.es;
  const availableOffers = offerTypes[locale as keyof typeof offerTypes] || offerTypes.en;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": offerName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/offers` : `${baseUrl}/${locale}/offers`,
        "publisher": {
          "@type": "Organization",
          "name": "Encriptados",
          "url": baseUrl
        },
        "mainEntity": {
          "@type": "OfferCatalog",
          "name": locale === 'es' ? "Ofertas Especiales Encriptados" : "Encriptados Special Offers",
          "description": description,
          "itemListElement": availableOffers.map((offer) => ({
            "@type": "Offer",
            "name": offer,
            "description": offer,
            "seller": {
              "@type": "Organization",
              "name": "Encriptados"
            },
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "USD",
              "eligibleQuantity": {
                "@type": "QuantitativeValue",
                "minValue": 1
              }
            },
            "validFrom": new Date().toISOString(),
            "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
          }))
        }
      },
      {
        "@type": "Organization",
        "name": "Encriptados Offers",
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/offers` : `${baseUrl}/${locale}/offers`,
        "logo": `${baseUrl}/images/offers/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "availableLanguage": ["Spanish", "English", "French", "Italian", "Portuguese"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": locale === 'es' ? "Catálogo de Ofertas Especiales" : "Special Offers Catalog",
          "description": locale === 'es' ? "Ofertas exclusivas en productos de seguridad digital" : "Exclusive offers on digital security products"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué tipo de ofertas están disponibles?" : "What type of offers are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Ofrecemos descuentos especiales en SIMs seguros, dispositivos encriptados, planes de seguridad, aplicaciones protegidas y servicios de privacidad. Todas nuestras ofertas son por tiempo limitado y exclusivas para clientes de Encriptados."
                : "We offer special discounts on secure SIMs, encrypted devices, security plans, protected applications, and privacy services. All our offers are time-limited and exclusive to Encriptados customers."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Por cuánto tiempo son válidas las ofertas?" : "How long are the offers valid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Nuestras ofertas son por tiempo limitado y varían según el producto. Algunas son promociones mensuales, otras trimestrales. Te recomendamos aprovechar las ofertas disponibles ya que son exclusivas y pueden cambiar sin previo aviso."
                : "Our offers are time-limited and vary by product. Some are monthly promotions, others quarterly. We recommend taking advantage of available offers as they are exclusive and may change without notice."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo puedo acceder a las ofertas especiales?" : "How can I access the special offers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Puedes acceder a nuestras ofertas especiales directamente desde esta página, contactando nuestro equipo de ventas o suscribiéndote a nuestro boletín para recibir notificaciones de nuevas promociones y descuentos exclusivos."
                : "You can access our special offers directly from this page, by contacting our sales team, or by subscribing to our newsletter to receive notifications of new promotions and exclusive discounts."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Se pueden combinar las ofertas?" : "Can offers be combined?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "La combinación de ofertas depende de los términos específicos de cada promoción. Algunas ofertas pueden combinarse para obtener mayores descuentos, mientras que otras son exclusivas. Consulta con nuestro equipo para conocer las opciones disponibles."
                : "Combining offers depends on the specific terms of each promotion. Some offers can be combined for greater discounts, while others are exclusive. Check with our team to know the available options."
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
            "name": "Offers",
            "item": locale === 'es' ? `${baseUrl}/offers` : `${baseUrl}/${locale}/offers`
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function OffersPageComponent({ params: { locale } }: OffersPageProps) {
  const structuredData = getOffersStructuredData(locale);
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
      <link rel="preload" href="/images/offers/hero-banner.jpg" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/OfferCatalog" style={{ display: 'none' }}>
        <meta itemProp="name" content={getOffersContent(locale, 'titles')} />
        <meta itemProp="description" content={getOffersContent(locale, 'descriptions')} />
        <meta itemProp="keywords" content={getOffersContent(locale, 'keywords')} />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Encriptados" />
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
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/offers`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/offers`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/offers`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it/offers`} />
      <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt/offers`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/offers`} />

      {/* 🎯 TUS COMPONENTES ORIGINALES */}
      <BasicFormProvider defaultValue={{ currentoffer: "sims" }}>
        <OffersBanner />
        <div className="w-full bg-gradient-to-b from-[#00372B] via-black to-[#022530] flex justify-center items-center py-10 md:py-16 px-4">
          <div>
            <ListOfOffers />
            <CardSection />
          </div>
        </div>
      </BasicFormProvider>
    </>
  );
}