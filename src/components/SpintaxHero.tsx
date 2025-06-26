// ===================================================
// 📁 components/SpintaxHero.tsx - CREAR ESTE ARCHIVO
// ===================================================
'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

const spintaxContent = {
  es: {
    banners: [
      "🔒 {Teléfonos Encriptados|Celulares Seguros|Dispositivos Privados} - {Comunicación Ultra Segura|Máxima Privacidad|Protección Total} 2025",
      "📱 {Smartphones Cifrados|Móviles Encriptados|Celulares Privados} - {Tecnología Militar|Seguridad Avanzada|Cifrado Premium} 2025",
      "🛡️ {Comunicación Segura|Privacidad Digital|Protección de Datos} con {Teléfonos Encriptados|Dispositivos Seguros|Celulares Cifrados}",
      "⚡ {Entrega Rápida|Envío Express|Distribución Inmediata} - {Teléfonos Seguros|Celulares Encriptados|Dispositivos Privados} 2025"
    ],
    heroTitles: [
      "{Protege|Asegura|Cifra} tus comunicaciones con {dispositivos de grado militar|tecnología gubernamental|sistemas ultra-seguros}",
      "{Comunicación privada|Privacidad absoluta|Seguridad total} para {ejecutivos|diplomáticos|profesionales de alto nivel}",
      "{Descubre|Explora|Conoce} la {nueva generación|última tecnología|innovación} de {teléfonos encriptados|celulares seguros|dispositivos privados}",
      "{Máxima seguridad|Protección completa|Privacidad garantizada} con {tecnología militar|cifrado bancario|sistemas gubernamentales}"
    ],
    descriptions: [
      "Explora nuestra {amplia gama|extensa selección|completa variedad} de {dispositivos móviles seguros|celulares encriptados|smartphones privados} con {tecnología militar|cifrado bancario|seguridad gubernamental}.",
      "{Protege tus comunicaciones|Asegura tu privacidad|Cifra tus datos} con {dispositivos de grado militar|tecnología de última generación|sistemas de encriptación avanzados}.",
      "{Únete a miles|Forma parte de miles} de {profesionales|empresarios|organizaciones} que ya {protegen|aseguran|cifran} sus {comunicaciones|datos|información} con nuestra {tecnología avanzada|innovación|solución}.",
      "Con más de {10 años|una década|años} de experiencia en {seguridad móvil|encriptación|tecnología segura}, ofrecemos {soluciones integrales|dispositivos premium|tecnología avanzada}."
    ],
    features: [
      "✅ {Encriptación de extremo a extremo|Cifrado militar AES-256|Seguridad multicapa}",
      "🔐 {Comunicaciones privadas 100%|Llamadas completamente seguras|Mensajes totalmente cifrados}",
      "🛡️ {Protección anti-espionaje|Seguridad contra hackeo|Privacidad garantizada}",
      "🌍 {Cobertura global|Red mundial|Presencia internacional}",
      "⚡ {Entrega rápida|Envío express|Distribución inmediata}",
      "🔧 {Soporte técnico 24/7|Asistencia especializada|Servicio premium}"
    ],
    productTitles: [
      "{Nuestros Productos|Catálogo Completo|Gama de Dispositivos} {Estrella|Premium|Avanzados}",
      "{Soluciones Integrales|Dispositivos Especializados|Tecnología Avanzada} en {Comunicación Segura|Privacidad Digital|Seguridad Móvil}",
      "{Descubre|Explora|Conoce} {Nuestra Tecnología|Nuestros Productos|Nuestras Soluciones} de {Última Generación|Vanguardia|Innovación}"
    ],
    ctas: [
      "{Ver Productos|Explorar Catálogo|Descubrir Dispositivos|Ver Teléfonos}",
      "{Contactar Experto|Hablar con Especialista|Consulta Gratuita|Asesoramiento}",
      "{Comprar Ahora|Adquirir Ya|Obtener Dispositivo|Solicitar}",
      "{Más Información|Conocer Detalles|Ver Especificaciones|Preguntar}"
    ]
  },
  en: {
    banners: [
      "🔒 {Encrypted Phones|Secure Smartphones|Private Devices} - {Ultra Secure Communication|Maximum Privacy|Total Protection} 2025",
      "📱 {Encrypted Smartphones|Secure Mobiles|Private Phones} - {Military Technology|Advanced Security|Premium Encryption} 2025",
      "🛡️ {Secure Communication|Digital Privacy|Data Protection} with {Encrypted Phones|Secure Devices|Private Smartphones}",
      "⚡ {Fast Delivery|Express Shipping|Immediate Distribution} - {Secure Phones|Encrypted Smartphones|Private Devices} 2025"
    ],
    heroTitles: [
      "{Protect|Secure|Encrypt} your communications with {military-grade devices|government technology|ultra-secure systems}",
      "{Private communication|Absolute privacy|Total security} for {executives|diplomats|high-level professionals}",
      "{Discover|Explore|Learn about} the {next generation|latest technology|innovation} of {encrypted phones|secure smartphones|private devices}",
      "{Maximum security|Complete protection|Guaranteed privacy} with {military technology|banking encryption|government systems}"
    ],
    descriptions: [
      "Explore our {wide range|extensive selection|complete variety} of {secure mobile devices|encrypted smartphones|private phones} with {military technology|banking encryption|government security}.",
      "{Protect your communications|Secure your privacy|Encrypt your data} with {military-grade devices|latest generation technology|advanced encryption systems}.",
      "{Join thousands|Become part of thousands} of {professionals|entrepreneurs|organizations} who already {protect|secure|encrypt} their {communications|data|information} with our {advanced technology|innovation|solution}.",
      "With over {10 years|a decade|years} of experience in {mobile security|encryption|secure technology}, we offer {comprehensive solutions|premium devices|advanced technology}."
    ],
    features: [
      "✅ {End-to-end encryption|Military AES-256 encryption|Multi-layer security}",
      "🔐 {100% private communications|Completely secure calls|Totally encrypted messages}",
      "🛡️ {Anti-espionage protection|Anti-hacking security|Guaranteed privacy}",
      "🌍 {Global coverage|Worldwide network|International presence}",
      "⚡ {Fast delivery|Express shipping|Immediate distribution}",
      "🔧 {24/7 technical support|Specialized assistance|Premium service}"
    ],
    productTitles: [
      "{Our Products|Complete Catalog|Device Range} {Star|Premium|Advanced}",
      "{Comprehensive Solutions|Specialized Devices|Advanced Technology} in {Secure Communication|Digital Privacy|Mobile Security}",
      "{Discover|Explore|Learn about} {Our Technology|Our Products|Our Solutions} of {Latest Generation|Cutting-edge|Innovation}"
    ],
    ctas: [
      "{View Products|Explore Catalog|Discover Devices|See Phones}",
      "{Contact Expert|Talk to Specialist|Free Consultation|Advisory}",
      "{Buy Now|Get Now|Obtain Device|Request}",
      "{More Information|Know Details|View Specifications|Ask}"
    ]
  },
  fr: {
    banners: [
      "🔒 {Téléphones Cryptés|Smartphones Sécurisés|Appareils Privés} - {Communication Ultra Sécurisée|Confidentialité Maximale|Protection Totale} 2025"
    ],
    heroTitles: [
      "{Protégez|Sécurisez|Chiffrez} vos communications avec {appareils de grade militaire|technologie gouvernementale|systèmes ultra-sécurisés}"
    ],
    descriptions: [
      "Explorez notre {large gamme|sélection étendue|variété complète} d'{appareils mobiles sécurisés|smartphones cryptés|téléphones privés} avec {technologie militaire|cryptage bancaire|sécurité gouvernementale}."
    ],
    features: [
      "✅ {Cryptage de bout en bout|Chiffrement militaire AES-256|Sécurité multicouche}",
      "🔐 {Communications privées 100%|Appels complètement sécurisés|Messages totalement chiffrés}",
      "🛡️ {Protection anti-espionnage|Sécurité anti-piratage|Confidentialité garantie}"
    ],
    productTitles: [
      "{Nos Produits|Catalogue Complet|Gamme d'Appareils} {Étoile|Premium|Avancés}"
    ],
    ctas: [
      "{Voir Produits|Explorer Catalogue|Découvrir Appareils}",
      "{Contacter Expert|Parler avec Spécialiste|Consultation Gratuite}"
    ]
  },
  it: {
    banners: [
      "🔒 {Telefoni Crittografati|Smartphone Sicuri|Dispositivi Privati} - {Comunicazione Ultra Sicura|Massima Privacy|Protezione Totale} 2025"
    ],
    heroTitles: [
      "{Proteggi|Sicura|Cripta} le tue comunicazioni con {dispositivi di grado militare|tecnologia governativa|sistemi ultra-sicuri}"
    ],
    descriptions: [
      "Esplora la nostra {ampia gamma|selezione estesa|varietà completa} di {dispositivi mobili sicuri|smartphone crittografati|telefoni privati} con {tecnologia militare|crittografia bancaria|sicurezza governativa}."
    ],
    features: [
      "✅ {Crittografia end-to-end|Crittografia militare AES-256|Sicurezza multistrato}",
      "🔐 {Comunicazioni private 100%|Chiamate completamente sicure|Messaggi totalmente crittografati}",
      "🛡️ {Protezione anti-spionaggio|Sicurezza anti-hacking|Privacy garantita}"
    ],
    productTitles: [
      "{I Nostri Prodotti|Catalogo Completo|Gamma di Dispositivi} {Stella|Premium|Avanzati}"
    ],
    ctas: [
      "{Vedi Prodotti|Esplora Catalogo|Scopri Dispositivi}",
      "{Contatta Esperto|Parla con Specialista|Consulenza Gratuita}"
    ]
  },
  pt: {
    banners: [
      "🔒 {Telefones Encriptados|Smartphones Seguros|Dispositivos Privados} - {Comunicação Ultra Segura|Máxima Privacidade|Proteção Total} 2025"
    ],
    heroTitles: [
      "{Proteja|Proteja|Encripte} suas comunicações com {dispositivos de grau militar|tecnologia governamental|sistemas ultra-seguros}"
    ],
    descriptions: [
      "Explore nossa {ampla gama|seleção extensa|variedade completa} de {dispositivos móveis seguros|smartphones encriptados|telefones privados} com {tecnologia militar|encriptação bancária|segurança governamental}."
    ],
    features: [
      "✅ {Encriptação ponta a ponta|Encriptação militar AES-256|Segurança multicamada}",
      "🔐 {Comunicações privadas 100%|Chamadas completamente seguras|Mensagens totalmente encriptadas}",
      "🛡️ {Proteção anti-espionagem|Segurança anti-hacking|Privacidade garantida}"
    ],
    productTitles: [
      "{Nossos Produtos|Catálogo Completo|Gama de Dispositivos} {Estrela|Premium|Avançados}"
    ],
    ctas: [
      "{Ver Produtos|Explorar Catálogo|Descobrir Dispositivos}",
      "{Contatar Especialista|Falar com Especialista|Consulta Gratuita}"
    ]
  }
};

// Hook spintax
function useSpintax() {
  const processText = (text: string): string => {
    return text.replace(/\{([^}]+)\}/g, (match, options) => {
      const optionsArray = options.split('|');
      return optionsArray[Math.floor(Math.random() * optionsArray.length)].trim();
    });
  };

  const getRandomFromArray = (array: string[]): string => {
    return processText(array[Math.floor(Math.random() * array.length)]);
  };

  return { processText, getRandomFromArray };
}

// Componente texto rotativo
function SpintaxText({ 
  content, 
  interval = 0,
  className = "",
  tag = "span" 
}: { 
  content: string | string[], 
  interval?: number,
  className?: string,
  tag?: string 
}) {
  const { processText, getRandomFromArray } = useSpintax();
  const [text, setText] = useState('');

  useEffect(() => {
    const updateText = () => {
      if (Array.isArray(content)) {
        setText(getRandomFromArray(content));
      } else {
        setText(processText(content));
      }
    };

    updateText();

    if (interval > 0) {
      const timer = setInterval(updateText, interval);
      return () => clearInterval(timer);
    }
  }, [content, interval, processText, getRandomFromArray]);

  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{text}</Tag>;
}

// Componente principal
export default function SpintaxHero() {
  const locale = useLocale();
  const content = spintaxContent[locale as keyof typeof spintaxContent] || spintaxContent.es;

  return (
    <>
      {/* Banner móvil con spintax */}
      <div className="lg:hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 px-4">
        <div className="flex items-center justify-center text-center">
          <SpintaxText
            content={content.banners}
            tag="p"
            className="text-sm font-medium animate-pulse"
            interval={6000}
          />
        </div>
      </div>

      {/* Hero section con spintax */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 lg:py-20 relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Título principal dinámico */}
            <SpintaxText
              content={content.heroTitles}
              tag="h1"
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            />

            {/* Descripción rotativa */}
            <SpintaxText
              content={content.descriptions}
              tag="p"
              className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed"
              interval={8000}
            />

            {/* Features con spintax */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-12">
              {content.features.map((feature, index) => (
                <SpintaxText
                  key={index}
                  content={feature}
                  tag="div"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                />
              ))}
            </div>

            {/* CTAs rotativos */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <SpintaxText
                content={content.ctas.slice(0, 2)}
                tag="button"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              />
              <SpintaxText
                content={content.ctas.slice(2, 4)}
                tag="button"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              />
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/20">
              {[
                { number: '50+', label: locale === 'es' ? 'Países' : locale === 'en' ? 'Countries' : locale === 'fr' ? 'Pays' : locale === 'it' ? 'Paesi' : 'Países' },
                { number: '10k+', label: locale === 'es' ? 'Clientes' : locale === 'en' ? 'Clients' : locale === 'fr' ? 'Clients' : locale === 'it' ? 'Clienti' : 'Clientes' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: locale === 'es' ? 'Soporte' : locale === 'en' ? 'Support' : locale === 'fr' ? 'Support' : locale === 'it' ? 'Supporto' : 'Suporte' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de productos con spintax */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <SpintaxText
              content={content.productTitles}
              tag="h2"
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            />

            <SpintaxText
              content={content.descriptions}
              tag="p"
              className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
              interval={10000}
            />
          </div>
        </div>
      </section>

      {/* CTA final con spintax */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <SpintaxText
            content={[
              locale === 'es' ? 
              "{¿Listo para proteger|¿Preparado para asegurar|¿Dispuesto a cifrar} tus comunicaciones?" :
              locale === 'en' ? 
              "{Ready to protect|Prepared to secure|Willing to encrypt} your communications?" :
              locale === 'fr' ?
              "{Prêt à protéger|Préparé à sécuriser|Disposé à chiffrer} vos communications?" :
              locale === 'it' ?
              "{Pronto a proteggere|Preparato a proteggere|Disposto a crittografare} le tue comunicazioni?" :
              "{Pronto para proteger|Preparado para proteger|Disposto a encriptar} suas comunicações?"
            ]}
            tag="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          
          <SpintaxText
            content={content.descriptions}
            tag="p"
            className="text-xl mb-8 max-w-4xl mx-auto opacity-90"
            interval={12000}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SpintaxText
              content={content.ctas}
              tag="button"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            />
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              {locale === 'es' ? 'Hablar con Experto' : locale === 'en' ? 'Talk to Expert' : locale === 'fr' ? 'Parler à Expert' : locale === 'it' ? 'Parla con Esperto' : 'Falar com Especialista'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

