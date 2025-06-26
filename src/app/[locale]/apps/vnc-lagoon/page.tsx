// src/app/[locale]/apps/vnc-lagoon/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import VNCLagoonClient from './VNCLagoonClient';

interface VNCLagoonPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA VNC LAGOON
const vncLagoonSpintax = {
  es: {
    titles: [
      "VNC Lagoon 2025 - {Acceso Remoto|Control Remoto|Conexión Remota} {Seguro|Encriptado|Protegido} | {Cifrado|Encriptación} {Extremo a Extremo|Avanzado|Militar}",
      "VNC Lagoon {Seguro|Encriptado|Protegido} - {Acceso|Control|Conexión} {Remoto|a Distancia} con {Máxima|Extrema|Total} {Privacidad|Seguridad|Protección}",
      "{Acceso Remoto|Control Remoto|VNC} Lagoon - {Aplicación|Plataforma|Solución} {Segura|Encriptada|Protegida} para {Conexiones|Accesos|Controles} {Remotas|a Distancia}",
      "VNC Lagoon {2025|Premium|Pro} - {Cifrado|Encriptación} {Extremo a Extremo|Avanzado|Militar} para {Máxima|Extrema|Total} {Privacidad|Seguridad|Confidencialidad}",
      "🔒 VNC Lagoon - {Acceso|Control} {Remoto|a Distancia} {Seguro|Encriptado} | Desde {180$|$180 USD} - {Web|Escritorio|Multiplataforma}",
      "VNC Lagoon vs {TeamViewer|AnyDesk|Chrome Remote Desktop} - {Acceso Remoto|Control Remoto} {Ultra Seguro|Completamente Encriptado|Totalmente Protegido}",
      "⚡ {Comprar|Adquirir|Obtener} VNC Lagoon - {Acceso|Control} {Remoto|a Distancia} {Seguro|Encriptado} con {Aplicación Web|Cliente Escritorio|Multiplataforma}",
      "VNC Lagoon {Talk|Web|Desktop} - {Comunicación|Chat|Videoconferencia} y {Acceso Remoto|Control Remoto} {Seguro|Encriptado|Protegido}"
    ],
    descriptions: [
      "VNC Lagoon: {Acceso remoto|Control remoto|Conexión remota} {seguro|encriptado|protegido} con {cifrado|encriptación} {extremo a extremo|avanzado|militar} para {máxima|extrema|total} {privacidad|seguridad|confidencialidad} en sus {comunicaciones|conexiones|accesos}. {Aplicación web|Cliente escritorio|Solución multiplataforma} con {VNC Talk|chat|videoconferencia} {integrado|incluido|incorporado}. Desde {180$|$180 USD}.",
      "Descubre VNC Lagoon, la {solución|aplicación|plataforma} de {acceso remoto|control remoto|conexión remota} más {segura|protegida|encriptada} con {tecnología|cifrado|encriptación} {avanzada|militar|bancaria}. {Aplicación web|Cliente escritorio|Multiplataforma} para {Windows|Mac|Linux}. {Chat|Videoconferencia|Comunicación} {segura|encriptada|protegida} {integrada|incluida|incorporada}.",
      "{Acceso remoto|Control remoto|VNC} {seguro|encriptado|protegido} con VNC Lagoon. {Cifrado|Encriptación} {extremo a extremo|avanzado|militar}, {aplicación web|cliente escritorio|solución multiplataforma}, {chat|videoconferencia|comunicación} {integrada|incluida|incorporada}. {Ideal|Perfecto|Diseñado} para {profesionales|empresas|usuarios} que {requieren|necesitan|demandan} {máxima|extrema|total} {privacidad|seguridad|protección}.",
      "VNC Lagoon ofrece {acceso remoto|control remoto|conexión remota} con {tecnología|cifrado|encriptación} {avanzada|militar|bancaria} y {protocolos|sistemas|algoritmos} de {seguridad|privacidad|protección} {estrictos|rigurosos|inquebrantables}. {Aplicación web|Cliente escritorio|Multiplataforma} con {VNC Talk|chat|videoconferencia} para {comunicación|colaboración|trabajo} {segura|encriptada|protegida}.",
      "⚡ {Controla|Accede|Conecta} de forma {remota|a distancia} con VNC Lagoon - La {solución|aplicación|plataforma} de {acceso remoto|control remoto} más {segura|protegida|encriptada}. {Aplicación web|Cliente escritorio|Multiplataforma}, {chat|videoconferencia|comunicación} {integrada|incluida}, {cifrado|encriptación} {extremo a extremo|militar|avanzado}. {Compatible|Funciona|Disponible} en {Windows|Mac|Linux}."
    ],
    keywords: [
      "VNC Lagoon {acceso remoto|control remoto|conexión remota} {seguro|encriptado|protegido}, {aplicación|plataforma} {acceso remoto|control remoto} {segura|encriptada|protegida}, VNC {cifrado|encriptado} {extremo a extremo|avanzado|militar}, VNC Lagoon {180 USD|$180|precio}, {acceso remoto|control remoto} {Windows|Mac|Linux}",
      "{aplicación web|cliente escritorio} VNC {seguro|encriptado|protegido}, VNC Talk {chat|videoconferencia|comunicación} {segura|encriptada|protegida}, VNC Lagoon vs {TeamViewer|AnyDesk|Chrome Remote Desktop} {seguridad|privacidad|protección}, {acceso remoto|control remoto} {empresarial|profesional|corporativo}",
      "VNC Lagoon {aplicación|plataforma} {segura|encriptada} {España|México|Argentina|Colombia}, {acceso remoto|control remoto} {multiplataforma|web|escritorio}, {cifrado|encriptación} {extremo a extremo|militar} VNC, VNC {seguro|protegido|encriptado} {profesional|empresarial|corporativo}"
    ]
  },
  en: {
    titles: [
      "VNC Lagoon 2025 - {Secure|Encrypted|Protected} {Remote Access|Remote Control|Remote Connection} | {End-to-End|Advanced|Military} {Encryption|Security}",
      "VNC Lagoon {Secure|Encrypted|Protected} - {Remote|Distance} {Access|Control|Connection} with {Maximum|Extreme|Total} {Privacy|Security|Protection}",
      "{Remote Access|Remote Control|VNC} Lagoon - {Secure|Encrypted|Protected} {Application|Platform|Solution} for {Remote|Distance} {Connections|Access|Control}",
      "VNC Lagoon {2025|Premium|Pro} - {End-to-End|Advanced|Military} {Encryption|Security} for {Maximum|Extreme|Total} {Privacy|Security|Confidentiality}",
      "🔒 VNC Lagoon - {Secure|Encrypted} {Remote|Distance} {Access|Control} | From {$180|180 USD} - {Web|Desktop|Multiplatform}",
      "VNC Lagoon vs {TeamViewer|AnyDesk|Chrome Remote Desktop} - {Ultra Secure|Completely Encrypted|Totally Protected} {Remote Access|Remote Control}",
      "⚡ {Buy|Purchase|Get} VNC Lagoon - {Secure|Encrypted} {Remote|Distance} {Access|Control} with {Web Application|Desktop Client|Multiplatform}",
      "VNC Lagoon {Talk|Web|Desktop} - {Secure|Encrypted|Protected} {Communication|Chat|Video Conference} and {Remote Access|Remote Control}"
    ],
    descriptions: [
      "VNC Lagoon: {Secure|Encrypted|Protected} {remote access|remote control|remote connection} with {end-to-end|advanced|military} {encryption|security} for {maximum|extreme|total} {privacy|security|confidentiality} in your {communications|connections|access}. {Web application|Desktop client|Multiplatform solution} with {integrated|included|built-in} {VNC Talk|chat|video conference}. From {$180|180 USD}.",
      "Discover VNC Lagoon, the most {secure|protected|encrypted} {remote access|remote control|remote connection} {solution|application|platform} with {advanced|military|banking} {technology|encryption|security}. {Web application|Desktop client|Multiplatform} for {Windows|Mac|Linux}. {Integrated|Included|Built-in} {secure|encrypted|protected} {chat|video conference|communication}.",
      "{Secure|Encrypted|Protected} {remote access|remote control|VNC} with VNC Lagoon. {End-to-end|Advanced|Military} {encryption|security}, {web application|desktop client|multiplatform solution}, {integrated|included|built-in} {chat|video conference|communication}. {Ideal|Perfect|Designed} for {professionals|companies|users} who {require|need|demand} {maximum|extreme|total} {privacy|security|protection}.",
      "VNC Lagoon offers {remote access|remote control|remote connection} with {advanced|military|banking} {technology|encryption|security} and {strict|rigorous|unbreakable} {security|privacy|protection} {protocols|systems|algorithms}. {Web application|Desktop client|Multiplatform} with {VNC Talk|chat|video conference} for {secure|encrypted|protected} {communication|collaboration|work}.",
      "⚡ {Control|Access|Connect} {remotely|from distance} with VNC Lagoon - The most {secure|protected|encrypted} {remote access|remote control} {solution|application|platform}. {Web application|Desktop client|Multiplatform}, {integrated|included} {chat|video conference|communication}, {end-to-end|military|advanced} {encryption|security}. {Compatible|Works|Available} on {Windows|Mac|Linux}."
    ],
    keywords: [
      "VNC Lagoon {secure|encrypted|protected} {remote access|remote control|remote connection}, {secure|encrypted|protected} {remote access|remote control} {application|platform}, VNC {encrypted|secure} {end-to-end|advanced|military}, VNC Lagoon {180 USD|$180|price}, {remote access|remote control} {Windows|Mac|Linux}",
      "{web application|desktop client} VNC {secure|encrypted|protected}, VNC Talk {secure|encrypted|protected} {chat|video conference|communication}, VNC Lagoon vs {TeamViewer|AnyDesk|Chrome Remote Desktop} {security|privacy|protection}, {enterprise|professional|corporate} {remote access|remote control}",
      "VNC Lagoon {secure|encrypted} {application|platform} {USA|UK|Canada|Australia}, {multiplatform|web|desktop} {remote access|remote control}, VNC {end-to-end|military} {encryption|security}, {secure|protected|encrypted} {professional|enterprise|corporate} VNC"
    ]
  },
  fr: {
    titles: [
      "VNC Lagoon 2025 - {Accès|Contrôle|Connexion} {Distant|à Distance} {Sécurisé|Chiffré|Protégé} | {Chiffrement|Sécurité} {Bout en Bout|Avancé|Militaire}",
      "VNC Lagoon {Sécurisé|Chiffré|Protégé} - {Accès|Contrôle|Connexion} {Distant|à Distance} avec {Maximum|Extrême|Total} {Confidentialité|Sécurité|Protection}"
    ],
    descriptions: [
      "VNC Lagoon: {Accès distant|Contrôle distant|Connexion distante} {sécurisé|chiffré|protégé} avec {chiffrement|sécurité} {bout en bout|avancé|militaire} pour une {confidentialité|sécurité|protection} {maximale|extrême|totale}.",
      "Découvrez VNC Lagoon, la {solution|application|plateforme} d'{accès distant|contrôle distant} la plus {sécurisée|protégée|chiffrée} avec {technologie|chiffrement|sécurité} {avancée|militaire|bancaire}."
    ],
    keywords: [
      "VNC Lagoon {accès distant|contrôle distant} {sécurisé|chiffré|protégé}, {application|plateforme} {accès distant|contrôle distant} {sécurisé|chiffré}, VNC {chiffré|sécurisé} {bout en bout|avancé}"
    ]
  },
  it: {
    titles: [
      "VNC Lagoon 2025 - {Accesso|Controllo|Connessione} {Remoto|a Distanza} {Sicuro|Crittografato|Protetto} | {Crittografia|Sicurezza} {End-to-End|Avanzata|Militare}",
      "VNC Lagoon {Sicuro|Crittografato|Protetto} - {Accesso|Controllo|Connessione} {Remoto|a Distanza} con {Massima|Estrema|Totale} {Privacy|Sicurezza|Protezione}"
    ],
    descriptions: [
      "VNC Lagoon: {Accesso remoto|Controllo remoto|Connessione remota} {sicuro|crittografato|protetto} con {crittografia|sicurezza} {end-to-end|avanzata|militare} per {massima|estrema|totale} {privacy|sicurezza|protezione}.",
      "Scopri VNC Lagoon, la {soluzione|applicazione|piattaforma} di {accesso remoto|controllo remoto} più {sicura|protetta|crittografata} con {tecnologia|crittografia|sicurezza} {avanzata|militare|bancaria}."
    ],
    keywords: [
      "VNC Lagoon {accesso remoto|controllo remoto} {sicuro|crittografato|protetto}, {applicazione|piattaforma} {accesso remoto|controllo remoto} {sicura|crittografata}, VNC {crittografato|sicuro} {end-to-end|avanzato}"
    ]
  },
  pt: {
    titles: [
      "VNC Lagoon 2025 - {Acesso|Controle|Conexão} {Remoto|à Distância} {Seguro|Encriptado|Protegido} | {Encriptação|Segurança} {End-to-End|Avançada|Militar}",
      "VNC Lagoon {Seguro|Encriptado|Protegido} - {Acesso|Controle|Conexão} {Remoto|à Distância} com {Máxima|Extrema|Total} {Privacidade|Segurança|Proteção}"
    ],
    descriptions: [
      "VNC Lagoon: {Acesso remoto|Controle remoto|Conexão remota} {seguro|encriptado|protegido} com {encriptação|segurança} {end-to-end|avançada|militar} para {máxima|extrema|total} {privacidade|segurança|proteção}.",
      "Descubra VNC Lagoon, a {solução|aplicação|plataforma} de {acesso remoto|controle remoto} mais {segura|protegida|encriptada} com {tecnologia|encriptação|segurança} {avançada|militar|bancária}."
    ],
    keywords: [
      "VNC Lagoon {acesso remoto|controle remoto} {seguro|encriptado|protegido}, {aplicação|plataforma} {acesso remoto|controle remoto} {segura|encriptada}, VNC {encriptado|seguro} {end-to-end|avançado}"
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
function getVNCLagoonContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = vncLagoonSpintax[locale as keyof typeof vncLagoonSpintax] || vncLagoonSpintax.es;
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
export async function generateMetadata({ params: { locale } }: VNCLagoonPageProps): Promise<Metadata> {
  const title = getVNCLagoonContent(locale, 'titles');
  const description = getVNCLagoonContent(locale, 'descriptions');
  const keywords = getVNCLagoonContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/vnc-lagoon` : `${baseUrl}/${locale}/apps/vnc-lagoon`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Secure Remote Access Application',
    
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
          url: `${baseUrl}/images/apps/vnc-lagoon/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/vnc-lagoon/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/vnc-lagoon`,
        'en': `${baseUrl}/en/apps/vnc-lagoon`,
        'fr': `${baseUrl}/fr/apps/vnc-lagoon`,
        'it': `${baseUrl}/it/apps/vnc-lagoon`,
        'pt': `${baseUrl}/pt/apps/vnc-lagoon`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'VNC Lagoon',
      'product-category': 'Secure Remote Access Application',
      'product-price': '180 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'target-audience': 'Professional, Enterprise, Remote Workers',
      'supported-platforms': 'Windows, macOS, Linux, Web Browser',
      'encryption-type': 'End-to-End Encryption',
      'privacy-level': 'Maximum Privacy',
      'security-level': 'Military Grade Security',
      'use-cases': 'Remote Access, Remote Control, VNC Connection, Secure Communication',
      'competitors': 'TeamViewer, AnyDesk, Chrome Remote Desktop, LogMeIn',
      'features': 'Web Application, Desktop Client, VNC Talk, Video Conference, Secure Chat',
      'rating': '4.8/5',
      'review-count': '1654',
      'app-version': '2.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'developer': 'VNC Lagoon Technologies',
      'developer-website': baseUrl,
      'support-email': 'support@encriptados.io',
    }
  };
}

// 🎯 STRUCTURED DATA PARA VNC LAGOON
function getVNCLagoonStructuredData(locale: string) {
  const description = getVNCLagoonContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'VNC Lagoon - Acceso Remoto Seguro',
    en: 'VNC Lagoon - Secure Remote Access',
    fr: 'VNC Lagoon - Accès Distant Sécurisé',
    it: 'VNC Lagoon - Accesso Remoto Sicuro',
    pt: 'VNC Lagoon - Acesso Remoto Seguro'
  };

  const features = {
    es: [
      "Acceso remoto encriptado",
      "Cifrado extremo a extremo",
      "Aplicación web integrada",
      "Cliente de escritorio",
      "VNC Talk comunicación segura",
      "Chat y videoconferencia",
      "Compatible Windows, Mac, Linux",
      "Navegador web estándar",
      "Máxima privacidad y seguridad",
      "Interfaz profesional intuitiva"
    ],
    en: [
      "Encrypted remote access",
      "End-to-end encryption",
      "Integrated web application",
      "Desktop client",
      "VNC Talk secure communication",
      "Chat and video conference",
      "Windows, Mac, Linux compatible",
      "Standard web browser",
      "Maximum privacy and security",
      "Intuitive professional interface"
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
        "url": locale === 'es' ? `${baseUrl}/apps/vnc-lagoon` : `${baseUrl}/${locale}/apps/vnc-lagoon`,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Remote Access Software",
        "operatingSystem": ["Windows", "macOS", "Linux", "Web Browser"],
        "offers": {
          "@type": "Offer",
          "price": "180",
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
          "ratingValue": "4.8",
          "reviewCount": "1654",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "VNC Lagoon Technologies"
        },
        "publisher": {
          "@type": "Organization", 
          "name": "Encriptados"
        },
        "featureList": productFeatures,
        "screenshot": `${baseUrl}/images/apps/vnc-lagoon/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/vnc-lagoon`,
        "installUrl": `${baseUrl}/apps/vnc-lagoon`,
        "softwareVersion": "2.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "targetAudience": {
          "@type": "Audience",
          "audienceType": "Professional, Enterprise, Remote Workers"
        }
      },
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "VNC Lagoon"
        },
        "category": locale === 'es' ? "Software de Acceso Remoto Seguro" : "Secure Remote Access Software",
        "offers": {
          "@type": "Offer",
          "price": "180",
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
            "name": "Application Type",
            "value": "Web + Desktop"
          },
          {
            "@type": "PropertyValue", 
            "name": "Encryption Level",
            "value": "End-to-End"
          },
          {
            "@type": "PropertyValue",
            "name": "Communication Features",
            "value": "VNC Talk, Chat, Video Conference"
          },
          {
            "@type": "PropertyValue",
            "name": "Platform Support",
            "value": "Windows, macOS, Linux, Web Browser"
          }
        ]
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es VNC?" : "What is VNC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "VNC (Virtual Network Computing) es una tecnología que permite el acceso remoto a computadoras a través de una interfaz gráfica. VNC Lagoon implementa esta tecnología con cifrado extremo a extremo para máxima seguridad."
                : "VNC (Virtual Network Computing) is a technology that allows remote access to computers through a graphical interface. VNC Lagoon implements this technology with end-to-end encryption for maximum security."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo funciona VNC Lagoon?" : "How does VNC Lagoon work?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "VNC Lagoon utiliza cifrado extremo a extremo para crear conexiones remotas seguras. Incluye aplicación web y cliente de escritorio, además de VNC Talk para comunicación segura con chat y videoconferencia integrados."
                : "VNC Lagoon uses end-to-end encryption to create secure remote connections. It includes web application and desktop client, plus VNC Talk for secure communication with integrated chat and video conferencing."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué compatibilidad tiene VNC Lagoon?" : "What compatibility does VNC Lagoon have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "VNC Lagoon es compatible con Windows, macOS y Linux. Funciona tanto como aplicación web en navegadores estándar como cliente de escritorio independiente, ofreciendo máxima flexibilidad de uso."
                : "VNC Lagoon is compatible with Windows, macOS, and Linux. It works both as a web application in standard browsers and as a standalone desktop client, offering maximum usage flexibility."
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
export default async function VNCLagoonPage({ params: { locale } }: VNCLagoonPageProps) {
  const structuredData = getVNCLagoonStructuredData(locale);

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
      <link rel="preload" href="/images/apps/vnc-lagoon/banner.png" as="image" />
      <link rel="preload" href="/images/apps/vnc-lagoon/web-app.webp" as="image" />
      <link rel="preload" href="/images/apps/vnc-lagoon/desktop-app.webp" as="image" />
      <link rel="preload" href="/images/apps/vnc-lagoon/youtube.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getVNCLagoonContent(locale, 'titles')} />
        <meta itemProp="description" content={getVNCLagoonContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="BusinessApplication" />
        <meta itemProp="applicationSubCategory" content="Remote Access Software" />
        <meta itemProp="operatingSystem" content="Windows, macOS, Linux, Web Browser" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="180" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.8" />
          <meta itemProp="reviewCount" content="1654" />
          <meta itemProp="bestRating" content="5" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <VNCLagoonClient />
    </>
  );
}