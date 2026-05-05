(function () {
  var storageKey = "preferred-language";
  var supportedLanguages = ["en", "cn"];

  function normalizeLanguage(language) {
    return supportedLanguages.indexOf(language) === -1 ? "en" : language;
  }

  function setLanguage(language) {
    var activeLanguage = normalizeLanguage(language);

    document.documentElement.setAttribute("data-language", activeLanguage);
    document.documentElement.lang = activeLanguage === "cn" ? "zh-CN" : "en";

    document.querySelectorAll("[data-lang]").forEach(function (element) {
      element.hidden = element.getAttribute("data-lang") !== activeLanguage;
    });

    document.querySelectorAll("[data-language-button]").forEach(function (button) {
      var isActive = button.getAttribute("data-language-button") === activeLanguage;
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      window.localStorage.setItem(storageKey, activeLanguage);
    } catch (error) {
      // Some privacy modes disable localStorage; the toggle still works for this page load.
    }
  }

  function getInitialLanguage() {
    try {
      var savedLanguage = window.localStorage.getItem(storageKey);
      if (savedLanguage) {
        return normalizeLanguage(savedLanguage);
      }
    } catch (error) {
      // Fall back to browser language below.
    }

    return navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "cn" : "en";
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-language-button]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-language-button"));
      });
    });

    setLanguage(getInitialLanguage());
  });
})();
