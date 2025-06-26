// src/app/[locale]/page.tsx
import { Metadata } from 'next';
import { HomePageProps } from '@/types/Locale.ts';

// Importa tus utilidades existentes
import { SpintaxContent } from '@/components/SpintaxContent';
import { SpintaxHero } from '@/components/SpintaxHero';
import { StructuredData } from '@/components/StructuredData';
import { SEOOptimizedImage } from '@/components/SEOOptimizedImage';

// 🎯 METADATOS DINÁMICOS CON SPINTAX (SERVER SIDE)
export async function generateMetadata({ params: { locale } }: HomePageProps): Promise<Metadata> {
  
  // Usar tus componentes de spintax existentes para generar contenido dinámico
  const spintaxTitles = {
    en: [
      "Secure Encrypted Communication {Platform|Solution|System} - {Private|Anonymous|Protected} Messaging",
      "{Advanced|Professional|Military-Grade} Encryption Tools for {Businesses|Enterprises|Organizations}",
      "{Ultimate|Complete|Comprehensive} Privacy {Suite|Solution|Platform} - {Encrypted|Secure|Protected} Apps"
    ],
    es: [
      "{Comunicación|Mensajería} {Encriptada|Cifrada|Segura} - {Plataforma|Sistema|Solución} de {Privacidad|Seguridad}",
      "Herramientas {Avanzadas|Profesionales|Empresariales} de {Encriptación|Cifrado|Seguridad}",
      "{Suite|Conjunto|Paquete} {Completo|Integral|Profesional} de {Privacidad|Seguridad|Protección}"
    ]
  };

  const spintaxDescriptions = {
    en: [
      "Discover our {comprehensive|complete|advanced} suite of {encrypted|secure|private} communication tools. {Protect|Secure|Safeguard} your {business|organization|company} with {military-grade|bank-level|enterprise} encryption {technology|solutions|systems}.",
      "{Experience|Enjoy|Access} {ultimate|complete|total} digital privacy with our {innovative|cutting-edge|state-of-the-art} encrypted {applications|tools|platforms}. {Trusted|Used|Preferred} by {thousands|millions} worldwide.",
      "{Secure|Protect|Encrypt} your {communications|messages|data} with our {professional|enterprise|business} grade encryption {suite|platform|solution}. {Available|Ready|Accessible} for {all|every|major} platforms."
    ],
    es: [
      "Descubre nuestra {completa|avanzada|profesional} suite de herramientas de {comunicación|mensajería} {encriptada|cifrada|segura}. {Protege|Asegura|Resguarda} tu {empresa|organización|negocio} con {tecnología|sistemas|soluciones} de {encriptación|cifrado} {militar|bancario|empresarial}.",
      "{Experimenta|Disfruta|Accede a} la {máxima|total|completa} privacidad digital con nuestras {innovadoras|vanguardistas} {aplicaciones|herramientas|plataformas} encriptadas. {Confiado|Usado|Preferido} por {miles|millones} en todo el mundo.",
      "{Asegura|Protege|Encripta} tus {comunicaciones|mensajes|datos} con nuestra suite de encriptación de grado {profesional|empresarial}. {Disponible|Listo|Accesible} para {todas|principales} las plataformas."
    ]
  };

  // Función para procesar spintax (reutiliza tu lógica existente)
  const processSpintax = (template: string): string => {
    return template.replace(/\{([^}]+)\}/g, (match, options) => {
      const choices = options.split('|');
      return choices[Math.floor(Math.random() * choices.length)];
    });
  };

  // Generar contenido dinámico
  const currentLocale = locale as keyof typeof spintaxTitles;
  const titles = spintaxTitles[currentLocale] || spintaxTitles.en;
  const descriptions = spintaxDescriptions[currentLocale] || spintaxDescriptions.en;
  
  const title = processSpintax(titles[Math.floor(Math.random() * titles.length)]);
  const description = processSpintax(descriptions[Math.floor(Math.random() * descriptions.length)]);

  // Keywords dinámicas
  const keywords = currentLocale === 'es' 
    ? "encriptación, comunicación segura, privacidad digital, mensajería cifrada, aplicaciones seguras, protección datos"
    : "encryption, secure communication, digital privacy, encrypted messaging, secure apps, data protection";

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Encriptados" }],
    creator: "Encriptados",
    publisher: "Encriptados",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://encriptados.io'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: 'Encriptados',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: currentLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/twitter-image.jpg'],
    },
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
  };
}

// Server Component que renderiza tu contenido actual
export default function HomePage({ params: { locale } }: HomePageProps) {
  // 🎯 MUEVE TODO TU CÓDIGO JSX ACTUAL AQUÍ
  // Pero QUITA cualquier hook (useState, useEffect, etc.)
  // y QUITA "use client"
  
  return (
    <>
      {/* Pega aquí todo tu JSX actual */}
      <div>
        {/* Tu contenido actual va aquí */}
        {/* Solo JSX estático, sin hooks ni interactividad */}
      </div>
    </>
  );
}