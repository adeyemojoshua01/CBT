function showBranch(name) {
  var canvas = document.getElementById('branchCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var caption = document.getElementById('branchCaption');
  var W = canvas.width, H = canvas.height;

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#13293d';
  ctx.fillRect(0, 0, W, H);

  var descriptions = {
    statics: 'Fluid at rest. We worry about pressure and forces, not velocity.',
    dynamics: 'Fluid in motion. We worry about velocity, acceleration, and energy.',
    hydrostatics: 'Liquids at rest — dams, tanks, water towers.',
    aerostatics: 'Gases at rest — atmospheric pressure, balloons.',
    kinematics: 'Describes motion — how fast, what path, what flow rate.',
    kinetics: 'Explains motion — the forces and energy that cause it.'
  };
  caption.textContent = descriptions[name] || '';

  // Simple visual per branch
  if (name === 'statics' || name === 'hydrostatics') {
    // Dam
    ctx.fillStyle = '#9aa7b4';
    ctx.fillRect(150, 80, 30, 140);
    ctx.fillStyle = '#2aa9e0';
    ctx.fillRect(0, 100, 150, 120);
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '16px sans-serif';
    ctx.fillText('Pressure grows with depth', 220, 140);
  } else if (name === 'dynamics' || name === 'kinetics') {
    // Pipe with flow
    ctx.strokeStyle = '#9aa7b4';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(60, 130); ctx.lineTo(540, 130);
    ctx.stroke();
    ctx.strokeStyle = '#2aa9e0';
    ctx.lineWidth = 3;
    for (var i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(100 + i * 90, 130);
      ctx.lineTo(140 + i * 90, 130);
      ctx.stroke();
    }
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '16px sans-serif';
    ctx.fillText('Flow through a pipe', 220, 90);
  } else if (name === 'aerostatics') {
    // Balloon
    ctx.fillStyle = '#2ecc9b';
    ctx.beginPath();
    ctx.arc(300, 120, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#9aa7b4';
    ctx.beginPath();
    ctx.moveTo(300, 170); ctx.lineTo(300, 220);
    ctx.stroke();
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '16px sans-serif';
    ctx.fillText('Hot-air balloon rises', 200, 240);
  } else if (name === 'kinematics') {
    // Leaves on stream
    ctx.fillStyle = '#2aa9e0';
    ctx.fillRect(0, 150, W, 80);
    ctx.fillStyle = '#2ecc9b';
    for (var j = 0; j < 4; j++) {
      ctx.beginPath();
      ctx.arc(100 + j * 110, 185, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#f7f9fb';
    ctx.font = '16px sans-serif';
    ctx.fillText('Describe the motion — no forces yet', 150, 110);
  }
}
