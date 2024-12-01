const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function changeDarkMode(darkModeOn: boolean) {
  if (darkModeOn) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

changeDarkMode(darkModeMediaQuery.matches);
darkModeMediaQuery.addEventListener("change", (e: MediaQueryListEvent) => {
  changeDarkMode(e.matches);
});
