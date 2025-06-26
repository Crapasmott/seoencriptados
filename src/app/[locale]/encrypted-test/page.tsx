// src/app/[locale]/encrypted-test/page.tsx - CON SEO Y SPINTAX
import { Metadata } from 'next';
import EncryptedTestPage from './components/EncryptedTestPage';

interface EncryptedTestPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA ENCRYPTED TEST
const encryptedTestSpintax = {
  es: {
    titles: [
      "Encrypted Test 2025 - {Prueba|Test|Evaluación} de {Encriptación|Cifrado|Seguridad} {Online|Gratuita|Interactiva} | {Verifica|Comprueba|Evalúa} la {Seguridad|Protección|Privacidad} de tu {Dispositivo|Teléfono|Sistema}",
      "Encrypted Test {Seguridad|Encriptación|Privacidad} - {Prueba|Test|Evaluación} {Gratuita|Online|Interactiva} para {Verificar|Comprobar|Evaluar} el {Cifrado|Encriptación|Nivel de Seguridad} de tu {Dispositivo|Celular|Sistema}",
      "{Prueba|Test|Evaluación} de {Encriptación|Cifrado|Seguridad} Encrypted Test - {Herramienta|Tool|Utilidad} {Online|Gratuita|Interactiva} para {Analizar|Verificar|Comprobar} la {Protección|Seguridad|Privacidad} de tu {Dispositivo|Teléfono|Sistema}",
      "Encrypted Test {Herramienta|Tool|Utilidad} - {Evalúa|Verifica|Comprueba} la {Seguridad|Encriptación|Protección} de tu {Dispositivo|Celular|Teléfono} con nuestra {Prueba|Test|Evaluación} {Avanzada|Profesional|Especializada}",
      "{Test|Prueba|Evaluación} Encrypted {Avanzado|Profesional|Especializado} - {Descubre|Conoce|Verifica} el {Nivel|Grado|Estado} de {Seguridad|Encriptación|Protección} de tu {Dispositivo|Sistema|Teléfono} {Online|Gratis|Fácil}"
    ],
    descriptions: [
      "Encrypted Test: {Prueba|Test|Evaluación} {gratuita|online|interactiva} de {encriptación|cifrado|seguridad} para {verificar|comprobar|evaluar} la {protección|seguridad|privacidad} de tu {dispositivo|celular|teléfono}. {Herramienta|Tool|Utilidad} {avanzada|profesional|especializada} que {analiza|verifica|comprueba} el {nivel|grado|estado} de {cifrado|encriptación|seguridad} de tu {sistema|dispositivo|equipo}. {Descubre|Conoce|Verifica} si tu {dispositivo|celular|teléfono} está {protegido|seguro|cifrado} {correctamente|adecuadamente|apropiadamente}.",
      "Realiza una {prueba|test|evaluación} {completa|integral|exhaustiva} de {seguridad|encriptación|protección} con Encrypted Test. Nuestra {herramienta|plataforma|sistema} {analiza|verifica|evalúa} el {cifrado|encriptación|nivel de seguridad} de tu {dispositivo|celular|sistema} y te {proporciona|ofrece|brinda} un {informe|reporte|análisis} {detallado|completo|profesional} sobre su {estado|nivel|grado} de {protección|seguridad|privacidad}.",
      "{Test|Prueba|Evaluación} de {encriptación|cifrado|seguridad} {online|gratuita|interactiva} con Encrypted Test. {Verifica|Comprueba|Evalúa} si tu {dispositivo|celular|teléfono} cuenta con la {protección|seguridad|encriptación} {adecuada|correcta|apropiada} contra {amenazas|vulnerabilidades|ataques} {cibernéticos|digitales|externos}. {Herramienta|Utilidad|Sistema} {fácil|simple|intuitiva} de usar y {resultados|análisis|reportes} {instantáneos|inmediatos|rápidos}.",
      "Encrypted Test ofrece una {evaluación|prueba|test} {profesional|avanzada|especializada} del {nivel|grado|estado} de {seguridad|encriptación|protección} de tu {dispositivo|sistema|equipo}. {Identifica|Detecta|Descubre} {vulnerabilidades|debilidades|fallas} en tu {cifrado|encriptación|seguridad} y {recibe|obtén|consigue} {recomendaciones|consejos|sugerencias} para {mejorar|optimizar|fortalecer} tu {protección|seguridad|privacidad}."
    ],
    keywords: [
      "Encrypted Test {prueba|test|evaluación} {encriptación|cifrado|seguridad}, {verificar|comprobar} {seguridad|protección} {dispositivo|celular|teléfono}, {test|prueba} {cifrado|encriptación} {online|gratuita|gratis}, {herramienta|tool} {seguridad|encriptación} {dispositivo|sistema}",
      "{evaluación|análisis|test} {nivel|grado} {seguridad|encriptación|protección} {dispositivo|celular}, {prueba|test} {vulnerabilidades|debilidades} {cifrado|encriptación}, Encrypted Test {herramienta|utilidad|sistema} {seguridad|protección}, {verificar|comprobar} {protección|seguridad} {celular|dispositivo|teléfono}",
      "Encrypted Test vs {otros|competencia} {test|pruebas} {seguridad|encriptación}, {prueba|test} {seguridad|encriptación} {España|Europa|mundial}, {verificar|comprobar} {cifrado|encriptación} {dispositivo|celular}, {test|evaluación} {seguridad|protección} {online|gratuita}"
    ]
  },
  en: {
    titles: [
      "Encrypted Test 2025 - {Online|Free|Interactive} {Encryption|Security|Privacy} {Test|Evaluation|Assessment} | {Verify|Check|Evaluate} your {Device|Phone|System} {Security|Protection|Privacy}",
      "Encrypted Test {Security|Encryption|Privacy} - {Free|Online|Interactive} {Test|Evaluation|Assessment} to {Verify|Check|Evaluate} your {Device|Phone|System} {Encryption|Security Level|Protection}",
      "{Encryption|Security|Privacy} {Test|Evaluation|Assessment} Encrypted Test - {Online|Free|Interactive} {Tool|Utility|Solution} to {Analyze|Verify|Check} your {Device|Phone|System} {Protection|Security|Privacy}",
      "Encrypted Test {Tool|Utility|Solution} - {Evaluate|Verify|Check} your {Device|Phone|System} {Security|Encryption|Protection} with our {Advanced|Professional|Specialized} {Test|Evaluation|Assessment}",
      "{Advanced|Professional|Specialized} Encrypted {Test|Evaluation|Assessment} - {Discover|Know|Verify} the {Level|Degree|Status} of {Security|Encryption|Protection} of your {Device|System|Phone} {Online|Free|Easy}"
    ],
    descriptions: [
      "Encrypted Test: {Free|Online|Interactive} {encryption|security|privacy} {test|evaluation|assessment} to {verify|check|evaluate} your {device|phone|system} {protection|security|privacy}. {Advanced|Professional|Specialized} {tool|utility|solution} that {analyzes|verifies|checks} the {level|degree|status} of {encryption|security|protection} of your {system|device|equipment}. {Discover|Know|Verify} if your {device|phone|system} is {protected|secure|encrypted} {correctly|adequately|appropriately}.",
      "Perform a {complete|comprehensive|thorough} {security|encryption|protection} {test|evaluation|assessment} with Encrypted Test. Our {tool|platform|system} {analyzes|verifies|evaluates} your {device|phone|system} {encryption|security level|protection} and {provides|offers|gives} you a {detailed|complete|professional} {report|analysis|assessment} about its {status|level|degree} of {protection|security|privacy}.",
      "{Online|Free|Interactive} {encryption|security|privacy} {test|evaluation|assessment} with Encrypted Test. {Verify|Check|Evaluate} if your {device|phone|system} has {adequate|correct|appropriate} {protection|security|encryption} against {cyber|digital|external} {threats|vulnerabilities|attacks}. {Easy|Simple|Intuitive} to use {tool|utility|system} with {instant|immediate|fast} {results|analysis|reports}.",
      "Encrypted Test offers a {professional|advanced|specialized} {evaluation|test|assessment} of your {device|system|equipment} {security|encryption|protection} {level|degree|status}. {Identify|Detect|Discover} {vulnerabilities|weaknesses|flaws} in your {encryption|security|protection} and {receive|get|obtain} {recommendations|advice|suggestions} to {improve|optimize|strengthen} your {protection|security|privacy}."
    ],
    keywords: [
      "Encrypted Test {encryption|security|privacy} {test|evaluation|assessment}, {verify|check} {device|phone|system} {security|protection}, {online|free} {encryption|security} {test|evaluation}, {security|encryption} {device|system} {tool|utility}",
      "{security|encryption|protection} {level|degree} {evaluation|analysis|test} {device|phone}, {encryption|security} {vulnerabilities|weaknesses} {test|assessment}, Encrypted Test {security|protection} {tool|utility|system}, {verify|check} {device|phone|system} {protection|security}",
      "Encrypted Test vs {others|competition} {security|encryption} {tests|evaluations}, {security|encryption} {test|evaluation} {Spain|Europe|worldwide}, {verify|check} {device|phone} {encryption|security}, {online|free} {security|protection} {test|evaluation}"
    ]
  },
  fr: {
    titles: [
      "Encrypted Test 2025 - {Test|Évaluation|Vérification} de {Chiffrement|Sécurité|Confidentialité} {En ligne|Gratuit|Interactif} | {Vérifiez|Contrôlez|Évaluez} la {Sécurité|Protection|Confidentialité} de votre {Appareil|Téléphone|Système}",
      "Encrypted Test {Sécurité|Chiffrement|Confidentialité} - {Test|Évaluation|Vérification} {Gratuit|En ligne|Interactif} pour {Vérifier|Contrôler|Évaluer} le {Chiffrement|Niveau de Sécurité|Protection} de votre {Appareil|Téléphone|Système}"
    ],
    descriptions: [
      "Encrypted Test: {Test|Évaluation|Vérification} {gratuit|en ligne|interactif} de {chiffrement|sécurité|confidentialité} pour {vérifier|contrôler|évaluer} la {protection|sécurité|confidentialité} de votre {appareil|téléphone|système}. {Outil|Utilitaire|Solution} {avancé|professionnel|spécialisé} qui {analyse|vérifie|contrôle} le {niveau|degré|état} de {chiffrement|sécurité|protection}.",
      "Effectuez un {test|évaluation|vérification} {complet|exhaustif|approfondi} de {sécurité|chiffrement|protection} avec Encrypted Test. Notre {outil|plateforme|système} {analyse|vérifie|évalue} le {chiffrement|niveau de sécurité|protection} de votre {appareil|téléphone|système}."
    ],
    keywords: [
      "Encrypted Test {test|évaluation} {chiffrement|sécurité}, {vérifier|contrôler} {sécurité|protection} {appareil|téléphone}, {test|évaluation} {chiffrement|sécurité} {en ligne|gratuit}"
    ]
  },
  it: {
    titles: [
      "Encrypted Test 2025 - {Test|Valutazione|Verifica} di {Crittografia|Sicurezza|Privacy} {Online|Gratuito|Interattivo} | {Verifica|Controlla|Valuta} la {Sicurezza|Protezione|Privacy} del tuo {Dispositivo|Telefono|Sistema}",
      "Encrypted Test {Sicurezza|Crittografia|Privacy} - {Test|Valutazione|Verifica} {Gratuito|Online|Interattivo} per {Verificare|Controllare|Valutare} la {Crittografia|Livello di Sicurezza|Protezione} del tuo {Dispositivo|Telefono|Sistema}"
    ],
    descriptions: [
      "Encrypted Test: {Test|Valutazione|Verifica} {gratuito|online|interattivo} di {crittografia|sicurezza|privacy} per {verificare|controllare|valutare} la {protezione|sicurezza|privacy} del tuo {dispositivo|telefono|sistema}. {Strumento|Utilità|Soluzione} {avanzato|professionale|specializzato} che {analizza|verifica|controlla} il {livello|grado|stato} di {crittografia|sicurezza|protezione}.",
      "Esegui un {test|valutazione|verifica} {completo|esaustivo|approfondito} di {sicurezza|crittografia|protezione} con Encrypted Test. Il nostro {strumento|piattaforma|sistema} {analizza|verifica|valuta} la {crittografia|livello di sicurezza|protezione} del tuo {dispositivo|telefono|sistema}."
    ],
    keywords: [
      "Encrypted Test {test|valutazione} {crittografia|sicurezza}, {verificare|controllare} {sicurezza|protezione} {dispositivo|telefono}, {test|valutazione} {crittografia|sicurezza} {online|gratuito}"
    ]
  },
  pt: {
    titles: [
      "Encrypted Test 2025 - {Teste|Avaliação|Verificação} de {Criptografia|Segurança|Privacidade} {Online|Gratuito|Interativo} | {Verifique|Confira|Avalie} a {Segurança|Proteção|Privacidade} do seu {Dispositivo|Telefone|Sistema}",
      "Encrypted Test {Segurança|Criptografia|Privacidade} - {Teste|Avaliação|Verificação} {Gratuito|Online|Interativo} para {Verificar|Conferir|Avaliar} a {Criptografia|Nível de Segurança|Proteção} do seu {Dispositivo|Telefone|Sistema}"
    ],
    descriptions: [
      "Encrypted Test: {Teste|Avaliação|Verificação} {gratuito|online|interativo} de {criptografia|segurança|privacidade} para {verificar|conferir|avaliar} a {proteção|segurança|privacidade} do seu {dispositivo|telefone|sistema}. {Ferramenta|Utilitário|Solução} {avançada|profissional|especializada} que {analisa|verifica|confere} o {nível|grau|estado} de {criptografia|segurança|proteção}.",
      "Execute um {teste|avaliação|verificação} {completo|abrangente|detalhado} de {segurança|criptografia|proteção} com Encrypted Test. Nossa {ferramenta|plataforma|sistema} {analisa|verifica|avalia} a {criptografia|nível de segurança|proteção} do seu {dispositivo|telefone|sistema}."
    ],
    keywords: [
      "Encrypted Test {teste|avaliação} {criptografia|segurança}, {verificar|conferir} {segurança|proteção} {dispositivo|telefone}, {teste|avaliação} {criptografia|segurança} {online|gratuito}"
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
function getEncryptedTestContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = encryptedTestSpintax[locale as keyof typeof encryptedTestSpintax] || encryptedTestSpintax.es;
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
export async function generateMetadata({ params: { locale } }: EncryptedTestPageProps): Promise<Metadata> {
  const title = getEncryptedTestContent(locale, 'titles');
  const description = getEncryptedTestContent(locale, 'descriptions');
  const keywords = getEncryptedTestContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/encrypted-test` : `${baseUrl}/${locale}/encrypted-test`;

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
          url: `${baseUrl}/images/encrypted-test/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/encrypted-test/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/encrypted-test`,
        'en': `${baseUrl}/en/encrypted-test`,
        'fr': `${baseUrl}/fr/encrypted-test`,
        'it': `${baseUrl}/it/encrypted-test`,
        'pt': `${baseUrl}/pt/encrypted-test`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'tool-type': 'Encryption Security Test',
      'tool-category': 'Security Assessment Tool',
      'test-type': 'Interactive Online Test',
      'tool-focus': 'Device Encryption Verification',
      'accessibility': 'Free Online Tool',
      'results-type': 'Instant Security Analysis',
      'target-devices': 'Phones, Computers, Mobile Devices'
    }
  };
}

// 🎯 STRUCTURED DATA PARA ENCRYPTED TEST
function getEncryptedTestStructuredData(locale: string) {
  const description = getEncryptedTestContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const toolNames = {
    es: 'Encrypted Test - Prueba de Encriptación Online Gratuita',
    en: 'Encrypted Test - Free Online Encryption Test',
    fr: 'Encrypted Test - Test de Chiffrement En ligne Gratuit',
    it: 'Encrypted Test - Test di Crittografia Online Gratuito',
    pt: 'Encrypted Test - Teste de Criptografia Online Gratuito'
  };

  const features = {
    es: [
      "Prueba de encriptación gratuita y online",
      "Verificación del nivel de seguridad del dispositivo",
      "Análisis de vulnerabilidades de cifrado",
      "Resultados instantáneos y detallados",
      "Recomendaciones de seguridad personalizadas",
      "Compatible con todos los dispositivos"
    ],
    en: [
      "Free online encryption test",
      "Device security level verification",
      "Encryption vulnerability analysis",
      "Instant and detailed results",
      "Personalized security recommendations",
      "Compatible with all devices"
    ]
  };

  const toolName = toolNames[locale as keyof typeof toolNames] || toolNames.es;
  const toolFeatures = features[locale as keyof typeof features] || features.en;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": toolName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/encrypted-test` : `${baseUrl}/${locale}/encrypted-test`,
        "applicationCategory": "SecurityApplication",
        "applicationSubCategory": "Encryption Testing Tool",
        "operatingSystem": ["Web Browser", "iOS", "Android", "Windows", "macOS", "Linux"],
        "author": {
          "@type": "Organization",
          "name": "Encriptados"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Encriptados"
        },
        "featureList": toolFeatures,
        "isAccessibleForFree": true,
        "interactionType": "Online Tool",
        "usageInfo": locale === 'es' ? "Herramienta gratuita para verificar la seguridad de dispositivos" : "Free tool to verify device security",
        "screenshot": `${baseUrl}/images/encrypted-test/screenshot.jpg`,
        "softwareVersion": "1.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "WebApplication",
        "name": toolName,
        "description": description,
        "url": locale === 'es' ? `${baseUrl}/encrypted-test` : `${baseUrl}/${locale}/encrypted-test`,
        "applicationCategory": "SecurityTool",
        "browserRequirements": "Modern web browser with JavaScript enabled",
        "permissions": "Device information access for security analysis",
        "isAccessibleForFree": true,
        "provider": {
          "@type": "Organization",
          "name": "Encriptados"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Cómo funciona el Encrypted Test?" : "How does Encrypted Test work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Encrypted Test analiza el nivel de encriptación y seguridad de tu dispositivo realizando una serie de verificaciones automáticas. La herramienta evalúa el cifrado, detecta vulnerabilidades y proporciona un reporte detallado con recomendaciones de seguridad personalizadas."
                : "Encrypted Test analyzes your device's encryption and security level by performing a series of automatic verifications. The tool evaluates encryption, detects vulnerabilities, and provides a detailed report with personalized security recommendations."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Es gratuito el test de encriptación?" : "Is the encryption test free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, Encrypted Test es completamente gratuito. Puedes realizar la prueba de encriptación de tu dispositivo sin costo alguno y obtener un análisis detallado de su nivel de seguridad junto con recomendaciones profesionales."
                : "Yes, Encrypted Test is completely free. You can perform your device's encryption test at no cost and get a detailed analysis of its security level along with professional recommendations."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué dispositivos son compatibles?" : "What devices are compatible?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Encrypted Test es compatible con todos los dispositivos que tengan un navegador web moderno: teléfonos móviles (iOS y Android), computadoras (Windows, macOS, Linux), tablets y otros dispositivos conectados. La herramienta funciona directamente desde el navegador."
                : "Encrypted Test is compatible with all devices that have a modern web browser: mobile phones (iOS and Android), computers (Windows, macOS, Linux), tablets, and other connected devices. The tool works directly from the browser."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué información proporciona el test?" : "What information does the test provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "El test proporciona un análisis completo del nivel de encriptación de tu dispositivo, detecta vulnerabilidades de seguridad, evalúa la protección de datos personales y ofrece recomendaciones específicas para mejorar la seguridad de tu sistema."
                : "The test provides a complete analysis of your device's encryption level, detects security vulnerabilities, evaluates personal data protection, and offers specific recommendations to improve your system's security."
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
            "name": "Encrypted Test",
            "item": locale === 'es' ? `${baseUrl}/encrypted-test` : `${baseUrl}/${locale}/encrypted-test`
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function EncryptedTestPageComponent({ params: { locale } }: EncryptedTestPageProps) {
  const structuredData = getEncryptedTestStructuredData(locale);
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
      <link rel="preload" href="/images/encrypted-test/hero-banner.jpg" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getEncryptedTestContent(locale, 'titles')} />
        <meta itemProp="description" content={getEncryptedTestContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="SecurityApplication" />
        <meta itemProp="operatingSystem" content="Web Browser, iOS, Android, Windows, macOS, Linux" />
        <meta itemProp="isAccessibleForFree" content="true" />
        <div itemProp="author" itemScope itemType="https://schema.org/Organization">
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
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/encrypted-test`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/encrypted-test`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/encrypted-test`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it/encrypted-test`} />
      <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt/encrypted-test`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/encrypted-test`} />

      {/* 🎯 TU COMPONENTE ORIGINAL */}
      <EncryptedTestPage />
    </>
  );
}