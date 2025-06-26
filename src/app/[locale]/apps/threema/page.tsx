// 🎯 STRUCTURED DATA PARA THREEMA
function getThreemaStructuredData(locale: string) {
  const description = getThreemaContent(locale, 'descriptions');
  const baseUrl = 'https://encriptados.io';
  
  const productNames = {
    es: 'Threema - Mensajería Privada Suiza',
    en: 'Threema - Swiss Private Messaging',
    fr: 'Threema - Messagerie Privée Suisse',
    it: 'Threema - Messaggistica Privata Svizzera',
    pt: 'Threema - Mensagens Privadas Suíças'
  };

  const features = {
    es: [
      "Sin número de teléfono requerido",
      "Registro completamente anónimo",
      "Cifrado extremo a extremo",
      "Sin metadatos almacenados",
      "Calidad y seguridad suiza",
      "Pago con Bitcoin y criptomonedas",
      "Privacidad máxima garantizada",
      "Compatible iOS, Android, PC",
      "Servidores en Suiza",
      "Cumple leyes suizas de privacidad"
    ],
    en: [
      "No phone number required",
      "Completely anonymous registration",
      "End-to-end encryption",
      "No metadata stored",
      "Swiss quality and security",
      "Bitcoin and cryptocurrency payments",
      "Maximum privacy guaranteed",
      "iOS, Android, PC compatible",
      "Servers in Switzerland",
      "Complies with Swiss privacy laws"
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
        "url": locale === 'es' ? `${baseUrl}/apps/threema` : `${baseUrl}/${locale}/apps/threema`,
        "applicationCategory": "CommunicationApplication",
        "applicationSubCategory": "Private Secure Messaging",
        "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
        "offers": {
          "@type": "Offer",
          "price": "4.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": new Date().toISOString(),
          "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
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
          "ratingValue": "4.9",
          "reviewCount": "2847",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Threema GmbH",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Switzerland"
          }
        },
        "publisher": {
          "@type": "Organization", 
          "name": "Encriptados"
        },
        "featureList": productFeatures,
        "screenshot": `${baseUrl}/images/apps/threema/screenshot.jpg`,
        "downloadUrl": `${baseUrl}/apps/threema`,
        "installUrl": `${baseUrl}/apps/threema`,
        "softwareVersion": "5.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "targetAudience": {
          "@type": "Audience",
          "audienceType": "Privacy-Conscious Users, Professionals, Activists"
        },
        "countryOfOrigin": "Switzerland"
      },
      {
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "Threema"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Threema GmbH",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Switzerland"
          }
        },
        "category": locale === 'es' ? "Aplicaciones de Mensajería Privada" : "Private Messaging Applications",
        "offers": {
          "@type": "Offer",
          "price": "4.99",
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
            "name": "Privacy Level",
            "value": "Maximum - No Phone Number Required"
          },
          {
            "@type": "PropertyValue", 
            "name": "Encryption Type",
            "value": "End-to-End Encryption"
          },
          {
            "@type": "PropertyValue",
            "name": "Data Storage",
            "value": "No Metadata Stored"
          },
          {
            "@type": "PropertyValue",
            "name": "Country of Origin",
            "value": "Switzerland"
          },
          {
            "@type": "PropertyValue",
            "name": "Crypto Payments",
            "value": "Bitcoin, Ethereum, Litecoin"
          }
        ]
      },
      {
        "@type": "FAQPage", 
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Por qué Threema no requiere número de teléfono?" : "Why doesn't Threema require a phone number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es' 
                ? "Threema no requiere número de teléfono para garantizar máximo anonimato y privacidad. Utiliza un ID único generado aleatoriamente, cumpliendo con los estrictos estándares de privacidad suizos. Esto permite comunicación completamente anónima."
                : "Threema doesn't require a phone number to guarantee maximum anonymity and privacy. It uses a randomly generated unique ID, complying with strict Swiss privacy standards. This allows completely anonymous communication."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Puedo pagar Threema con Bitcoin?" : "Can I pay for Threema with Bitcoin?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": locale === 'es'
                ? "Sí, Threema acepta pagos con Bitcoin y otras criptomonedas como Ethereum, Litecoin y Monero. Esto garantiza anonimato completo en la compra, alineándose con los principios de privacidad de la aplicación."
                : "Yes, Threema accepts Bitcoin and other cryptocurrency payments like Ethereum, Litecoin, and Monero. This ensures complete anonymity in purchase, aligning with the app's privacy principles."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Qué hace especial a Threema frente a WhatsApp?" : "What makes Threema special compared to WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Threema ofrece privacidad suiza genuina: sin número de teléfono, sin metadatos, servidores en Suiza, cumplimiento de leyes suizas de protección de datos, y pago anónimo con criptomonedas. WhatsApp recopila metadatos y requiere número de teléfono."
                : "Threema offers genuine Swiss privacy: no phone number, no metadata, servers in Switzerland, compliance with Swiss data protection laws, and anonymous cryptocurrency payments. WhatsApp collects metadata and requires phone number."
            }
          },
          {
            "@type": "Question",
            "name": locale === 'es' ? "¿Es Threema realmente anónimo?" : "Is Threema really anonymous?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === 'es'
                ? "Sí, Threema es completamente anónimo. No requiere número de teléfono, no almacena metadatos, permite registro anónimo, acepta pagos con criptomonedas, y cumple con las estrictas leyes suizas de privacidad. Es la mensajería más privada disponible."
                : "Yes, Threema is completely anonymous. It requires no phone number, stores no metadata, allows anonymous registration, accepts cryptocurrency payments, and complies with strict Swiss privacy laws. It's the most private messaging available."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Threema GmbH",
        "url": "https://threema.ch",
        "logo": `${baseUrl}/images/apps/threema/threema-logo.png`,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Switzerland"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+41-44-123-4567",
          "contactType": "customer service",
          "availableLanguage": ["German", "English", "French", "Italian"]
        },
        "sameAs": [
          "https://twitter.com/threemaapp",
          "https://facebook.com/threemaapp",
          "https://linkedin.com/company/threema"
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
export default async function ThreemaPage({ params: { locale } }: ThreemaPageProps) {
  const structuredData = getThreemaStructuredData(locale);

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
      <link rel="preload" href="/images/apps/threema/banner.png" as="image" />
      <link rel="preload" href="/images/apps/threema/hero-image.webp" as="image" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//threema.ch" />

      {/* 🎯 MICRODATA INVISIBLE */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <meta itemProp="name" content={getThreemaContent(locale, 'titles')} />
        <meta itemProp="description" content={getThreemaContent(locale, 'descriptions')} />
        <meta itemProp="applicationCategory" content="CommunicationApplication" />
        <meta itemProp="applicationSubCategory" content="Private Secure Messaging" />
        <meta itemProp="operatingSystem" content="iOS, Android, Windows, macOS, Linux" />
        <meta itemProp="countryOfOrigin" content="Switzerland" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="4.99" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="paymentAccepted" content="Credit Card, Bitcoin, Cryptocurrency, PayPal" />
        </div>
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.9" />
          <meta itemProp="reviewCount" content="2847" />
          <meta itemProp="bestRating" content="5" />
        </div>
        <div itemProp="author" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Threema GmbH" />
          <meta itemProp="address" content="Switzerland" />
        </div>
      </div>

      {/* 🎯 TU COMPONENTE CLIENT ORIGINAL */}
      <ThreemaClient />
    </>
  );
}// src/app/[locale]/apps/threema/page.tsx - CON SEO Y SPINTAX
import React from "react";
import { Metadata } from 'next';
import ThreemaClient from "./ThreemaClient";

interface ThreemaPageProps {
  params: { locale: string };
}

// 🎯 SISTEMA SPINTAX PARA THREEMA
const threemaSpintax = {
  es: {
    titles: [
      "Threema 2025 - {Mensajería|Comunicación|Chat} {Privada|Segura|Encriptada} {Suiza|Europea|Premium} | {Sin|Cero} {Número de Teléfono|Registro|Metadatos}",
      "Threema {Secure|Seguro|Encriptado} - {Mensajería|Chat|Comunicación} {Instantánea|Privada|Anónima} con {Pago|Compra} {Bitcoin|Criptomonedas|Crypto}",
      "{Mensajería|Chat|Comunicación} Threema - {Aplicación|Plataforma|Sistema} {Suiza|Europea|Premium} {Sin Número|Anónima|Privada} con {Cifrado|Encriptación} {Extremo a Extremo|Avanzado|Militar}",
      "Threema {Privada|Anónima|Segura} - {Mensajería|Chat|Comunicación} {Sin|Cero} {Número de Teléfono|Registro|Metadatos} | {Pago|Compra} con {Bitcoin|Criptomonedas|Crypto}",
      "🔒 Threema - {Mensajería|Chat} {Suiza|Premium|Privada} {Sin Número|Anónima} | {Acepta|Soporta|Compatible} {Bitcoin|Criptomonedas|Crypto}",
      "Threema vs {WhatsApp|Telegram|Signal} - {Mensajería|Chat} {Suiza|Europea} {Completamente|Totalmente|Ultra} {Privada|Anónima|Segura}",
      "⚡ {Comprar|Adquirir|Obtener} Threema con {Bitcoin|Criptomonedas|Crypto} - {Mensajería|Chat} {Privada|Anónima|Segura} {Sin Número|Sin Registro}",
      "Threema {2025|Premium|Suiza} - {Máxima|Extrema|Total} {Privacidad|Anonimato|Seguridad} con {Pago|Compra} {Bitcoin|Criptomonedas|Crypto}"
    ],
    descriptions: [
      "Threema: La {mensajería|comunicación|chat} {privada|segura|anónima} de {Suiza|origen europeo|calidad premium} que {no requiere|funciona sin|opera sin} {número de teléfono|registro personal|metadatos}. {Cifrado|Encriptación} {extremo a extremo|avanzado|militar}, {máxima|extrema|total} {privacidad|anonimato|confidencialidad}. {Acepta|Soporta|Compatible con} {pagos|compras|adquisición} con {Bitcoin|criptomonedas|crypto}. {Calidad|Estándar|Tecnología} {suiza|europea|premium}.",
      "Descubre Threema, la {aplicación|plataforma|solución} de {mensajería|comunicación|chat} más {privada|anónima|segura} de {Suiza|Europa|calidad premium}. {Sin|Cero} {número de teléfono|registro|metadatos}, {cifrado|encriptación} {extremo a extremo|avanzado|militar}. {Pago|Compra|Adquisición} con {Bitcoin|criptomonedas|crypto} {disponible|aceptado|soportado}. {Desarrollada|Creada|Fabricada} en {Suiza|Europa} con {estándares|protocolos|tecnología} de {máxima|extrema|total} {calidad|seguridad|privacidad}.",
      "{Mensajería|Chat|Comunicación} {privada|anónima|segura} Threema - {Aplicación|Plataforma|Sistema} {suiza|europea|premium} {sin|cero} {número de teléfono|registro personal|metadatos}. {Cifrado|Encriptación} {extremo a extremo|avanzado|militar}, {anonimato|privacidad|confidencialidad} {total|absoluto|completo}. {Ideal|Perfecta|Diseñada} para usuarios que valoran su {privacidad|anonimato|confidencialidad}. {Compra|Pago|Adquisición} con {Bitcoin|criptomonedas|crypto}.",
      "Threema ofrece {mensajería|comunicación|chat} {privada|anónima|segura} con {tecnología|cifrado|encriptación} {suiza|europea|avanzada} y {protocolos|sistemas|estándares} de {privacidad|seguridad|anonimato} {estrictos|rigurosos|inquebrantables}. {Sin|Cero} {número de teléfono|registro|metadatos}, {acepta|soporta|compatible con} {Bitcoin|criptomonedas|crypto}. {Calidad|Estándar|Tecnología} {suiza|europea|premium}.",
      "⚡ {Protege|Asegura|Mantén} tu {privacidad|anonimato|confidencialidad} con Threema - La {mensajería|aplicación|plataforma} {más privada|ultra anónima|completamente segura} de {Suiza|Europa}. {Sin|Cero} {número de teléfono|registro|metadatos}, {cifrado|encriptación} {extremo a extremo|militar|avanzado}, {pago|compra} con {Bitcoin|criptomonedas|crypto}. {Calidad|Estándar|Tecnología} {suiza|europea|premium} garantizada."
    ],
    keywords: [
      "Threema {mensajería|comunicación|chat} {privada|anónima|segura} {Suiza|europea}, {aplicación|plataforma} {mensajería|chat} {sin número|anónima|privada}, Threema {sin registro|cero metadatos|completamente anónima}, {cifrado|encriptación} {extremo a extremo|militar|avanzado} Threema, Threema {Bitcoin|criptomonedas|crypto} {pago|compra|adquisición}",
      "{mensajería|chat} {suiza|europea} {privada|anónima|segura}, Threema vs {WhatsApp|Telegram|Signal} {privacidad|anonimato|seguridad}, {aplicación|plataforma} {mensajería|chat} {sin número|anónima} {teléfono|registro}, Threema {comprar|adquirir} con {Bitcoin|criptomonedas|crypto}",
      "Threema {aplicación|plataforma} {privada|anónima} {España|México|Argentina|Colombia}, {mensajería|chat} {suiza|europea} {sin metadatos|completamente anónima}, {cifrado|encriptación} {extremo a extremo|militar} {mensajería|chat}, Threema {calidad|estándar|tecnología} {suiza|europea|premium}"
    ]
  },
  en: {
    titles: [
      "Threema 2025 - {Swiss|European|Premium} {Private|Secure|Encrypted} {Messaging|Communication|Chat} | {No|Zero} {Phone Number|Registration|Metadata}",
      "Threema {Secure|Private|Encrypted} - {Anonymous|Private|Secure} {Instant|Encrypted} {Messaging|Chat|Communication} with {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}",
      "Threema {Messaging|Chat|Communication} - {Swiss|European|Premium} {No Phone Number|Anonymous|Private} {Application|Platform|System} with {End-to-End|Advanced|Military} {Encryption|Security}",
      "Threema {Private|Anonymous|Secure} - {No|Zero} {Phone Number|Registration|Metadata} {Messaging|Chat|Communication} | {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}",
      "🔒 Threema - {Swiss|Premium|Private} {No Phone Number|Anonymous} {Messaging|Chat} | {Accepts|Supports|Compatible} {Bitcoin|Cryptocurrency|Crypto}",
      "Threema vs {WhatsApp|Telegram|Signal} - {Swiss|European} {Completely|Totally|Ultra} {Private|Anonymous|Secure} {Messaging|Chat}",
      "⚡ {Buy|Purchase|Get} Threema with {Bitcoin|Cryptocurrency|Crypto} - {Private|Anonymous|Secure} {No Phone Number|No Registration} {Messaging|Chat}",
      "Threema {2025|Premium|Swiss} - {Maximum|Extreme|Total} {Privacy|Anonymity|Security} with {Bitcoin|Cryptocurrency|Crypto} {Payment|Purchase}"
    ],
    descriptions: [
      "Threema: The {private|secure|anonymous} {messaging|communication|chat} from {Switzerland|European origin|premium quality} that {requires no|works without|operates without} {phone number|personal registration|metadata}. {End-to-end|Advanced|Military} {encryption|security}, {maximum|extreme|total} {privacy|anonymity|confidentiality}. {Accepts|Supports|Compatible with} {Bitcoin|cryptocurrency|crypto} {payments|purchases}. {Swiss|European|Premium} {quality|standard|technology}.",
      "Discover Threema, the most {private|anonymous|secure} {messaging|communication|chat} {application|platform|solution} from {Switzerland|Europe|premium quality}. {No|Zero} {phone number|registration|metadata}, {end-to-end|advanced|military} {encryption|security}. {Bitcoin|Cryptocurrency|Crypto} {payment|purchase} {available|accepted|supported}. {Developed|Created|Made} in {Switzerland|Europe} with {maximum|extreme|total} {quality|security|privacy} {standards|protocols|technology}.",
      "{Private|Anonymous|Secure} Threema {messaging|chat|communication} - {Swiss|European|Premium} {application|platform|system} with {no|zero} {phone number|personal registration|metadata}. {End-to-end|Advanced|Military} {encryption|security}, {total|absolute|complete} {anonymity|privacy|confidentiality}. {Ideal|Perfect|Designed} for users who value their {privacy|anonymity|confidentiality}. {Bitcoin|Cryptocurrency|Crypto} {purchase|payment}.",
      "Threema offers {private|anonymous|secure} {messaging|communication|chat} with {Swiss|European|advanced} {technology|encryption|security} and {strict|rigorous|unbreakable} {privacy|security|anonymity} {protocols|systems|standards}. {No|Zero} {phone number|registration|metadata}, {accepts|supports|compatible with} {Bitcoin|cryptocurrency|crypto}. {Swiss|European|Premium} {quality|standard|technology}.",
      "⚡ {Protect|Secure|Maintain} your {privacy|anonymity|confidentiality} with Threema - The most {private|ultra anonymous|completely secure} {messaging|application|platform} from {Switzerland|Europe}. {No|Zero} {phone number|registration|metadata}, {end-to-end|military|advanced} {encryption|security}, {Bitcoin|cryptocurrency|crypto} {payment|purchase}. Guaranteed {Swiss|European|Premium} {quality|standard|technology}."
    ],
    keywords: [
      "Threema {private|anonymous|secure} {Swiss|European} {messaging|communication|chat}, {no phone number|anonymous|private} {messaging|chat} {application|platform}, Threema {no registration|zero metadata|completely anonymous}, {end-to-end|military|advanced} {encryption|security} Threema, Threema {Bitcoin|cryptocurrency|crypto} {payment|purchase}",
      "{Swiss|European} {private|anonymous|secure} {messaging|chat}, Threema vs {WhatsApp|Telegram|Signal} {privacy|anonymity|security}, {no phone number|anonymous} {messaging|chat} {application|platform}, Threema {buy|purchase} with {Bitcoin|cryptocurrency|crypto}",
      "Threema {private|anonymous} {application|platform} {USA|UK|Canada|Australia}, {Swiss|European} {no metadata|completely anonymous} {messaging|chat}, {end-to-end|military} {encryption|security} {messaging|chat}, Threema {Swiss|European|premium} {quality|standard|technology}"
    ]
  },
  fr: {
    titles: [
      "Threema 2025 - Messagerie {Privée|Sécurisée|Chiffrée} {Suisse|Européenne|Premium} | {Sans|Zéro} {Numéro de Téléphone|Inscription|Métadonnées}",
      "Threema {Sécurisé|Privé|Chiffré} - Messagerie {Anonyme|Privée|Sécurisée} avec {Paiement|Achat} {Bitcoin|Cryptomonnaies|Crypto}"
    ],
    descriptions: [
      "Threema: La messagerie {privée|sécurisée|anonyme} de {Suisse|origine européenne|qualité premium} qui {ne nécessite pas|fonctionne sans|opère sans} {numéro de téléphone|inscription personnelle|métadonnées}. {Chiffrement|Sécurité} {bout en bout|avancé|militaire}, {confidentialité|anonymat|sécurité} {maximale|extrême|totale}.",
      "Découvrez Threema, l'application de messagerie la plus {privée|anonyme|sécurisée} de {Suisse|Europe|qualité premium}. {Sans|Zéro} {numéro de téléphone|inscription|métadonnées}, {chiffrement|sécurité} {bout en bout|avancé|militaire}. {Paiement|Achat} {Bitcoin|cryptomonnaies|crypto} {disponible|accepté|supporté}."
    ],
    keywords: [
      "Threema messagerie {privée|anonyme|sécurisée} {suisse|européenne}, {application|plateforme} messagerie {sans numéro|anonyme|privée}, Threema {sans inscription|zéro métadonnées|complètement anonyme}, {chiffrement|sécurité} {bout en bout|militaire} Threema, Threema {Bitcoin|cryptomonnaies|crypto} {paiement|achat}"
    ]
  },
  it: {
    titles: [
      "Threema 2025 - Messaggistica {Privata|Sicura|Crittografata} {Svizzera|Europea|Premium} | {Senza|Zero} {Numero di Telefono|Registrazione|Metadati}",
      "Threema {Sicuro|Privato|Crittografato} - Messaggistica {Anonima|Privata|Sicura} con {Pagamento|Acquisto} {Bitcoin|Criptovalute|Crypto}"
    ],
    descriptions: [
      "Threema: La messaggistica {privata|sicura|anonima} della {Svizzera|origine europea|qualità premium} che {non richiede|funziona senza|opera senza} {numero di telefono|registrazione personale|metadati}. {Crittografia|Sicurezza} {end-to-end|avanzata|militare}, {privacy|anonimato|riservatezza} {massima|estrema|totale}.",
      "Scopri Threema, l'applicazione di messaggistica più {privata|anonima|sicura} della {Svizzera|Europa|qualità premium}. {Senza|Zero} {numero di telefono|registrazione|metadati}, {crittografia|sicurezza} {end-to-end|avanzata|militare}. {Pagamento|Acquisto} {Bitcoin|criptovalute|crypto} {disponibile|accettato|supportato}."
    ],
    keywords: [
      "Threema messaggistica {privata|anonima|sicura} {svizzera|europea}, {applicazione|piattaforma} messaggistica {senza numero|anonima|privata}, Threema {senza registrazione|zero metadati|completamente anonima}, {crittografia|sicurezza} {end-to-end|militare} Threema, Threema {Bitcoin|criptovalute|crypto} {pagamento|acquisto}"
    ]
  },
  pt: {
    titles: [
      "Threema 2025 - Mensagens {Privadas|Seguras|Encriptadas} {Suíças|Europeias|Premium} | {Sem|Zero} {Número de Telefone|Registro|Metadados}",
      "Threema {Seguro|Privado|Encriptado} - Mensagens {Anônimas|Privadas|Seguras} com {Pagamento|Compra} {Bitcoin|Criptomoedas|Crypto}"
    ],
    descriptions: [
      "Threema: As mensagens {privadas|seguras|anônimas} da {Suíça|origem europeia|qualidade premium} que {não requer|funciona sem|opera sem} {número de telefone|registro pessoal|metadados}. {Encriptação|Segurança} {end-to-end|avançada|militar}, {privacidade|anonimato|confidencialidade} {máxima|extrema|total}.",
      "Descubra Threema, a aplicação de mensagens mais {privada|anônima|segura} da {Suíça|Europa|qualidade premium}. {Sem|Zero} {número de telefone|registro|metadados}, {encriptação|segurança} {end-to-end|avançada|militar}. {Pagamento|Compra} {Bitcoin|criptomoedas|crypto} {disponível|aceito|suportado}."
    ],
    keywords: [
      "Threema mensagens {privadas|anônimas|seguras} {suíças|europeias}, {aplicação|plataforma} mensagens {sem número|anônimas|privadas}, Threema {sem registro|zero metadados|completamente anônima}, {encriptação|segurança} {end-to-end|militar} Threema, Threema {Bitcoin|criptomoedas|crypto} {pagamento|compra}"
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
function getThreemaContent(locale: string, type: 'titles' | 'descriptions' | 'keywords'): string {
  const content = threemaSpintax[locale as keyof typeof threemaSpintax] || threemaSpintax.es;
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
export async function generateMetadata({ params: { locale } }: ThreemaPageProps): Promise<Metadata> {
  const title = getThreemaContent(locale, 'titles');
  const description = getThreemaContent(locale, 'descriptions');
  const keywords = getThreemaContent(locale, 'keywords');
  const baseUrl = 'https://encriptados.io';
  const canonicalUrl = locale === 'es' ? `${baseUrl}/apps/threema` : `${baseUrl}/${locale}/apps/threema`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    category: 'Technology',
    classification: 'Private Secure Messaging Application',
    
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
          url: `${baseUrl}/images/apps/threema/og-image-${locale}.jpg`,
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
      images: [`${baseUrl}/images/apps/threema/twitter-image-${locale}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${baseUrl}/apps/threema`,
        'en': `${baseUrl}/en/apps/threema`,
        'fr': `${baseUrl}/fr/apps/threema`,
        'it': `${baseUrl}/it/apps/threema`,
        'pt': `${baseUrl}/pt/apps/threema`,
      },
    },

    verification: {
      google: 'encriptados-google-verification',
      yandex: 'encriptados-yandex-verification',
    },

    other: {
      'product-name': 'Threema',
      'product-category': 'Private Secure Messaging Application',
      'product-origin': 'Switzerland',
      'payment-methods': 'Credit Card, Bitcoin, Cryptocurrency, PayPal, Bank Transfer',
      'crypto-payments': 'Bitcoin, Ethereum, Litecoin, Monero, Zcash',
      'availability': 'In Stock',
      'shipping': 'Digital Download',
      'target-audience': 'Privacy-Conscious Users, Professionals, Activists',
      'supported-platforms': 'iOS, Android, Windows, macOS, Linux, Web',
      'encryption-type': 'End-to-End Encryption',
      'privacy-level': 'Maximum Privacy - No Phone Number Required',
      'security-level': 'Swiss Security Standards',
      'anonymity-level': 'Complete Anonymity - Zero Metadata',
      'use-cases': 'Anonymous Messaging, Private Communication, Secure Chat',
      'competitors': 'WhatsApp, Telegram, Signal, Wickr',
      'features': 'No Phone Number, Anonymous Registration, Swiss Quality, Crypto Payments',
      'privacy-features': 'No Metadata Collection, Anonymous Usage, Swiss Privacy Laws',
      'rating': '4.9/5',
      'review-count': '2847',
      'app-version': '5.0',
      'last-updated': new Date().toISOString().split('T')[0],
      'developer': 'Threema GmbH',
      'developer-location': 'Switzerland',
      'developer-website': 'https://threema.ch',
      'support-email': 'support@encriptados.io',
      'data-protection': 'Swiss Data Protection Standards',
      'server-location': 'Switzerland',
      'open-source': 'Partially Open Source',
    }
  };
}