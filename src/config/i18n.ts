import ptBR from '../locales/pt-BR.json';
import enUS from '../locales/en-US.json';

const locales: Record<string, any> = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

export function getTranslation(lang: string, key: string): string {
  return locales[lang]?.[key] || key;
}

export function t(key: string, state: { lang: string }): string {
  return getTranslation(state.lang, key);
}
