// Production page counts only. Never send query strings, fragments or user content.
(() => {
  if (location.hostname !== 'things.integ.life' || window.top !== window.self || window.integAnalyticsStarted) return;
  window.integAnalyticsStarted = true;
  const publicPaths = new Set(['/', '/index.html']);
  const path = publicPaths.has(location.pathname) ? location.pathname : '/not-found';
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-3Q4M53BMJQ', {
    page_location: `https://things.integ.life${path}`,
    page_title: 'Integ Things',
    page_referrer: '',
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3Q4M53BMJQ';
  document.head.append(script);
})();
