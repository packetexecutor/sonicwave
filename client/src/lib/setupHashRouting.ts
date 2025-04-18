export function setupHashRouting() {
  const path = window.location.pathname;
  
  if (path !== "/" && !window.location.hash) {
    window.location.replace(`/#${path}`);
  }
  
  if (path === "/" && window.location.search && !window.location.hash) {
    window.location.replace(`/#${path}${window.location.search}`);
  }
}
