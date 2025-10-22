(function () {
  const KEY = 'tdsw-theme';
  const root = document.documentElement;

  function set(theme) {
    if (theme) root.setAttribute('data-theme', theme);
    else root.removeAttribute('data-theme'); // fallback to system
    localStorage.setItem(KEY, theme || '');
  }

  // load saved
  const saved = localStorage.getItem(KEY);
  if (saved) set(saved);

  // expose global handler
  window.toggleTheme = function () {
    const isDark =
      (saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      root.getAttribute('data-theme') === 'dark';

    set(isDark ? 'light' : 'dark');
  };
})();