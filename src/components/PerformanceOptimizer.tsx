// src/components/PerformanceOptimizer.tsx - SIN DEPENDENCIAS EXTERNAS
'use client';

import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  locale: string;
}

export default function PerformanceOptimizer({ locale }: PerformanceOptimizerProps) {
  
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/hero-encrypted-phones.webp',
        '/images/logo.png',
        '/og-image.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Intersection Observer para lazy loading
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                observer.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });

        // Observar todas las imágenes lazy
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Web Vitals optimization SIN DEPENDENCIAS EXTERNAS
    const optimizeWebVitals = () => {
      // Optimize LCP (Largest Contentful Paint)
      const hero = document.querySelector('.hero');
      if (hero) {
        (hero as HTMLElement).style.contentVisibility = 'auto';
        (hero as HTMLElement).style.containIntrinsicSize = '100vw 500px';
      }

      // Optimize CLS (Cumulative Layout Shift)
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.width && !img.height) {
          img.style.aspectRatio = '16/9';
          img.style.objectFit = 'cover';
        }
      });

      // Optimize FID (First Input Delay)
      const deferNonCriticalJS = () => {
        const scripts = document.querySelectorAll('script[data-defer]');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          newScript.src = script.getAttribute('data-src') || '';
          newScript.defer = true;
          document.head.appendChild(newScript);
        });
      };

      // Defer non-critical JavaScript
      setTimeout(deferNonCriticalJS, 3000);
    };

    // Resource hints for better performance
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const existing = document.querySelector(`link[href="${hint.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
          document.head.appendChild(link);
        }
      });
    };

    // Critical CSS inline
    const inlineCriticalCSS = () => {
      const criticalCSS = `
        .hero{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:500px;display:flex;align-items:center}
        .container{max-width:1200px;margin:0 auto;padding:0 1rem}
        .text-5xl{font-size:3rem;line-height:1.1}
        .font-bold{font-weight:700}
        .text-center{text-align:center}
        .text-white{color:#fff}
        .mb-6{margin-bottom:1.5rem}
        .mb-8{margin-bottom:2rem}
        .py-20{padding-top:5rem;padding-bottom:5rem}
        .lazy{opacity:0;transition:opacity 0.3s}
        .lazy.loaded{opacity:1}
        @media(max-width:768px){.text-5xl{font-size:2rem}.py-20{padding-top:3rem;padding-bottom:3rem}}
      `;
      
      const existingStyle = document.querySelector('#critical-css');
      if (!existingStyle) {
        const style = document.createElement('style');
        style.id = 'critical-css';
        style.textContent = criticalCSS;
        document.head.appendChild(style);
      }
    };

    // Service Worker registration
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && 'production' === process.env.NODE_ENV) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });
          
          registration.addEventListener('updatefound', () => {
            console.log('[SW] Update found, installing new version');
          });
          
          console.log('[SW] Service Worker registered successfully');
        } catch (error) {
          console.log('[SW] Service Worker registration failed:', error);
        }
      }
    };

    // Performance monitoring SIN WEB-VITALS
    const monitorPerformance = () => {
      // Performance observer nativo
      if ('PerformanceObserver' in window) {
        try {
          // Monitor LCP
          const lcpObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'largest-contentful-paint') {
                console.log('[Perf] LCP:', Math.round(entry.startTime), 'ms');
                
                // Enviar a analytics si está disponible
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'web_vitals', {
                    name: 'LCP',
                    value: Math.round(entry.startTime),
                    custom_parameter_language: locale
                  });
                }
              }
            });
          });
          
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Monitor FID
          const fidObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'first-input') {
                const fid = (entry as any).processingStart - entry.startTime;
                console.log('[Perf] FID:', Math.round(fid), 'ms');
                
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'web_vitals', {
                    name: 'FID',
                    value: Math.round(fid),
                    custom_parameter_language: locale
                  });
                }
              }
            });
          });
          
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Monitor CLS
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            });
          });
          
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // Report CLS on page unload
          window.addEventListener('beforeunload', () => {
            console.log('[Perf] CLS:', Math.round(clsValue * 1000) / 1000);
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'CLS',
                value: Math.round(clsValue * 1000) / 1000,
                custom_parameter_language: locale
              });
            }
          });

        } catch (error) {
          console.log('[Perf] Performance monitoring failed:', error);
        }
      }

      // Monitor basic performance
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.performance) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation) {
            const metrics = {
              'DNS': Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
              'TCP': Math.round(navigation.connectEnd - navigation.connectStart),
              'TTFB': Math.round(navigation.responseStart - navigation.requestStart),
              'DOMLoad': Math.round(navigation.domContentLoadedEventEnd - navigation.startTime),
              'FullLoad': Math.round(navigation.loadEventEnd - navigation.startTime)
            };
            
            console.log('[Perf] Navigation timing:', metrics);
          }
        }
      }, 1000);
    };

    // Image optimization
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" if not present
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.getAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
        
        // Optimize images based on device pixel ratio
        if (window.devicePixelRatio && window.devicePixelRatio > 1) {
          const src = img.src;
          if (src && !src.includes('@2x') && !src.includes('w_auto')) {
            // Could add logic for high-DPI images here
          }
        }
      });
    };

    // Execute optimizations in order
    addResourceHints();
    inlineCriticalCSS();
    preloadCriticalResources();
    
    // Defer heavy operations
    setTimeout(() => {
      lazyLoadResources();
      optimizeWebVitals();
      optimizeImages();
      monitorPerformance();
      registerServiceWorker();
    }, 100);

    // Cleanup function
    return () => {
      // Clean up observers if needed
    };

  }, [locale]);

  return null; // This component doesn't render anything
}

// Export additional utility functions
export const performanceUtils = {
  // Preload a specific resource
  preloadResource: (href: string, as: string, type?: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  },

  // Prefetch a route
  prefetchRoute: (href: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  },

  // Lazy load an image
  lazyLoadImage: (img: HTMLImageElement, src: string) => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            img.src = src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });
      observer.observe(img);
    } else {
      // Fallback for browsers without IntersectionObserver
      img.src = src;
    }
  }
};