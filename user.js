/* НАЧАЛО */
 /* Отключаем предупреждения на about:config */
  user_pref("general.warnOnAboutConfig", false); // XHTML version
  user_pref("browser.aboutConfig.showWarning", false); // HTML version
 /* Установливаем предпочтительный язык для отображения страниц */
  user_pref("intl.accept_languages", "ru, en");



/* ЗАПУСК */
 /* Отключаем проверку браузера по умолчанию
  * [SETTING] Основное > Запуск > Проверять, является ли Firefox браузером по умолчанию */
  user_pref("browser.shell.checkDefaultBrowser", false);
 /* Отключаем использование рекомендуемых настроек по умолчанию
  * [SETTING] Основное > Производительность > Использовать рекомендуемые настройки */
  user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
 /* Отключаем телеметрию ленты активности */
  user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
  user_pref("browser.newtabpage.activity-stream.telemetry", false);
 /* Отключаем новости, спонсируемый контент и отображение элементов на домашней странице
  * [SETTING] Начало > Домашняя страница Firefox */
  user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // Избранное
  user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Топ сайтов
  user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // Заметки
 /* Отключаем отображение элементов на домашней странице браузера  */
  user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // [Избранное] Недавние загрузки
  user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // [Избранное] Закладки
  user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // [Избранное] Посещенные страницы
  user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // [Избранное] Страницы, сохранённые в Pocket
  user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [Топ сайтов] Топ сайтов спонсоров
 /* Отключаем рекомендацию расширений и настроек
  * [SETTING] Основное > Просмотр сайтов > Рекомендовать <pref> при просмотре */
  user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // Функции
  user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // Расширения
 /* Отключаем новости на главной странице и спонсируемый контент */
  user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
  user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
  user_pref("browser.newtabpage.activity-stream.showSponsored", false);
 /* Чистим рекламные мусорные вкладки (типа Facebook, Youtube и т.д)
  * [NOTE] Это не мешает вам добавлять свои сайты */
  user_pref("browser.newtabpage.activity-stream.default.sites", "");
 /* Отключаем ненужные баннеры на about:protections (Статистика) */
  user_pref("browser.contentblocking.report.lockwise.enabled", false); // Firefox Lockwise 
  user_pref("browser.contentblocking.report.monitor.enabled", false); // Firefox Monitor
  user_pref("browser.contentblocking.report.show_mobile_app", false); // Firefox Mobile
  user_pref("browser.contentblocking.report.vpn.enabled", false); // Firefox VPN
 /* Всегда выдавать запрос на сохранение файлов
  * [SETTING] Основное > Загрузки > Выдавать запрос на сохранение файлов */
  user_pref("browser.download.useDownloadDir", false);



/* ПОИСК */
 /* Отключаем предустановленные поисковые говно-службы
  * [SETTING] Поиск > Значки поисковых систем */
  user_pref("browser.search.hiddenOneOffs", "OZON.ru,Price.ru,Поиск Mail.Ru");
 /* Включаем отображение подсказок в режиме инкогнито
  * [SETTING] Поиск > Отображать поисковые предложения в Приватных окнах */
  user_pref("browser.search.suggest.enabled.private", true);
 /* Отключаем возможность поиска среди закладок и истории */
  user_pref("browser.urlbar.shortcuts.bookmarks", false);
  user_pref("browser.urlbar.shortcuts.history", false);
  user_pref("browser.urlbar.shortcuts.tabs", false);
 /* Декодировать URL, содержащий UTF8-символы */
  user_pref("browser.urlbar.decodeURLsOnCopy", true);
 /* Всегда отображать протокол на http сайтах */
  user_pref("browser.urlbar.trimURLs", false);



/* ОТЧЕТЫ */
 /* Отключаем автоматическую установку расширений и обновлений тем  
 * [SETTING] about:addons>Расширения>Автоматически обновлять дополнения */
  user_pref("extensions.update.autoUpdateDefault", false);
 /* Отключаем метаданные расширений (описание дополнения)
  * Вкладки с подробностями о расширении не будут иметь описания */ 
  user_pref("extensions.getAddons.cache.enabled", false); 
 /* Отключаем обновления поисковых систем
  * [NOTE] Это не влияет на встроенные поисковые системы Mozilla или веб-расширения. */
  user_pref("browser.search.update", false);
 /* Отключаем панель рекомендуемых расширений на about:addons (Использует Google Analytics) */
  user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
 /* Отключаем рекомендации расширений и тем на на about:addons */
  user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
 /* Отключаем предложение "Пожаловаться на это расширение" при удалении */
  user_pref("extensions.abuseReport.enabled", false);



/* ТЕЛЕМЕТРИЯ */
 /* Отключаем телеметрию */
  user_pref("toolkit.telemetry.unified", false);
  user_pref("toolkit.telemetry.enabled", false);
  user_pref("toolkit.telemetry.server", "data:,");
  user_pref("toolkit.telemetry.archive.enabled", false);
  user_pref("toolkit.telemetry.newProfilePing.enabled", false);
  user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
  user_pref("toolkit.telemetry.updatePing.enabled", false);
  user_pref("toolkit.telemetry.bhrPing.enabled", false);
  user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
 /* Отключаем покрытие телеметрии
  * [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/ */
  user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
  user_pref("toolkit.coverage.opt-out", true); // [HIDDEN PREF]
  user_pref("toolkit.coverage.endpoint.base", "");
 /* Отключаем отправку отчетов о состоянии
  * [SETTING] Приватность > Сбор и использование данных > Отправка технических данных*/
  user_pref("datareporting.healthreport.uploadEnabled", false);
 /* Отключаем отправку данных, главный выключатель 
  * Если этот параметр отключен, политика не отображается.
  * [1] https://bugzilla.mozilla.org/1195552 */
  user_pref("datareporting.policy.dataSubmissionEnabled", false);
 /* 0342: Отключаем проведение исследований
  * [SETTING] Приватность > Сбор и использование данных > Разрешить проводить исследования */
  user_pref("app.shield.optoutstudies.enabled", false);
 /* 0343: Отключаем персональные рекомендации расширений на about:addons и AMO
  * [NOTE] Этот параметр не действует, когда отчеты о работоспособности отключены.
  * [SETTING] Приватность > Сбор и использование данных > Разрешить давать рекомендации расширений
  * [1] https://support.mozilla.org/kb/personalized-extension-recommendations */
  user_pref("browser.discovery.enabled", false);
 /* Отключаем отправку отчетов при падении */
  user_pref("breakpad.reportURL", "");
  user_pref("browser.tabs.crashReporting.sendReport", false);
  user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [DEFAULT: false]
 /* Отключаем отправку отложенных отчетов о сбоях
  * [SETTING] Приватность > Сбор и использование данных > Разрешить отправлять накопившиеся сообщения о падении */
  user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
 /* 0390: Отключаем обнаружение Captive Portal
  * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy
  * [2] https://wiki.mozilla.org/Necko/CaptivePortal */
  user_pref("captivedetect.canonicalURL", "");
  user_pref("network.captive-portal-service.enabled", false);
 /* 0391: Отключаем проверку сетевого подключения
  * [1] https://bugzilla.mozilla.org/1460537 */
  user_pref("network.connectivity-service.enabled", false);



/* БЕЗОПАСНЫЙ БРАУЗЕР */
 /* Отключаем безопасный серфинг
  * [WARNING] Делайте это на свой страх и риск! Это главные переключатели.
  * [SETTING] Приватность > Защита > Блокировать опасное и обманывающее содержимое */
  user_pref("browser.safebrowsing.malware.enabled", false);
  user_pref("browser.safebrowsing.phishing.enabled", false);
 /* Отключаем проверку загрузок
  * Это главный переключатель для safebrowsing.downloads
  * [SETTING] Приватность > Защита > Блокировать опасные загрузки */
  user_pref("browser.safebrowsing.downloads.enabled", false);
 /* Отключаем проверку загрузок
  * Чтобы проверить безопасность определенных исполняемых файлов, браузер отправляет информацию
  * о файле, включая имя, дату, размер и криптографический хэш в Google
  * Служба безопасного просмотра уже определяет, следует ли блокировать файл. */
  user_pref("browser.safebrowsing.downloads.remote.enabled", false);
  user_pref("browser.safebrowsing.downloads.remote.url", "");
 /* Отключаем проверку на наличие нежелательного ПО
  * [SETTING] Приватность > Защита > Предупреждать о нежелательных и редко загружаемых программах */
  user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
  user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
 /* Отключаем  "игнорировать это предупреждение" в предупреждениях SB
  * Если кликнуть, он обходит блокировку для этого сеанса. Это средство для администраторов, чтобы обеспечить соблюдение SB */
  user_pref("browser.safebrowsing.allowOverride", false);



/* РАСШИРЕНИЯ */
 /* Отключаем Shield (система отзывов Firefox)
  * Shield - это система телеметрии (включая Heartbeat)
  * [1] https://wiki.mozilla.org/Firefox/Shield
  * [2] https://github.com/mozilla/normandy */
  user_pref("app.normandy.enabled", false);
  user_pref("app.normandy.api_url", "");
 /* Отключаем телеметрию PingCentre
  * Может быть заблокирован 'datareporting.healthreport.uploadEnabled' */
  user_pref("browser.ping-centre.telemetry", false);
 /* Отключаем Firefox-Аккаунт & Синхронизацию */
  user_pref("identity.fxaccounts.enabled", false);
 /* Отключаем встроенное расширение Pocket */
  user_pref("extensions.pocket.enabled", false);
 /* Отключаем встроенное расширение Screenshots */
  user_pref("extensions.screenshots.disabled", true);
 /* Отключаем встроенное расширение Web Compatibility Reporter
  * Добавляет кнопку «Сообщить о проблеме на сайте» для отправки данных в Mozilla */
  user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
 /* Отключаем ограничения расширений для доменов Mozilla */
  user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF]
  user_pref("extensions.webextensions.restrictedDomains", "");



/* ПРИВАТНОСТЬ */
 /* Включаем блокировку сторонних файлов Cookie
  * [SETTING] Приватность > Защита от отслеживания > Все сторонние куки */
  user_pref("browser.contentblocking.category", "custom");
  user_pref("network.cookie.cookieBehavior", 1);
 /* Разрешаем работу Enhanced Tracking Protection во всех окнах
  * [SETTING] Приватность > Защита от отслеживания > Во всех окнах */
  user_pref("privacy.trackingprotection.enabled", true);
 /* Включаем блокировку трекеров социальных сетей в ETP */
  user_pref("privacy.trackingprotection.socialtracking.enabled", true);
 /* Запрещаем отправлять referrer (источник перехода) сайтам
  * Когда вы переходите на сайт, например, с результатов гугла,
  * сайт может видеть, что вы перешли на сайт с https://www.google.com/ */
  user_pref("network.http.referer.XOriginPolicy", 2);
  user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
 /* Включаем отправку веб-сайтам сигнал «Не отслеживать»
  * Приватность > Отправлять веб-сайтам сигнал «Не отслеживать» */
  user_pref("privacy.donottrackheader.enabled", true);
 /* Включаем функцию "Контейнеры" без расширения */
  user_pref("privacy.userContext.ui.enabled", true);
  user_pref("privacy.userContext.enabled", true);
 /* Включаем First Party Isolation */
  user_pref("privacy.firstparty.isolate", true);
 /* Отключаем показ состояния батареи */
  user_pref("dom.battery.enabled", false);



/* ЗАЩИТА */
 /* Включаем блокировку небезопасного контента на https-страницах */
  user_pref("security.mixed_content.block_active_content", true); // [DEFAULT: true]
 /* Включаем блокировку небезопасного контента (например, изображения) на https-страницах */
  user_pref("security.mixed_content.block_display_content", true);
 /* Включаем блокировку незашифрованных запросов от Flash для предотвращения MitM атак */
  user_pref("security.mixed_content.block_object_subrequest", true);



/* РАЗНОЕ */
 /* Отключаем асинхронные запросы, используемые для аналитики */
  user_pref("beacon.enabled", false);
 /* Удаляем специальные разрешения для доменов Mozilla [FF35 +]
  * [1] resource://app/defaults/permissions ***/
  user_pref("permissions.manager.defaultsUrl", "");
 /* Удаляем белый список веб-каналов */ 
  user_pref("webchannel.allowObject.urlWhitelist", "");



/* ПАРОЛИ */
 /* Отключаем сохранение паролей в браузере 
  * [SETTING] Приватность > Логины и пароли */
  user_pref("signon.rememberSignons", false); // Запрашивать сохранение логинов и паролей для веб-сайтов
  user_pref("signon.generation.enabled", false); // Предлагать и генерировать надежные пароли
  user_pref("signon.autofillForms", false); // Автозаполнять логины и пароли



/* ИНТЕРФЕЙС */
 /* Добавляем кнопку "Включить/Отключить звук" в режиме "Картинка в картинке" */
  user_pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", true);
 /* Включаем отображение расширенной информации на страницах предупреждений */
  user_pref("browser.xul.error_pages.expert_bad_cert", true);
 /* Отключаем предупреждение при включении полноэкранного режима*/
  user_pref("full-screen-api.warning.timeout", 0);
  user_pref("full-screen-api.warning.delay", 0);
 /* Отключаем клавишу Alt, переключающую меню */
  user_pref("ui.key.menuAccessKey", 0);
 /* Включаем темную тему */
  user_pref("devtools.theme", "dark");
  user_pref("reader.color_scheme", "dark");
  user_pref("ui.systemUsesDarkTheme", 1);
 /* Включаем функцию "Подсветить все" в CTRL+F */
  user_pref("findbar.highlightAll", true);



/* ПРОКРУТКА */
 /* Настройки плавного скролла
  * [1] https://habr.com/ru/post/548064/ */
  user_pref("general.smoothScroll.currentVelocityWeighting", "0");
  user_pref("general.smoothScroll.durationToIntervalRatio", 1000);
  user_pref("general.smoothScroll.lines.durationMaxMS", 150);
  user_pref("general.smoothScroll.lines.durationMinMS", 0);
  user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
  user_pref("general.smoothScroll.mouseWheel.durationMinMS", 0);
  user_pref("general.smoothScroll.mouseWheel.migrationPercent", 0);
  user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
  user_pref("general.smoothScroll.msdPhysics.enabled", true);
  user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 450);
  user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450);
  user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50);
  user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio;0", 4);
  user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
  user_pref("general.smoothScroll.other", true);
  user_pref("general.smoothScroll.other.durationMaxMS", 150);
  user_pref("general.smoothScroll.other.durationMinMS", 0);
  user_pref("general.smoothScroll.pages.durationMaxMS", 150);
  user_pref("general.smoothScroll.pages.durationMinMS", 0);
  user_pref("general.smoothScroll.pixels", true);
  user_pref("general.smoothScroll.pixels.durationMaxMS", 150);
  user_pref("general.smoothScroll.pixels.durationMinMS", 0);
  user_pref("general.smoothScroll.scrollbars.durationMaxMS", 600);
  user_pref("general.smoothScroll.scrollbars.durationMinMS", 0);
  user_pref("general.smoothScroll.stopDecelerationWeighting", "0.2");



/* УДАЛЕНО */
 /* Отключаем WebRTC
  * WebRTC может допускать утечку IP-адреса при определенных обстоятельствах
  ! Ломает звонки в Discord, Google Meet и т.д*/
  // user_pref("media.peerconnection.enabled", false);
  // user_pref("media.peerconnection.ice.no_host", true);
  // user_pref("media.peerconnection.ice.default_address_only", true);
  // user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
 /* Отключаем отслеживание состояния веб-камеры и микрофона устройства
  ! Отключает запрос на доступ к камере / микрофону, так как сайты не будут их видеть */
  // user_pref("media.navigator.enabled", false);
 /* Отлючаем DRM
  * [SETTING] Основное > Воспроизводить защищённое DRM содержимое
  ! Перестают работать; Netflix, Amazon Prime, Hulu, HBO, Disney+, Showtime, Starz, DirectTV */
 // user_pref("media.eme.enabled", false);
 /* Отключаем востановление данных сеанса */
  // user_pref("browser.sessionstore.privacy_level", 2);
 /* Отключаем соединение при наведении указателя мыши на ссылку
  * [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests */
  // user_pref("network.http.speculative-parallel-limit", 0);
 /* Отключаем отправку телеметрии владельцам сайтов
  * С помощью этой функции, разработчик сайта может узнать например,
  * за какое время у пользователя загрузился тот или иной элемент.
  * [1] https://habr.com/ru/post/459880/ */
  // user_pref("dom.enable_performance_observer", false);
 /* Включаем режим "Только HTTPS" на всех сайтах */
  // user_pref("dom.security.https_only_mode", true);

  /* СЕТЬ */
   /* Отключаем IPv6 */
    // user_pref("network.dns.disableIPv6", true);
   /* Отключаем предварительную загрузку ссылок
    * [1] https://developer.mozilla.org/docs/Web/HTTP/Link_prefetching_FAQ */
    // user_pref("network.prefetch-next", false);
   /* Отключаем предварительную выборку DNS
    * [1] https://developer.mozilla.org/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control */
    // user_pref("network.dns.disablePrefetch", true);
    // user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true] // ! Задокументированно
   /* Отключаем предиктор / предварительную выборку */
    // user_pref("network.predictor.enabled", false);
    // user_pref("network.predictor.enable-prefetch", false); // [DEFAULT: false] // ! Задокументированно
   /* Не применять «Аудит гиперссылок» (отслеживание кликов)
    * [1] https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/ */
    // user_pref("browser.send_pings", false); // [DEFAULT: false] // ! Задокументированно
    // user_pref("browser.send_pings.require_same_host", true); // ! Удаленно в 87-beta

  /* FLASH */
   /* Отключаем отправку отчетов об ошибках Flash */
    // user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
   /* Отключаем отправку отчетов при сбое плагина */
    // user_pref("dom.ipc.plugins.reportCrashURL", false);

   /* Включаем запуск дополнений в приватном режиме
    * Могут не работать расширения от Mozilla (Контейнеры) */
    // user_pref("extensions.allowPrivateBrowsingByDefault", true);

 // user_pref("privacy.resistFingerprinting", true);
 // user_pref("browser.urlbar.speculativeConnect.enabled", false);
 // user_pref("dom.vibrator.enabled", false);
