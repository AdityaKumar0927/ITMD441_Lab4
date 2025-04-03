// Aditya Kumar
// ITMD 441 Undergraduate Student
(function() {
  "use strict";
  const heroSection = document.querySelector(".hero") || document.querySelector("header");
  if (heroSection) {
    const heroHeadline = heroSection.querySelector("h1") || document.querySelector("h1");
    if (heroHeadline) {
      heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
    }
    const heroSubHeadline = heroSection.querySelector("p") || document.querySelector("p");
    if (heroSubHeadline) {
      heroSubHeadline.innerHTML = `Utilize cutting-edge strategies from <strong>Stellar Marketing</strong> to help your business <em>thrive</em> and <em>excel</em>.`;
    }
    heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
  }
  const navBar = document.querySelector("nav");
  const footer = document.querySelector("footer");
  if (navBar && footer) {
    navBar.style.backgroundColor = window.getComputedStyle(footer).backgroundColor;
  }
  const ctaButton = document.querySelector(".hero a.btn, .hero button.btn") || document.querySelector("header a.btn, header button.btn");
  if (ctaButton) {
    ctaButton.remove();
  }
  document.querySelectorAll("section h2, .services h2, .solutions h2, .contact h2").forEach(h2 => {
    const txt = h2.textContent.trim().toLowerCase();
    if (txt === "services" || txt === "solutions" || txt === "contact") {
      h2.style.textAlign = "center";
    }
  });
  const serviceIcons = document.querySelectorAll(".services .material-symbols-outlined") || document.querySelectorAll("section.services .material-symbols-outlined");
  serviceIcons.forEach((icon, index) => {
    icon.style.color = "#47C714";
    if (index === 0) {
      icon.textContent = "ads_click";
    }
  });
  const styleTag = document.createElement("style");
  styleTag.textContent = `
    @media (min-width: 1024px) {
      .specialized-marketing .solution-tiles,
      .solutions .solution-tiles {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
      }
    }
  `;
  document.head.appendChild(styleTag);
  const musicianImg = document.querySelector('.specialized-marketing img[alt="Musicians"]') || document.querySelector('.solutions img[alt="Musicians"]');
  if (musicianImg) {
    musicianImg.src = "https://picsum.photos/id/453/400/300";
  }
  const contactForm = document.querySelector("form") || document.querySelector("section.contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const nameField = contactForm.querySelector('input[name="name"]') || contactForm.querySelector('input[type="text"]');
      const emailField = contactForm.querySelector('input[name="email"]') || contactForm.querySelector('input[type="email"]');
      const nameVal = nameField ? nameField.value.trim() : "";
      const emailVal = emailField ? emailField.value.trim() : "";
      if (!nameVal || !emailVal) {
        alert("Please provide a name and email.");
      } else {
        alert("Thank you, " + nameVal + "! We will be in touch with you shortly at " + emailVal + ".");
      }
    });
  }
})();
