const music = document.getElementById('introMusic');
const ticket = document.getElementById('ticket');

const showFrame = (id) => {
  document.querySelectorAll('.frame').forEach(f => f.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
};

ticket.addEventListener('click', () => {
  music.play();

  showFrame('frame2');

  setTimeout(() => showFrame('frame3'), 1400);
  setTimeout(() => showFrame('frame4'), 2567);
  setTimeout(() => showFrame('frame5'), 4367);
  setTimeout(() => showFrame('lobby'), 8200);
});