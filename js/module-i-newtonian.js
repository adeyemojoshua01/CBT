(function () {
  var canvas = document.getElementById('newtonianCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var fluid = document.getElementById('fluidSelect');
  var rate = document.getElementById('shearRateSlider');
  var readout = document.getElementById('shearRateReadout');
  var W = canvas.width, H = canvas.height;

  function shearStress(type, du) {
    if (type === 'water') return 0.5 * du;
    if (type === 'ketchup') return Math.pow(du, 0.5) * 0.8;
    if (type === 'toothpaste') return du < 0.5 ? 0 : 0.3 + 0.4 * du;
    return 0;
  }

  function draw() {
    var type = fluid.value;
    var du = parseFloat(rate.value);
    readout.textContent = du.toFixed(1);
    ctx.clearRect(0, 0, W, H);

    // Axes
    var ox = 60, oy = H - 50;
    var axW = W - 100, axH = H - 110;
    ctx.strokeStyle = '#9aa7b4';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + axW, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, oy - axH); ctx.stroke();

    ctx.fillStyle = '#9aa7b4';
    ctx.font = '12px sans-serif';
    ctx.fillText('rate of deformation →', ox + axW - 120, oy + 25);
    ctx.save();
    ctx.translate(20, oy - axH + 60);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('shear stress →', 0, 0);
    ctx.restore();

    // Curve
    ctx.strokeStyle = '#a78bfa';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (var i = 0; i <= 50; i++) {
      var duVal = (i / 50) * 5;
      var tau = shearStress(type, duVal);
      var px = ox + (duVal / 5) * axW;
      var py = oy - (tau / 3) * axH;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Current point
    var tauNow = shearStress(type, du);
    var cx = ox + (du / 5) * axW;
    var cy = oy - (tauNow / 3) * axH;
    ctx.fillStyle = '#f5a623';
    ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#f7f9fb';
    ctx.font = '14px sans-serif';
    ctx.fillText(type.charAt(0).toUpperCase() + type.slice(1), ox + 10, oy - axH + 20);
  }

  fluid.addEventListener('change', draw);
  rate.addEventListener('input', draw);
  draw();
})();
