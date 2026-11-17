(function () {
  var canvas = document.getElementById('lgCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var slider = document.getElementById('containerSlider');
  var readout = document.getElementById('containerReadout');
  var W = canvas.width, H = canvas.height;

  // Air particles with fixed positions in unit space
  var particles = [];
  for (var i = 0; i < 40; i++) {
    particles.push({ x: Math.random(), y: Math.random() });
  }

  function draw() {
    var v = parseInt(slider.value, 10) / 100;
    readout.textContent = Math.round(v * 100) + '%';
    ctx.clearRect(0, 0, W, H);

    // Water balloon: fixed volume
    var waterW = 100, waterH = 120;
    var waterX = 80, waterY = 100;
    ctx.fillStyle = '#2aa9e0';
    ctx.beginPath();
    ctx.ellipse(waterX + waterW / 2, waterY + waterH / 2, waterW / 2, waterH / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '13px sans-serif';
    ctx.fillText('Water — volume fixed', waterX - 10, waterY - 20);

    // Air balloon: volume follows container
    var airW = 120 * v;
    var airH = 120 * v;
    var airX = 380 + (120 - airW) / 2;
    var airY = 100 + (120 - airH) / 2;
    ctx.strokeStyle = '#2ecc9b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(airX + airW / 2, airY + airH / 2, airW / 2, airH / 2, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#2ecc9b';
    for (var j = 0; j < particles.length; j++) {
      var p = particles[j];
      var px = airX + p.x * airW;
      var py = airY + p.y * airH;
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '13px sans-serif';
    ctx.fillText('Air — volume follows container', airX - 30, airY - 20);
  }

  slider.addEventListener('input', draw);
  draw();
})();
