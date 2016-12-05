let data = document.getElementById('data');
class Rating {

  /**
   *
   * @param {CanvasRenderingContext2D} context
   */
  constructor (canvas) {
    this.startX = 0;
    /**
     *
     * @type {Star[]}
     */
    this.stars = [];
    /**
     * @type {CanvasRenderingContext2D}
     */
    this.context = canvas.getContext('2d');
    this.canvas = canvas;

    this.mouseListener = this.canvas.addEventListener('mousemove', this.mouseMoveHandler);
    this.mouseOut = this.canvas.addEventListener('mouseout', this.mouseOutHandler);
    this.mouseClickListener = this.canvas.addEventListener('mousedown', this.mouseClickHandler);

  }

  addStar (star) {
    star.setX(this.startX);
    star.setY(0);
    this.stars.push(star);
    this.startX += 18;
  }

  draw () {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[ i ].draw(this.context);
    }
  }

  mouseClickHandler = ()=> {
    this.stars.forEach(star=> {
      star.save();
    });
    this.draw();
  };

  mouseOutHandler = (e) => {
    this.stars.forEach(star=> {
      star.restore();
    });
    this.draw();
  };

  mouseMoveHandler = (e) => {
    let star = Math.ceil(e.layerX / 18);
    let cell = 0;

    if (star > this.stars.length) {
      cell = this.stars.length;
    } else if (star < 1) {
      cell = 1;
    } else {
      cell = star;
    }

    --cell;

    this.stars.forEach((star, k)=> {
      if (k <= cell) {
        star.setState(true);
      } else {
        star.setState(false);
      }
    });
    this.draw();

  }

}

export default Rating;
