const navButton = document.getElementById("hamburger-menu");
const disclosure = document.getElementById("main-nav");
const listItems = disclosure.querySelectorAll("li a");

function openNavigation() {
  navButton.setAttribute("aria-expanded", "true");
  disclosure.classList.remove("hidden");
}

function closeNavigation() {
  navButton.setAttribute("aria-expanded", "false");
  disclosure.classList.add("hidden");
}

function toggleNavigation() {
  const open = navButton.getAttribute("aria-expanded");
  open === "false" ? openNavigation() : closeNavigation();
}

// This function closes an open disclosure if a user tabs away from the last anchor element in the list. It is reliant on the ul container having a class to check whether the relatedTarget is within the disclosure. If not, it will close.
function handleBlur() {
  const navList = event.currentTarget.closest(".main-nav-list");
  if (!event.relatedTarget || !navList.contains(event.relatedTarget)) {
    closeNavigation();
  }
}

navButton.addEventListener("click", toggleNavigation);

// add event to the last item in the nav list to trigger the disclosure to close if the user tabs out of the disclosure
listItems[listItems.length - 1].addEventListener("blur", handleBlur);

// Close the disclosure if a user presses the escape key
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    navButton.focus();
    closeNavigation();
  }
});
