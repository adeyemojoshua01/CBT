(function () {
  var canvas = document.getElementById('densityCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var material = document.getElementById('materialSelect');
  var volume = document.getElementById('volumeSlider');
  var volReadout = document.getElementById('volumeReadout');
  var W = canvas.width, H = canvas.height;

  function draw() {
    var rho = parseFloat(material.value);
    var V = parseFloat(volume.value);
    var mass = rho * V;
    volReadout.textContent = V.toFixed(1) + ' m³';
    ctx.clearRect(0, 0, W, H);

    var size = 80 + V * 30;
    var x = (W - size) / 2;
    var y = 80;

    // Colour by material
    var colour = rho > 5000 ? '#c0c0c0' : (rho > 500 ? '#2aa9e0' : '#2ecc9b');
    ctx.fillStyle = colour;
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, size, size);

    ctx.fillStyle = '#f7f9fb';
    ctx.font = '18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Mass = ' + mass.toFixed(1) + ' kg', W / 2, y + size + 40);
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#9aa7b4';
    ctx.fillText('ρ = ' + rho + ' kg/m³', W / 2, y + size + 65);

    // Balance base
    ctx.fillStyle = '#9aa7b4';
    ctx.fillRect(W / 2 - 40, y + size + 80, 80, 10);
    ctx.textAlign = 'left';
  }

  material.addEventListener('change', draw);
  volume.addEventListener('input', draw);
  draw();
})();
