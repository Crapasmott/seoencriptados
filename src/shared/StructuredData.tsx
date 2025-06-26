// src/components/StructuredData.tsx
import Script from 'next/script';

interface StructuredDataProps {
  locale: string;
  title?: string;
  description?: string;
}

export function StructuredData({ locale, title, description }: StructuredDataProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Encriptados",
    "url": "https://encriptados.io",
    "logo": "https://encriptados.io/logo.png",
    "description": locale === 'es' 
      ? "Líder en soluciones de comunicación encriptada y aplicaciones de seguridad digital"
      : "Leading provider of encrypted communication solutions and digital security applications",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ENCRYPT",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://twitter.com/encriptados",
      "https://linkedin.com/company/encriptados"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Encriptados",
    "url": "https://encriptados.io",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://encriptados.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Encriptados Security Suite",
    "description": description || (locale === 'es' 
      ? "Suite completa de aplicaciones de comunicación encriptada para empresas y usuarios individuales"
      : "Complete suite of encrypted communication applications for businesses and individual users"),
    "applicationCategory": "SecurityApplication",
    "operatingSystem": ["Windows", "macOS", "Linux", "iOS", "Android"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Encriptados"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://encriptados.io/${locale}`
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}