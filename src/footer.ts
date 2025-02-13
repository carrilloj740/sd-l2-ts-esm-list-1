export function footerComponent() {
  const footer = document.createElement("footer");
  footer.innerHTML = "<h1 style='color: #9f33ff;'>Mi footer</h1>";
  footer.style.border = "solid 3px #9f33ff";
  footer.style.padding = "12px";
  return footer;
}
