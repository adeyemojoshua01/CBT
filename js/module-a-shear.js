(function () {
  var canvas = document.getElementById('shearCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var slider = document.getElementById('shearSlider');
  var readout = document.getElementById('shearReadout');

  var W = canvas.width, H = canvas.height;
  var brickX = 80, brickY = 150, brickW = 100, brickH = 80;
  var waterX = 380, waterY = 150, waterW = 120, waterH = 100;

  function draw() {
    var push = parseInt(slider.value, 10) / 100;
    readout.textContent = Math.round(push * 100) + '%';
    ctx.clearRect(0, 0, W, H);

    // Labels
    ctx.fillStyle = '#9aa7b4';
    ctx.font = '14px sans-serif';
    ctx.fillText('Solid', 100, 40);
    ctx.fillText('Fluid', 410, 40);

    // Brick: deforms elastically then springs back
    var brickDeform = Math.sin(push * Math.PI) * 12;
    ctx.save();
    ctx.translate(brickX, brickY);
    ctx.transform(1, 0, brickDeform / brickW, 1, 0, 0);
    ctx.fillStyle = '#c96b4a';
    ctx.fillRect(0, 0, brickW, brickH);
    ctx.fillStyle = '#a8563a';
    ctx.fillRect(0, brickH - 12, brickW, 12);
    ctx.restore();

    // Brick arrow
    if (push > 0.05) {
      ctx.fillStyle = '#f5a623';
      ctx.font = '24px sans-serif';
      ctx.fillText('→', brickX + brickW + 10, brickY + brickH / 2 + 8);
      ctx.font = '12px sans-serif';
      ctx.fillText('resists, springs back', brickX + brickW + 10, brickY + brickH / 2 + 30);
    }

    // Water: continuous skew
    ctx.save();
    ctx.translate(waterX, waterY);
    ctx.transform(1, 0, -push * 0.35, 1, 0, 0);
    ctx.fillStyle = '#2aa9e0';
    ctx.fillRect(0, 0, waterW, waterH);
    ctx.fillStyle = '#1b6f96';
    ctx.fillRect(0, waterH - 10, waterW, 10);
    ctx.restore();

    // Water arrow
    if (push > 0.05) {
      ctx.fillStyle = '#2aa9e0';
      ctx.font = '24px sans-serif';
      ctx.fillText('→', waterX + waterW + 10, waterY + waterH / 2 + 8);
      ctx.font = '12px sans-serif';
      ctx.fillText('flows continuously', waterX + waterW + 10, waterY + waterH / 2 + 30);
    }

    // Ground
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.beginPath();
    ctx.moveTo(0, brickY + brickH);
    ctx.lineTo(W, brickY + brickH);
    ctx.stroke();
  }

  slider.addEventListener('input', draw);
  draw();
})();
