// a-kumar-lab4.js
// A Kumar
// ITMD 441 Undergraduate Student

(function() {
  "use strict";

  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    const heroHeadline = heroSection.querySelector("h1");
    if (heroHeadline) {
      heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
    }
    const heroSubHeadline = heroSection.querySelector("p");
    if (heroSubHeadline) {
      heroSubHeadline.innerHTML =
        "Utilize cutting-edge strategies from <strong>Stellar Marketing</strong> " +
        "to help your business <em>thrive</em> and <em>excel</em>.";
    }
    heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
    const possibleCTAs = heroSection.querySelectorAll("a, button");
    possibleCTAs.forEach(el => {
      if (el.textContent.trim().toLowerCase().includes("get started")) {
        el.remove();
      }
    });
  }

  const navBar = document.querySelector("nav");
  const headerEl = navBar?.closest("header");
  const footer = document.querySelector("footer");
  if (navBar && footer) {
    const footerBG = window.getComputedStyle(footer).backgroundColor;
    navBar.style.setProperty("background-color", footerBG, "important");
    if (headerEl) {
      headerEl.style.setProperty("background-color", footerBG, "important");
    }
  }

  const allSectionH2 = document.querySelectorAll("section h2");
  allSectionH2.forEach(h2 => {
    const textLower = h2.textContent.toLowerCase();
    if (
      textLower.includes("services") ||
      textLower.includes("solutions") ||
      textLower.includes("contact")
    ) {
      h2.style.textAlign = "center";
    }
  });

  const serviceIcons = document.querySelectorAll("#services .material-symbols-outlined");
  if (serviceIcons.length > 0) {
    serviceIcons.forEach((icon, i) => {
      icon.style.color = "#47C714";
      if (i === 0) {
        icon.textContent = "ads_click";
      }
    });
  }

  const styleOverride = document.createElement("style");
  styleOverride.textContent = `
    @media (min-width: 1024px) {
      [data-section="product_cards"] {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `;
  document.head.appendChild(styleOverride);

  const musicianImg = document.querySelector('#solutions img[alt="Musicians"]');
  if (musicianImg) {
    musicianImg.src = "https://picsum.photos/id/453/400/300";
  }

  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const nameInput = contactForm.querySelector('input[name="name"], #name');
      const emailInput = contactForm.querySelector('input[name="email"], #email');
      const nameVal = nameInput ? nameInput.value.trim() : "";
      const emailVal = emailInput ? emailInput.value.trim() : "";
      if (!nameVal || !emailVal) {
        alert("Please provide a name and email.");
      } else {
        alert(`Thank you, ${nameVal}! We will be in touch with you shortly at ${emailVal}.`);
      }
    });
  }
})();
