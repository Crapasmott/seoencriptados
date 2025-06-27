// src/types/Locale.ts
export type Locale = 'es' | 'en' | 'fr' | 'it' | 'pt';

export interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export interface PageProps {
  params: {
    locale: Locale;
  };
}

export const SUPPORTED_LOCALES: Locale[] = ['es', 'en', 'fr', 'it', 'pt'];
export const DEFAULT_LOCALE: Locale = 'es';