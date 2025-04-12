
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.style.display = 'none';
  }
});


const track = document.getElementById('carouselTrack');
let index = 0;

function moveSlide(direction) {
  const items = track.children.length;
  const itemWidth = track.children[0].offsetWidth + 40; // width + margin
  index += direction;

  if (index < 0) index = 0;
  if (index > items - 3) index = items - 3;

  track.style.transform = `translateX(-${index * itemWidth}px)`;
}
