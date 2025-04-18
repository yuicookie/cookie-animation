window.addEventListener('DOMContentLoaded', () => {
  const container1 = document.getElementById('ch75x2');
  const container2 = document.getElementById('ch75_skin01x2');
  const container3 = document.getElementById('ch75_skin02x2');

  imagePaths1.forEach((path, index) => {
    const img = document.createElement('img');
    img.src = 'img/ch75x2/' + path;
    if (index === 0) img.classList.add('active');
    container1.appendChild(img);
  });

    imagePaths2.forEach((path, index) => {
    const img = document.createElement('img');
    img.src = 'img/ch75_skin01x2/' + path;
    if (index === 0) img.classList.add('active');
    container2.appendChild(img);
  });

    imagePaths3.forEach((path, index) => {
    const img = document.createElement('img');
    img.src = 'img/ch75_skin02x2/' + path;
    if (index === 0) img.classList.add('active');
    container3.appendChild(img);
  });

  startAnimation1(container1, imagePaths1.length);
  startAnimation2(container2, imagePaths2.length);
  startAnimation3(container3, imagePaths3.length);
});

function startAnimation1(container1, count) {
  let current = 0;
  setInterval(() => {
    const images = container1.querySelectorAll('img');
    images.forEach((img, index) => {
      img.classList.toggle('active', index === current);
    });
    current = (current + 1) % count;
  }, 100);
}

function startAnimation2(container2, count) {
  let current = 0;
  setInterval(() => {
    const images = container2.querySelectorAll('img');
    images.forEach((img, index) => {
      img.classList.toggle('active', index === current);
    });
    current = (current + 1) % count;
  }, 100);
}

function startAnimation3(container3, count) {
  let current = 0;
  setInterval(() => {
    const images = container3.querySelectorAll('img');
    images.forEach((img, index) => {
      img.classList.toggle('active', index === current);
    });
    current = (current + 1) % count;
  }, 100);
}
