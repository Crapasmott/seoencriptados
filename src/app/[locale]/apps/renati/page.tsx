// src/app/[locale]/apps/renati/page.tsx - CON SEO Y SPINTAX
import React from "react";
import { Metadata } from 'next';
import RenatiClient from "./RenatiClient";

interface RenatiPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA RENATI
const renatiSpintax = {
  es: {
    titles: [
      "Renati 2025 - {Comunicación|Mensajería|Chat} {Segura|Encriptada|Protegida} {Avanzada|Premium|Profesional} | {Pago|Compra} {Bitcoin|Criptomonedas|Crypto}",
      "Renati {Secure|Seguro|Encriptado} - {Mensajería|Comunicación|Chat} {Instantánea|Privada|Segura} con {Tecnología|Cifrado|Encriptación} {Avanzada|Premium|Militar}",
      "{Mensajería|Comunicación|Chat} Renati - {Aplicación|Plataforma|Sistema} {Segura|Encriptada|Protegida} con {Máxima|Extrema|Total} {Privacidad|Seguridad|Confidencialidad}",
      "Renati {Premium|Professional|Advanced} - {Comunicación|Mensajería|Chat} {Ultra Segura|Completamente Protegida|Totalmente Encriptada}",
      "🔒 Renati - {Mensajería|Chat} {Segura|Encriptada} {Avanzada|Premium} | {Acepta|Soporta|Compatible} {Bitcoin|Criptomonedas|Crypto}",
      "Renati vs {WhatsApp|Telegram|Signal} - {Mensajería|Chat} {Ultra Segura|Completamente Privada|Totalmente Protegida}",
      "⚡ {Comprar|Adquirir|Obtener} Renati con {Bitcoin|Criptomonedas|Crypto} - {Mensajería|Chat} {Segura|Encriptada} {Avanzada|Premium}",
      "Renati {2025|Premium|Pro} - {Máxima|Extrema|Total} {Seguridad|Privacidad|Protección} con {Pago|Compra} {Bitcoin|Criptomonedas|Crypto}"
    ],
    descriptions: [
      "Renati: {Aplicación|Plataforma|Solución} de {comunicación|mensajería|chat} {segura|encriptada|protegida} {avanzada|premium|profesional} que {garantiza|ofrece|proporciona} {máxima|extrema|total} {privacidad|seguridad|confidencialidad} en tus {conversaciones|comunicaciones|mensajes}. {Tecnología|Cifrado|Encriptación} {avanzada|premium|militar}, {interfaz|diseño|experiencia} {intuitiva|elegante|profesional}. {Acepta|Soporta|Compatible con} {pagos|compras|adquisición} con {Bitcoin|criptomonedas|crypto}.",
      "Descubre Renati, la {aplicación|plataforma|solución} de {mensajería|comunicación|chat} {más avanzada|premium|profesional} para usuarios que valoran su {privacidad|seguridad|confidencialidad}. {Tecnología|Cifrado|Encriptación} de {última generación|vanguardia|punta}, {diseño|interfaz|experiencia} {elegante|premium|profesional}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {disponible|aceptado|soportado}.",
      "{Mensajería|Comunicación|Chat} {segura|encriptada|protegida} {avanzada|premium|profesional} con Renati. {Aplicación|Plataforma|Sistema} {ultra segura|completamente protegida|totalmente encriptada}, {tecnología|cifrado|encriptación} de {vanguardia|última generación|punta}, {experiencia|interfaz|diseño} {premium|elegante|profesional}. {Ideal|Perfecta|Diseñada} para usuarios {exigentes|selectos|premium}.",
      "Renati ofrece {comunicación|mensajería|chat} {segura|encriptada|protegida} con {tecnología|cifrado|encriptación} {avanzada|premium|de vanguardia} y {protocolos|sistemas|estándares} de {seguridad|privacidad|protección} {estrictos|rigurosos|inquebrantables}. {Experiencia|Interfaz|Diseño} {premium|elegante|profesional}, {acepta|soporta|compatible con} {Bitcoin|criptomonedas|crypto}.",
      "⚡ {Comunica|Chatea|Conversa} con {máxima|extrema|total} {seguridad|privacidad|protección} usando Renati - La {aplicación|plataforma} de {mensajería|comunicación|chat} más {avanzada|premium|profesional}. {Tecnología|Cifrado|Encriptación} de {vanguardia|última generación|punta}, {experiencia|interfaz|diseño} {premium|elegante|exclusiva}, {pago|compra} con {Bitcoin|criptomonedas|crypto}."
    ],
    keywords: [
      "Renati {mensajería|comunicación|chat} {segura|encriptada|protegida} {avanzada|premium}, {aplicación|plataforma} {mensajería|chat} {ultra segura|completamente protegida}, Renati {tecnología|cifrado} {avanzada|premium|vanguardia}, Renati {Bitcoin|criptomonedas|crypto} {pago|compra|adquisición}",
      "{mensajería|comunicación} {segura|encriptada} {avanzada|premium|profesional}, Renati vs {WhatsApp|Telegram|Signal} {seguridad|privacidad|protección}, {aplicación|plataforma} {mensajería|chat} {premium|avanzada|profesional}, Renati {comprar|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "Renati {aplicación|plataforma} {segura|encriptada} {España|México|Argentina|Colombia}, {mensajería|chat} {ultra segura|completamente protegida}, {comunicación|chat} {premium|avanzada|profesional}, Renati {tecnología|sistemas} {vanguardia|última generación}"
    ]
  },
  en: {
    titles: [
      "Renati 2025 - {Advanced|Premium|Professional} {Secure|Encrypted|Protected} {Communication|Messaging|Chat} | {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}",
      "Renati {Secure|Encrypted|Protected} - {Instant|Private|Secure} {Messaging|Communication|Chat} with {Advanced|Premium|Military} {Technology|Encryption|Security}",
      "Renati {Messaging|Communication|Chat} - {Secure|Encrypted|Protected} {Application|Platform|System} with {Maximum|Extreme|Total} {Privacy|Security|Confidentiality}",
      "Renati {Premium|Professional|Advanced} - {Ultra Secure|Completely Protected|Totally Encrypted} {Communication|Messaging|Chat}",
      "🔒 Renati - {Advanced|Premium} {Secure|Encrypted} {Messaging|Chat} | {Accepts|Supports|Compatible} {Bitcoin|Cryptocurrency|Crypto}",
      "Renati vs {WhatsApp|Telegram|Signal} - {Ultra Secure|Completely Private|Totally Protected} {Messaging|Chat}",
      "⚡ {Buy|Purchase|Get} Renati with {Bitcoin|Cryptocurrency|Crypto} - {Advanced|Premium} {Secure|Encrypted} {Messaging|Chat}",
      "Renati {2025|Premium|Pro} - {Maximum|Extreme|Total} {Security|Privacy|Protection} with {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}"
    ],
    descriptions: [
      "Renati: {Advanced|Premium|Professional} {secure|encrypted|protected} {communication|messaging|chat} {application|platform|solution} that {guarantees|offers|provides} {maximum|extreme|total} {privacy|security|confidentiality} in your {conversations|communications|messages}. {Advanced|Premium|Military} {technology|encryption|security}, {intuitive|elegant|professional} {interface|design|experience}. {Accepts|Supports|Compatible with} {Bitcoin|cryptocurrency|crypto} {payments|purchases}.",
      "Discover Renati, the most {advanced|premium|professional} {messaging|communication|chat} {application|platform|solution} for users who value their {privacy|security|confidentiality}. {Cutting-edge|State-of-the-art|Advanced} {technology|encryption|security}, {elegant|premium|professional} {design|interface|experience}. {Bitcoin|Cryptocurrency|Crypto} {payment|purchase} {available|accepted|supported}.",
      "{Advanced|Premium|Professional} {secure|encrypted|protected} {messaging|communication|chat} with Renati. {Ultra secure|Completely protected|Totally encrypted} {application|platform|system}, {cutting-edge|state-of-the-art|advanced} {technology|encryption|security}, {premium|elegant|professional} {experience|interface|design}. {Ideal|Perfect|Designed} for {demanding|select|premium} users.",
      "Renati offers {secure|encrypted|protected} {communication|messaging|chat} with {advanced|premium|cutting-edge} {technology|encryption|security} and {strict|rigorous|unbreakable} {security|privacy|protection} {protocols|systems|standards}. {Premium|Elegant|Professional} {experience|interface|design}, {accepts|supports|compatible with} {Bitcoin|cryptocurrency|crypto}.",
      "⚡ {Communicate|Chat|Converse} with {maximum|extreme|total} {security|privacy|protection} using Renati - The most {advanced|premium|professional} {messaging|communication|chat} {application|platform}. {Cutting-edge|State-of-the-art|Advanced} {technology|encryption|security}, {premium|elegant|exclusive} {experience|interface|design}, {Bitcoin|cryptocurrency|crypto} {payment|purchase}."
    ],
    keywords: [
      "Renati {advanced|premium} {secure|encrypted|protected} {messaging|communication|chat}, {ultra secure|completely protected} {messaging|chat} {application|platform}, Renati {advanced|premium|cutting-edge} {technology|encryption}, Renati {Bitcoin|cryptocurrency|crypto} {payment|purchase}",
      "{advanced|premium|professional} {secure|encrypted} {messaging|communication}, Renati vs {WhatsApp|Telegram|Signal} {security|privacy|protection}, {premium|advanced|professional} {messaging|chat} {application|platform}, Renati {buy|purchase} with {Bitcoin|cryptocurrency|crypto}",
      "Renati {secure|encrypted} {application|platform} {USA|UK|Canada|Australia}, {ultra secure|completely protected} {messaging|chat}, {premium|advanced|professional} {communication|chat}, Renati {cutting-edge|state-of-the-art} {technology|systems}"
    ]
  },
  fr: {
    titles: [
      "Renati 2025 - Communication {Sécurisée|Chiffrée|Protégée} {Avancée|Premium|Professionnelle} | {Paiement|Achat} {Bitcoin|Cryptomonnaies|Crypto}",
      "Renati {Sécurisé|Chiffré|Protégé} - Messagerie {Instantanée|Privée|Sécurisée} avec {Technologie|Chiffrement|Sécurité} {Avancée|Premium|Militaire}",
      "Messagerie Renati - {Application|Plateforme|Système} {Sécurisée|Chiffrée|Protégée} avec {Confidentialité|Sécurité|Protection} {Maximale|Extrême|Totale}",
      "Renati {Premium|Professionnel|Avancé} - Communication {Ultra Sécurisée|Complètement Protégée|Totalement Chiffrée}",
      "🔒 Renati - Messagerie {Sécurisée|Chiffrée} {Avancée|Premium} | {Accepte|Supporte|Compatible} {Bitcoin|Cryptomonnaies|Crypto}"
    ],
    descriptions: [
      "Renati: {Application|Plateforme|Solution} de communication {sécurisée|chiffrée|protégée} {avancée|premium|professionnelle} qui {garantit|offre|fournit} une {confidentialité|sécurité|protection} {maximale|extrême|totale} dans vos {conversations|communications|messages}. {Technologie|Chiffrement|Sécurité} {avancée|premium|militaire}, {interface|design|expérience} {intuitive|élégante|professionnelle}.",
      "Découvrez Renati, l'application de messagerie la plus {avancée|premium|professionnelle} pour les utilisateurs qui valorisent leur {confidentialité|sécurité|vie privée}. {Technologie|Chiffrement|Sécurité} de {pointe|dernière génération|avant-garde}, {design|interface|expérience} {élégant|premium|professionnel}."
    ],
    keywords: [
      "Renati messagerie {sécurisée|chiffrée|protégée} {avancée|premium}, {application|plateforme} messagerie {ultra sécurisée|complètement protégée}, Renati {technologie|chiffrement} {avancée|premium}, Renati {Bitcoin|cryptomonnaies|crypto} {paiement|achat}"
    ]
  },
  it: {
    titles: [
      "Renati 2025 - Comunicazione {Sicura|Crittografata|Protetta} {Avanzata|Premium|Professionale} | {Pagamento|Acquisto} {Bitcoin|Criptovalute|Crypto}",
      "Renati {Sicuro|Crittografato|Protetto} - Messaggistica {Istantanea|Privata|Sicura} con {Tecnologia|Crittografia|Sicurezza} {Avanzata|Premium|Militare}",
      "Messaggistica Renati - {Applicazione|Piattaforma|Sistema} {Sicura|Crittografata|Protetta} con {Riservatezza|Sicurezza|Protezione} {Massima|Estrema|Totale}",
      "Renati {Premium|Professionale|Avanzato} - Comunicazione {Ultra Sicura|Completamente Protetta|Totalmente Crittografata}",
      "🔒 Renati - Messaggistica {Sicura|Crittografata} {Avanzata|Premium} | {Accetta|Supporta|Compatibile} {Bitcoin|Criptovalute|Crypto}"
    ],
    descriptions: [
      "Renati: {Applicazione|Piattaforma|Soluzione} di comunicazione {sicura|crittografata|protetta} {avanzata|premium|professionale} che {garantisce|offre|fornisce} {massima|estrema|totale} {riservatezza|sicurezza|protezione} nelle tue {conversazioni|comunicazioni|messaggi}. {Tecnologia|Crittografia|Sicurezza} {avanzata|premium|militare}, {interfaccia|design|esperienza} {intuitiva|elegante|professionale}.",
      "Scopri Renati, l'applicazione di messaggistica più {avanzata|premium|professionale} per utenti che valorizzano la loro {riservatezza|sicurezza|privacy}. {Tecnologia|Crittografia|Sicurezza} {all'avanguardia|di ultima generazione|avanzata}, {design|interfaccia|esperienza} {elegante|premium|professionale}."
    ],
    keywords: [
      "Renati messaggistica {sicura|crittografata|protetta} {avanzata|premium}, {applicazione|piattaforma} messaggistica {ultra sicura|completamente protetta}, Renati {tecnologia|crittografia} {avanzata|premium}, Renati {Bitcoin|criptovalute|crypto} {pagamento|acquisto}"
    ]
  },
  pt: {
    titles: [
      "Renati 2025 - Comunicação {Segura|Encriptada|Protegida} {Avançada|Premium|Profissional} | {Pagamento|Compra} {Bitcoin|Criptomoedas|Crypto}",
      "Renati {Seguro|Encriptado|Protegido} - Mensagens {Instantâneas|Privadas|Seguras} com {Tecnologia|Encriptação|Segurança} {Avançada|Premium|Militar}",
      "Mensagens Renati - {Aplicação|Plataforma|Sistema} {Segura|Encriptada|Protegida} com {Privacidade|Segurança|Proteção} {Máxima|Extrema|Total}",
      "Renati {Premium|Profissional|Avançado} - Comunicação {Ultra Segura|Completamente Protegida|Totalmente Encriptada}",
      "🔒 Renati - Mensagens {Seguras|Encriptadas} {Avançadas|Premium} | {Aceita|Suporta|Compatível} {Bitcoin|Criptomoedas|Crypto}"
    ],
    descriptions: [
      "Renati: {Aplicação|Plataforma|Solução} de comunicação {segura|encriptada|protegida} {avançada|premium|profissional} que {garante|oferece|proporciona} {máxima|extrema|total} {privacidade|segurança|confidencialidade} nas suas {conversações|comunicações|mensagens}. {Tecnologia|Encriptação|Segurança} {avançada|premium|militar}, {interface|design|experiência} {intuitiva|elegante|profissional}.",
      "Descubra Renati, a aplicação de mensagens mais {avançada|premium|profissional} para utilizadores que valorizam a sua {privacidade|segurança|confidencialidade}. {Tecnologia|Encriptação|Segurança} {de ponta|de última geração|avançada}, {design|interface|experiência} {elegante|premium|profissional}."
    ],
    keywords: [
      "Renati mensagens {seguras|encriptadas|protegidas} {avançadas|premium}, {aplicação|plataforma} mensagens {ultra seguras|completamente protegidas}, Renati {tecnologia|encriptação} {avançada|premium}, Renati {Bitcoin|criptomoedas|crypto} {pagamento|compra}"
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
function getRenatiContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = renatiSpintax[locale as keyof typeof renatiSpintax] || renatiSpintax.es;
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
export async function generateMetadata({ params: { locale } }: RenatiPageProps): Promise<Metadata> {
  const title = getRenatiContent(locale, 'titles');
  const description = getRenatiContent(locale, 'descriptions');
  const keywords = getRenatiContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/renati` : `${baseUrl}/${locale}/apps/renati`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Advanced Secure Communication Application',
    
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
          url: `${baseUrl}/images/apps/renati/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/renati/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/renati`,
        'en': `${baseUrl}/en/apps/renati`,
        'fr': `${baseUrl}/fr/apps/renati`,
        'it': `${baseUrl}/it/apps/renati`,
        'pt': `${baseUrl}/pt/apps/renati`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Renati',
      'product-category': 'Advanced Secure Communication Application',
      'product-type': 'Premium Messaging App',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, PayPal, Bank Transfer',
      'crypto-payments': 'Bitcoin, Ethereum, Litecoin, Monero, USDT, USDC',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'target-audience': 'Premium Users, Privacy-Conscious Professionals, Advanced Users',
      'supported-platforms': 'iOS, Android, Windows, macOS, Linux, Web',
      'encryption-type': 'Advanced Military-Grade Encryption',
      'privacy-level': 'Maximum Privacy with Premium Features',
      'security-level': 'Advanced Security Standards',
      'user-experience': 'Premium Elegant Interface',
      'use-cases': 'Premium Communication, Advanced Privacy, Professional Messaging',
      'competitors': 'WhatsApp, Telegram, Signal, Wickr, Threema',
      'features': 'Advanced Encryption, Premium Interface, Elegant Design, Crypto Payments',
      'premium-features': 'Advanced UI/UX, Premium Experience, Elite Functionality',
      'rating': '4.8/5',
      'review-count': '1876',
      'app-version': '2.5',
      'last-updated': new Date().toISOString().split('T')[0],
      'developer': 'Renati Technologies',
      'developer-website': baseUrl,
      'support-email': 'support@encriptados.io',
      'design-focus': 'Premium User Experience, Elegant Interface',
      'target-market': 'Premium Segment, Advanced Users',
    }
  };
}

// 🎯 STRUCTURED DATA PARA RENATI
function getRenatiStructuredData(locale: string) {
  const description = getRenatiContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Renati - Comunicación Segura Avanzada',
    en: 'Renati - Advanced Secure Communication',
    fr: 'Renati - Communication Sécurisée Avancée',
    it: 'Renati - Comunicazione Sicura Avanzata',
    pt: 'Renati - Comunicação Segura Avançada'
  };

  const features = {
    es: [
      "Tecnología de encriptación avanzada",
      "Interfaz premium elegante",
      "Experiencia de usuario superior",
      "Máxima privacidad garantizada",
      "Pagos con Bitcoin y criptomonedas",
      "Diseño profesional intuitivo",
      "Funcionalidades avanzadas",
      "Soporte multiplataforma",
      "Rendimiento optimizado",
      "Seguridad de grado militar"
    ],
    en: [
      "Advanced encryption technology",
      "Premium elegant interface",
      "Superior user experience",
      "Maximum privacy guaranteed",
      "Bitcoin and cryptocurrency payments",
      "Intuitive professional design",
      "Advanced functionalities",
      "Multi-platform support",
      "Optimized performance",
      "Military-grade security"
    ],
    fr: [
      "Technologie de chiffrement avancée",
      "Interface premium élégante",
      "Expérience utilisateur supérieure",
      "Confidentialité maximale garantie",
      "Paiements Bitcoin et cryptomonnaies",
      "Design professionnel intuitif",
      "Fonctionnalités avancées",
      "Support multi-plateforme",
      "Performance optimisée",
      "Sécurité de niveau militaire"
    ],
    it: [
      "Tecnologia di crittografia avanzata",
      "Interfaccia premium elegante",
      "Esperienza utente superiore",
      "Massima riservatezza garantita",
      "Pagamenti Bitcoin e criptovalute",
      "Design professionale intuitivo",
      "Funzionalità avanzate",
      "Supporto multi-piattaforma",
      "Prestazioni ottimizzate",
      "Sicurezza di livello militare"
    ],
    pt: [
      "Tecnologia de encriptação avançada",
      "Interface premium elegante",
      "Experiência de utilizador superior",
      "Máxima privacidade garantida",
      "Pagamentos Bitcoin e criptomoedas",
      "Design profissional intuitivo",
      "Funcionalidades avançadas",
      "Suporte multi-plataforma",
      "Desempenho otimizado",
      "Segurança de nível militar"
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
        "url": locale === 'es' ? `${baseUrl}/apps/renati` : `${baseUrl}/${locale}/apps/renati`,
        "applicationCategory": "CommunicationApplication",
        "applicationSubCategory": "Advanced Secure Communication",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": {
          "@type": "Offer",
          "price": "79.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "acceptedPaymentMethod": [
            "https://schema.org/CreditCard",
            "https://schema.org/Bitcoin",
            "https://schema.org/Cryptocurrency",
            "https://schema.org/PayPal"
          ],
          "seller": {
            "@type": "Organization",
            "name": "Encriptados"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1876",
          "bestRating": "5"
        },
        "featureList": productFeatures,
        "author": {
          "@type": "Organization",
          "name": "Renati Technologies"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué hace especial a Renati?" : "What makes Renati special?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Renati combina tecnología de encriptación avanzada con una experiencia de usuario premium. Ofrece máxima seguridad con una interfaz elegante e intuitiva, diseñada para usuarios que valoran tanto la privacidad como la experiencia de uso superior."
                : "Renati combines advanced encryption technology with a premium user experience. It offers maximum security with an elegant and intuitive interface, designed for users who value both privacy and superior user experience."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Renati acepta pagos con criptomonedas?" : "Does Renati accept cryptocurrency payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, Renati acepta múltiples criptomonedas incluyendo Bitcoin, Ethereum, Litecoin, Monero, USDT y USDC. Esto permite a los usuarios premium mantener su privacidad también en las transacciones de compra."
                : "Yes, Renati accepts multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, Monero, USDT, and USDC. This allows premium users to maintain their privacy also in purchase transactions."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function RenatiPage({ params: { locale } }: RenatiPageProps) {
  const structuredData = getRenatiStructuredData(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      <link rel="preload" href="/images/apps/renati/banner.png" as="image" />
      <link rel="preload" href="/images/apps/renati/hero-premium.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getRenatiContent(locale, 'titles')} />
        <meta itemProp="description" content={getRenatiContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="CommunicationApplication" />
        <meta itemProp="applicationSubCategory" content="Advanced Secure Communication" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="79.99" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency, PayPal" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.8" />
          <meta itemProp="reviewCount" content="1876" />
          <meta itemProp="bestRating" content="5" />
        </div>
        <div itemProp="author" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Renati Technologies" />
        </div>
      </div>

      <RenatiClient />
    </>
  );
}