import Star from './star';
import Rating from './rating'


let canvas = document.getElementById('ex');
canvas.width = 90;
canvas.height = 16;
canvas.style.cursor = 'pointer';


let stars = [ 1, 1, 0, 0, 0 ];

let rating = new Rating(canvas);
for(let i=0;i<stars.length;i++){
  rating.addStar(new Star(stars[ i ] === 1));
}



rating.draw();
