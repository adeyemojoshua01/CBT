(function () {
  var canvas = document.getElementById('specificCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var select = document.getElementById('sgSelect');
  var W = canvas.width, H = canvas.height;

  function draw() {
    var sg = parseFloat(select.value);
    ctx.clearRect(0, 0, W, H);

    // Tank
    var tankX = 60, tankY = 80, tankW = 480, tankH = 160;
    ctx.fillStyle = 'rgba(42, 169, 224, 0.35)';
    ctx.fillRect(tankX, tankY, tankW, tankH);
    ctx.strokeStyle = '#2aa9e0';
    ctx.lineWidth = 3;
    ctx.strokeRect(tankX, tankY, tankW, tankH);

    // Object
    var objW = 80, objH = 80;
    var objX = tankX + (tankW - objW) / 2;
    var objY;
    if (sg > 1) {
      objY = tankY + tankH - objH; // sinks to bottom
    } else {
      // floats: submerged fraction = sg
      objY = tankY + tankH - objH * sg;
    }
    ctx.fillStyle = sg > 5 ? '#c0c0c0' : (sg < 0.85 ? '#f5a623' : '#e8f4fb');
    ctx.fillRect(objX, objY, objW, objH);

    ctx.fillStyle = '#f7f9fb';
    ctx.font = '18px sans-serif';
    ctx.fillText('SG = ' + sg.toFixed(2), tankX, tankY - 20);
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#9aa7b4';
    ctx.fillText(sg > 1 ? 'Sinks' : 'Floats', tankX + tankW - 60, tankY - 20);
  }

  select.addEventListener('change', draw);
  draw();
})();
