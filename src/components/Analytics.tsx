// src/components/Analytics.tsx
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface AnalyticsProps {
  locale: string;
}

// Configuración de tracking
const TRACKING_CONFIG = {
  GA4_ID: 'G-XXXXXXXXXX', // Reemplaza con tu ID real
  GTM_ID: 'GTM-XXXXXXX',  // Google Tag Manager
  HOTJAR_ID: 'XXXXXXX',   // Hotjar para heatmaps
  CLARITY_ID: 'XXXXXXXX', // Microsoft Clarity
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    hj: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}

export default function Analytics({ locale }: AnalyticsProps) {
  
  useEffect(() => {
    // Configurar dataLayer inicial
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      
      // Enviar evento de página vista con idioma
      if (window.gtag) {
        window.gtag('config', TRACKING_CONFIG.GA4_ID, {
          page_language: locale,
          custom_map: {
            'custom_parameter_1': 'language'
          }
        });
      }
    }
  }, [locale]);

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_CONFIG.GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${TRACKING_CONFIG.GA4_ID}', {
            page_language: '${locale}',
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
          
          // Eventos personalizados
          gtag('event', 'page_view_language', {
            language: '${locale}',
            page_location: window.location.href
          });
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${TRACKING_CONFIG.GTM_ID}');
        `}
      </Script>

      {/* Hotjar para heatmaps y grabaciones */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${TRACKING_CONFIG.HOTJAR_ID},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${TRACKING_CONFIG.CLARITY_ID}");
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* LinkedIn Insight Tag */}
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "YOUR_LINKEDIN_ID";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
        `}
      </Script>

      {/* Schema.org tracking events */}
      <Script id="schema-tracking" strategy="afterInteractive">
        {`
          // Tracking de eventos personalizados para SEO
          function trackSchemaEvent(eventName, properties) {
            if (window.gtag) {
              window.gtag('event', eventName, {
                custom_parameter_language: '${locale}',
                custom_parameter_page_type: 'homepage',
                ...properties
              });
            }
          }
          
          // Auto-track después de 5 segundos
          setTimeout(() => {
            trackSchemaEvent('schema_loaded', {
              schema_type: 'encrypted_phones_homepage',
              language: '${locale}'
            });
          }, 5000);
        `}
      </Script>

      {/* NoScript fallbacks */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${TRACKING_CONFIG.GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

// Hook para tracking de eventos personalizados
export function useAnalytics() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, properties);
    }
  };

  const trackPageView = (url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', TRACKING_CONFIG.GA4_ID, {
        page_location: url,
        page_title: title
      });
    }
  };

  const trackConversion = (value: number, currency: string = 'USD') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        value: value,
        currency: currency
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion
  };
}