(function () {
  var canvas = document.getElementById('svCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W = canvas.width, H = canvas.height;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // 1 kg water = 0.001 m³ (small)
    ctx.fillStyle = '#2aa9e0';
    ctx.fillRect(80, 80, 40, 40);
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '14px sans-serif';
    ctx.fillText('1 kg water = 0.001 m³', 60, 60);

    // 1 kg air = 0.83 m³ (large)
    ctx.strokeStyle = '#2ecc9b';
    ctx.lineWidth = 2;
    ctx.strokeRect(340, 40, 180, 180);
    ctx.fillStyle = '#2ecc9b';
    for (var i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(360 + (i * 37) % 160, 60 + (i * 53) % 160, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#f7f9fb';
    ctx.fillText('1 kg air = 0.83 m³', 350, 240);
  }

  draw();
})();
