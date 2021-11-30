function loadPage(url) {
  window.location.href = url;
}

function scrollToPageLocation(elementId) {
  document.getElementById(elementId).scrollIntoView({behavior: 'smooth'});
}
