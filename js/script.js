var templateItem = document.getElementById('template-slide-item').innerHTML;
Mustache.parse(templateItem);
var listItems = '';

for(var i = 0; i < slides.length; i++){
  //console.log(productsData);
  listItems += Mustache.render(templateItem, slides[i]);
};

carousel.insertAdjacentHTML('beforeend', listItems);



var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});


var restartButton = document.querySelector('.button--restart');
restartButton.addEventListener('click', function() {
  flkty.select( 0);
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
