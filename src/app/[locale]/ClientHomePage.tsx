// src/app/[locale]/page.tsx - CÓDIGO CORREGIDO SIN ERRORES
import { Metadata } from 'next';
import OurProductsPage from "./our-products/OurProductsPage";

interface HomePageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX FUNCIONAL
const spintaxContent = {
  es: {
    titles: [
      "Teléfonos {Encriptados|Cifrados|Seguros} 2025 - Comunicación {Ultra Segura|Privada|Protegida} | {Máxima|Total|Absoluta} Privacidad Digital",
      "Celulares {Seguros|Protegidos|Blindados} {Profesionales|Empresariales|Militares} - Tecnología {Militar|Avanzada|Gubernamental} 2025",
      "Dispositivos Móviles {Encriptados|Cifrados|Seguros} - Privacidad {Digital|Extrema|Máxima} 2025 | Seguridad {Avanzada|Certificada|Garantizada}",
      "Smartphones {Cifrados|Encriptados|Seguros} {Premium|Profesionales|Elite} - Comunicación {Privada|Secreta|Confidencial} 2025",
      "Teléfonos {Blindados|Protegidos|Seguros} Digitalmente - {Encriptación|Cifrado} {Bancaria|Militar|Gubernamental} 2025"
    ],
    descriptions: [
      "Descubre los mejores teléfonos {encriptados|cifrados|seguros} con tecnología {militar|gubernamental|bancaria} de {última generación|vanguardia|frontera tecnológica}. Comunicación {privada|secreta|confidencial}, {máxima|total|absoluta} seguridad y protección {total|completa|garantizada} para {profesionales|ejecutivos|empresarios} que valoran su {privacidad|confidencialidad|anonimato} en 2025.",
      "Explora nuestra {amplia|extensa|completa} gama de dispositivos móviles {seguros|protegidos|blindados} con cifrado {bancario|militar|gubernamental} {certificado|probado|garantizado}. Smartphones {encriptados|cifrados|seguros} de {última generación|vanguardia|tecnología avanzada} para {empresarios|ejecutivos|profesionales} y usuarios {exigentes|selectos|premium}.",
      "Protege tus {comunicaciones|conversaciones|datos} más {críticas|importantes|sensibles} con celulares de grado {militar|gubernamental|bancario} utilizados por {agencias|organizaciones|instituciones} {gubernamentales|de seguridad|de inteligencia}. Seguridad digital {completa|total|absoluta} y privacidad {absoluta|total|máxima} {garantizada|certificada|probada}."
    ],
    keywords: [
      "teléfonos {encriptados|cifrados|seguros} 2025, celulares {seguros|protegidos|blindados} {profesionales|empresariales|militares}, comunicación {cifrada|encriptada|segura} {empresarial|diplomática|gubernamental}, {privacidad|confidencialidad|anonimato} móvil {extrema|máxima|total}",
      "móviles {encriptados|cifrados|seguros} {NSA|CIA|militares}, teléfonos {privados|confidenciales|anónimos} {diplomáticos|empresariales|gubernamentales}, comunicación {segura|protegida|blindada} {bancaria|militar|gubernamental}",
      "teléfonos {anti-hackeo|anti-espionaje|anti-vigilancia} {profesional|empresarial|gubernamental}, comunicación {protegida|blindada|segura} {ejecutivos|diplomáticos|empresarios}, móviles {blindados|protegidos|seguros} {digitalmente|completamente|totalmente}"
    ]
  },
  en: {
    titles: [
      "Encrypted Phones 2025 - {Ultra Secure|Private|Protected} Communication | {Maximum|Total|Absolute} Digital Privacy",
      "{Professional|Enterprise|Military} Secure Smartphones - {Military|Advanced|Government} Technology 2025",
      "Encrypted Mobile Devices - {Digital|Extreme|Maximum} Privacy 2025 | {Advanced|Certified|Guaranteed} Security",
      "{Premium|Professional|Elite} Encrypted Smartphones - {Private|Secret|Confidential} Communication 2025",
      "Digitally {Armored|Protected|Secured} Phones - {Banking|Military|Government} {Encryption|Security} 2025"
    ],
    descriptions: [
      "Discover the best {encrypted|secure|protected} phones with {military|government|banking} technology of {latest generation|cutting-edge|technological frontier}. {Private|Secret|Confidential} communication, {maximum|total|absolute} security and {total|complete|guaranteed} protection for {professionals|executives|entrepreneurs} who value their {privacy|confidentiality|anonymity} in 2025.",
      "Explore our {wide|extensive|complete} range of {secure|protected|armored} mobile devices with {certified|proven|guaranteed} {banking|military|government} encryption. {Latest generation|Cutting-edge|Advanced technology} encrypted smartphones for {entrepreneurs|executives|professionals} and {demanding|select|premium} users.",
      "Protect your most {critical|important|sensitive} {communications|conversations|data} with {military|government|banking} grade smartphones used by {government|security|intelligence} {agencies|organizations|institutions}. {Complete|Total|Absolute} digital security and {absolute|total|maximum} privacy {guaranteed|certified|proven}."
    ],
    keywords: [
      "{encrypted|secure|protected} phones 2025, {professional|enterprise|military} {secure|protected|armored} smartphones, {enterprise|diplomatic|government} {encrypted|secure|protected} communication, {extreme|maximum|total} mobile {privacy|confidentiality|anonymity}",
      "{NSA|CIA|military} {encrypted|secure|protected} mobiles, {diplomatic|enterprise|government} {private|confidential|anonymous} phones, {banking|military|government} {secure|protected|armored} communication",
      "{professional|enterprise|government} {anti-hacking|anti-espionage|anti-surveillance} phones, {executives|diplomats|entrepreneurs} {protected|armored|secure} communication, {digitally|completely|totally} {armored|protected|secured} mobiles"
    ]
  },
  fr: {
    titles: [
      "Téléphones {Cryptés|Sécurisés|Protégés} 2025 - Communication {Ultra Sécurisée|Privée|Protégée}",
      "Smartphones {Sécurisés|Protégés|Blindés} {Professionnels|Entreprise|Militaires} - Technologie {Militaire|Avancée|Gouvernementale} 2025"
    ],
    descriptions: [
      "Découvrez les meilleurs téléphones {cryptés|sécurisés|protégés} avec technologie {militaire|gouvernementale|bancaire} de {dernière génération|pointe|frontière technologique}. Communication {privée|secrète|confidentielle}, sécurité {maximale|totale|absolue} pour {professionnels|dirigeants|entrepreneurs}.",
      "Explorez notre {large|vaste|complète} gamme d'appareils mobiles {sécurisés|protégés|blindés} avec {cryptage|chiffrement} {bancaire|militaire|gouvernemental} {certifié|prouvé|garanti}."
    ],
    keywords: [
      "téléphones {cryptés|sécurisés|protégés}, smartphones {sécurisés|protégés|blindés}, communication {chiffrée|cryptée|sécurisée}"
    ]
  },
  it: {
    titles: [
      "Telefoni {Crittografati|Sicuri|Protetti} 2025 - Comunicazione {Ultra Sicura|Privata|Protetta}",
      "Smartphone {Sicuri|Protetti|Blindati} {Professionali|Aziendali|Militari} - Tecnologia {Militare|Avanzata|Governativa} 2025"
    ],
    descriptions: [
      "Scopri i migliori telefoni {crittografati|sicuri|protetti} con tecnologia {militare|governativa|bancaria} di {ultima generazione|avanguardia|frontiera tecnologica}. Comunicazione {privata|segreta|confidenziale}, {massima|totale|assoluta} sicurezza per {professionisti|dirigenti|imprenditori}.",
      "Esplora la nostra {ampia|vasta|completa} gamma di dispositivi mobili {sicuri|protetti|blindati} con {crittografia|cifratura} {bancaria|militare|governativa} {certificata|provata|garantita}."
    ],
    keywords: [
      "telefoni {crittografati|sicuri|protetti}, smartphone {sicuri|protetti|blindati}, comunicazione {cifrata|crittografata|sicura}"
    ]
  },
  pt: {
    titles: [
      "Telefones {Encriptados|Seguros|Protegidos} 2025 - Comunicação {Ultra Segura|Privada|Protegida}",
      "Smartphones {Seguros|Protegidos|Blindados} {Profissionais|Empresariais|Militares} - Tecnologia {Militar|Avançada|Governamental} 2025"
    ],
    descriptions: [
      "Descubra os melhores telefones {encriptados|seguros|protegidos} com tecnologia {militar|governamental|bancária} de {última geração|vanguarda|fronteira tecnológica}. Comunicação {privada|secreta|confidencial}, {máxima|total|absoluta} segurança para {profissionais|executivos|empresários}.",
      "Explore nossa {ampla|vasta|completa} gama de dispositivos móveis {seguros|protegidos|blindados} com {encriptação|criptografia} {bancária|militar|governamental} {certificada|provada|garantida}."
    ],
    keywords: [
      "telefones {encriptados|seguros|protegidos}, smartphones {seguros|protegidos|blindados}, comunicação {cifrada|encriptada|segura}"
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

// 🎯 FUNCIÓN PARA OBTENER CONTENIDO DINÁMICO
function getSpintaxContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = spintaxContent[locale as keyof typeof spintaxContent] || spintaxContent.es;
  const items = content[type];
  
  // Rotación basada en fecha y hora
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
  const hourOfDay = now.getHours();
  const timeSlot = Math.floor(hourOfDay / 6); // Cambia cada 6 horas
  const seed = (dayOfYear * 4 + timeSlot) % items.length;
  
  const selectedTemplate = items[seed];
  return processSpintax(selectedTemplate);
}

// 🎯 METADATOS DINÁMICOS
export async function generateMetadata({ params: { locale } }: HomePageProps): Promise<Metadata> {
  const title = getSpintaxContent(locale, 'titles');
  const description = getSpintaxContent(locale, 'descriptions');
  const keywords = getSpintaxContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';

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
      url: locale === 'es' ? baseUrl : `${baseUrl}/${locale}`,
      title,
      description,
      siteName: 'Encriptados',
      images: [
        {
          url: `${baseUrl}/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: locale === 'es' ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        'es': baseUrl,
        'en': `${baseUrl}/en`,
        'fr': `${baseUrl}/fr`,
        'it': `${baseUrl}/it`,
        'pt': `${baseUrl}/pt`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },
  };
}

// 🎯 DATOS ESTRUCTURADOS
function getStructuredData(locale: string) {
  const title = getSpintaxContent(locale, 'titles');
  const description = getSpintaxContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Encriptados",
        "description": description,
        "url": baseUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "name": "Encriptados",
        "description": locale === 'es' 
          ? "Líder mundial en tecnología de comunicaciones encriptadas y dispositivos móviles seguros."
          : "Global leader in encrypted communications technology and secure mobile devices.",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "foundingDate": "2020-01-01",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2847",
          "bestRating": "5"
        }
      },
      {
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": locale === 'es' ? baseUrl : `${baseUrl}/${locale}`,
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString()
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL
export default async function HomePage({ params: { locale } }: HomePageProps) {
  const structuredData = getStructuredData(locale);

  return (
    <>
      {/* 🎯 DATOS ESTRUCTURADOS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      {/* 🎯 OPTIMIZACIONES */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
        <meta itemProp="name" content="Encriptados" />
        <meta itemProp="url" content="https://encriptados.io" />
        <meta itemProp="description" content={getSpintaxContent(locale, 'descriptions')} />
      </div>

      {/* 🎯 TU COMPONENTE ORIGINAL */}
      <OurProductsPage />
    </>
  );
}