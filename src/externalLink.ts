const links = document.getElementsByTagName("a");

for (const link of links) {
  if (link.hostname !== location.hostname) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
}
