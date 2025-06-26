// 🎯 STRUCTURED DATA PARA ARMADILLO V2
function getArmadilloV2StructuredData(locale: string) {
  const description = getArmadilloV2Content(locale, 'descriptions');
  
  const productNames = {
    es: 'Armadillo V2 - Equipo Ultra Seguro con Cifrado PGP',
    en: 'Armadillo V2 - Ultra Secure Device with PGP Encryption',
    fr: 'Armadillo V2 - Équipement Ultra Sécurisé avec Chiffrement PGP',
    it: 'Armadillo V2 - Dispositivo Ultra Sicuro con Crittografia PGP',
    pt: 'Armadillo V2 - Equipamento Ultra Seguro com Encriptação PGP'
  };


  const productName = productNames[locale as keyof typeof productNames] || productNames.es;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "category": locale === 'es' ? "Dispositivos Ultra Seguros con Cifrado PGP" : "Ultra Secure Devices with PGP Encryption",
        "brand": {
          "@type": "Brand",
          "name": "Armadillo V2"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 6 Meses" : "6 Months Plan",
            "price": "349",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
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
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan 12 Meses" : "12 Months Plan",
            "price": "595",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
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
          {
            "@type": "Offer",
            "name": locale === 'es' ? "Plan Premium" : "Premium Plan",
            "price": "1495",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/Bitcoin",
              "https://schema.org/Cryptocurrency"
            ],
            "seller": {
              "@type": "Organization",
              "name": "Encriptados"
            }
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2876",
          "bestRating": "5"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Armadillo V2 Technologies"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Device Type",
            "value": "Ultra Secure Anti-Attack Phone"
          },
          {
            "@type": "PropertyValue",
            "name": "Encryption Type",
            "value": "PGP-N 4096-bit Encryption"
          },
          {
            "@type": "PropertyValue",
            "name": "Security Level",
            "value": "Ultra Secure Attack-Proof"
          },
          {
            "@type": "PropertyValue",
            "name": "Email Security",
            "value": "PGP Encrypted Email"
          },
          {
            "@type": "PropertyValue",
            "name": "Crypto Payments",
            "value": "Bitcoin, Ethereum, Litecoin, Monero"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué es el celular cifrado Armadillo Phone?" : "What is the Armadillo Phone encrypted phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Es un celular cifrado que ofrece protección avanzada contra piratería. Cuenta con llamadas y videollamadas cifradas, chats encriptados y otras características que lo hacen un equipo seguro a prueba de hackers."
                : "It is an encrypted phone that offers advanced protection against piracy. It features encrypted calls and video calls, encrypted chats, and other features that make it a secure device that is hacker-proof."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Dónde comprar Armadillo Phone Celular cifrado?" : "Where to buy Armadillo Phone encrypted phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Puedes adquirir tu celular Armadillo Phone o la licencia en Encriptados.io. Paga con el medio de pago que desees y recíbelo en el menor tiempo posible."
                : "You can purchase your Armadillo Phone or license at Encriptados.io. Pay with your preferred payment method and receive it as quickly as possible."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Que es el cifrado OMEMO que utiliza Armadillo Phone?" : "What is the OMEMO encryption used by Armadillo Phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "OMEMO es un protocolo moderno que proporciona cifrado de extremo a extremo multicapa lo que permite la sincronización segura de mensajes entre múltiples clientes, incluso si algunos de ellos están fuera de línea."
                : "OMEMO is a modern protocol that provides multi-layer end-to-end encryption which allows secure message synchronization between multiple clients, even if some of them are offline."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Armadillo V2 acepta pagos con criptomonedas?" : "Does Armadillo V2 accept cryptocurrency payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, Armadillo V2 acepta múltiples criptomonedas incluyendo Bitcoin, Ethereum, Litecoin, Monero, USDT y USDC. Esto permite a los usuarios mantener su privacidad también en las transacciones de compra del dispositivo ultra seguro."
                : "Yes, Armadillo V2 accepts multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, Monero, USDT, and USDC. This allows users to maintain their privacy also in purchase transactions of the ultra secure device."
            }
          }
        ]
      }
    ]
  };
}

// 🎯 COMPONENTE PRINCIPAL CON SEO
export default async function ArmadilloV2Page({ params: { locale } }: ArmadilloV2PageProps) {
  const structuredData = getArmadilloV2StructuredData(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      <link rel="preload" href="/images/apps/armadillo-v2/banner-6-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/armadillo-v2/banner-12-months.jpg" as="image" />
      <link rel="preload" href="/images/apps/armadillo-v2/details.png" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      <div itemScope itemType="https://schema.org/Product" style={{ display: 'none' }}>
        <meta itemProp="name" content={getArmadilloV2Content(locale, 'titles')} />
        <meta itemProp="description" content={getArmadilloV2Content(locale, 'descriptions')} />
        <meta itemProp="category" content="Ultra Secure Devices with PGP Encryption" />
        <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
          <meta itemProp="lowPrice" content="349" />
          <meta itemProp="highPrice" content="1495" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.9" />
          <meta itemProp="reviewCount" content="2876" />
          <meta itemProp="bestRating" content="5" />
        </div>
        <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <meta itemProp="name" content="Armadillo V2" />
        </div>
      </div>

      <ArmadilloV2Client />
    </>
  );
}// src/app/[locale]/apps/armadillo-v2/page.tsx - CON SEO Y SPINTAX
import React from "react";
import { Metadata } from 'next';
import ArmadilloV2Client from "./ArmadilloV2Client";

interface ArmadilloV2PageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA ARMADILLO V2
const armadilloV2Spintax = {
  es: {
    titles: [
      "Armadillo V2 2025 - {Equipo|Dispositivo|Celular} {Ultra Seguro|Súper Protegido|Mega Blindado} | {Cifrado|Encriptación} {PGP|Avanzado|Militar} + {Bitcoin|Criptomonedas|Crypto}",
      "Armadillo V2 {Ultra|Súper|Mega} - {Celular|Dispositivo|Equipo} {Cifrado|Encriptado|Protegido} {Anti-Ataques|Anti-Hackeo|Blindado} con {PGP|Cifrado|Encriptación} {Avanzado|Militar|Premium}",
      "{Celular|Dispositivo|Equipo} Armadillo V2 - {Ultra Seguro|Súper Protegido|Mega Blindado} a {Prueba|Resistente|Inmune} de {Ataques|Hackeos|Piratería}",
      "Armadillo V2 {Premium|Pro|Advanced} - {Equipo|Dispositivo|Celular} {Ultra Seguro|Súper Protegido|Mega Blindado} y {Fácil|Simple|Intuitivo} de {Usar|Manejar|Operar}",
      "🔒 Armadillo V2 - {Celular|Dispositivo} {Ultra Seguro|Súper Protegido} | {PGP|Cifrado|Encriptación} {Avanzado|Militar|Premium} + {Bitcoin|Criptomonedas|Crypto}",
      "Armadillo V2 vs {iPhone|Samsung|Google Pixel} - {Celular|Dispositivo} {Ultra Seguro|Súper Protegido|Mega Blindado} {Anti-Ataques|Anti-Hackeo|Anti-Piratería}",
      "⚡ {Comprar|Adquirir|Obtener} Armadillo V2 con {Bitcoin|Criptomonedas|Crypto} - {Celular|Dispositivo} {Ultra Seguro|Súper Protegido} {PGP|Cifrado}",
      "Armadillo V2 {2025|Premium|Ultra} - {Protección|Seguridad|Blindaje} {Avanzada|Militar|Premium} contra {Ataques|Hackeos|Piratería} + {Crypto|Bitcoin|Criptomonedas}"
    ],
    descriptions: [
      "Armadillo V2: {Equipo|Dispositivo|Celular} {ultra seguro|súper protegido|mega blindado} a {prueba|resistente|inmune} de {ataques|hackeos|piratería} y {fácil|simple|intuitivo} de {usar|manejar|operar}. {Correo electrónico|Email|Mensajería} {asegurado|protegido|blindado} con {cifrado|encriptación} {PGP-N|PGP|avanzado}, {comunicaciones|conexiones|redes} {descentralizadas|privadas|seguras}. {Acepta|Soporta|Compatible con} {pagos|compras|adquisición} con {Bitcoin|criptomonedas|crypto}.",
      "Descubre Armadillo V2, el {equipo|dispositivo|celular} {ultra seguro|súper protegido|mega blindado} con {programas|aplicaciones|software} y {aplicaciones|apps|herramientas} {exclusivos|especializados|únicos}. {Cifrado|Encriptación} {PGP|avanzado|militar} de {4096 bits|máxima seguridad|grado militar}, {servidores|conexiones|redes} {privados|descentralizados|seguros}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {disponible|aceptado|soportado}.",
      "{Celular|Dispositivo|Equipo} {ultra seguro|súper protegido|mega blindado} Armadillo V2 - {Protección|Seguridad|Blindaje} {avanzada|militar|premium} contra {piratería|hackeos|ataques}. {Llamadas|Videollamadas|Comunicaciones} {cifradas|encriptadas|protegidas}, {chats|mensajes|conversaciones} {encriptados|cifrados|seguros}, {características|funciones|capacidades} {anti-hackers|anti-ataques|blindadas}. {Ideal|Perfecto|Diseñado} para usuarios que {requieren|necesitan|demandan} {máxima|extrema|ultra} {seguridad|protección|blindaje}.",
      "Armadillo V2 ofrece {comunicaciones|conexiones|mensajería} {ultra seguras|súper protegidas|mega blindadas} con {tecnología|cifrado|encriptación} {PGP|avanzada|militar} y {protocolos|sistemas|algoritmos} de {seguridad|protección|blindaje} {inquebrantables|rigurosos|militares}. {Correo electrónico|Email|Mensajería} {PGP|cifrado|encriptado}, {acepta|soporta|compatible con} {Bitcoin|criptomonedas|crypto}.",
      "⚡ {Protégete|Defiéndete|Blíndate} contra {ataques|hackeos|piratería} con Armadillo V2 - El {equipo|dispositivo|celular} más {seguro|protegido|blindado} y {fácil de usar|intuitivo|simple}. {Cifrado|Encriptación} {PGP-N|PGP|avanzado}, {aplicaciones|programas|software} {exclusivos|especializados|únicos}, {pago|compra} con {Bitcoin|criptomonedas|crypto}."
    ],
    keywords: [
      "Armadillo V2 {equipo|dispositivo|celular} {ultra seguro|súper protegido|mega blindado}, {celular|dispositivo} {cifrado|encriptado} {PGP|avanzado|militar}, Armadillo V2 {anti-ataques|anti-hackeo|anti-piratería}, Armadillo V2 {Bitcoin|criptomonedas|crypto} {pago|compra|adquisición}",
      "{celular|dispositivo} {ultra seguro|súper protegido} {prueba|resistente} {ataques|hackeos}, Armadillo V2 vs {iPhone|Samsung|Google Pixel} {seguridad|protección|blindaje}, {equipo|dispositivo} {cifrado|encriptado} {PGP|avanzado}, Armadillo V2 {comprar|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "Armadillo V2 {celular|dispositivo} {ultra seguro|súper protegido} {España|México|Argentina|Colombia}, {equipo|dispositivo} {anti-hackeo|anti-ataques|blindado}, {celular|dispositivo} {cifrado|encriptado} {PGP|militar}, Armadillo V2 {protección|seguridad} {avanzada|militar|premium}"
    ]
  },
  en: {
    titles: [
      "Armadillo V2 2025 - {Ultra Secure|Super Protected|Mega Shielded} {Device|Equipment|Phone} | {Advanced|Military|Premium} {PGP|Encryption|Security} + {Bitcoin|Cryptocurrency|Crypto}",
      "Armadillo V2 {Ultra|Super|Mega} - {Anti-Attack|Anti-Hacking|Shielded} {Encrypted|Secure|Protected} {Phone|Device|Equipment} with {Advanced|Military|Premium} {PGP|Encryption|Security}",
      "Armadillo V2 {Device|Phone|Equipment} - {Ultra Secure|Super Protected|Mega Shielded} {Attack-Proof|Hack-Resistant|Immune} to {Attacks|Hacking|Piracy}",
      "Armadillo V2 {Premium|Pro|Advanced} - {Ultra Secure|Super Protected|Mega Shielded} and {Easy|Simple|Intuitive} to {Use|Handle|Operate} {Device|Equipment|Phone}",
      "🔒 Armadillo V2 - {Ultra Secure|Super Protected} {Phone|Device} | {Advanced|Military|Premium} {PGP|Encryption|Security} + {Bitcoin|Cryptocurrency|Crypto}",
      "Armadillo V2 vs {iPhone|Samsung|Google Pixel} - {Ultra Secure|Super Protected|Mega Shielded} {Anti-Attack|Anti-Hacking|Anti-Piracy} {Phone|Device}",
      "⚡ {Buy|Purchase|Get} Armadillo V2 with {Bitcoin|Cryptocurrency|Crypto} - {Ultra Secure|Super Protected} {PGP|Encrypted} {Phone|Device}",
      "Armadillo V2 {2025|Premium|Ultra} - {Advanced|Military|Premium} {Protection|Security|Shielding} against {Attacks|Hacking|Piracy} + {Crypto|Bitcoin|Cryptocurrency}"
    ],
    descriptions: [
      "Armadillo V2: {Ultra secure|Super protected|Mega shielded} {device|equipment|phone} {attack-proof|hack-resistant|immune} to {attacks|hacking|piracy} and {easy|simple|intuitive} to {use|handle|operate}. {Email|Electronic mail|Messaging} {secured|protected|shielded} with {PGP-N|PGP|advanced} {encryption|security}, {decentralized|private|secure} {communications|connections|networks}. {Accepts|Supports|Compatible with} {Bitcoin|cryptocurrency|crypto} {payments|purchases}.",
      "Discover Armadillo V2, the {ultra secure|super protected|mega shielded} {device|equipment|phone} with {exclusive|specialized|unique} {programs|applications|software} and {applications|apps|tools}. {4096-bit|Maximum security|Military-grade} {PGP|advanced|military} {encryption|security}, {private|decentralized|secure} {servers|connections|networks}. {Bitcoin|Cryptocurrency|Crypto} {payment|purchase} {available|accepted|supported}.",
      "{Ultra secure|Super protected|Mega shielded} Armadillo V2 {device|phone|equipment} - {Advanced|Military|Premium} {protection|security|shielding} against {piracy|hacking|attacks}. {Encrypted|Secure|Protected} {calls|video calls|communications}, {encrypted|secure|protected} {chats|messages|conversations}, {anti-hacker|anti-attack|shielded} {features|functions|capabilities}. {Ideal|Perfect|Designed} for users who {require|need|demand} {maximum|extreme|ultra} {security|protection|shielding}.",
      "Armadillo V2 offers {ultra secure|super protected|mega shielded} {communications|connections|messaging} with {PGP|advanced|military} {technology|encryption|security} and {unbreakable|rigorous|military} {security|protection|shielding} {protocols|systems|algorithms}. {PGP|Encrypted|Secure} {email|electronic mail|messaging}, {accepts|supports|compatible with} {Bitcoin|cryptocurrency|crypto}.",
      "⚡ {Protect|Defend|Shield} yourself against {attacks|hacking|piracy} with Armadillo V2 - The most {secure|protected|shielded} and {easy-to-use|intuitive|simple} {device|equipment|phone}. {PGP-N|PGP|Advanced} {encryption|security}, {exclusive|specialized|unique} {applications|programs|software}, {Bitcoin|cryptocurrency|crypto} {payment|purchase}."
    ],
    keywords: [
      "Armadillo V2 {ultra secure|super protected|mega shielded} {device|equipment|phone}, {PGP|advanced|military} {encrypted|secure} {phone|device}, Armadillo V2 {anti-attack|anti-hacking|anti-piracy}, Armadillo V2 {Bitcoin|cryptocurrency|crypto} {payment|purchase}",
      "{ultra secure|super protected} {attack-proof|hack-resistant} {phone|device}, Armadillo V2 vs {iPhone|Samsung|Google Pixel} {security|protection|shielding}, {PGP|advanced} {encrypted|secure} {device|equipment}, Armadillo V2 {buy|purchase} with {Bitcoin|cryptocurrency|crypto}",
      "Armadillo V2 {ultra secure|super protected} {phone|device} {USA|UK|Canada|Australia}, {anti-hacking|anti-attack|shielded} {device|equipment}, {PGP|military} {encrypted|secure} {phone|device}, Armadillo V2 {advanced|military|premium} {protection|security}"
    ]
  },
  fr: {
    titles: [
      "Armadillo V2 2025 - {Équipement|Appareil|Téléphone} {Ultra Sécurisé|Super Protégé|Méga Blindé} | {Chiffrement|Sécurité} {PGP|Avancé|Militaire} + {Bitcoin|Cryptomonnaies|Crypto}",
      "Armadillo V2 {Ultra|Super|Méga} - {Téléphone|Appareil|Équipement} {Chiffré|Sécurisé|Protégé} {Anti-Attaques|Anti-Piratage|Blindé} avec {PGP|Chiffrement|Sécurité} {Avancé|Militaire|Premium}",
      "Équipement Armadillo V2 - {Ultra Sécurisé|Super Protégé|Méga Blindé} à {l'Épreuve|Résistant|Immunisé} des {Attaques|Piratages|Hackings}",
      "Armadillo V2 {Premium|Pro|Avancé} - {Équipement|Appareil|Téléphone} {Ultra Sécurisé|Super Protégé} et {Facile|Simple|Intuitif} à {Utiliser|Manipuler|Gérer}",
      "🔒 Armadillo V2 - {Téléphone|Appareil} {Ultra Sécurisé|Super Protégé} | {PGP|Chiffrement|Sécurité} {Avancé|Militaire} + {Bitcoin|Cryptomonnaies|Crypto}"
    ],
    descriptions: [
      "Armadillo V2: {Équipement|Appareil|Téléphone} {ultra sécurisé|super protégé|méga blindé} à {l'épreuve|résistant|immunisé} des {attaques|piratages|hackings} et {facile|simple|intuitif} à {utiliser|manipuler|gérer}. {Courrier électronique|Email|Messagerie} {sécurisé|protégé|blindé} avec {chiffrement|sécurité} {PGP-N|PGP|avancé}.",
      "Découvrez Armadillo V2, l'équipement {ultra sécurisé|super protégé|méga blindé} avec {programmes|applications|logiciels} et {applications|apps|outils} {exclusifs|spécialisés|uniques}. {Chiffrement|Sécurité} {PGP|avancé|militaire} de {4096 bits|sécurité maximale|niveau militaire}."
    ],
    keywords: [
      "Armadillo V2 {équipement|appareil|téléphone} {ultra sécurisé|super protégé}, {téléphone|appareil} {chiffré|sécurisé} {PGP|avancé}, Armadillo V2 {anti-attaques|anti-piratage}, Armadillo V2 {Bitcoin|cryptomonnaies|crypto} {paiement|achat}"
    ]
  },
  it: {
    titles: [
      "Armadillo V2 2025 - {Dispositivo|Equipaggiamento|Telefono} {Ultra Sicuro|Super Protetto|Mega Blindato} | {Crittografia|Sicurezza} {PGP|Avanzata|Militare} + {Bitcoin|Criptovalute|Crypto}",
      "Armadillo V2 {Ultra|Super|Mega} - {Telefono|Dispositivo|Equipaggiamento} {Crittografato|Sicuro|Protetto} {Anti-Attacchi|Anti-Hacking|Blindato} con {PGP|Crittografia|Sicurezza} {Avanzata|Militare|Premium}",
      "Dispositivo Armadillo V2 - {Ultra Sicuro|Super Protetto|Mega Blindato} a {Prova|Resistente|Immune} di {Attacchi|Hacking|Pirateria}",
      "Armadillo V2 {Premium|Pro|Avanzato} - {Dispositivo|Equipaggiamento|Telefono} {Ultra Sicuro|Super Protetto} e {Facile|Semplice|Intuitivo} da {Usare|Gestire|Operare}",
      "🔒 Armadillo V2 - {Telefono|Dispositivo} {Ultra Sicuro|Super Protetto} | {PGP|Crittografia|Sicurezza} {Avanzata|Militare} + {Bitcoin|Criptovalute|Crypto}"
    ],
    descriptions: [
      "Armadillo V2: {Dispositivo|Equipaggiamento|Telefono} {ultra sicuro|super protetto|mega blindato} a {prova|resistente|immune} di {attacchi|hacking|pirateria} e {facile|semplice|intuitivo} da {usare|gestire|operare}. {Posta elettronica|Email|Messaggistica} {sicura|protetta|blindata} con {crittografia|sicurezza} {PGP-N|PGP|avanzata}.",
      "Scopri Armadillo V2, il dispositivo {ultra sicuro|super protetto|mega blindato} con {programmi|applicazioni|software} e {applicazioni|app|strumenti} {esclusivi|specializzati|unici}. {Crittografia|Sicurezza} {PGP|avanzata|militare} da {4096 bit|sicurezza massima|livello militare}."
    ],
    keywords: [
      "Armadillo V2 {dispositivo|equipaggiamento|telefono} {ultra sicuro|super protetto}, {telefono|dispositivo} {crittografato|sicuro} {PGP|avanzato}, Armadillo V2 {anti-attacchi|anti-hacking}, Armadillo V2 {Bitcoin|criptovalute|crypto} {pagamento|acquisto}"
    ]
  },
  pt: {
    titles: [
      "Armadillo V2 2025 - {Equipamento|Dispositivo|Telefone} {Ultra Seguro|Super Protegido|Mega Blindado} | {Encriptação|Segurança} {PGP|Avançada|Militar} + {Bitcoin|Criptomoedas|Crypto}",
      "Armadillo V2 {Ultra|Super|Mega} - {Telefone|Dispositivo|Equipamento} {Encriptado|Seguro|Protegido} {Anti-Ataques|Anti-Hacking|Blindado} com {PGP|Encriptação|Segurança} {Avançada|Militar|Premium}",
      "Equipamento Armadillo V2 - {Ultra Seguro|Super Protegido|Mega Blindado} à {Prova|Resistente|Imune} de {Ataques|Hacking|Pirataria}",
      "Armadillo V2 {Premium|Pro|Avançado} - {Equipamento|Dispositivo|Telefone} {Ultra Seguro|Super Protegido} e {Fácil|Simples|Intuitivo} de {Usar|Manusear|Operar}",
      "🔒 Armadillo V2 - {Telefone|Dispositivo} {Ultra Seguro|Super Protegido} | {PGP|Encriptação|Segurança} {Avançada|Militar} + {Bitcoin|Criptomoedas|Crypto}"
    ],
    descriptions: [
      "Armadillo V2: {Equipamento|Dispositivo|Telefone} {ultra seguro|super protegido|mega blindado} à {prova|resistente|imune} de {ataques|hacking|pirataria} e {fácil|simples|intuitivo} de {usar|manusear|operar}. {Correio electrónico|Email|Mensagens} {seguro|protegido|blindado} com {encriptação|segurança} {PGP-N|PGP|avançada}.",
      "Descubra Armadillo V2, o equipamento {ultra seguro|super protegido|mega blindado} com {programas|aplicações|software} e {aplicações|apps|ferramentas} {exclusivos|especializados|únicos}. {Encriptação|Segurança} {PGP|avançada|militar} de {4096 bits|segurança máxima|nível militar}."
    ],
    keywords: [
      "Armadillo V2 {equipamento|dispositivo|telefone} {ultra seguro|super protegido}, {telefone|dispositivo} {encriptado|seguro} {PGP|avançado}, Armadillo V2 {anti-ataques|anti-hacking}, Armadillo V2 {Bitcoin|criptomoedas|crypto} {pagamento|compra}"
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
function getArmadilloV2Content(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = armadilloV2Spintax[locale as keyof typeof armadilloV2Spintax] || armadilloV2Spintax.es;
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
export async function generateMetadata({ params: { locale } }: ArmadilloV2PageProps): Promise<Metadata> {
  const title = getArmadilloV2Content(locale, 'titles');
  const description = getArmadilloV2Content(locale, 'descriptions');
  const keywords = getArmadilloV2Content(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/armadillo-v2` : `${baseUrl}/${locale}/apps/armadillo-v2`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Ultra Secure Device with PGP Encryption',
    
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
          url: `${baseUrl}/images/apps/armadillo-v2/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/armadillo-v2/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/armadillo-v2`,
        'en': `${baseUrl}/en/apps/armadillo-v2`,
        'fr': `${baseUrl}/fr/apps/armadillo-v2`,
        'it': `${baseUrl}/it/apps/armadillo-v2`,
        'pt': `${baseUrl}/pt/apps/armadillo-v2`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Armadillo V2',
      'product-category': 'Ultra Secure Device with PGP Encryption',
      'product-type': 'Attack-Proof Secure Phone',
      'product-price-6months': '349 USD',
      'product-price-12months': '595 USD',
      'product-price-premium': '1495 USD',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, Bank Transfer',
      'crypto-payments': 'Bitcoin, Ethereum, Litecoin, Monero, USDT, USDC',
      'availability': 'In Stock',
      'shipping': 'Worldwide Shipping',
      'target-audience': 'High-Security Users, Anti-Hacking Protection, Advanced Privacy Seekers',
      'device-type': 'Ultra Secure Anti-Attack Phone',
      'encryption-type': 'PGP-N 4096-bit Encryption',
      'security-level': 'Ultra Secure Attack-Proof',
      'email-security': 'PGP Encrypted Email',
      'network-type': 'Decentralized Private Networks',
      'use-cases': 'Anti-Attack Protection, Ultra Secure Communications, PGP Email, Hack-Proof Device',
      'competitors': 'iPhone, Samsung Galaxy, Google Pixel, BlackBerry',
      'features': 'PGP Encryption, Anti-Attack Protection, Decentralized Networks, Exclusive Apps',
      'security-features': 'PGP-N Email, 4096-bit Encryption, Private Servers, Attack-Proof Design',
      'rating': '4.9/5',
      'review-count': '2876',
      'device-version': '2.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'manufacturer': 'Armadillo V2 Technologies',
      'manufacturer-website': baseUrl,
      'support-email': 'support@encriptados.io',
      'device-focus': 'Ultra Security and Attack Prevention',
      'target-market': 'High-Risk Security Users',
      'protection-level': 'Ultra Secure Attack-Proof',
      'communication-security': 'PGP Encrypted Communications',
      'omemo-protocol': 'Advanced OMEMO Multi-layer Encryption',
    }
  };
}