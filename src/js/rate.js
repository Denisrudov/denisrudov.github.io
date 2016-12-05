import '../styles/rating.scss';
import './ex'



window.onload = ()=> {
  let className = 'rating-item';
  let rating = document.getElementsByClassName('rating');

  for (let r = 0; r < rating.length; r++) {
    let ratingElement = rating[r];
    ratingElement.addEventListener('click', (e)=> {
      e.stopPropagation();

      doAjaxCall('Rated...').then(d=> {console.log(d[ 0 ])});

      const li = e.target;
      const selectedValue = li.dataset.value;
      const elements = ratingElement.querySelectorAll(`.${className}`);

      for (let i = 0; i < elements.length; i++) {
        let el = elements[ i ];
        if (el.dataset.value <= selectedValue) {
          el.className = `${className} rate`;
        } else {
          el.className = className;
        }
      }

    });
  }
};

function doAjaxCall (...data) {
  return new Promise((success)=> {
    setTimeout(()=> {
      success(data);
    }, 1000);
  })
}