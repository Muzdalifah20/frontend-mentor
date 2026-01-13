document.addEventListener("DOMContentLoaded", () => {
  const desktopMQ = window.matchMedia("(min-width: 68.75em)");
  const avatar = document.getElementById("avatar");

  // Select the CORRECT share icon (outside panel, bottom-right)
  const shareIcons = avatar.querySelectorAll(".share-icon");
  const sharePanel = avatar.querySelector(".article-preview-open-share");
  const desktopHiddenImg = sharePanel.querySelector(".desktop-hidden");

  function updateVisibility() {
    if (desktopHiddenImg) {
      desktopHiddenImg.style.display = desktopMQ.matches ? "none" : "block";
    }
  }

  // Click works on the bottom-right button
  shareIcons.forEach((shareIcon) => {
    shareIcon.addEventListener("click", () => {
      sharePanel.classList.toggle("active");
    });
  });

  updateVisibility();
  desktopMQ.addListener(updateVisibility);
});
