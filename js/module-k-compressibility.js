(function () {
  var canvas = document.getElementById('compressCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var slider = document.getElementById('pressureSlider');
  var readout = document.getElementById('pressureReadout');
  var W = canvas.width, H = canvas.height;

  function draw() {
    var P = parseFloat(slider.value);
    readout.textContent = P.toFixed(1) + ' atm';
    ctx.clearRect(0, 0, W, H);

    // Air syringe: volume inversely proportional to P
    var airVol = 1 / P;
    var airH = 160 * airVol;
    var airX = 60, airY = 220 - airH, airW = 100;
    ctx.fillStyle = 'rgba(46, 204, 155, 0.25)';
    ctx.fillRect(airX, airY, airW, airH);
    ctx.strokeStyle = '#2ecc9b';
    ctx.lineWidth = 2;
    ctx.strokeRect(airX, 60, airW, 160);
    ctx.fillStyle = '#2ecc9b';
    for (var i = 0; i < 20; i++) {
      var px = airX + ((i * 29) % airW);
      var py = airY + ((i * 41) % Math.max(airH, 1));
      ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '14px sans-serif';
    ctx.fillText('Air', airX, 45);
    ctx.fillText((airVol * 100).toFixed(0) + '% volume', airX, 240);

    // Water syringe: tiny volume change
    var waterVol = 1 - (P - 1) * 0.00005;
    var waterH = 160 * waterVol;
    var waterX = 340, waterY = 220 - waterH;
    ctx.fillStyle = 'rgba(42, 169, 224, 0.6)';
    ctx.fillRect(waterX, waterY, 100, waterH);
    ctx.strokeStyle = '#2aa9e0';
    ctx.lineWidth = 2;
    ctx.strokeRect(waterX, 60, 100, 160);
    ctx.fillStyle = '#f7f9fb';
    ctx.fillText('Water', waterX, 45);
    ctx.fillText((waterVol * 100).toFixed(2) + '% volume', waterX, 240);
  }

  slider.addEventListener('input', draw);
  draw();
})();
