(function () {
  var canvas = document.getElementById('viscosityCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var slider = document.getElementById('viscositySlider');
  var readout = document.getElementById('viscosityReadout');
  var W = canvas.width, H = canvas.height;

  var waterPos = 0;
  var honeyPos = 0;
  var racing = false;

  function draw() {
    var honeyMu = parseFloat(slider.value);
    readout.textContent = honeyMu.toFixed(1) + ' Pa·s';
    ctx.clearRect(0, 0, W, H);

    // Ramps
    ctx.fillStyle = '#13293d';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = '#9aa7b4';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(40, 60); ctx.lineTo(280, 220); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(320, 60); ctx.lineTo(560, 220); ctx.stroke();

    // Water blob
    var wx = 40 + waterPos * 240;
    var wy = 60 + waterPos * 160;
    ctx.fillStyle = '#2aa9e0';
    ctx.beginPath(); ctx.arc(wx, wy, 14, 0, Math.PI * 2); ctx.fill();

    // Honey blob
    var hx = 320 + honeyPos * 240;
    var hy = 60 + honeyPos * 160;
    ctx.fillStyle = '#f5a623';
    ctx.beginPath(); ctx.arc(hx, hy, 14, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#f7f9fb';
    ctx.font = '14px sans-serif';
    ctx.fillText('Water (low μ)', 40, 40);
    ctx.fillText('Honey (μ = ' + honeyMu.toFixed(1) + ')', 320, 40);
  }

  window.startRace = function () {
    if (racing) return;
    racing = true;
    waterPos = 0; honeyPos = 0;
    var honeyMu = parseFloat(slider.value);

    function step() {
      waterPos += 0.02;
      honeyPos += 0.02 / (honeyMu / 1);
      if (waterPos > 1) waterPos = 1;
      if (honeyPos > 1) honeyPos = 1;
      draw();
      if (waterPos < 1 || honeyPos < 1) {
        requestAnimationFrame(step);
      } else {
        racing = false;
      }
    }
    step();
  };

  slider.addEventListener('input', draw);
  draw();
})();
