let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 +1);

$('.img1').attr('src', `images/dice${randomNumber1}.png`);
$('.img2').attr('src', `images/dice${randomNumber2}.png`);

randomNumber1 > randomNumber2 ? $('h1').text('Player 1 Wins') : randomNumber2 > randomNumber1 ? $('h1').text('Player 2 Wins') : $('h1').text('Draw') 
