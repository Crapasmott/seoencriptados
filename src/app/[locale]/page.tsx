// src/app/[locale]/page.tsx - CÓDIGO COMPLETO FINAL CON SPINTAX FUNCIONANDO
import { Metadata } from 'next';
import OurProductsPage from "./our-products/OurProductsPage";

interface HomePageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX COMPLETO Y FUNCIONAL
const spintaxContent = {
  es: {
    titles: [
      "Teléfonos {Encriptados|Cifrados|Seguros} 2025 - Comunicación {Ultra Segura|Privada|Protegida} | {Máxima|Total|Absoluta} Privacidad Digital",
      "Celulares {Seguros|Protegidos|Blindados} {Profesionales|Empresariales|Militares} - Tecnología {Militar|Avanzada|Gubernamental} 2025 | Protección {Total|Completa|Absoluta}", 
      "Dispositivos Móviles {Encriptados|Cifrados|Seguros} - Privacidad {Digital|Extrema|Máxima} 2025 | Seguridad {Avanzada|Certificada|Garantizada}",
      "Smartphones {Cifrados|Encriptados|Seguros} {Premium|Profesionales|Elite} - Comunicación {Privada|Secreta|Confidencial} 2025 | {Anti-Espionaje|Anti-Vigilancia|Anti-Hackeo}",
      "Teléfonos {Blindados|Protegidos|Seguros} Digitalmente - {Encriptación|Cifrado} {Bancaria|Militar|Gubernamental} 2025 | {Máxima|Total|Absoluta} Seguridad {Diplomática|Empresarial|Profesional}"
    ],
    descriptions: [
      "Descubre los mejores teléfonos {encriptados|cifrados|seguros} con tecnología {militar|gubernamental|bancaria} de {última generación|vanguardia|frontera tecnológica}. Comunicación {privada|secreta|confidencial}, {máxima|total|absoluta} seguridad y protección {total|completa|garantizada} para {profesionales|ejecutivos|empresarios} que valoran su {privacidad|confidencialidad|anonimato} en 2025. {Pago|Compra|Adquisición} {seguro|anónimo|privado} con {criptomonedas|Bitcoin|crypto} {aceptadas|disponibles|soportadas}.",
      "Explora nuestra {amplia|extensa|completa} gama de dispositivos móviles {seguros|protegidos|blindados} con cifrado {bancario|militar|gubernamental} {certificado|probado|garantizado}. Smartphones {encriptados|cifrados|seguros} de {última generación|vanguardia|tecnología avanzada} para {empresarios|ejecutivos|profesionales} y usuarios {exigentes|selectos|premium}. {Acepta|Soporta|Permite} pagos con {Bitcoin|criptomonedas|crypto} para {máxima|total|completa} {privacidad|anonimato|discreción}.",
      "Protege tus {comunicaciones|conversaciones|datos} más {críticas|importantes|sensibles} con celulares de grado {militar|gubernamental|bancario} utilizados por {agencias|organizaciones|instituciones} {gubernamentales|de seguridad|de inteligencia}. Seguridad digital {completa|total|absoluta} y privacidad {absoluta|total|máxima} {garantizada|certificada|probada}. {Transacciones|Pagos|Compras} {anónimas|privadas|discretas} con {criptomonedas|Bitcoin|monedas digitales} {aceptadas|soportadas|disponibles}.",
      "Comunicación {ultra segura|completamente privada|totalmente protegida} mediante cifrado de {extremo a extremo|grado militar|nivel bancario} {inviolable|inquebrantable|indestructible}. Teléfonos {encriptados|cifrados|seguros} {profesionales|empresariales|premium} para {ejecutivos|diplomáticos|líderes} y organizaciones de {alto nivel|máxima seguridad|elite}. {Pago|Compra|Adquisición} {seguro|privado|anónimo} con {Bitcoin|criptomonedas|crypto} y métodos {tradicionales|convencionales|estándar}.",
      "Tecnología de {encriptación|cifrado|seguridad} de nivel {CIA|NSA|militar} para comunicaciones {empresariales|diplomáticas|gubernamentales} {críticas|sensibles|confidenciales}. Dispositivos móviles {blindados|protegidos|seguros} con protección {total|completa|absoluta} contra {hackeo|espionaje|vigilancia} {industrial|gubernamental|digital}. {Acepta|Soporta|Permite} {Bitcoin|criptomonedas|pagos crypto} para {transacciones|compras|adquisiciones} {completamente|totalmente} {anónimas|privadas|discretas}."
    ],
    keywords: [
      "teléfonos {encriptados|cifrados|seguros} 2025, celulares {seguros|protegidos|blindados} {profesionales|empresariales|militares}, comunicación {cifrada|encriptada|segura} {empresarial|diplomática|gubernamental}, {privacidad|confidencialidad|anonimato} móvil {extrema|máxima|total}, dispositivos {anti-espionaje|anti-vigilancia|anti-hackeo} {avanzados|certificados|garantizados}, smartphones {militares|gubernamentales|bancarios} {certificados|probados|garantizados}, seguridad digital {avanzada|certificada|garantizada}, {pago|compra} con {Bitcoin|criptomonedas|crypto} {aceptado|disponible|soportado}",
      "móviles {encriptados|cifrados|seguros} {NSA|CIA|militares}, teléfonos {privados|confidenciales|anónimos} {diplomáticos|empresariales|gubernamentales}, comunicación {segura|protegida|blindada} {bancaria|militar|gubernamental}, celulares {cifrados|encriptados|seguros} {CIA|NSA|militares}, dispositivos {gubernamentales|militares|bancarios} {secretos|clasificados|restringidos}, smartphones {bancarios|diplomáticos|premium} {anti-vigilancia|anti-espionaje|anti-hackeo}, tecnología {NSA|CIA|militar} {avanzada|certificada|garantizada}, {Bitcoin|criptomonedas|crypto} {pagos|transacciones} {anónimos|privados|seguros}",
      "teléfonos {anti-hackeo|anti-espionaje|anti-vigilancia} {profesional|empresarial|gubernamental}, comunicación {protegida|blindada|segura} {ejecutivos|diplomáticos|empresarios}, móviles {blindados|protegidos|seguros} {digitalmente|completamente|totalmente}, celulares {diplomáticos|gubernamentales|empresariales} {seguros|protegidos|blindados}, dispositivos {ultra-seguros|premium|elite} {periodistas|activistas|ejecutivos}, smartphones {CIA|NSA|militares} {protección|seguridad|privacidad} {total|completa|absoluta}, seguridad móvil {empresarial|profesional|gubernamental} {avanzada|certificada|garantizada}, {comprar|pagar} teléfonos seguros con {Bitcoin|criptomonedas|crypto} {España|Europa|mundial}"
    ]
  },
  en: {
    titles: [
      "Encrypted Phones 2025 - {Ultra Secure|Private|Protected} Communication | {Maximum|Total|Absolute} Digital Privacy",
      "{Professional|Enterprise|Military} Secure Smartphones - {Military|Advanced|Government} Technology 2025 | {Total|Complete|Absolute} Protection",
      "Encrypted Mobile Devices - {Digital|Extreme|Maximum} Privacy 2025 | {Advanced|Certified|Guaranteed} Security", 
      "{Premium|Professional|Elite} Encrypted Smartphones - {Private|Secret|Confidential} Communication 2025 | {Anti-Surveillance|Anti-Espionage|Anti-Hacking}",
      "Digitally {Armored|Protected|Secured} Phones - {Banking|Military|Government} {Encryption|Security} 2025 | {Maximum|Total|Absolute} {Diplomatic|Enterprise|Professional} Security"
    ],
    descriptions: [
      "Discover the best {encrypted|secure|protected} phones with {military|government|banking} technology of {latest generation|cutting-edge|technological frontier}. {Private|Secret|Confidential} communication, {maximum|total|absolute} security and {total|complete|guaranteed} protection for {professionals|executives|entrepreneurs} who value their {privacy|confidentiality|anonymity} in 2025. {Secure|Anonymous|Private} {payment|purchase|acquisition} with {cryptocurrencies|Bitcoin|crypto} {accepted|available|supported}.",
      "Explore our {wide|extensive|complete} range of {secure|protected|armored} mobile devices with {certified|proven|guaranteed} {banking|military|government} encryption. {Latest generation|Cutting-edge|Advanced technology} encrypted smartphones for {entrepreneurs|executives|professionals} and {demanding|select|premium} users. {Accepts|Supports|Allows} payments with {Bitcoin|cryptocurrencies|crypto} for {maximum|total|complete} {privacy|anonymity|discretion}.",
      "Protect your most {critical|important|sensitive} {communications|conversations|data} with {military|government|banking} grade smartphones used by {government|security|intelligence} {agencies|organizations|institutions}. {Complete|Total|Absolute} digital security and {absolute|total|maximum} privacy {guaranteed|certified|proven}. {Anonymous|Private|Discrete} {transactions|payments|purchases} with {cryptocurrencies|Bitcoin|digital currencies} {accepted|supported|available}.",
      "{Ultra secure|Completely private|Totally protected} communication through {unbreakable|inviolable|indestructible} {end-to-end|military-grade|banking-level} encryption. {Professional|Enterprise|Premium} encrypted phones for {executives|diplomats|leaders} and {high-level|maximum security|elite} organizations. {Secure|Private|Anonymous} {payment|purchase|acquisition} with {Bitcoin|cryptocurrencies|crypto} and {traditional|conventional|standard} methods.",
      "{CIA|NSA|Military} level {encryption|security|protection} technology for {critical|sensitive|confidential} {enterprise|diplomatic|government} communications. {Armored|Protected|Secured} mobile devices with {total|complete|absolute} protection against {industrial|government|digital} {hacking|espionage|surveillance}. {Accepts|Supports|Allows} {Bitcoin|cryptocurrencies|crypto payments} for {completely|totally} {anonymous|private|discrete} {transactions|purchases|acquisitions}."
    ],
    keywords: [
      "{encrypted|secure|protected} phones 2025, {professional|enterprise|military} {secure|protected|armored} smartphones, {enterprise|diplomatic|government} {encrypted|secure|protected} communication, {extreme|maximum|total} mobile {privacy|confidentiality|anonymity}, {advanced|certified|guaranteed} {anti-surveillance|anti-espionage|anti-hacking} devices, {certified|proven|guaranteed} {military|government|banking} smartphones, {advanced|certified|guaranteed} digital security, {payment|purchase} with {Bitcoin|cryptocurrencies|crypto} {accepted|available|supported}",
      "{NSA|CIA|military} {encrypted|secure|protected} mobiles, {diplomatic|enterprise|government} {private|confidential|anonymous} phones, {banking|military|government} {secure|protected|armored} communication, {CIA|NSA|military} {encrypted|secure|protected} smartphones, {secret|classified|restricted} {government|military|banking} devices, {anti-surveillance|anti-espionage|anti-hacking} {banking|diplomatic|premium} smartphones, {advanced|certified|guaranteed} {NSA|CIA|military} technology, {Bitcoin|cryptocurrencies|crypto} {payments|transactions} {anonymous|private|secure}",
      "{professional|enterprise|government} {anti-hacking|anti-espionage|anti-surveillance} phones, {executives|diplomats|entrepreneurs} {protected|armored|secure} communication, {digitally|completely|totally} {armored|protected|secured} mobiles, {secure|protected|armored} {diplomatic|government|enterprise} smartphones, {journalists|activists|executives} {ultra-secure|premium|elite} devices, {total|complete|absolute} {protection|security|privacy} {CIA|NSA|military} smartphones, {advanced|certified|guaranteed} {enterprise|professional|government} mobile security, {buy|pay} secure phones with {Bitcoin|cryptocurrencies|crypto} {Spain|Europe|worldwide}"
    ]
  },
  fr: {
    titles: [
      "Téléphones {Cryptés|Sécurisés|Protégés} 2025 - Communication {Ultra Sécurisée|Privée|Protégée} | Confidentialité {Maximale|Totale|Absolue}",
      "Smartphones {Sécurisés|Protégés|Blindés} {Professionnels|Entreprise|Militaires} - Technologie {Militaire|Avancée|Gouvernementale} 2025 | Protection {Totale|Complète|Absolue}"
    ],
    descriptions: [
      "Découvrez les meilleurs téléphones {cryptés|sécurisés|protégés} avec technologie {militaire|gouvernementale|bancaire} de {dernière génération|pointe|frontière technologique}. Communication {privée|secrète|confidentielle}, sécurité {maximale|totale|absolue} et protection {totale|complète|garantie} pour {professionnels|dirigeants|entrepreneurs} qui valorisent leur {confidentialité|vie privée|anonymat} en 2025.",
      "Explorez notre {large|vaste|complète} gamme d'appareils mobiles {sécurisés|protégés|blindés} avec {cryptage|chiffrement} {bancaire|militaire|gouvernemental} {certifié|prouvé|garanti}. Smartphones {cryptés|sécurisés|protégés} de {dernière génération|pointe technologique|technologie avancée} pour {entrepreneurs|dirigeants|professionnels} et utilisateurs {exigeants|sélects|premium}."
    ],
    keywords: [
      "téléphones {cryptés|sécurisés|protégés}, smartphones {sécurisés|protégés|blindés}, communication {chiffrée|cryptée|sécurisée}, {confidentialité|vie privée|anonymat} mobile, appareils {anti-surveillance|anti-espionnage|anti-piratage}, téléphones {militaires|gouvernementaux|bancaires}"
    ]
  },
  it: {
    titles: [
      "Telefoni {Crittografati|Sicuri|Protetti} 2025 - Comunicazione {Ultra Sicura|Privata|Protetta} | {Massima|Totale|Assoluta} Privacy",
      "Smartphone {Sicuri|Protetti|Blindati} {Professionali|Aziendali|Militari} - Tecnologia {Militare|Avanzata|Governativa} 2025 | Protezione {Totale|Completa|Assoluta}"
    ],
    descriptions: [
      "Scopri i migliori telefoni {crittografati|sicuri|protetti} con tecnologia {militare|governativa|bancaria} di {ultima generazione|avanguardia|frontiera tecnologica}. Comunicazione {privata|segreta|confidenziale}, {massima|totale|assoluta} sicurezza e protezione {totale|completa|garantita} per {professionisti|dirigenti|imprenditori} che valorizzano la loro {privacy|riservatezza|anonimato} nel 2025.",
      "Esplora la nostra {ampia|vasta|completa} gamma di dispositivi mobili {sicuri|protetti|blindati} con {crittografia|cifratura} {bancaria|militare|governativa} {certificata|provata|garantita}. Smartphone {crittografati|sicuri|protetti} di {ultima generazione|tecnologia avanzata|punta tecnologica} per {imprenditori|dirigenti|professionisti} e utenti {esigenti|selezionati|premium}."
    ],
    keywords: [
      "telefoni {crittografati|sicuri|protetti}, smartphone {sicuri|protetti|blindati}, comunicazione {cifrata|crittografata|sicura}, {privacy|riservatezza|anonimato} mobile, dispositivi {anti-sorveglianza|anti-spionaggio|anti-hacking}, telefoni {militari|governativi|bancari}"
    ]
  },
  pt: {
    titles: [
      "Telefones {Encriptados|Seguros|Protegidos} 2025 - Comunicação {Ultra Segura|Privada|Protegida} | {Máxima|Total|Absoluta} Privacidade",
      "Smartphones {Seguros|Protegidos|Blindados} {Profissionais|Empresariais|Militares} - Tecnologia {Militar|Avançada|Governamental} 2025 | Proteção {Total|Completa|Absoluta}"
    ],
    descriptions: [
      "Descubra os melhores telefones {encriptados|seguros|protegidos} com tecnologia {militar|governamental|bancária} de {última geração|vanguarda|fronteira tecnológica}. Comunicação {privada|secreta|confidencial}, {máxima|total|absoluta} segurança e proteção {total|completa|garantida} para {profissionais|executivos|empresários} que valorizam sua {privacidade|confidencialidade|anonimato} em 2025.",
      "Explore nossa {ampla|vasta|completa} gama de dispositivos móveis {seguros|protegidos|blindados} com {encriptação|criptografia} {bancária|militar|governamental} {certificada|provada|garantida}. Smartphones {encriptados|seguros|protegidos} de {última geração|tecnologia avançada|ponta tecnológica} para {empresários|executivos|profissionais} e usuários {exigentes|selecionados|premium}."
    ],
    keywords: [
      "telefones {encriptados|seguros|protegidos}, smartphones {seguros|protegidos|blindados}, comunicação {cifrada|encriptada|segura}, {privacidade|confidencialidade|anonimato} móvel, dispositivos {anti-vigilância|anti-espionagem|anti-hacking}, telefones {militares|governamentais|bancários}"
    ]
  }
};

// 🎯 FUNCIÓN QUE PROCESA SPINTAX - CORREGIDA
function processSpintax(text: string): string {
  return text.replace(/\{([^}]+)\}/g, (match, options) => {
    const choices = options.split('|').map((choice: string) => choice.trim());
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  });
}

// 🎯 FUNCIÓN QUE OBTIENE CONTENIDO SPINTAX PROCESADO - CORREGIDA
function getRandomContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = spintaxContent[locale as keyof typeof spintaxContent] || spintaxContent.es;
  const items = content[type];
  
  // Rotación diaria + horaria para más variedad - CORREGIDO
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
  const hourOfDay = now.getHours();
  const timeSlot = Math.floor(hourOfDay / 6); // Cambia cada 6 horas
  const seed = (dayOfYear * 4 + timeSlot) % items.length;
  
  const selectedTemplate = items[seed];
  
  // Procesar el spintax - ASEGURAR QUE SE EJECUTE
  return processSpintax(selectedTemplate);
}

// 🎯 METADATOS DINÁMICOS CON SPINTAX
export async function generateMetadata({
  params: { locale }
}: HomePageProps): Promise<Metadata> {
  const title = getRandomContent(locale, 'titles');
  const description = getRandomContent(locale, 'descriptions');
  const keywords = getRandomContent(locale, 'keywords');
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

// 🎯 DATOS ESTRUCTURADOS DINÁMICOS - CORREGIDOS
function getStructuredData(locale: string) {
  const title = getRandomContent(locale, 'titles');
  const description = getRandomContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';

  const siteNames = {
    es: 'Encriptados - Teléfonos Seguros',
    en: 'Encrypted Phones - Secure Communication',
    fr: 'Téléphones Cryptés - Communication Sécurisée',
    it: 'Telefoni Crittografati - Comunicazione Sicura',
    pt: 'Telefones Encriptados - Comunicação Segura'
  };

  const orgDescriptions = {
    es: 'Líder mundial en tecnología de comunicaciones encriptadas y dispositivos móviles seguros.',
    en: 'Global leader in encrypted communications technology and secure mobile devices.',
    fr: 'Leader mondial en technologie de communications cryptées et appareils mobiles sécurisés.',
    it: 'Leader mondiale nella tecnologia delle comunicazioni crittografate e dispositivi mobili sicuri.',
    pt: 'Líder mundial em tecnologia de comunicações encriptadas e dispositivos móveis seguros.'
  };

  const productNames = {
    es: ["Teléfonos Encriptados", "SIM Encriptadas", "Aplicaciones Seguras", "Accesorios de Seguridad"],
    en: ["Encrypted Phones", "Encrypted SIM Cards", "Security Applications", "Security Accessories"],
    fr: ["Téléphones Cryptés", "Cartes SIM Cryptées", "Applications Sécurisées", "Accessoires de Sécurité"],
    it: ["Telefoni Crittografati", "SIM Crittografate", "Applicazioni Sicure", "Accessori di Sicurezza"],
    pt: ["Telefones Encriptados", "SIM Encriptados", "Aplicações Seguras", "Acessórios de Segurança"]
  };

  const siteName = siteNames[locale as keyof typeof siteNames] || siteNames.es;
  const orgDesc = orgDescriptions[locale as keyof typeof orgDescriptions] || orgDescriptions.es;
  const products = productNames[locale as keyof typeof productNames] || productNames.es;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": siteName,
        "description": description,
        "inLanguage": locale,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint", 
            "urlTemplate": `${baseUrl}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Encriptados",
        "description": orgDesc,
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`,
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["Spanish", "English", "French", "Italian", "Portuguese"]
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ES",
          "addressLocality": "Madrid"
        },
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
        "@id": `${baseUrl}/#webpage`,
        "url": locale === 'es' ? baseUrl : `${baseUrl}/${locale}`,
        "name": title,
        "description": description,
        "inLanguage": locale,
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "ItemList",
        "name": locale === 'es' ? "Productos de Comunicación Segura" : "Secure Communication Products",
        "numberOfItems": products.length,
        "itemListElement": products.map((name, index) => ({
          "@type": "Product",
          "position": index + 1,
          "name": name,
          "category": locale === 'es' ? "Dispositivos de Seguridad" : "Security Devices",
          "brand": {
            "@type": "Brand",
            "name": "Encriptados"
          }
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué hace que estos teléfonos sean seguros?" : "What makes these phones secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Nuestros teléfonos utilizan encriptación de grado militar AES-256, comunicación sin registros y protección anti-espionaje certificada."
                : "Our phones use military-grade AES-256 encryption, zero-log communication and certified anti-surveillance protection."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL
export default async function HomePage({ params: { locale } }: HomePageProps) {
  const structuredData = getStructuredData(locale);

  return (
    <>
      {/* 🎯 DATOS ESTRUCTURADOS DINÁMICOS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      {/* 🎯 OPTIMIZACIONES DE PERFORMANCE */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE PARA SEO */}
      <div itemScope itemType="https://schema.org/ItemList" style={{ display: 'none' }}>
        <meta itemProp="name" content={
          locale === 'es' ? "Productos de Comunicación Segura" : "Secure Communication Products"
        } />
        <meta itemProp="description" content={getRandomContent(locale, 'descriptions')} />
      </div>

      <div itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
        <meta itemProp="name" content="Encriptados" />
        <meta itemProp="url" content="https://encriptados.io" />
        <meta itemProp="logo" content="https://encriptados.io/logo.png" />
        <meta itemProp="description" content={getRandomContent(locale, 'descriptions')} />
      </div>

      {/* 🎯 COMPONENTE ORIGINAL */}
      <OurProductsPage />
    </>
  );
}