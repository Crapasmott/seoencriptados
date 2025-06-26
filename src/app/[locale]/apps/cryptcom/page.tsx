// src/app/[locale]/apps/cryptcom/page.tsx - CON SEO Y SPINTAX
import React from "react";
import { Metadata } from 'next';
import CryptcomClient from "./CryptcomClient";

interface CryptcomPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA CRYPTCOM
const cryptcomSpintax = {
  es: {
    titles: [
      "Cryptcom 2025 - {Comunicación|Mensajería|Chat} {Crypto|Blockchain|Cripto} {Segura|Encriptada|Protegida} | {Pago|Compra} {Bitcoin|Criptomonedas|Crypto} {Nativo|Integrado|Incluido}",
      "Cryptcom {Blockchain|Crypto|Cripto} - {Mensajería|Comunicación|Chat} {Descentralizada|P2P|Blockchain} con {Bitcoin|Criptomonedas|Crypto} {Integrado|Nativo|Incluido}",
      "{Mensajería|Comunicación|Chat} Cryptcom - {Plataforma|Aplicación|Sistema} {Blockchain|Crypto|Cripto} {Descentralizada|P2P|Web3} con {Pagos|Transacciones|Intercambios} {Crypto|Bitcoin|Criptomonedas}",
      "Cryptcom {Web3|Blockchain|Descentralizada} - {Comunicación|Mensajería|Chat} {Crypto|Cripto|Blockchain} con {Wallet|Billetera|Monedero} {Integrado|Incluido|Nativo}",
      "🚀 Cryptcom - {Mensajería|Chat} {Blockchain|Web3|Descentralizada} | {Pagos|Transacciones} {Bitcoin|Crypto|Criptomonedas} {Instantáneos|Directos|P2P}"
    ],
    descriptions: [
      "Cryptcom: La {plataforma|aplicación|solución} de {comunicación|mensajería|chat} {blockchain|crypto|descentralizada} que {combina|integra|fusiona} {mensajería|comunicación|chat} {segura|encriptada|protegida} con {pagos|transacciones|intercambios} {crypto|bitcoin|criptomonedas} {nativos|integrados|directos}. {Wallet|Billetera|Monedero} {integrado|incluido|nativo}, {transacciones|pagos|intercambios} {P2P|directas|instantáneas}, {tecnología|protocolos|sistemas} {blockchain|web3|descentralizada}.",
      "Descubre Cryptcom, la {plataforma|aplicación|solución} de {mensajería|comunicación|chat} {más avanzada|revolucionaria|innovadora} del {ecosistema|mundo|espacio} {crypto|blockchain|web3}. {Comunicación|Mensajería|Chat} {descentralizada|P2P|blockchain}, {pagos|transacciones|intercambios} {crypto|bitcoin|criptomonedas} {integrados|nativos|directos}, {wallet|billetera|monedero} {incluido|incorporado|nativo}."
    ],
    keywords: [
      "Cryptcom {mensajería|comunicación|chat} {blockchain|crypto|descentralizada}, {plataforma|aplicación} {mensajería|chat} {crypto|blockchain|web3}, Cryptcom {wallet|billetera} {integrado|incluido|nativo}, Cryptcom {Bitcoin|criptomonedas|crypto} {pago|compra|transacciones}, {mensajería|chat} {blockchain|web3} {P2P|descentralizada}"
    ]
  },
  en: {
    titles: [
      "Cryptcom 2025 - {Secure|Encrypted|Protected} {Crypto|Blockchain|Decentralized} {Communication|Messaging|Chat} | {Native|Integrated|Built-in} {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}",
      "Cryptcom {Blockchain|Crypto|Web3} - {Decentralized|P2P|Blockchain} {Messaging|Communication|Chat} with {Integrated|Native|Built-in} {Bitcoin|Cryptocurrency|Crypto}",
      "Cryptcom {Messaging|Communication|Chat} - {Blockchain|Crypto|Web3} {Decentralized|P2P|Blockchain} {Platform|Application|System} with {Crypto|Bitcoin|Cryptocurrency} {Payments|Transactions|Exchanges}",
      "Cryptcom {Web3|Blockchain|Decentralized} - {Crypto|Blockchain|Web3} {Communication|Messaging|Chat} with {Integrated|Built-in|Native} {Wallet|Digital Wallet|Crypto Wallet}",
      "🚀 Cryptcom - {Blockchain|Web3|Decentralized} {Messaging|Chat} | {Instant|Direct|P2P} {Bitcoin|Crypto|Cryptocurrency} {Payments|Transactions}"
    ],
    descriptions: [
      "Cryptcom: The {blockchain|crypto|decentralized} {communication|messaging|chat} {platform|application|solution} that {combines|integrates|merges} {secure|encrypted|protected} {messaging|communication|chat} with {native|integrated|direct} {crypto|bitcoin|cryptocurrency} {payments|transactions|exchanges}. {Integrated|Built-in|Native} {wallet|digital wallet|crypto wallet}, {P2P|direct|instant} {transactions|payments|exchanges}, {blockchain|web3|decentralized} {technology|protocols|systems}.",
      "Discover Cryptcom, the most {advanced|revolutionary|innovative} {messaging|communication|chat} {platform|application|solution} in the {crypto|blockchain|web3} {ecosystem|world|space}. {Decentralized|P2P|Blockchain} {communication|messaging|chat}, {integrated|native|direct} {crypto|bitcoin|cryptocurrency} {payments|transactions|exchanges}, {built-in|included|native} {wallet|digital wallet|crypto wallet}."
    ],
    keywords: [
      "Cryptcom {blockchain|crypto|decentralized} {messaging|communication|chat}, {crypto|blockchain|web3} {messaging|chat} {platform|application}, Cryptcom {integrated|built-in|native} {wallet|digital wallet}, Cryptcom {Bitcoin|cryptocurrency|crypto} {payment|purchase|transactions}, {blockchain|web3} {P2P|decentralized} {messaging|chat}"
    ]
  },
  fr: {
    titles: [
      "Cryptcom 2025 - Communication {Crypto|Blockchain|Décentralisée} {Sécurisée|Chiffrée|Protégée} | {Paiement|Achat} {Bitcoin|Cryptomonnaies|Crypto} {Natif|Intégré|Inclus}",
      "Cryptcom {Blockchain|Crypto|Web3} - Messagerie {Décentralisée|P2P|Blockchain} avec {Bitcoin|Cryptomonnaies|Crypto} {Intégré|Natif|Inclus}",
      "Messagerie Cryptcom - {Plateforme|Application|Système} {Blockchain|Crypto|Web3} {Décentralisée|P2P|Blockchain} avec {Paiements|Transactions|Échanges} {Crypto|Bitcoin|Cryptomonnaies}",
      "Cryptcom {Web3|Blockchain|Décentralisée} - Communication {Crypto|Blockchain|Web3} avec {Portefeuille|Wallet} {Intégré|Inclus|Natif}",
      "🚀 Cryptcom - Messagerie {Blockchain|Web3|Décentralisée} | {Paiements|Transactions} {Bitcoin|Crypto|Cryptomonnaies} {Instantanés|Directs|P2P}"
    ],
    descriptions: [
      "Cryptcom: La {plateforme|application|solution} de communication {blockchain|crypto|décentralisée} qui {combine|intègre|fusionne} la messagerie {sécurisée|chiffrée|protégée} avec les {paiements|transactions|échanges} {crypto|bitcoin|cryptomonnaies} {natifs|intégrés|directs}. {Portefeuille|Wallet} {intégré|inclus|natif}, {transactions|paiements|échanges} {P2P|directs|instantanés}, {technologie|protocoles|systèmes} {blockchain|web3|décentralisée}.",
      "Découvrez Cryptcom, la {plateforme|application|solution} de messagerie la plus {avancée|révolutionnaire|innovante} de l'écosystème {crypto|blockchain|web3}. Communication {décentralisée|P2P|blockchain}, {paiements|transactions|échanges} {crypto|bitcoin|cryptomonnaies} {intégrés|natifs|directs}, {portefeuille|wallet} {inclus|incorporé|natif}."
    ],
    keywords: [
      "Cryptcom messagerie {blockchain|crypto|décentralisée}, {plateforme|application} messagerie {crypto|blockchain|web3}, Cryptcom {portefeuille|wallet} {intégré|inclus|natif}, Cryptcom {Bitcoin|cryptomonnaies|crypto} {paiement|achat|transactions}, messagerie {blockchain|web3} {P2P|décentralisée}"
    ]
  },
  it: {
    titles: [
      "Cryptcom 2025 - Comunicazione {Crypto|Blockchain|Decentralizzata} {Sicura|Crittografata|Protetta} | {Pagamento|Acquisto} {Bitcoin|Criptovalute|Crypto} {Nativo|Integrato|Incluso}",
      "Cryptcom {Blockchain|Crypto|Web3} - Messaggistica {Decentralizzata|P2P|Blockchain} con {Bitcoin|Criptovalute|Crypto} {Integrato|Nativo|Incluso}",
      "Messaggistica Cryptcom - {Piattaforma|Applicazione|Sistema} {Blockchain|Crypto|Web3} {Decentralizzata|P2P|Blockchain} con {Pagamenti|Transazioni|Scambi} {Crypto|Bitcoin|Criptovalute}",
      "Cryptcom {Web3|Blockchain|Decentralizzata} - Comunicazione {Crypto|Blockchain|Web3} con {Portafoglio|Wallet} {Integrato|Incluso|Nativo}",
      "🚀 Cryptcom - Messaggistica {Blockchain|Web3|Decentralizzata} | {Pagamenti|Transazioni} {Bitcoin|Crypto|Criptovalute} {Istantanei|Diretti|P2P}"
    ],
    descriptions: [
      "Cryptcom: La {piattaforma|applicazione|soluzione} di comunicazione {blockchain|crypto|decentralizzata} che {combina|integra|fonde} la messaggistica {sicura|crittografata|protetta} con {pagamenti|transazioni|scambi} {crypto|bitcoin|criptovalute} {nativi|integrati|diretti}. {Portafoglio|Wallet} {integrato|incluso|nativo}, {transazioni|pagamenti|scambi} {P2P|diretti|istantanei}, {tecnologia|protocolli|sistemi} {blockchain|web3|decentralizzata}.",
      "Scopri Cryptcom, la {piattaforma|applicazione|soluzione} di messaggistica più {avanzata|rivoluzionaria|innovativa} dell'ecosistema {crypto|blockchain|web3}. Comunicazione {decentralizzata|P2P|blockchain}, {pagamenti|transazioni|scambi} {crypto|bitcoin|criptovalute} {integrati|nativi|diretti}, {portafoglio|wallet} {incluso|incorporato|nativo}."
    ],
    keywords: [
      "Cryptcom messaggistica {blockchain|crypto|decentralizzata}, {piattaforma|applicazione} messaggistica {crypto|blockchain|web3}, Cryptcom {portafoglio|wallet} {integrato|incluso|nativo}, Cryptcom {Bitcoin|criptovalute|crypto} {pagamento|acquisto|transazioni}, messaggistica {blockchain|web3} {P2P|decentralizzata}"
    ]
  },
  pt: {
    titles: [
      "Cryptcom 2025 - Comunicação {Crypto|Blockchain|Descentralizada} {Segura|Encriptada|Protegida} | {Pagamento|Compra} {Bitcoin|Criptomoedas|Crypto} {Nativo|Integrado|Incluído}",
      "Cryptcom {Blockchain|Crypto|Web3} - Mensagens {Descentralizadas|P2P|Blockchain} com {Bitcoin|Criptomoedas|Crypto} {Integrado|Nativo|Incluído}",
      "Mensagens Cryptcom - {Plataforma|Aplicação|Sistema} {Blockchain|Crypto|Web3} {Descentralizada|P2P|Blockchain} com {Pagamentos|Transações|Trocas} {Crypto|Bitcoin|Criptomoedas}",
      "Cryptcom {Web3|Blockchain|Descentralizada} - Comunicação {Crypto|Blockchain|Web3} com {Carteira|Wallet} {Integrada|Incluída|Nativa}",
      "🚀 Cryptcom - Mensagens {Blockchain|Web3|Descentralizadas} | {Pagamentos|Transações} {Bitcoin|Crypto|Criptomoedas} {Instantâneos|Diretos|P2P}"
    ],
    descriptions: [
      "Cryptcom: A {plataforma|aplicação|solução} de comunicação {blockchain|crypto|descentralizada} que {combina|integra|funde} mensagens {seguras|encriptadas|protegidas} com {pagamentos|transações|trocas} {crypto|bitcoin|criptomoedas} {nativos|integrados|diretos}. {Carteira|Wallet} {integrada|incluída|nativa}, {transações|pagamentos|trocas} {P2P|diretas|instantâneas}, {tecnologia|protocolos|sistemas} {blockchain|web3|descentralizada}.",
      "Descubra Cryptcom, a {plataforma|aplicação|solução} de mensagens mais {avançada|revolucionária|inovadora} do ecossistema {crypto|blockchain|web3}. Comunicação {descentralizada|P2P|blockchain}, {pagamentos|transações|trocas} {crypto|bitcoin|criptomoedas} {integrados|nativos|diretos}, {carteira|wallet} {incluída|incorporada|nativa}."
    ],
    keywords: [
      "Cryptcom mensagens {blockchain|crypto|descentralizadas}, {plataforma|aplicação} mensagens {crypto|blockchain|web3}, Cryptcom {carteira|wallet} {integrada|incluída|nativa}, Cryptcom {Bitcoin|criptomoedas|crypto} {pagamento|compra|transações}, mensagens {blockchain|web3} {P2P|descentralizadas}"
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
function getCryptcomContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = cryptcomSpintax[locale as keyof typeof cryptcomSpintax] || cryptcomSpintax.es;
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
export async function generateMetadata({ params: { locale } }: CryptcomPageProps): Promise<Metadata> {
  const title = getCryptcomContent(locale, 'titles');
  const description = getCryptcomContent(locale, 'descriptions');
  const keywords = getCryptcomContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/cryptcom` : `${baseUrl}/${locale}/apps/cryptcom`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Blockchain Communication Platform',
    
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
          url: `${baseUrl}/images/apps/cryptcom/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/cryptcom/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/cryptcom`,
        'en': `${baseUrl}/en/apps/cryptcom`,
        'fr': `${baseUrl}/fr/apps/cryptcom`,
        'it': `${baseUrl}/it/apps/cryptcom`,
        'pt': `${baseUrl}/pt/apps/cryptcom`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Cryptcom',
      'product-category': 'Blockchain Communication Platform',
      'product-type': 'Web3 Messaging App',
      'payment-methods': 'Bitcoin, Ethereum, Litecoin, USDT, USDC, BNB',
      'crypto-payments': 'Bitcoin, Ethereum, Litecoin, USDT, USDC, BNB',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'target-audience': 'Crypto Enthusiasts, DeFi Users, Web3 Community',
      'supported-platforms': 'Web, iOS, Android, Desktop',
      'blockchain-networks': 'Ethereum, Binance Smart Chain, Polygon',
      'web3-features': 'DeFi Integration, NFT Support, DAO Governance',
      'rating': '4.7/5',
      'review-count': '2156',
      'app-version': '1.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'developer': 'Cryptcom Technologies',
      'developer-website': baseUrl,
      'support-email': 'support@encriptados.io',
    }
  };
}

// 🎯 STRUCTURED DATA PARA CRYPTCOM
function getCryptcomStructuredData(locale: string) {
  const description = getCryptcomContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Cryptcom - Comunicación Blockchain Descentralizada',
    en: 'Cryptcom - Decentralized Blockchain Communication',
    fr: 'Cryptcom - Communication Blockchain Décentralisée',
    it: 'Cryptcom - Comunicazione Blockchain Decentralizzata',
    pt: 'Cryptcom - Comunicação Blockchain Descentralizada'
  };

  const features = {
    es: [
      "Mensajería blockchain descentralizada",
      "Wallet integrado multi-crypto",
      "Pagos P2P instantáneos",
      "Integración DeFi nativa",
      "Soporte NFT y tokens"
    ],
    en: [
      "Decentralized blockchain messaging",
      "Integrated multi-crypto wallet",
      "Instant P2P payments",
      "Native DeFi integration",
      "NFT and token support"
    ],
    fr: [
      "Messagerie blockchain décentralisée",
      "Portefeuille multi-crypto intégré",
      "Paiements P2P instantanés",
      "Intégration DeFi native",
      "Support NFT et tokens"
    ],
    it: [
      "Messaggistica blockchain decentralizzata",
      "Portafoglio multi-crypto integrato",
      "Pagamenti P2P istantanei",
      "Integrazione DeFi nativa",
      "Supporto NFT e token"
    ],
    pt: [
      "Mensagens blockchain descentralizadas",
      "Carteira multi-crypto integrada",
      "Pagamentos P2P instantâneos",
      "Integração DeFi nativa",
      "Suporte NFT e tokens"
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
        "url": locale === 'es' ? `${baseUrl}/apps/cryptcom` : `${baseUrl}/${locale}/apps/cryptcom`,
        "applicationCategory": "CommunicationApplication",
        "applicationSubCategory": "Blockchain Communication Platform",
        "operatingSystem": ["Web", "iOS", "Android", "Windows", "macOS"],
        "offers": {
          "@type": "Offer",
          "price": "49.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "acceptedPaymentMethod": [
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
          "ratingValue": "4.7",
          "reviewCount": "2156",
          "bestRating": "5"
        },
        "featureList": productFeatures,
        "author": {
          "@type": "Organization",
          "name": "Cryptcom Technologies"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es Cryptcom?" : "What is Cryptcom?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Cryptcom es una plataforma de comunicación blockchain descentralizada que combina mensajería segura con funcionalidades Web3, incluyendo wallet integrado, pagos crypto P2P, integración DeFi y soporte para NFTs."
                : "Cryptcom is a decentralized blockchain communication platform that combines secure messaging with Web3 functionalities, including integrated wallet, P2P crypto payments, DeFi integration, and NFT support."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué criptomonedas acepta Cryptcom?" : "What cryptocurrencies does Cryptcom accept?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Cryptcom acepta múltiples criptomonedas incluyendo Bitcoin, Ethereum, Litecoin, USDT, USDC y BNB. También soporta su token nativo CRYPTCOM para funcionalidades especiales."
                : "Cryptcom accepts multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, USDT, USDC, and BNB. It also supports its native CRYPTCOM token for special functionalities."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function CryptcomPage({ params: { locale } }: CryptcomPageProps) {
  const structuredData = getCryptcomStructuredData(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      <link rel="preload" href="/images/apps/cryptcom/banner.png" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getCryptcomContent(locale, 'titles')} />
        <meta itemProp="description" content={getCryptcomContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="CommunicationApplication" />
      </div>

      <CryptcomClient />
    </>
  );
}