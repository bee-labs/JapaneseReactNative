import I18n, { getLanguages } from 'react-native-i18n';

getLanguages().then((languages) => {
  console.log('All languages', languages);
});

I18n.fallbacks = true;

I18n.translations = {
  en: {
    app: require('./locales/en/app'),
    minna: {
      ...require('./minna/en/1'),
      ...require('./minna/en/1'),
      ...require('./minna/en/2'),
      ...require('./minna/en/3'),
      ...require('./minna/en/4'),
      ...require('./minna/en/5'),
      ...require('./minna/en/6'),
      ...require('./minna/en/7'),
      ...require('./minna/en/8'),
      ...require('./minna/en/9'),
      ...require('./minna/en/10'),
      ...require('./minna/en/11'),
      ...require('./minna/en/12'),
      ...require('./minna/en/13'),
      ...require('./minna/en/14'),
      ...require('./minna/en/15'),
      ...require('./minna/en/16'),
      ...require('./minna/en/17'),
      ...require('./minna/en/18'),
      ...require('./minna/en/19'),
      ...require('./minna/en/20'),
      ...require('./minna/en/21'),
      ...require('./minna/en/22'),
      ...require('./minna/en/23'),
      ...require('./minna/en/24'),
      ...require('./minna/en/25'),
      ...require('./minna/en/26'),
      ...require('./minna/en/27'),
      ...require('./minna/en/28'),
      ...require('./minna/en/29'),
      ...require('./minna/en/30'),
      ...require('./minna/en/31'),
      ...require('./minna/en/32'),
      ...require('./minna/en/33'),
      ...require('./minna/en/34'),
      ...require('./minna/en/35'),
      ...require('./minna/en/36'),
      ...require('./minna/en/37'),
      ...require('./minna/en/38'),
      ...require('./minna/en/39'),
      ...require('./minna/en/40'),
      ...require('./minna/en/41'),
      ...require('./minna/en/42'),
      ...require('./minna/en/43'),
      ...require('./minna/en/44'),
      ...require('./minna/en/45'),
      ...require('./minna/en/46'),
      ...require('./minna/en/47'),
      ...require('./minna/en/48'),
      ...require('./minna/en/49'),
      ...require('./minna/en/50'),
    },
  },
  zh: {
    app: require('./locales/zh/app'),
    minna: {
      ...require('./minna/zh/1'),
      ...require('./minna/zh/2'),
      ...require('./minna/zh/3'),
      ...require('./minna/zh/4'),
      ...require('./minna/zh/5'),
      ...require('./minna/zh/6'),
      ...require('./minna/zh/7'),
      ...require('./minna/zh/8'),
      ...require('./minna/zh/9'),
      ...require('./minna/zh/10'),
      ...require('./minna/zh/11'),
      ...require('./minna/zh/12'),
      ...require('./minna/zh/13'),
      ...require('./minna/zh/14'),
      ...require('./minna/zh/15'),
      ...require('./minna/zh/16'),
      ...require('./minna/zh/17'),
      ...require('./minna/zh/18'),
      ...require('./minna/zh/19'),
      ...require('./minna/zh/20'),
      ...require('./minna/zh/21'),
      ...require('./minna/zh/22'),
      ...require('./minna/zh/23'),
      ...require('./minna/zh/24'),
      ...require('./minna/zh/25'),
      ...require('./minna/zh/26'),
      ...require('./minna/zh/27'),
      ...require('./minna/zh/28'),
      ...require('./minna/zh/29'),
      ...require('./minna/zh/30'),
      ...require('./minna/zh/31'),
      ...require('./minna/zh/32'),
      ...require('./minna/zh/33'),
      ...require('./minna/zh/34'),
      ...require('./minna/zh/35'),
      ...require('./minna/zh/36'),
      ...require('./minna/zh/37'),
      ...require('./minna/zh/38'),
      ...require('./minna/zh/39'),
      ...require('./minna/zh/40'),
      ...require('./minna/zh/41'),
      ...require('./minna/zh/42'),
      ...require('./minna/zh/43'),
      ...require('./minna/zh/44'),
      ...require('./minna/zh/45'),
      ...require('./minna/zh/46'),
      ...require('./minna/zh/47'),
      ...require('./minna/zh/48'),
      ...require('./minna/zh/49'),
      ...require('./minna/zh/50'),
    },
  },
  'zh-Hant': {
    app: require('./locales/zh-Hant/app'),
    minna: {
      ...require('./minna/zh-Hant/1'),
      ...require('./minna/zh-Hant/2'),
      ...require('./minna/zh-Hant/3'),
      ...require('./minna/zh-Hant/4'),
      ...require('./minna/zh-Hant/5'),
      ...require('./minna/zh-Hant/6'),
      ...require('./minna/zh-Hant/7'),
      ...require('./minna/zh-Hant/8'),
      ...require('./minna/zh-Hant/9'),
      ...require('./minna/zh-Hant/10'),
      ...require('./minna/zh-Hant/11'),
      ...require('./minna/zh-Hant/12'),
      ...require('./minna/zh-Hant/13'),
      ...require('./minna/zh-Hant/14'),
      ...require('./minna/zh-Hant/15'),
      ...require('./minna/zh-Hant/16'),
      ...require('./minna/zh-Hant/17'),
      ...require('./minna/zh-Hant/18'),
      ...require('./minna/zh-Hant/19'),
      ...require('./minna/zh-Hant/20'),
      ...require('./minna/zh-Hant/21'),
      ...require('./minna/zh-Hant/22'),
      ...require('./minna/zh-Hant/23'),
      ...require('./minna/zh-Hant/24'),
      ...require('./minna/zh-Hant/25'),
      ...require('./minna/zh-Hant/26'),
      ...require('./minna/zh-Hant/27'),
      ...require('./minna/zh-Hant/28'),
      ...require('./minna/zh-Hant/29'),
      ...require('./minna/zh-Hant/30'),
      ...require('./minna/zh-Hant/31'),
      ...require('./minna/zh-Hant/32'),
      ...require('./minna/zh-Hant/33'),
      ...require('./minna/zh-Hant/34'),
      ...require('./minna/zh-Hant/35'),
      ...require('./minna/zh-Hant/36'),
      ...require('./minna/zh-Hant/37'),
      ...require('./minna/zh-Hant/38'),
      ...require('./minna/zh-Hant/39'),
      ...require('./minna/zh-Hant/40'),
      ...require('./minna/zh-Hant/41'),
      ...require('./minna/zh-Hant/42'),
      ...require('./minna/zh-Hant/43'),
      ...require('./minna/zh-Hant/44'),
      ...require('./minna/zh-Hant/45'),
      ...require('./minna/zh-Hant/46'),
      ...require('./minna/zh-Hant/47'),
      ...require('./minna/zh-Hant/48'),
      ...require('./minna/zh-Hant/49'),
      ...require('./minna/zh-Hant/50'),
    },
  },
  vi: {
    app: require('./locales/vi/app'),
    minna: {
      ...require('./minna/vi/1'),
      ...require('./minna/vi/2'),
      ...require('./minna/vi/3'),
      ...require('./minna/vi/4'),
      ...require('./minna/vi/5'),
      ...require('./minna/vi/6'),
      ...require('./minna/vi/7'),
      ...require('./minna/vi/8'),
      ...require('./minna/vi/9'),
      ...require('./minna/vi/10'),
      ...require('./minna/vi/11'),
      ...require('./minna/vi/12'),
      ...require('./minna/vi/13'),
      ...require('./minna/vi/14'),
      ...require('./minna/vi/15'),
      ...require('./minna/vi/16'),
      ...require('./minna/vi/17'),
      ...require('./minna/vi/18'),
      ...require('./minna/vi/19'),
      ...require('./minna/vi/20'),
      ...require('./minna/vi/21'),
      ...require('./minna/vi/22'),
      ...require('./minna/vi/23'),
      ...require('./minna/vi/24'),
      ...require('./minna/vi/25'),
      ...require('./minna/vi/26'),
      ...require('./minna/vi/27'),
      ...require('./minna/vi/28'),
      ...require('./minna/vi/29'),
      ...require('./minna/vi/30'),
      ...require('./minna/vi/31'),
      ...require('./minna/vi/32'),
      ...require('./minna/vi/33'),
      ...require('./minna/vi/34'),
      ...require('./minna/vi/35'),
      ...require('./minna/vi/36'),
      ...require('./minna/vi/37'),
      ...require('./minna/vi/38'),
      ...require('./minna/vi/39'),
      ...require('./minna/vi/40'),
      ...require('./minna/vi/41'),
      ...require('./minna/vi/42'),
      ...require('./minna/vi/43'),
      ...require('./minna/vi/44'),
      ...require('./minna/vi/45'),
      ...require('./minna/vi/46'),
      ...require('./minna/vi/47'),
      ...require('./minna/vi/48'),
      ...require('./minna/vi/49'),
      ...require('./minna/vi/50'),
    },
  },
};

console.log('I18n.locale', I18n.locale);

I18n.isZh = I18n.locale.startsWith('zh');
if (I18n.locale.startsWith('zh-Hant')) {
  I18n.translations[I18n.locale] = I18n.translations['zh-Hant'];
} else if (I18n.isZh) {
  I18n.translations[I18n.locale] = I18n.translations.zh;
}

export default I18n;
