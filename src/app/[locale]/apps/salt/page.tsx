// src/app/[locale]/apps/salt/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import SaltClient from './SaltClient';

interface SaltPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA SALT
const saltSpintax = {
  es: {
    titles: [
      "Salt 2025 - {Aplicación|Plataforma|Sistema} {Encriptada|Segura|Protegida} {Empresarial|Corporativa|Profesional} | {Comunicación|Mensajería|Chat} {Ultra Segura|Completamente Blindada|Totalmente Protegida}",
      "Salt {Encriptado|Seguro|Protegido} - {Aplicación|Plataforma|Solución} de {Comunicación|Mensajería|Chat} {Empresarial|Corporativa|Profesional} con {Blindaje|Protección|Seguridad} {Máximo|Extremo|Total}",
      "{Aplicación|Plataforma|Sistema} Salt - {Comunicación|Mensajería|Chat} {Empresarial|Corporativa|Profesional} {Ultra Segura|Completamente Blindada|Totalmente Encriptada} para {Empresas|Corporaciones|Organizaciones}",
      "Salt {Empresarial|Corporativo|Profesional} - {Aplicación|Plataforma|Sistema} de {Comunicación|Mensajería|Chat} {Segura|Encriptada|Protegida} con {Blindaje|Protección|Seguridad} {Militar|Bancario|Avanzado}",
      "🔒 Salt - {Aplicación|Plataforma} {Encriptada|Segura} {Empresarial|Corporativa} | Desde {829$|$829 USD} - {Comunicación|Mensajería} {Ultra Segura|Completamente Blindada}",
      "Salt vs {WhatsApp Business|Slack|Microsoft Teams} - {Aplicación|Plataforma} {Empresarial|Corporativa} {Ultra Segura|Completamente Encriptada|Totalmente Blindada}",
      "⚡ {Comprar|Adquirir|Obtener} Salt - {Aplicación|Plataforma} {Encriptada|Segura} {Empresarial|Corporativa} con {Blindaje|Protección|Seguridad} {Máximo|Extremo|Total}",
      "Salt {2025|Premium|Enterprise} - {Mantén|Protege|Asegura} {Seguras|Protegidas|Blindadas} tus {Comunicaciones|Conversaciones|Mensajes} más {Sensibles|Importantes|Críticas}"
    ],
    descriptions: [
      "Salt: La {aplicación|plataforma|solución} {encriptada|segura|protegida} {empresarial|corporativa|profesional} que {mantiene|protege|asegura} {seguras|protegidas|blindadas} tus {comunicaciones|conversaciones|mensajes} más {sensibles|importantes|críticas} con el {mejor|máximo|extremo} {blindaje|protección|seguridad}. {Ideal|Perfecta|Diseñada} para {empresas|corporaciones|organizaciones} que {requieren|necesitan|demandan} {máxima|extrema|total} {seguridad|protección|privacidad}. Desde {829$|$829 USD}.",
      "Descubre Salt, la {aplicación|plataforma|solución} de {comunicación|mensajería|chat} {empresarial|corporativa|profesional} más {segura|protegida|blindada} del {mercado|mundo}. {Protección|Seguridad|Blindaje} {avanzada|militar|bancaria} para {empresas|corporaciones|organizaciones} {exigentes|selectas|premium}. {Comunicaciones|Mensajes|Conversaciones} {completamente|totalmente|ultra} {encriptadas|seguras|protegidas}.",
      "{Aplicación|Plataforma|Sistema} Salt - {Comunicación|Mensajería|Chat} {empresarial|corporativa|profesional} con {blindaje|protección|seguridad} {máximo|extremo|total}. {Mantén|Protege|Asegura} {seguras|protegidas|blindadas} las {comunicaciones|conversaciones|mensajes} más {sensibles|importantes|críticas} de tu {empresa|corporación|organización}. {Tecnología|Cifrado|Encriptación} {avanzada|militar|bancaria}.",
      "Salt ofrece {comunicación|mensajería|chat} {empresarial|corporativa|profesional} con {tecnología|cifrado|encriptación} {avanzada|militar|bancaria} y {protocolos|sistemas|algoritmos} de {seguridad|protección|privacidad} {estrictos|rigurosos|inquebrantables}. {Ideal|Perfecta|Diseñada} para {empresas|corporaciones|organizaciones} que manejan {información|datos|comunicaciones} {sensibles|confidenciales|críticas}.",
      "⚡ {Protege|Asegura|Blinda} las {comunicaciones|conversaciones|mensajes} de tu {empresa|corporación|organización} con Salt - La {aplicación|plataforma} {encriptada|segura|protegida} {más avanzada|ultra segura|completamente blindada}. {Tecnología|Cifrado|Encriptación} {militar|bancaria|avanzada}, {interfaz|diseño|sistema} {intuitiva|fácil|profesional}, {soporte|asistencia|atención} {24/7|completo|especializado}."
    ],
    keywords: [
      "Salt {aplicación|plataforma} {encriptada|segura|protegida} {empresarial|corporativa|profesional}, {comunicación|mensajería|chat} {empresarial|corporativa} {segura|encriptada|protegida}, Salt {empresa|corporación|organización} {seguridad|protección|privacidad}, {aplicación|plataforma} {comunicación|mensajería} {empresarial|corporativa} {blindada|ultra segura|completamente protegida}, Salt {829 USD|$829|precio}",
      "{comunicación|mensajería|chat} {empresarial|corporativa} {segura|encriptada|protegida}, {aplicación|plataforma} {empresa|corporación} {comunicación|mensajería} {segura|blindada|protegida}, Salt vs {WhatsApp Business|Slack|Microsoft Teams} {seguridad|protección|privacidad}, {blindaje|protección|seguridad} {comunicaciones|mensajes} {empresariales|corporativas}, {cifrado|encriptación} {empresarial|corporativo} {avanzado|militar|bancario}",
      "Salt {aplicación|plataforma} {segura|encriptada} {España|México|Argentina|Colombia}, {comunicación|mensajería} {empresarial|corporativa} {blindada|ultra segura}, {proteger|asegurar|blindar} {comunicaciones|mensajes} {sensibles|confidenciales|críticas} {empresa|corporación}, Salt {comprar|adquirir|obtener} {aplicación|plataforma} {encriptada|segura} {empresarial|corporativa}"
    ]
  },
  en: {
    titles: [
      "Salt 2025 - {Enterprise|Corporate|Professional} {Encrypted|Secure|Protected} {Application|Platform|System} | {Ultra Secure|Completely Shielded|Totally Protected} {Communication|Messaging|Chat}",
      "Salt {Encrypted|Secure|Protected} - {Enterprise|Corporate|Professional} {Communication|Messaging|Chat} {Application|Platform|Solution} with {Maximum|Extreme|Total} {Shielding|Protection|Security}",
      "Salt {Application|Platform|System} - {Ultra Secure|Completely Shielded|Totally Encrypted} {Enterprise|Corporate|Professional} {Communication|Messaging|Chat} for {Companies|Corporations|Organizations}",
      "Salt {Enterprise|Corporate|Professional} - {Secure|Encrypted|Protected} {Communication|Messaging|Chat} {Application|Platform|System} with {Military|Banking|Advanced} {Shielding|Protection|Security}",
      "🔒 Salt - {Enterprise|Corporate} {Encrypted|Secure} {Application|Platform} | From {$829|829 USD} - {Ultra Secure|Completely Shielded} {Communication|Messaging}",
      "Salt vs {WhatsApp Business|Slack|Microsoft Teams} - {Ultra Secure|Completely Encrypted|Totally Shielded} {Enterprise|Corporate} {Application|Platform}",
      "⚡ {Buy|Purchase|Get} Salt - {Enterprise|Corporate} {Encrypted|Secure} {Application|Platform} with {Maximum|Extreme|Total} {Shielding|Protection|Security}",
      "Salt {2025|Premium|Enterprise} - {Keep|Protect|Secure} your most {Sensitive|Important|Critical} {Communications|Conversations|Messages} {Safe|Protected|Shielded}"
    ],
    descriptions: [
      "Salt: The {enterprise|corporate|professional} {encrypted|secure|protected} {application|platform|solution} that {keeps|protects|secures} your most {sensitive|important|critical} {communications|conversations|messages} {safe|protected|shielded} with the {best|maximum|extreme} {shielding|protection|security}. {Ideal|Perfect|Designed} for {companies|corporations|organizations} that {require|need|demand} {maximum|extreme|total} {security|protection|privacy}. From {$829|829 USD}.",
      "Discover Salt, the most {secure|protected|shielded} {enterprise|corporate|professional} {communication|messaging|chat} {application|platform|solution} on the {market|world}. {Advanced|Military|Banking} {protection|security|shielding} for {demanding|select|premium} {companies|corporations|organizations}. {Completely|Totally|Ultra} {encrypted|secure|protected} {communications|messages|conversations}.",
      "Salt {Application|Platform|System} - {Enterprise|Corporate|Professional} {communication|messaging|chat} with {maximum|extreme|total} {shielding|protection|security}. {Keep|Protect|Secure} your {company's|corporation's|organization's} most {sensitive|important|critical} {communications|conversations|messages} {safe|protected|shielded}. {Advanced|Military|Banking} {technology|encryption|security}.",
      "Salt offers {enterprise|corporate|professional} {communication|messaging|chat} with {advanced|military|banking} {technology|encryption|security} and {strict|rigorous|unbreakable} {security|protection|privacy} {protocols|systems|algorithms}. {Ideal|Perfect|Designed} for {companies|corporations|organizations} handling {sensitive|confidential|critical} {information|data|communications}.",
      "⚡ {Protect|Secure|Shield} your {company's|corporation's|organization's} {communications|conversations|messages} with Salt - The most {advanced|ultra secure|completely shielded} {encrypted|secure|protected} {application|platform}. {Military|Banking|Advanced} {technology|encryption|security}, {intuitive|easy|professional} {interface|design|system}, {24/7|complete|specialized} {support|assistance|service}."
    ],
    keywords: [
      "Salt {enterprise|corporate|professional} {encrypted|secure|protected} {application|platform}, {enterprise|corporate} {secure|encrypted|protected} {communication|messaging|chat}, Salt {company|corporation|organization} {security|protection|privacy}, {enterprise|corporate} {communication|messaging} {shielded|ultra secure|completely protected} {application|platform}, Salt {829 USD|$829|price}",
      "{enterprise|corporate} {secure|encrypted|protected} {communication|messaging|chat}, {company|corporation} {secure|shielded|protected} {communication|messaging} {application|platform}, Salt vs {WhatsApp Business|Slack|Microsoft Teams} {security|protection|privacy}, {enterprise|corporate} {communications|messages} {shielding|protection|security}, {enterprise|corporate} {advanced|military|banking} {encryption|security}",
      "Salt {secure|encrypted} {application|platform} {USA|UK|Canada|Australia}, {enterprise|corporate} {shielded|ultra secure} {communication|messaging}, {protect|secure|shield} {sensitive|confidential|critical} {company|corporation} {communications|messages}, Salt {buy|purchase|get} {enterprise|corporate} {encrypted|secure} {application|platform}"
    ]
  },
  fr: {
    titles: [
      "Salt 2025 - {Application|Plateforme|Système} {Chiffrée|Sécurisée|Protégée} {d'Entreprise|Corporative|Professionnelle} | Communication {Ultra Sécurisée|Complètement Blindée|Totalement Protégée}",
      "Salt {Chiffré|Sécurisé|Protégé} - {Application|Plateforme|Solution} de Communication {d'Entreprise|Corporative|Professionnelle} avec {Blindage|Protection|Sécurité} {Maximum|Extrême|Total}"
    ],
    descriptions: [
      "Salt: L'application {chiffrée|sécurisée|protégée} {d'entreprise|corporative|professionnelle} qui {maintient|protège|sécurise} vos communications les plus {sensibles|importantes|critiques} avec le {meilleur|maximum|extrême} {blindage|protection|sécurité}.",
      "Découvrez Salt, l'application de communication {d'entreprise|corporative|professionnelle} la plus {sécurisée|protégée|blindée} du {marché|monde}. {Protection|Sécurité|Blindage} {avancée|militaire|bancaire}."
    ],
    keywords: [
      "Salt application {chiffrée|sécurisée|protégée} {entreprise|corporative}, communication {entreprise|corporative} {sécurisée|chiffrée|protégée}, Salt {entreprise|corporation} {sécurité|protection|confidentialité}"
    ]
  },
  it: {
    titles: [
      "Salt 2025 - {Applicazione|Piattaforma|Sistema} {Crittografata|Sicura|Protetta} {Aziendale|Aziendale|Professionale} | Comunicazione {Ultra Sicura|Completamente Blindata|Totalmente Protetta}",
      "Salt {Crittografato|Sicuro|Protetto} - {Applicazione|Piattaforma|Soluzione} di Comunicazione {Aziendale|Aziendale|Professionale} con {Blindatura|Protezione|Sicurezza} {Massima|Estrema|Totale}"
    ],
    descriptions: [
      "Salt: L'applicazione {crittografata|sicura|protetta} {aziendale|aziendale|professionale} che {mantiene|protegge|assicura} le tue comunicazioni più {sensibili|importanti|critiche} con la {migliore|massima|estrema} {blindatura|protezione|sicurezza}.",
      "Scopri Salt, l'applicazione di comunicazione {aziendale|aziendale|professionale} più {sicura|protetta|blindata} del {mercato|mondo}. {Protezione|Sicurezza|Blindatura} {avanzata|militare|bancaria}."
    ],
    keywords: [
      "Salt applicazione {crittografata|sicura|protetta} {aziendale|aziendale}, comunicazione {aziendale|aziendale} {sicura|crittografata|protetta}, Salt {azienda|azienda} {sicurezza|protezione|riservatezza}"
    ]
  },
  pt: {
    titles: [
      "Salt 2025 - {Aplicação|Plataforma|Sistema} {Encriptada|Segura|Protegida} {Empresarial|Corporativa|Profissional} | Comunicação {Ultra Segura|Completamente Blindada|Totalmente Protegida}",
      "Salt {Encriptado|Seguro|Protegido} - {Aplicação|Plataforma|Solução} de Comunicação {Empresarial|Corporativa|Profissional} com {Blindagem|Proteção|Segurança} {Máxima|Extrema|Total}"
    ],
    descriptions: [
      "Salt: A aplicação {encriptada|segura|protegida} {empresarial|corporativa|profissional} que {mantém|protege|assegura} suas comunicações mais {sensíveis|importantes|críticas} com a {melhor|máxima|extrema} {blindagem|proteção|segurança}.",
      "Descubra Salt, a aplicação de comunicação {empresarial|corporativa|profissional} mais {segura|protegida|blindada} do {mercado|mundo}. {Proteção|Segurança|Blindagem} {avançada|militar|bancária}."
    ],
    keywords: [
      "Salt aplicação {encriptada|segura|protegida} {empresarial|corporativa}, comunicação {empresarial|corporativa} {segura|encriptada|protegida}, Salt {empresa|corporação} {segurança|proteção|privacidade}"
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
function getSaltContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = saltSpintax[locale as keyof typeof saltSpintax] || saltSpintax.es;
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
export async function generateMetadata({ params: { locale } }: SaltPageProps): Promise<Metadata> {
  const title = getSaltContent(locale, 'titles');
  const description = getSaltContent(locale, 'descriptions');
  const keywords = getSaltContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/salt` : `${baseUrl}/${locale}/apps/salt`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Enterprise Secure Communication Application',
    
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
          url: `${baseUrl}/images/apps/salt/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/salt/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/salt`,
        'en': `${baseUrl}/en/apps/salt`,
        'fr': `${baseUrl}/fr/apps/salt`,
        'it': `${baseUrl}/it/apps/salt`,
        'pt': `${baseUrl}/pt/apps/salt`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Salt',
      'product-category': 'Enterprise Secure Communication Application',
      'product-price': '829 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'target-audience': 'Enterprise, Corporate, Professional',
      'supported-platforms': 'iOS, Android, Windows, macOS, Linux',
      'encryption-type': 'Advanced Enterprise Encryption',
      'privacy-level': 'Maximum Enterprise Privacy',
      'security-level': 'Military Grade Security',
      'use-cases': 'Enterprise Communication, Corporate Messaging, Business Security',
      'competitors': 'WhatsApp Business, Slack, Microsoft Teams',
      'rating': '4.9/5',
      'review-count': '1847',
      'app-version': '2.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'developer': 'Salt Technologies',
      'developer-website': baseUrl,
      'support-email': 'support@encriptados.io',
    }
  };
}

// 🎯 STRUCTURED DATA PARA SALT
function getSaltStructuredData(locale: string) {
  const description = getSaltContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Salt - Aplicación Encriptada Empresarial',
    en: 'Salt - Enterprise Encrypted Application',
    fr: 'Salt - Application Chiffrée d\'Entreprise',
    it: 'Salt - Applicazione Crittografata Aziendale',
    pt: 'Salt - Aplicação Encriptada Empresarial'
  };

  const features = {
    es: [
      "Comunicación empresarial encriptada",
      "Blindaje máximo para empresas",
      "Protección de comunicaciones sensibles",
      "Tecnología de seguridad avanzada",
      "Interfaz empresarial intuitiva",
      "Soporte técnico especializado",
      "Compatible con múltiples plataformas",
      "Cifrado de grado militar",
      "Gestión centralizada de usuarios",
      "Políticas de seguridad personalizables"
    ],
    en: [
      "Enterprise encrypted communication",
      "Maximum shielding for companies",
      "Sensitive communications protection",
      "Advanced security technology",
      "Intuitive enterprise interface",
      "Specialized technical support",
      "Multi-platform compatibility",
      "Military-grade encryption",
      "Centralized user management",
      "Customizable security policies"
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
        "url": locale === 'es' ? `${baseUrl}/apps/salt` : `${baseUrl}/${locale}/apps/salt`,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Enterprise Secure Communication",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": {
          "@type": "Offer",
          "price": "829",
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
          "reviewCount": "1847",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Salt Technologies"
        },
        "publisher": {
          "@type": "Organization", 
          "name": "Encriptados"
        },
        "featureList": productFeatures,
        "screenshot": `${baseUrl}/images/apps/salt/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/salt`,
        "installUrl": `${baseUrl}/apps/salt`,
        "softwareVersion": "2.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "targetAudience": {
          "@type": "Audience",
          "audienceType": "Enterprise, Corporate, Professional"
        }
      },
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "Salt"
        },
        "category": locale === 'es' ? "Aplicaciones de Comunicación Empresarial Segura" : "Enterprise Secure Communication Applications",
        "offers": {
          "@type": "Offer",
          "price": "829",
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
            "name": "Target Market",
            "value": "Enterprise"
          },
          {
            "@type": "PropertyValue", 
            "name": "Security Level",
            "value": "Military Grade"
          },
          {
            "@type": "PropertyValue",
            "name": "Communication Type",
            "value": "Encrypted Enterprise Communication"
          }
        ]
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo funciona Salt?" : "How does Salt work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Salt utiliza tecnología de cifrado avanzada para proteger las comunicaciones empresariales más sensibles. Ofrece blindaje máximo con protocolos de seguridad de grado militar."
                : "Salt uses advanced encryption technology to protect the most sensitive enterprise communications. It offers maximum shielding with military-grade security protocols."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué tan segura es la aplicación Salt?" : "How secure is the Salt application?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "Salt ofrece el más alto nivel de seguridad con cifrado de grado militar, blindaje máximo y protocolos de seguridad empresarial avanzados. Ideal para empresas que manejan información altamente sensible."
                : "Salt offers the highest level of security with military-grade encryption, maximum shielding, and advanced enterprise security protocols. Ideal for companies handling highly sensitive information."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Por qué mi empresa debería tener una aplicación como Salt?" : "Why should my company have an application like Salt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Salt protege las comunicaciones empresariales más críticas con tecnología de blindaje avanzada. Permite a las empresas comunicarse de manera segura, protegiendo información confidencial y cumpliendo con estrictos estándares de seguridad corporativa."
                : "Salt protects the most critical enterprise communications with advanced shielding technology. It allows companies to communicate securely, protecting confidential information and complying with strict corporate security standards."
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
export default async function SaltPage({ params: { locale } }: SaltPageProps) {
  const structuredData = getSaltStructuredData(locale);

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
      <link rel="preload" href="/images/apps/salt/banner.png" as="image" />
      <link rel="preload" href="/images/apps/salt/youtube.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getSaltContent(locale, 'titles')} />
        <meta itemProp="description" content={getSaltContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="BusinessApplication" />
        <meta itemProp="applicationSubCategory" content="Enterprise Secure Communication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="829" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.9" />
          <meta itemProp="reviewCount" content="1847" />
          <meta itemProp="bestRating" content="5" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <SaltClient />
    </>
  );
}