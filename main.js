const div = document.querySelector('div');
const button = document.querySelector('button');
const msg = document.querySelectorAll('.msg');

// // Adding styles on mouseover
// div.addEventListener('mouseover', (event) => {
//   if ( event.target.className === 'msg' ) {
//     event.target.style.textTransform = 'uppercase';
//     event.target.style.color = 'blue';
//     event.target.style.fontWeight = 'bold';
//     event.target.style.fontSize = '32px';
//   }
// });

// Adding styles on btn click
button.addEventListener('click', () => {
  button.textContent = ':)';
  for ( let i = 0; i < msg.length; i +=1 ) {
    msg[i].style.color = 'blue';
    msg[i].style.textTransform = 'uppercase';
    msg[i].style.fontWeight = 'bold';
    msg[i].style.fontSize = '32px';
  }
});

// Test
