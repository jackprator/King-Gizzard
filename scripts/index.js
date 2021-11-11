let audioDivs = document.querySelectorAll('.audio-div');
let albumCov = document.querySelectorAll('.img-cov');

function hideAll() {
  audioDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumCov.forEach(function(el) {
  el.onclick = (e) => {

hideAll();

let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });

switch (e.target.getAttribute('id')) {
    case 'polyCov':
      document.querySelector('#polyBite')
        .style.display = 'block';
      break;
    case 'pmdbCov':
      document.querySelector('#pmdbBite')
        .style.display = 'block';
      break;
    case 'ratsCov':
      document.querySelector('#ratsBite')
      .style.display = 'block';
      break;
    case 'fmbCov':
      document.querySelector('#fmbBite')
      .style.display = 'block';
      break;
  }
}
});
