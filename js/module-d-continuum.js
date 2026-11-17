(function () {
  var canvas = document.getElementById('continuumCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var slider = document.getElementById('scaleSlider');
  var readout = document.getElementById('scaleReadout');
  var W = canvas.width, H = canvas.height;

  function draw() {
    var t = parseInt(slider.value, 10) / 100;
    readout.textContent = t < 0.33 ? 'Beach' : (t < 0.66 ? 'Grains' : 'Molecules');
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#1a3a5c';
    ctx.fillRect(0, 0, W, H);

    if (t < 0.5) {
      // Beach: smooth sand
      ctx.fillStyle = '#d4b483';
      ctx.fillRect(0, 100, W, 160);
      ctx.fillStyle = '#2aa9e0';
      ctx.fillRect(0, 60, W, 40);
      ctx.fillStyle = '#f7f9fb';
      ctx.font = '16px sans-serif';
      ctx.fillText('Smooth beach — looks continuous', 20, 40);
    } else {
      // Grains / molecules
      ctx.fillStyle = '#d4b483';
      ctx.fillRect(0, 80, W, 180);
      var count = t < 0.75 ? 60 : 140;
      for (var i = 0; i < count; i++) {
        var x = (i * 137.5) % W;
        var y = 90 + ((i * 73) % 160);
        ctx.fillStyle = t < 0.75 ? '#b08d5a' : '#2aa9e0';
        ctx.beginPath();
        ctx.arc(x, y, t < 0.75 ? 4 : 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#f7f9fb';
      ctx.font = '16px sans-serif';
      ctx.fillText(t < 0.75 ? 'Individual grains' : 'Molecules with gaps', 20, 40);
    }
    if (t > 0.8) {
      ctx.fillStyle = '#f5a623';
      ctx.font = '14px sans-serif';
      ctx.fillText('Continuum assumption breaking down', 20, H - 20);
    }
  }

  slider.addEventListener('input', draw);
  draw();
})();
