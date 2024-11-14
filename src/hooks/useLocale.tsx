import locales from '@/locales';
import { useRouter } from 'next/router';

import { useEffect } from 'react';

const useLocale = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      checkKeys();
    }
  }, []);

  return locales[router.locale as keyof typeof locales] || {};
};

export default useLocale;

const checkKeys = () => {
  const rootLocale = 'en'; // assuming 'en' is your root locale
  const allLocales = Object.keys(locales) as Array<string>;

  if (locales[rootLocale]) {
    Object.keys(locales[rootLocale]).forEach(function (key) {
      const requiredLocales = allLocales.filter(
        (locale) => locale !== 'comment'
      );

      requiredLocales.forEach((singleLocale) => {
        // Temporarily use 'any' type for locales and key
        if (!(locales as any)[singleLocale][key]) {
          throw new Error(`${key} key not found in ${singleLocale}`);
        }
      });
    });
  }
};
