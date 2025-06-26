// src/app/[locale]/distributors/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import DistributorsPage from './components/DistributorsPage';

interface DistributorsPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA DISTRIBUTORS
const distributorsSpintax = {
  es: {
    titles: [
      "Distributors 2025 - {Red|Sistema|Programa} de {Distribuidores|Partners|Revendedores} {Autorizados|Oficiales|Certificados} | {Productos|Dispositivos|Tecnología} {Encriptados|Cifrados|Seguros}",
      "Distributors {Encriptados|Seguros|Certificados} - {Programa|Sistema|Red} de {Distribución|Reventa|Partnership} para {Dispositivos|Productos|Tecnología} de {Alta Seguridad|Máxima Protección|Grado Militar}",
      "{Red|Sistema|Programa} Distributors {Autorizada|Oficial|Certificada} - {Distribuidores|Partners|Revendedores} {Especializados|Profesionales|Expertos} en {Tecnología|Dispositivos|Productos} {Encriptados|Cifrados|Seguros}",
      "Distributors {Programa|Sistema|Red} - {Oportunidades|Beneficios|Ventajas} de {Distribución|Reventa|Partnership} para {Celulares|Dispositivos|Productos} {Encriptados|Cifrados|Blindados} {Mundial|Internacional|Global}",
      "{Programa|Sistema|Red} Distributors {Profesional|Especializada|Certificada} - {Únete|Forma parte|Conviértete} como {Distribuidor|Partner|Revendedor} {Autorizado|Oficial|Certificado} de {Tecnología|Dispositivos|Productos} {Seguros|Encriptados|Protegidos}"
    ],
    descriptions: [
      "Distributors: {Programa|Sistema|Red} de {distribuidores|partners|revendedores} {autorizados|oficiales|certificados} para {productos|dispositivos|tecnología} {encriptados|cifrados|seguros}. {Únete|Forma parte|Conviértete} como {distribuidor|partner|revendedor} {especializado|profesional|experto} y {accede|obtén|consigue} a {beneficios|ventajas|oportunidades} {exclusivos|únicos|especiales}. {Soporte|Capacitación|Entrenamiento} {completo|total|integral} y {márgenes|comisiones|beneficios} {competitivos|atractivos|rentables}.",
      "Descubre Distributors, el {programa|sistema|red} de {distribución|partnership|reventa} más {completo|avanzado|profesional} para {dispositivos|productos|tecnología} {encriptados|cifrados|seguros}. {Oportunidades|Beneficios|Ventajas} {exclusivas|únicas|especiales} para {distribuidores|partners|revendedores} {autorizados|certificados|oficiales}. {Capacitación|Entrenamiento|Formación} {especializada|profesional|completa} y {soporte|apoyo|respaldo} {continuo|permanente|constante}.",
      "{Programa|Sistema|Red} de {distribuidores|partners|revendedores} {especializados|profesionales|expertos} en {tecnología|dispositivos|productos} {encriptados|cifrados|seguros} con Distributors. {Únete|Forma parte|Conviértete} a nuestra {red|sistema|programa} {global|mundial|internacional} y {aprovecha|obtén|consigue} {oportunidades|beneficios|ventajas} de {negocio|distribución|reventa} {únicas|exclusivas|especiales}. {Ideal|Perfecto|Diseñado} para {empresas|profesionales|emprendedores} que buscan {diversificar|expandir|crecer} su {portafolio|catálogo|oferta}.",
      "Distributors ofrece {oportunidades|beneficios|ventajas} {exclusivas|únicas|especiales} de {distribución|partnership|reventa} para {dispositivos|productos|tecnología} de {alta seguridad|máxima protección|grado militar}. {Red|Sistema|Programa} {global|mundial|internacional} de {distribuidores|partners|revendedores} {autorizados|certificados|oficiales} con {soporte|capacitación|entrenamiento} {completo|integral|profesional} y {márgenes|comisiones|beneficios} {competitivos|atractivos|rentables}."
    ],
    keywords: [
      "Distributors {programa|sistema|red} {distribuidores|partners|revendedores}, {distribución|reventa} {dispositivos|productos} {encriptados|cifrados|seguros}, {oportunidades|beneficios} {distribuidores|partners} {autorizados|certificados}, Distributors {únete|programa|sistema} {global|mundial|internacional}",
      "{programa|sistema|red} {distribución|partnership|reventa} {especializada|profesional} {tecnología|dispositivos} {seguros|encriptados}, {distribuidores|partners} {autorizados|certificados|oficiales} {celulares|dispositivos} encriptados, Distributors {capacitación|entrenamiento|soporte} {completo|integral|profesional}",
      "Distributors vs {competencia|otros programas} {distribución|partnership}, {programa|sistema} {distribuidores|partners} {España|Europa|mundial}, {oportunidades|beneficios} {distribución|reventa} {alta seguridad|tecnología encriptada}, Distributors {márgenes|comisiones|beneficios}"
    ]
  },
  en: {
    titles: [
      "Distributors 2025 - {Network|System|Program} of {Authorized|Official|Certified} {Distributors|Partners|Resellers} | {Encrypted|Secure|Protected} {Products|Devices|Technology}",
      "Distributors {Encrypted|Secure|Certified} - {Distribution|Resale|Partnership} {Program|System|Network} for {High-Security|Maximum-Protection|Military-Grade} {Devices|Products|Technology}",
      "{Authorized|Official|Certified} Distributors {Network|System|Program} - {Specialized|Professional|Expert} {Distributors|Partners|Resellers} in {Encrypted|Secure|Protected} {Technology|Devices|Products}",
      "Distributors {Program|System|Network} - {Distribution|Resale|Partnership} {Opportunities|Benefits|Advantages} for {Encrypted|Secure|Hardened} {Phones|Devices|Products} {Worldwide|International|Global}",
      "{Professional|Specialized|Certified} Distributors {Program|System|Network} - {Join|Become|Transform into} an {Authorized|Official|Certified} {Distributor|Partner|Reseller} of {Secure|Encrypted|Protected} {Technology|Devices|Products}"
    ],
    descriptions: [
      "Distributors: {Program|System|Network} of {authorized|official|certified} {distributors|partners|resellers} for {encrypted|secure|protected} {products|devices|technology}. {Join|Become|Transform into} a {specialized|professional|expert} {distributor|partner|reseller} and {access|obtain|get} {exclusive|unique|special} {benefits|advantages|opportunities}. {Complete|Total|Comprehensive} {support|training} and {competitive|attractive|profitable} {margins|commissions|benefits}.",
      "Discover Distributors, the most {complete|advanced|professional} {distribution|partnership|resale} {program|system|network} for {encrypted|secure|protected} {devices|products|technology}. {Exclusive|Unique|Special} {opportunities|benefits|advantages} for {authorized|certified|official} {distributors|partners|resellers}. {Specialized|Professional|Complete} {training} and {continuous|permanent|constant} {support|assistance|backing}.",
      "{Program|System|Network} of {specialized|professional|expert} {distributors|partners|resellers} in {encrypted|secure|protected} {technology|devices|products} with Distributors. {Join|Become part of|Transform into} our {global|worldwide|international} {network|system|program} and {leverage|obtain|get} {unique|exclusive|special} {business|distribution|resale} {opportunities|benefits|advantages}. {Ideal|Perfect|Designed} for {companies|professionals|entrepreneurs} looking to {diversify|expand|grow} their {portfolio|catalog|offering}.",
      "Distributors offers {exclusive|unique|special} {distribution|partnership|resale} {opportunities|benefits|advantages} for {high-security|maximum-protection|military-grade} {devices|products|technology}. {Global|Worldwide|International} {network|system|program} of {authorized|certified|official} {distributors|partners|resellers} with {complete|comprehensive|professional} {support|training} and {competitive|attractive|profitable} {margins|commissions|benefits}."
    ],
    keywords: [
      "Distributors {program|system|network} {distributors|partners|resellers}, {distribution|resale} {encrypted|secure|protected} {devices|products}, {opportunities|benefits} {authorized|certified} {distributors|partners}, Distributors {join|program|system} {global|worldwide|international}",
      "{specialized|professional} {distribution|partnership|resale} {program|system} {secure|encrypted} {technology|devices}, {authorized|certified|official} {distributors|partners} encrypted {phones|devices}, Distributors {complete|comprehensive|professional} {training|support}",
      "Distributors vs {competition|other programs} {distribution|partnership}, {distributors|partners} {program|system} {Spain|Europe|worldwide}, {distribution|resale} {opportunities|benefits} {high-security|encrypted technology}, Distributors {margins|commissions|benefits}"
    ]
  },
  fr: {
    titles: [
      "Distributors 2025 - {Réseau|Système|Programme} de {Distributeurs|Partenaires|Revendeurs} {Autorisés|Officiels|Certifiés} | {Produits|Appareils|Technologie} {Cryptés|Sécurisés|Protégés}",
      "Distributors {Cryptés|Sécurisés|Certifiés} - {Programme|Système|Réseau} de {Distribution|Revente|Partenariat} pour {Appareils|Produits|Technologie} de {Haute Sécurité|Protection Maximale|Grade Militaire}"
    ],
    descriptions: [
      "Distributors: {Programme|Système|Réseau} de {distributeurs|partenaires|revendeurs} {autorisés|officiels|certifiés} pour {produits|appareils|technologie} {cryptés|sécurisés|protégés}. {Rejoignez|Devenez|Transformez-vous en} {distributeur|partenaire|revendeur} {spécialisé|professionnel|expert} et {accédez|obtenez|bénéficiez} d'{avantages|opportunités|bénéfices} {exclusifs|uniques|spéciaux}.",
      "Découvrez Distributors, le {programme|système|réseau} de {distribution|partenariat|revente} le plus {complet|avancé|professionnel} pour {appareils|produits|technologie} {cryptés|sécurisés|protégés}. {Opportunités|Avantages|Bénéfices} {exclusives|uniques|spéciales} pour {distributeurs|partenaires|revendeurs} {autorisés|certifiés|officiels}."
    ],
    keywords: [
      "Distributors {programme|système|réseau} {distributeurs|partenaires|revendeurs}, {distribution|revente} {appareils|produits} {cryptés|sécurisés}, {opportunités|avantages} {distributeurs|partenaires} {autorisés|certifiés}"
    ]
  },
  it: {
    titles: [
      "Distributors 2025 - {Rete|Sistema|Programma} di {Distributori|Partner|Rivenditori} {Autorizzati|Ufficiali|Certificati} | {Prodotti|Dispositivi|Tecnologia} {Crittografati|Sicuri|Protetti}",
      "Distributors {Crittografati|Sicuri|Certificati} - {Programma|Sistema|Rete} di {Distribuzione|Rivendita|Partnership} per {Dispositivi|Prodotti|Tecnologia} ad {Alta Sicurezza|Massima Protezione|Grado Militare}"
    ],
    descriptions: [
      "Distributors: {Programma|Sistema|Rete} di {distributori|partner|rivenditori} {autorizzati|ufficiali|certificati} per {prodotti|dispositivi|tecnologia} {crittografati|sicuri|protetti}. {Unisciti|Diventa|Trasformati in} {distributore|partner|rivenditore} {specializzato|professionale|esperto} e {accedi|ottieni|beneficia} di {vantaggi|opportunità|benefici} {esclusivi|unici|speciali}.",
      "Scopri Distributors, il {programma|sistema|rete} di {distribuzione|partnership|rivendita} più {completo|avanzato|professionale} per {dispositivi|prodotti|tecnologia} {crittografati|sicuri|protetti}. {Opportunità|Vantaggi|Benefici} {esclusive|uniche|speciali} per {distributori|partner|rivenditori} {autorizzati|certificati|ufficiali}."
    ],
    keywords: [
      "Distributors {programma|sistema|rete} {distributori|partner|rivenditori}, {distribuzione|rivendita} {dispositivi|prodotti} {crittografati|sicuri}, {opportunità|vantaggi} {distributori|partner} {autorizzati|certificati}"
    ]
  },
  pt: {
    titles: [
      "Distributors 2025 - {Rede|Sistema|Programa} de {Distribuidores|Parceiros|Revendedores} {Autorizados|Oficiais|Certificados} | {Produtos|Dispositivos|Tecnologia} {Criptografados|Seguros|Protegidos}",
      "Distributors {Criptografados|Seguros|Certificados} - {Programa|Sistema|Rede} de {Distribuição|Revenda|Parceria} para {Dispositivos|Produtos|Tecnologia} de {Alta Segurança|Máxima Proteção|Grau Militar}"
    ],
    descriptions: [
      "Distributors: {Programa|Sistema|Rede} de {distribuidores|parceiros|revendedores} {autorizados|oficiais|certificados} para {produtos|dispositivos|tecnologia} {criptografados|seguros|protegidos}. {Junte-se|Torne-se|Transforme-se em} {distribuidor|parceiro|revendedor} {especializado|profissional|expert} e {acesse|obtenha|consiga} {vantagens|oportunidades|benefícios} {exclusivos|únicos|especiais}.",
      "Descubra Distributors, o {programa|sistema|rede} de {distribuição|parceria|revenda} mais {completo|avançado|profissional} para {dispositivos|produtos|tecnologia} {criptografados|seguros|protegidos}. {Oportunidades|Vantagens|Benefícios} {exclusivas|únicas|especiais} para {distribuidores|parceiros|revendedores} {autorizados|certificados|oficiais}."
    ],
    keywords: [
      "Distributors {programa|sistema|rede} {distribuidores|parceiros|revendedores}, {distribuição|revenda} {dispositivos|produtos} {criptografados|seguros}, {oportunidades|vantagens} {distribuidores|parceiros} {autorizados|certificados}"
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
function getDistributorsContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = distributorsSpintax[locale as keyof typeof distributorsSpintax] || distributorsSpintax.es;
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
export async function generateMetadata({ params: { locale } }: DistributorsPageProps): Promise<Metadata> {
  const title = getDistributorsContent(locale, 'titles');
  const description = getDistributorsContent(locale, 'descriptions');
  const keywords = getDistributorsContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/distributors` : `${baseUrl}/${locale}/distributors`;

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
          url: `${baseUrl}/images/distributors/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/distributors/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/distributors`,
        'en': `${baseUrl}/en/distributors`,
        'fr': `${baseUrl}/fr/distributors`,
        'it': `${baseUrl}/it/distributors`,
        'pt': `${baseUrl}/pt/distributors`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'program-name': 'Distributors Partner Network',
      'program-category': 'Authorized Distribution Program',
      'coverage': 'Worldwide',
      'partnership-type': 'Authorized Reseller',
      'support-level': 'Complete Training and Support',
      'product-category': 'Encrypted Security Devices',
      'program-benefits': 'Competitive Margins, Training, Support'
    }
  };
}

// 🎯 STRUCTURED DATA PARA DISTRIBUTORS
function getDistributorsStructuredData(locale: string) {
  const description = getDistributorsContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const programNames = {
    es: 'Distributors - Programa de Distribuidores Autorizados',
    en: 'Distributors - Authorized Distributors Program',
    fr: 'Distributors - Programme de Distributeurs Autorisés',
    it: 'Distributors - Programma Distributori Autorizzati',
    pt: 'Distributors - Programa de Distribuidores Autorizados'
  };

  const benefits = {
    es: [
      "Red global de distribuidores autorizados",
      "Capacitación especializada completa",
      "Soporte técnico y comercial continuo",
      "Márgenes competitivos y atractivos",
      "Productos de alta seguridad exclusivos",
      "Programa de certificación profesional"
    ],
    en: [
      "Global network of authorized distributors",
      "Complete specialized training",
      "Continuous technical and commercial support",
      "Competitive and attractive margins",
      "Exclusive high-security products",
      "Professional certification program"
    ]
  };

  const programName = programNames[locale as keyof typeof programNames] || programNames.es;
  const programBenefits = benefits[locale as keyof typeof benefits] || benefits.en;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": programName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/distributors` : `${baseUrl}/${locale}/distributors`,
        "serviceType": locale === 'es' ? "Programa de Distribución" : "Distribution Program",
        "provider": {
          "@type": "Organization",
          "name": "Encriptados",
          "url": baseUrl
        },
        "areaServed": {
          "@type": "Place",
          "name": locale === 'es' ? "Mundial" : "Worldwide"
        },
        "category": locale === 'es' ? "Programa de Partners" : "Partner Program",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": locale === 'es' ? "Oportunidades de Distribución" : "Distribution Opportunities",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": locale === 'es' ? "Distribuidor Autorizado" : "Authorized Distributor",
                "description": locale === 'es' ? "Programa completo de distribución con capacitación y soporte" : "Complete distribution program with training and support"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": locale === 'es' ? "Partner Especializado" : "Specialized Partner",
                "description": locale === 'es' ? "Partnership avanzado con beneficios exclusivos" : "Advanced partnership with exclusive benefits"
              }
            }
          ]
        },
        "additionalProperty": programBenefits.map(benefit => ({
          "@type": "PropertyValue",
          "name": "Benefit",
          "value": benefit
        }))
      },
      {
        "@type": "Organization",
        "name": "Distributors by Encriptados",
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/distributors` : `${baseUrl}/${locale}/distributors`,
        "logo": `${baseUrl}/images/distributors/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "partner relations",
          "availableLanguage": ["Spanish", "English", "French", "Italian", "Portuguese"]
        },
        "areaServed": "Worldwide",
        "serviceArea": {
          "@type": "Place",
          "name": "Global"
        },
        "memberOf": {
          "@type": "Organization",
          "name": "Encriptados"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es el programa Distributors?" : "What is the Distributors program?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Distributors es un programa de partners autorizados para la distribución de dispositivos encriptados y productos de alta seguridad. Ofrecemos capacitación especializada, soporte continuo y márgenes competitivos para distribuidores certificados."
                : "Distributors is an authorized partner program for distribution of encrypted devices and high-security products. We offer specialized training, continuous support, and competitive margins for certified distributors."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo puedo unirme al programa Distributors?" : "How can I join the Distributors program?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Para unirte al programa Distributors, debes cumplir ciertos requisitos como experiencia en el sector, capacidad de distribución y compromiso con la calidad. Contacta nuestro equipo de partners para iniciar el proceso de evaluación y certificación."
                : "To join the Distributors program, you must meet certain requirements such as industry experience, distribution capacity, and commitment to quality. Contact our partner team to start the evaluation and certification process."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué beneficios ofrece el programa?" : "What benefits does the program offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "El programa Distributors ofrece capacitación especializada, soporte técnico y comercial continuo, márgenes competitivos, acceso a productos exclusivos, materiales de marketing y certificación profesional. Además, formas parte de una red global de partners autorizados."
                : "The Distributors program offers specialized training, continuous technical and commercial support, competitive margins, access to exclusive products, marketing materials, and professional certification. Plus, you become part of a global network of authorized partners."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué productos puedo distribuir?" : "What products can I distribute?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Como distribuidor autorizado puedes comercializar toda la gama de productos Encriptados: celulares encriptados, dispositivos de alta seguridad, aplicaciones de mensajería segura y servicios especializados. Todos con soporte técnico completo y garantía oficial."
                : "As an authorized distributor you can commercialize the entire range of Encriptados products: encrypted phones, high-security devices, secure messaging applications, and specialized services. All with complete technical support and official warranty."
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
            "name": "Distributors",
            "item": locale === 'es' ? `${baseUrl}/distributors` : `${baseUrl}/${locale}/distributors`
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function DistributorsPageComponent({ params: { locale } }: DistributorsPageProps) {
  const structuredData = getDistributorsStructuredData(locale);
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
      <link rel="preload" href="/images/distributors/hero-banner.jpg" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/ProfessionalService" style={{ display: 'none' }}>
        <meta itemProp="name" content={getDistributorsContent(locale, 'titles')} />
        <meta itemProp="description" content={getDistributorsContent(locale, 'descriptions')} />
        <meta itemProp="serviceType" content="Distribution Program" />
        <meta itemProp="areaServed" content="Worldwide" />
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
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/distributors`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/distributors`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/distributors`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it/distributors`} />
      <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt/distributors`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/distributors`} />

      {/* 🎯 TU COMPONENTE ORIGINAL */}
      <DistributorsPage />
    </>
  );
}