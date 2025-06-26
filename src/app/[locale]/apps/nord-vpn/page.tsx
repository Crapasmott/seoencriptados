// src/app/[locale]/apps/nord-vpn/page.tsx - TODO EN UN SOLO ARCHIVO
import { Metadata } from 'next';
import NordVPNPageContent from './NordVPNPageContent';

interface NordVPNPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA NORDVPN
const nordVPNSpintax = {
  es: {
    titles: [
      "NordVPN 2025 - {Acceso|Conexión|Navegación} {Remoto|Privado|Seguro} {Simple|Fácil|Confiable} | {VPN|Red Privada} {Más Confiable|Líder|Top} del {Mundo|Mercado|Planeta}",
      "NordVPN {Profesional|Empresarial|Premium} - {VPN|Red Privada Virtual} {Segura|Protegida|Encriptada} para {Empresas|Negocios|Organizaciones} | {Acceso|Conexión} {Remoto|Privado|Seguro} {Garantizado|Confiable|Estable}",
      "{VPN|Red Privada} {Segura|Protegida|Encriptada} NordVPN - {Acceso|Conexión|Navegación} {Remoto|Privado|Anónimo} en {33|Más de 30|Múltiples} Países | {Cifrado|Encriptación} {AES 256|Militar|Bancario}",
      "NordVPN Teams {Empresarial|Corporativo|Profesional} - {VPN|Solución|Plataforma} {Empresarial|Corporativa|Profesional} con {Gestión|Administración|Control} de {Equipo|Usuarios|Empleados} {Avanzada|Completa|Centralizada}",
      "{Mejor|Top|Líder} {VPN|Red Privada} NordVPN - {Navegación|Conexión|Acceso} {Segura|Privada|Anónima} y {Acceso|Conexión} {Remoto|Privado|Seguro} a {Contenido|Recursos|Datos} {Internacional|Global|Mundial}"
    ],
    descriptions: [
      "NordVPN: {Obtén|Consigue|Accede a} {acceso|conexión|navegación} {remoto|privado|seguro} {simple|fácil|confiable} y {seguro|protegido|encriptado} de la {marca|empresa|compañía} de {VPN|red privada virtual} {más confiable|líder|top} del {mundo|mercado|planeta}. {Conexión|Acceso|Navegación} en {33|más de 30|múltiples} países con {cifrado|encriptación} {AES 256|militar|bancario}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {aceptado|disponible|soportado}.",
      "Descubre NordVPN Teams, la {solución|plataforma|herramienta} {VPN|red privada} {empresarial|corporativa|profesional} {más avanzada|líder|confiable} para {empresas|organizaciones|negocios}. {Gestión|Administración|Control} de {equipo|usuarios|empleados} {centralizada|avanzada|completa}, {acceso|conexión} {remoto|seguro|privado} a {recursos|datos|información} {empresariales|corporativos|organizacionales}. Desde {130$|$130 USD} con {soporte|aceptación} para {Bitcoin|criptomonedas|crypto}.",
      "{Acceso|Conexión|Navegación} {remoto|privado|seguro} y {contenido|recursos|servicios} {internacional|global|mundial} con NordVPN. {Conecta|Accede|Navega} a {miles|cientos|múltiples} de {servidores|ubicaciones|puntos} {compartidos|dedicados|seguros} en {33|más de 30|múltiples} países. {Cifrado|Encriptación} {AES 256|vanguardia|militar} para {máxima|total|completa} {seguridad|protección|privacidad}."
    ],
    keywords: [
      "NordVPN {acceso|conexión} {remoto|privado|seguro}, {VPN|red privada} {empresarial|corporativa|profesional}, NordVPN Teams {gestión|administración} {equipo|usuarios}, {VPN|red privada} {33 países|múltiples ubicaciones}, NordVPN {comprar|precio} con {Bitcoin|criptomonedas|crypto}, {cifrado|encriptación} {AES 256|militar|bancario}",
      "{mejor|top|líder} {VPN|red privada} {España|Europa|mundial}, {acceso|conexión} {remoto|seguro} {empresarial|corporativo}, NordVPN vs {ExpressVPN|CyberGhost|Surfshark}, {VPN|red privata} {confiable|segura|estable} {empresas|negocios|organizaciones}"
    ]
  },
  en: {
    titles: [
      "NordVPN 2025 - {Simple|Easy|Reliable} and {Secure|Protected|Encrypted} {Remote|Private|Safe} Access | World's {Most Trusted|Leading|Top} {VPN|Private Network} {Brand|Service|Provider}",
      "NordVPN {Professional|Enterprise|Premium} - {Secure|Protected|Encrypted} {VPN|Virtual Private Network} for {Businesses|Companies|Organizations}"
    ],
    descriptions: [
      "NordVPN: Get {simple|easy|reliable} and {secure|protected|encrypted} {remote|private|safe} access from the world's {most trusted|leading|top} {VPN|virtual private network} {brand|service|provider}. {Connection|Access|Navigation} in {33|30+|multiple} countries with {AES 256|military|banking} {encryption|security}."
    ],
    keywords: [
      "NordVPN {remote|private|secure} access, {enterprise|corporate|professional} {VPN|private network}, NordVPN Teams {team|user} {management|administration}"
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
function getNordVPNContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = nordVPNSpintax[locale as keyof typeof nordVPNSpintax] || nordVPNSpintax.es;
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
export async function generateMetadata({ params: { locale } }: NordVPNPageProps): Promise<Metadata> {
  const title = getNordVPNContent(locale, 'titles');
  const description = getNordVPNContent(locale, 'descriptions');
  const keywords = getNordVPNContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/nord-vpn` : `${baseUrl}/${locale}/apps/nord-vpn`;

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
          url: `${baseUrl}/images/apps/nord-vpn/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/nord-vpn/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/nord-vpn`,
        'en': `${baseUrl}/en/apps/nord-vpn`,
        'fr': `${baseUrl}/fr/apps/nord-vpn`,
        'it': `${baseUrl}/it/apps/nord-vpn`,
        'pt': `${baseUrl}/pt/apps/nord-vpn`,
      },
    },

    other: {
      'product-name': 'NordVPN',
      'product-category': 'VPN Virtual Private Network Service',
      'product-price': '130 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency',
      'server-locations': '33 Countries',
      'encryption-type': 'AES 256-bit'
    }
  };
}

// 🎯 STRUCTURED DATA
function getNordVPNStructuredData(locale: string) {
  const description = getNordVPNContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": locale === 'es' ? 'NordVPN - Acceso Remoto Seguro y VPN Empresarial' : 'NordVPN - Secure Remote Access and Enterprise VPN',
    "description": description,
    "url": locale === 'es' ? `${baseUrl}/apps/nord-vpn` : `${baseUrl}/${locale}/apps/nord-vpn`,
    "applicationCategory": "SecurityApplication",
    "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
    "offers": {
      "@type": "Offer",
      "price": "130",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "acceptedPaymentMethod": ["https://schema.org/CreditCard", "https://schema.org/Bitcoin", "https://schema.org/Cryptocurrency"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "3247",
      "bestRating": "5"
    }
  };
}

// 🎯 COMPONENTE PRINCIPAL
export default async function NordVPNPage({ params: { locale } }: NordVPNPageProps) {
  const structuredData = getNordVPNStructuredData(locale);

  return (
    <>
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      {/* MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getNordVPNContent(locale, 'titles')} />
        <meta itemProp="description" content={getNordVPNContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="SecurityApplication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
      </div>

      {/* TU CÓDIGO ORIGINAL SIN CAMBIOS */}
      <NordVPNPageContent />
    </>
  );
}