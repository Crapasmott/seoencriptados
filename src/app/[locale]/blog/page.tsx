// src/app/[locale]/blog/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import BlogPage from './components/BlogPage';

interface BlogPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA BLOG
const blogSpintax = {
  es: {
    titles: [
      "Blog 2025 - {Noticias|Artículos|Contenido} sobre {Seguridad|Privacidad|Encriptación} y {Tecnología|Dispositivos|Productos} {Encriptados|Cifrados|Seguros} | {Encriptados|Cyberseguridad|Privacidad Digital}",
      "Blog {Encriptados|Seguridad|Privacidad} - {Artículos|Noticias|Guías} {Especializados|Profesionales|Expertos} en {Tecnología|Dispositivos|Soluciones} de {Alta Seguridad|Máxima Protección|Grado Militar}",
      "{Blog|Noticias|Artículos} de {Seguridad|Privacidad|Encriptación} - {Contenido|Información|Recursos} {Especializado|Profesional|Experto} sobre {Dispositivos|Tecnología|Productos} {Encriptados|Cifrados|Seguros}",
      "Blog {Cyberseguridad|Privacidad Digital|Encriptación} - {Últimas|Nuevas|Recientes} {Noticias|Tendencias|Novedades} en {Tecnología|Dispositivos|Soluciones} {Seguras|Encriptadas|Protegidas}",
      "{Contenido|Blog|Recursos} {Especializado|Profesional|Experto} - {Artículos|Guías|Análisis} sobre {Privacidad|Seguridad|Encriptación} y {Tecnología|Dispositivos|Productos} {Seguros|Encriptados|Blindados}"
    ],
    descriptions: [
      "Blog Encriptados: {Contenido|Artículos|Recursos} {especializado|profesional|experto} sobre {seguridad|privacidad|encriptación} y {tecnología|dispositivos|productos} {encriptados|cifrados|seguros}. {Noticias|Artículos|Guías} {actualizadas|recientes|nuevas}, {análisis|reviews|comparativas} {profesionales|expertas|detalladas} y {consejos|tips|recomendaciones} de {seguridad|privacidad|protección}. {Mantente|Permanece|Quédate} {informado|actualizado|al día} sobre las {últimas|nuevas|recientes} {tendencias|novedades|avances} en {cyberseguridad|privacidad digital|tecnología segura}.",
      "Descubre nuestro blog con {contenido|artículos|recursos} {especializado|profesional|experto} en {seguridad|privacidad|encriptación} digital. {Artículos|Noticias|Guías} sobre {dispositivos|productos|tecnología} {encriptados|cifrados|seguros}, {análisis|reviews|comparativas} de {aplicaciones|software|herramientas} de {seguridad|privacidad|protección} y {consejos|tips|recomendaciones} {prácticos|útiles|profesionales} para {proteger|asegurar|blindar} tu {privacidad|información|datos}.",
      "{Blog|Contenido|Recursos} {especializado|profesional|experto} en {cyberseguridad|privacidad digital|tecnología segura} con {artículos|guías|análisis} {actualizados|recientes|nuevos} sobre {dispositivos|productos|soluciones} {encriptados|cifrados|seguros}. {Aprende|Descubre|Conoce} sobre {técnicas|métodos|estrategias} de {protección|seguridad|privacidad}, {últimas|nuevas|recientes} {amenazas|vulnerabilidades|riesgos} y {mejores|óptimas|recomendadas} {prácticas|estrategias|soluciones}.",
      "Nuestro blog ofrece {información|contenido|recursos} {actualizada|reciente|nueva} sobre {seguridad|privacidad|encriptación} y {tecnología|dispositivos|productos} {seguros|encriptados|protegidos}. {Artículos|Guías|Análisis} {especializados|profesionales|expertos}, {noticias|novedades|tendencias} del {sector|industria|mercado} y {consejos|tips|recomendaciones} {prácticos|útiles|valiosos} para {profesionales|empresas|usuarios} que valoran su {privacidad|seguridad|protección}."
    ],
    keywords: [
      "Blog {seguridad|privacidad|encriptación} {digital|tecnológica}, {artículos|noticias|contenido} {dispositivos|productos} {encriptados|cifrados|seguros}, {cyberseguridad|privacidad digital} {blog|noticias|recursos}, {tecnología|dispositivos} {seguros|encriptados} {artículos|guías|análisis}",
      "{blog|contenido|recursos} {especializado|profesional} {seguridad|privacidad} digital, {noticias|artículos|guías} {cyberseguridad|encriptación|protección}, {análisis|reviews|comparativas} {aplicaciones|software|herramientas} {seguras|encriptadas}, {consejos|tips} {privacidad|seguridad|protección}",
      "Blog vs {otros|competencia} {seguridad|privacidad|cyberseguridad}, {artículos|contenido} {seguridad|privacidad} {España|Europa|mundial}, {noticias|tendencias} {tecnología|dispositivos} {seguros|encriptados}, blog {Encriptados|cyberseguridad|privacidad digital}"
    ]
  },
  en: {
    titles: [
      "Blog 2025 - {News|Articles|Content} about {Security|Privacy|Encryption} and {Encrypted|Secure|Protected} {Technology|Devices|Products} | {Encriptados|Cybersecurity|Digital Privacy}",
      "Blog {Encrypted|Security|Privacy} - {Specialized|Professional|Expert} {Articles|News|Guides} on {High-Security|Maximum-Protection|Military-Grade} {Technology|Devices|Solutions}",
      "{Security|Privacy|Encryption} {Blog|News|Articles} - {Specialized|Professional|Expert} {Content|Information|Resources} about {Encrypted|Secure|Protected} {Devices|Technology|Products}",
      "Blog {Cybersecurity|Digital Privacy|Encryption} - {Latest|New|Recent} {News|Trends|Updates} in {Secure|Encrypted|Protected} {Technology|Devices|Solutions}",
      "{Specialized|Professional|Expert} {Content|Blog|Resources} - {Articles|Guides|Analysis} about {Privacy|Security|Encryption} and {Secure|Encrypted|Hardened} {Technology|Devices|Products}"
    ],
    descriptions: [
      "Encriptados Blog: {Specialized|Professional|Expert} {content|articles|resources} about {security|privacy|encryption} and {encrypted|secure|protected} {technology|devices|products}. {Updated|Recent|New} {news|articles|guides}, {professional|expert|detailed} {analysis|reviews|comparisons} and {security|privacy|protection} {tips|advice|recommendations}. {Stay|Remain|Keep} {informed|updated|current} about the {latest|new|recent} {trends|updates|advances} in {cybersecurity|digital privacy|secure technology}.",
      "Discover our blog with {specialized|professional|expert} {content|articles|resources} in digital {security|privacy|encryption}. {Articles|News|Guides} about {encrypted|secure|protected} {devices|products|technology}, {analysis|reviews|comparisons} of {security|privacy|protection} {applications|software|tools} and {practical|useful|professional} {tips|advice|recommendations} to {protect|secure|safeguard} your {privacy|information|data}.",
      "{Specialized|Professional|Expert} {blog|content|resources} in {cybersecurity|digital privacy|secure technology} with {updated|recent|new} {articles|guides|analysis} about {encrypted|secure|protected} {devices|products|solutions}. {Learn|Discover|Know} about {protection|security|privacy} {techniques|methods|strategies}, {latest|new|recent} {threats|vulnerabilities|risks} and {best|optimal|recommended} {practices|strategies|solutions}.",
      "Our blog offers {updated|recent|new} {information|content|resources} about {security|privacy|encryption} and {secure|encrypted|protected} {technology|devices|products}. {Specialized|Professional|Expert} {articles|guides|analysis}, {industry|sector|market} {news|updates|trends} and {practical|useful|valuable} {tips|advice|recommendations} for {professionals|companies|users} who value their {privacy|security|protection}."
    ],
    keywords: [
      "Blog {security|privacy|encryption} {digital|technological}, {articles|news|content} {encrypted|secure|protected} {devices|products}, {cybersecurity|digital privacy} {blog|news|resources}, {secure|encrypted} {technology|devices} {articles|guides|analysis}",
      "{specialized|professional} {security|privacy} digital {blog|content|resources}, {cybersecurity|encryption|protection} {news|articles|guides}, {secure|encrypted} {applications|software|tools} {analysis|reviews|comparisons}, {privacy|security|protection} {tips|advice}",
      "Blog vs {others|competition} {security|privacy|cybersecurity}, {security|privacy} {content|articles} {Spain|Europe|worldwide}, {secure|encrypted} {technology|devices} {news|trends}, {Encriptados|cybersecurity|digital privacy} blog"
    ]
  },
  fr: {
    titles: [
      "Blog 2025 - {Actualités|Articles|Contenu} sur la {Sécurité|Confidentialité|Chiffrement} et la {Technologie|Appareils|Produits} {Cryptés|Sécurisés|Protégés} | {Encriptados|Cybersécurité|Confidentialité Numérique}",
      "Blog {Cryptés|Sécurité|Confidentialité} - {Articles|Actualités|Guides} {Spécialisés|Professionnels|Experts} sur la {Technologie|Appareils|Solutions} de {Haute Sécurité|Protection Maximale|Grade Militaire}"
    ],
    descriptions: [
      "Blog Encriptados: {Contenu|Articles|Ressources} {spécialisé|professionnel|expert} sur la {sécurité|confidentialité|chiffrement} et la {technologie|appareils|produits} {cryptés|sécurisés|protégés}. {Actualités|Articles|Guides} {mises à jour|récentes|nouvelles}, {analyses|examens|comparaisons} {professionnelles|expertes|détaillées} et {conseils|astuces|recommandations} de {sécurité|confidentialité|protection}.",
      "Découvrez notre blog avec du {contenu|articles|ressources} {spécialisé|professionnel|expert} en {sécurité|confidentialité|chiffrement} numérique. {Articles|Actualités|Guides} sur les {appareils|produits|technologie} {cryptés|sécurisés|protégés}, {analyses|examens|comparaisons} d'{applications|logiciels|outils} de {sécurité|confidentialité|protection}."
    ],
    keywords: [
      "Blog {sécurité|confidentialité|chiffrement} {numérique|technologique}, {articles|actualités|contenu} {appareils|produits} {cryptés|sécurisés}, {cybersécurité|confidentialité numérique} {blog|actualités|ressources}"
    ]
  },
  it: {
    titles: [
      "Blog 2025 - {Notizie|Articoli|Contenuti} su {Sicurezza|Privacy|Crittografia} e {Tecnologia|Dispositivi|Prodotti} {Crittografati|Sicuri|Protetti} | {Encriptados|Cybersicurezza|Privacy Digitale}",
      "Blog {Crittografati|Sicurezza|Privacy} - {Articoli|Notizie|Guide} {Specializzati|Professionali|Esperti} su {Tecnologia|Dispositivi|Soluzioni} ad {Alta Sicurezza|Massima Protezione|Grado Militare}"
    ],
    descriptions: [
      "Blog Encriptados: {Contenuti|Articoli|Risorse} {specializzati|professionali|esperti} su {sicurezza|privacy|crittografia} e {tecnologia|dispositivi|prodotti} {crittografati|sicuri|protetti}. {Notizie|Articoli|Guide} {aggiornate|recenti|nuove}, {analisi|recensioni|confronti} {professionali|esperti|dettagliati} e {consigli|suggerimenti|raccomandazioni} di {sicurezza|privacy|protezione}.",
      "Scopri il nostro blog con {contenuti|articoli|risorse} {specializzati|professionali|esperti} in {sicurezza|privacy|crittografia} digitale. {Articoli|Notizie|Guide} su {dispositivi|prodotti|tecnologia} {crittografati|sicuri|protetti}, {analisi|recensioni|confronti} di {applicazioni|software|strumenti} di {sicurezza|privacy|protezione}."
    ],
    keywords: [
      "Blog {sicurezza|privacy|crittografia} {digitale|tecnologica}, {articoli|notizie|contenuti} {dispositivi|prodotti} {crittografati|sicuri}, {cybersicurezza|privacy digitale} {blog|notizie|risorse}"
    ]
  },
  pt: {
    titles: [
      "Blog 2025 - {Notícias|Artigos|Conteúdo} sobre {Segurança|Privacidade|Criptografia} e {Tecnologia|Dispositivos|Produtos} {Criptografados|Seguros|Protegidos} | {Encriptados|Cibersegurança|Privacidade Digital}",
      "Blog {Criptografados|Segurança|Privacidade} - {Artigos|Notícias|Guias} {Especializados|Profissionais|Especialistas} em {Tecnologia|Dispositivos|Soluções} de {Alta Segurança|Máxima Proteção|Grau Militar}"
    ],
    descriptions: [
      "Blog Encriptados: {Conteúdo|Artigos|Recursos} {especializado|profissional|especialista} sobre {segurança|privacidade|criptografia} e {tecnologia|dispositivos|produtos} {criptografados|seguros|protegidos}. {Notícias|Artigos|Guias} {atualizadas|recentes|novas}, {análises|avaliações|comparações} {profissionais|especialistas|detalhadas} e {conselhos|dicas|recomendações} de {segurança|privacidade|proteção}.",
      "Descubra nosso blog com {conteúdo|artigos|recursos} {especializado|profissional|especialista} em {segurança|privacidade|criptografia} digital. {Artigos|Notícias|Guias} sobre {dispositivos|produtos|tecnologia} {criptografados|seguros|protegidos}, {análises|avaliações|comparações} de {aplicações|software|ferramentas} de {segurança|privacidade|proteção}."
    ],
    keywords: [
      "Blog {segurança|privacidade|criptografia} {digital|tecnológica}, {artigos|notícias|conteúdo} {dispositivos|produtos} {criptografados|seguros}, {cibersegurança|privacidade digital} {blog|notícias|recursos}"
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
function getBlogContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = blogSpintax[locale as keyof typeof blogSpintax] || blogSpintax.es;
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
export async function generateMetadata({ params: { locale } }: BlogPageProps): Promise<Metadata> {
  const title = getBlogContent(locale, 'titles');
  const description = getBlogContent(locale, 'descriptions');
  const keywords = getBlogContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`;

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
          url: `${baseUrl}/images/blog/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/blog/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/blog`,
        'en': `${baseUrl}/en/blog`,
        'fr': `${baseUrl}/fr/blog`,
        'it': `${baseUrl}/it/blog`,
        'pt': `${baseUrl}/pt/blog`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'content-type': 'Blog Articles',
      'content-category': 'Cybersecurity and Privacy',
      'update-frequency': 'Regular Updates',
      'content-focus': 'Encrypted Technology and Security',
      'target-audience': 'Security Professionals and Privacy-Conscious Users',
      'content-expertise': 'Specialized Technical Content',
      'article-topics': 'Encryption, Privacy, Cybersecurity, Secure Devices'
    }
  };
}

// 🎯 STRUCTURED DATA PARA BLOG
function getBlogStructuredData(locale: string) {
  const description = getBlogContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const blogNames = {
    es: 'Blog Encriptados - Noticias y Artículos de Seguridad Digital',
    en: 'Encriptados Blog - Digital Security News and Articles',
    fr: 'Blog Encriptados - Actualités et Articles de Sécurité Numérique',
    it: 'Blog Encriptados - Notizie e Articoli di Sicurezza Digitale',
    pt: 'Blog Encriptados - Notícias e Artigos de Segurança Digital'
  };

  const topics = {
    es: [
      "Seguridad y privacidad digital",
      "Dispositivos y tecnología encriptada",
      "Cyberseguridad y protección de datos",
      "Análisis de aplicaciones seguras",
      "Tendencias en tecnología de seguridad",
      "Guías y consejos de privacidad"
    ],
    en: [
      "Digital security and privacy",
      "Encrypted devices and technology",
      "Cybersecurity and data protection",
      "Secure applications analysis",
      "Security technology trends",
      "Privacy guides and tips"
    ]
  };

  const blogName = blogNames[locale as keyof typeof blogNames] || blogNames.es;
  const blogTopics = topics[locale as keyof typeof topics] || topics.en;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "name": blogName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`,
        "publisher": {
          "@type": "Organization",
          "name": "Encriptados",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/logo.png`
          }
        },
        "inLanguage": locale === 'es' ? 'es-ES' : locale,
        "about": blogTopics.map(topic => ({
          "@type": "Thing",
          "name": topic
        })),
        "keywords": getBlogContent(locale, 'keywords'),
        "blogPost": [
          {
            "@type": "BlogPosting",
            "headline": locale === 'es' ? "Últimas Noticias en Seguridad Digital" : "Latest News in Digital Security",
            "description": locale === 'es' ? "Mantente informado sobre las últimas tendencias en seguridad digital y tecnología encriptada" : "Stay informed about the latest trends in digital security and encrypted technology",
            "author": {
              "@type": "Organization",
              "name": "Encriptados"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Encriptados"
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "name": blogName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`,
        "publisher": {
          "@type": "Organization",
          "name": "Encriptados"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": locale === 'es' ? `${baseUrl}/blog/search?q={search_term_string}` : `${baseUrl}/${locale}/blog/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué tipo de contenido publican en el blog?" : "What type of content do you publish on the blog?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Nuestro blog publica artículos especializados sobre seguridad digital, análisis de dispositivos encriptados, guías de privacidad, noticias de cyberseguridad y consejos profesionales para proteger tu información personal y empresarial."
                : "Our blog publishes specialized articles about digital security, encrypted device analysis, privacy guides, cybersecurity news, and professional tips to protect your personal and business information."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Con qué frecuencia se actualiza el blog?" : "How often is the blog updated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Actualizamos nuestro blog regularmente con contenido fresco y relevante. Publicamos nuevos artículos, análisis y noticias sobre seguridad digital y tecnología encriptada de forma constante para mantener a nuestros lectores informados."
                : "We update our blog regularly with fresh and relevant content. We publish new articles, analysis, and news about digital security and encrypted technology constantly to keep our readers informed."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Quién escribe los artículos del blog?" : "Who writes the blog articles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Los artículos son escritos por expertos en cyberseguridad, especialistas en privacidad digital y profesionales con amplia experiencia en tecnología encriptada. Todo el contenido es revisado y verificado antes de su publicación."
                : "Articles are written by cybersecurity experts, digital privacy specialists, and professionals with extensive experience in encrypted technology. All content is reviewed and verified before publication."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Puedo suscribirme para recibir actualizaciones?" : "Can I subscribe to receive updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, puedes suscribirte a nuestro blog para recibir notificaciones sobre nuevos artículos, análisis y noticias importantes sobre seguridad digital. Mantente siempre informado sobre las últimas tendencias y desarrollos en el sector."
                : "Yes, you can subscribe to our blog to receive notifications about new articles, analysis, and important news about digital security. Stay always informed about the latest trends and developments in the sector."
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
            "name": "Blog",
            "item": locale === 'es' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function BlogPageComponent({ params: { locale } }: BlogPageProps) {
  const structuredData = getBlogStructuredData(locale);
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
      <link rel="preload" href="/images/blog/hero-banner.jpg" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/Blog" style={{ display: 'none' }}>
        <meta itemProp="name" content={getBlogContent(locale, 'titles')} />
        <meta itemProp="description" content={getBlogContent(locale, 'descriptions')} />
        <meta itemProp="keywords" content={getBlogContent(locale, 'keywords')} />
        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
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
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/blog`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/blog`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/blog`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it/blog`} />
      <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt/blog`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/blog`} />

      {/* 🎯 TU COMPONENTE ORIGINAL */}
      <BlogPage />
    </>
  );
}