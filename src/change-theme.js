const body = document.querySelector("body");
const toggle = document.querySelector(".theme-switch__toggle");
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

export default function saveThemeStarted() {
  toggle.addEventListener("change", changeTheme);
  const theme = localStorage.getItem("Theme");

  if (theme === Theme.DARK) {
    body.classList.add(theme);
    toggle.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}

function changeTheme(e) {
  if (e.target.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    storageTheme();
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    storageTheme();
  }
}

function storageTheme() {
  localStorage.setItem("Theme", `${body.classList.value}`);
}
