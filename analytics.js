// Production page counts only. Never send query strings, fragments or user content.
(() => {
  if (location.hostname !== 'things.integ.life' || window.top !== window.self || window.integAnalyticsStarted) return;
  window.integAnalyticsStarted = true;
  const publicPaths = new Set(['/', '/index.html']);
  const path = publicPaths.has(location.pathname) ? location.pathname : '/not-found';
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  const page = { page_location: `https://${location.hostname}${path}`, page_title: 'Integ Things', page_referrer: '' };
  gtag('config', 'G-3Q4M53BMJQ', {
    send_page_view: false,
    page_location: `https://things.integ.life${path}`,
    page_title: 'Integ Things',
    page_referrer: '',
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  gtag('event', 'page_view', { ...page, send_to: 'G-3Q4M53BMJQ' });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3Q4M53BMJQ';
  document.head.append(script);
})();
