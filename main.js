const button = document.querySelector('button');
const msg = document.querySelectorAll('.msg');

// Adding styles to quote on btn click
button.addEventListener('click', () => {
  button.textContent = ':)';
  for ( let i = 0; i < msg.length; i +=1 ) {
    msg[i].style.color = 'turquoise';
    msg[i].style.textTransform = 'uppercase';
    msg[i].style.fontWeight = 'bold';
    msg[i].style.fontSize = '32px';
  }
});
