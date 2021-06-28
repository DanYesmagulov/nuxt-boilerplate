// Плагин для nuxt-auth, для поддержки языкового маршрута
// Например site.com/en/auth
export default ({ app }) => {
  const redirect = app.$auth.$storage.options.redirect

  for (const key in redirect) {
    if (app.i18n.defaultLocale === app.i18n.locale) continue
    else redirect[key] = '/' + app.i18n.locale + redirect[key]
  }
  app.$auth.$storage.options.redirect = redirect
}
