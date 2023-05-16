// let cards = document.querySelectorAll('.card', );
  
//   cards.forEach(card => {
//     card.addEventListener('click', () => {
//         cards.forEach(card=> {
//           card.classList.remove('active');
//         });
//         card.classList.add('active');
//       });
//     });
// **************************************************************
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
      });
    });
  