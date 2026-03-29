(function () {
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));

  if (!navLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  const sectionMap = new Map(
    navLinks
      .map(function (link) {
        const id = link.getAttribute("href");
        const section = id ? document.querySelector(id) : null;
        return section ? [section, link] : null;
      })
      .filter(Boolean)
  );

  const setCurrentLink = function (activeLink) {
    navLinks.forEach(function (link) {
      if (link === activeLink) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    function (entries) {
      const visibleEntries = entries
        .filter(function (entry) {
          return entry.isIntersecting;
        })
        .sort(function (a, b) {
          return b.intersectionRatio - a.intersectionRatio;
        });

      if (!visibleEntries.length) {
        return;
      }

      const activeLink = sectionMap.get(visibleEntries[0].target);
      if (activeLink) {
        setCurrentLink(activeLink);
      }
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5]
    }
  );

  sectionMap.forEach(function (_, section) {
    observer.observe(section);
  });
})();
