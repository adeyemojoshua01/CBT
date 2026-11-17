(function () {
  var canvas = document.getElementById('temperatureCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var slider = document.getElementById('tempSlider');
  var readout = document.getElementById('tempReadout');
  var W = canvas.width, H = canvas.height;

  function draw() {
    var T = parseInt(slider.value, 10);
    readout.textContent = T + ' °C';
    ctx.clearRect(0, 0, W, H);

    // Liquid: layers slide more easily when hot
    var liquidX = 40, liquidY = 80, liquidW = 220, liquidH = 140;
    ctx.fillStyle = 'rgba(42, 169, 224, 0.3)';
    ctx.fillRect(liquidX, liquidY, liquidW, liquidH);
    var slide = (T / 100) * 30;
    ctx.strokeStyle = '#2aa9e0';
    ctx.lineWidth = 2;
    for (var i = 0; i < 5; i++) {
      var y = liquidY + 20 + i * 25;
      ctx.beginPath();
      ctx.moveTo(liquidX, y);
      ctx.lineTo(liquidX + liquidW + slide, y);
      ctx.stroke();
    }
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '14px sans-serif';
    ctx.fillText('Liquid: hotter → thinner', liquidX, liquidY - 15);

    // Gas: particles move faster when hot
    var gasX = 340, gasY = 80, gasW = 220, gasH = 140;
    ctx.strokeStyle = '#2ecc9b';
    ctx.strokeRect(gasX, gasY, gasW, gasH);
    ctx.fillStyle = '#2ecc9b';
    var speed = 5 + (T / 100) * 30;
    for (var j = 0; j < 25; j++) {
      var gx = gasX + ((j * 37 + T * speed) % gasW);
      var gy = gasY + ((j * 53 + T * speed * 0.7) % gasH);
      ctx.beginPath(); ctx.arc(gx, gy, 3, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = '#f7f9fb';
    ctx.fillText('Gas: hotter → more viscous', gasX, gasY - 15);
  }

  slider.addEventListener('input', draw);
  draw();
})();
