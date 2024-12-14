window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll("[data-on-load]")?.forEach((element) => {
      const e = element as HTMLElement;
      e.style.display = element.getAttribute("data-on-load") as string;
    });
  }, 1);
});
