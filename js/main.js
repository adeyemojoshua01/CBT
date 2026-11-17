function toggleMenu() {
  var menu = document.getElementById('menu');
  if (menu) menu.classList.toggle('hidden');
}

// Close menu when a link is tapped
document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('menu');
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.add('hidden'); });
    });
  }
});
