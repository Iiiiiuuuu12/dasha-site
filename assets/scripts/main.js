const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => observer.observe(item));

const surpriseButton = document.querySelector("#surprise-button");
const surpriseMessage = document.querySelector("#surprise-message");
const surpriseClose = document.querySelector("#surprise-close");

if (surpriseButton && surpriseMessage && surpriseClose) {
  surpriseButton.addEventListener("click", () => {
    surpriseMessage.classList.add("is-open");
    surpriseMessage.setAttribute("aria-hidden", "false");
  });

  surpriseClose.addEventListener("click", () => {
    surpriseMessage.classList.remove("is-open");
    surpriseMessage.setAttribute("aria-hidden", "true");
  });

  surpriseMessage.addEventListener("click", (event) => {
    if (event.target === surpriseMessage) {
      surpriseMessage.classList.remove("is-open");
      surpriseMessage.setAttribute("aria-hidden", "true");
    }
  });
}
