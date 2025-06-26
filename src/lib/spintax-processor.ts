// src/lib/spintax-processor.ts

export interface SpintaxContent {
  [key: string]: {
    en: string[];
    es: string[];
  };
}

// 🎯 BASE DE DATOS DE CONTENIDO SPINTAX
export const SPINTAX_DATABASE: SpintaxContent = {
  // Títulos principales
  mainTitles: {
    en: [
      "{Secure|Private|Protected} {Communication|Messaging|Chat} {Platform|Solution|Suite} - {Advanced|Military-Grade|Enterprise} Encryption",
      "{Ultimate|Complete|Professional} Privacy {Tools|Applications|Software} for {Modern|Digital|Smart} {Businesses|Organizations|Teams}",
      "{Revolutionary|Cutting-Edge|Next-Generation} {Encrypted|Secure|Private} {Communication|Messaging|Collaboration} {Technology|Platform|System}",
      "{Comprehensive|All-in-One|Integrated} {Security|Privacy|Protection} {Suite|Platform|Solution} - {Trusted|Proven|Reliable} by {Thousands|Millions}",
      "{Enterprise-Grade|Professional|Business-Class} {Encryption|Security|Privacy} {Applications|Tools|Software} for {Maximum|Ultimate|Complete} Protection"
    ],
    es: [
      "{Plataforma|Sistema|Solución} de {Comunicación|Mensajería|Chat} {Segura|Encriptada|Protegida} - Encriptación {Avanzada|Militar|Empresarial}",
      "Herramientas de {Privacidad|Seguridad|Protección} {Profesionales|Avanzadas|Completas} para {Empresas|Organizaciones|Equipos} {Modernas|Digitales}",
      "{Tecnología|Plataforma|Sistema} de {Comunicación|Mensajería|Colaboración} {Encriptada|Segura|Privada} {Revolucionaria|Vanguardista|Innovadora}",
      "{Suite|Conjunto|Paquete} {Integral|Completo|Profesional} de {Seguridad|Privacidad|Protección} - {Confiado|Probado|Usado} por {Miles|Millones}",
      "{Aplicaciones|Herramientas|Software} de {Encriptación|Seguridad|Privacidad} {Empresarial|Profesional|Avanzada} para {Máxima|Total|Completa} Protección"
    ]
  },

  // Descripciones SEO
  metaDescriptions: {
    en: [
      "Discover {professional|enterprise|advanced} encrypted communication {tools|applications|solutions}. {Protect|Secure|Safeguard} your {business|organization|team} with {military-grade|bank-level|government} encryption {technology|systems}. {Trusted|Used|Preferred} by {security experts|professionals|enterprises} worldwide.",
      "{Experience|Access|Enjoy} {complete|total|ultimate} digital privacy with our {innovative|cutting-edge|state-of-the-art} {security|encryption|privacy} {suite|platform|applications}. {Available|Compatible|Optimized} for all {devices|platforms|operating systems}.",
      "{Comprehensive|Complete|All-in-one} encrypted {messaging|communication|collaboration} {platform|solution|suite}. {Features|Includes|Offers} {end-to-end|military-grade|zero-knowledge} encryption, {secure|private|protected} file sharing, and {anonymous|private|confidential} {communication|messaging}.",
      "{Professional|Enterprise|Business} grade {security|privacy|encryption} {applications|tools|software}. {Designed|Built|Engineered} for {maximum|ultimate|complete} {protection|security|privacy}. {No|Zero|Minimal} {data collection|tracking|logging}."
    ],
    es: [
      "Descubre {herramientas|aplicaciones|soluciones} de comunicación encriptada {profesionales|empresariales|avanzadas}. {Protege|Asegura|Resguarda} tu {empresa|organización|equipo} con {tecnología|sistemas} de encriptación {militar|bancaria|gubernamental}. {Confiado|Usado|Preferido} por {expertos|profesionales|empresas} en todo el mundo.",
      "{Experimenta|Accede|Disfruta} de {completa|total|máxima} privacidad digital con nuestra {innovadora|vanguardista} {suite|plataforma|aplicaciones} de {seguridad|encriptación|privacidad}. {Disponible|Compatible|Optimizado} para todos los {dispositivos|plataformas|sistemas}.",
      "{Plataforma|Solución|Suite} {integral|completa} de {mensajería|comunicación|colaboración} encriptada. {Incluye|Ofrece|Cuenta con} encriptación {extremo a extremo|militar|zero-knowledge}, compartir archivos {seguro|privado|protegido}, y {comunicación|mensajería} {anónima|privada|confidencial}.",
      "{Aplicaciones|Herramientas|Software} de {seguridad|privacidad|encriptación} {profesional|empresarial}. {Diseñado|Construido|Desarrollado} para {máxima|total|completa} {protección|seguridad|privacidad}. {Sin|Cero|Mínima} {recolección|seguimiento|registro} de datos."
    ]
  },

  // Palabras clave
  keywords: {
    en: [
      "encrypted communication, secure messaging, privacy tools, digital security, end-to-end encryption, {secure|private|protected} chat, {business|enterprise|professional} encryption, {anonymous|private|confidential} messaging",
      "privacy software, {secure|encrypted|protected} applications, {military|government|bank} grade encryption, {digital|online|cyber} security, {private|secure|protected} communication tools",
      "{comprehensive|complete|advanced} security suite, {encrypted|secure|private} collaboration, {zero-knowledge|end-to-end|military-grade} encryption, {business|enterprise|professional} privacy tools"
    ],
    es: [
      "comunicación encriptada, mensajería segura, herramientas privacidad, seguridad digital, encriptación extremo a extremo, chat {seguro|privado|protegido}, encriptación {empresarial|profesional}, mensajería {anónima|privada|confidencial}",
      "software privacidad, aplicaciones {seguras|encriptadas|protegidas}, encriptación grado {militar|gubernamental|bancario}, seguridad {digital|online|cibernética}, herramientas comunicación {privada|segura|protegida}",
      "suite seguridad {integral|completa|avanzada}, colaboración {encriptada|segura|privada}, encriptación {zero-knowledge|extremo-extremo|militar}, herramientas privacidad {empresarial|profesional}"
    ]
  },

  // Títulos de aplicaciones
  appTitles: {
    en: [
      "{Secure|Private|Encrypted} {Messaging|Communication|Chat} - {Professional|Business|Enterprise} Grade",
      "{Advanced|Military|Government} Grade {Encryption|Security|Protection} {Application|Tool|Software}",
      "{Ultimate|Complete|Total} {Privacy|Security|Protection} {Messenger|Chat|Communication} {App|Tool|Platform}"
    ],
    es: [
      "{Mensajería|Comunicación|Chat} {Segura|Encriptada|Privada} - Grado {Profesional|Empresarial}",
      "{Aplicación|Herramienta|Software} de {Encriptación|Seguridad|Protección} {Avanzada|Militar|Gubernamental}",
      "{Mensajero|Chat|Comunicación} de {Privacidad|Seguridad|Protección} {Total|Completa|Máxima}"
    ]
  }
};

// 🎯 PROCESADOR DE SPINTAX AVANZADO
export class SpintaxProcessor {
  private static instance: SpintaxProcessor;
  private cache: Map<string, string> = new Map();

  public static getInstance(): SpintaxProcessor {
    if (!SpintaxProcessor.instance) {
      SpintaxProcessor.instance = new SpintaxProcessor();
    }
    return SpintaxProcessor.instance;
  }

  // Procesar texto con spintax
  public process(template: string): string {
    // Caché para evitar reprocesar el mismo contenido
    const cacheKey = template;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    let result = template;
    
    // Procesar spintax anidado (múltiples niveles)
    while (result.includes('{') && result.includes('}')) {
      result = result.replace(/\{([^{}]+)\}/g, (match, options) => {
        const choices = options.split('|').map((choice: string) => choice.trim());
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      });
    }

    // Guardar en caché
    this.cache.set(cacheKey, result);
    return result;
  }

  // Obtener contenido por categoría y idioma
  public getContent(category: string, locale: string, index?: number): string {
    const content = SPINTAX_DATABASE[category];
    if (!content) return '';

    const localeContent = content[locale as keyof typeof content] || content['en'];
    if (!localeContent || localeContent.length === 0) return '';

    const selectedIndex = index !== undefined ? index % localeContent.length : Math.floor(Math.random() * localeContent.length);
    const template = localeContent[selectedIndex];

    return this.process(template);
  }

  // Generar múltiples variaciones
  public generateVariations(category: string, locale: string, count: number = 5): string[] {
    const variations: string[] = [];
    const content = SPINTAX_DATABASE[category];
    
    if (!content) return variations;

    const localeContent = content[locale as keyof typeof content] || content['en'];
    if (!localeContent || localeContent.length === 0) return variations;

    for (let i = 0; i < count; i++) {
      const template = localeContent[Math.floor(Math.random() * localeContent.length)];
      variations.push(this.process(template));
    }

    return variations;
  }

  // Limpiar caché
  public clearCache(): void {
    this.cache.clear();
  }
}

// 🎯 FUNCIONES HELPER PARA USO FÁCIL
export const spintax = SpintaxProcessor.getInstance();

export function getSpintaxContent(category: string, locale: string, index?: number): string {
  return spintax.getContent(category, locale, index);
}

export function processSpintax(template: string): string {
  return spintax.process(template);
}