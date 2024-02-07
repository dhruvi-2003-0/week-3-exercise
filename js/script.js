const paragraph = document.querySelector('#paragraph');
const btn = document.querySelector('button');
const openLip = document.querySelector('#open-lip');

btn.addEventListener('click' , function() {
  paragraph.textContent = (`Actually no HTML is not hard and its way more fun than javascript! (Me right now)`);
  openLip.src = 'images/lip-close.jpg'
  openLip.style.paddingTop = '40px';
  paragraph.style.marginLeft = '20px';
  paragraph.style.color = 'red'
  paragraph.style.fontSize = '30px';
})
