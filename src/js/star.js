class Star {

  constructor (state) {
    this.state = state;
    this.setState(state);
    this.x = 0;
    this.y = 0;
    this.imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAQCAYAAABz9a1kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxMjY0RDdBOEQ3ODExRTZBNjBCQUU3OUQ4MjlCNjc2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxMjY0RDc5OEQ3ODExRTZBNjBCQUU3OUQ4MjlCNjc2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzMgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InV1aWQ6Q0UwOTA5MjE0MTFCRTExMTk3ODZGM0Y3QjIyNDVGREUiIHN0UmVmOmRvY3VtZW50SUQ9InV1aWQ6MzFGQkJGQzdCQ0YyRTAxMTk3N0NGNEM0M0MxOTUwNDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6kfPnKAAABwklEQVR42qSVP0vDQBjG77Q6iAiiswgOTrr5BVSkbi4OguCg4iIILn4AV0G7Kg5Oiji4iFUEBUftotjRDv4Bq4hFapM09XyuPZvLJbk06cEvl7s3efLkvcsbyhgj1VaixKdNgCx4JiEtm3vQhUN1EvWzsm98AdyD9TAjtm3rwqE6tJ6RvCcjPeBVMAB+dU/KPN0GhRrScTJieGKzoB30g1FwoTNiWVZQqCEdx8iPJzavpFZrxDTNoFBDOpRlSLfP/DC4kl8YDIKCz7WFdP60FX1nMzoJUiSb6OdC9iJPbU6Z49t7DWwZhsGNNKVT26xpuoLBhmup9O0FzIDr/4mDr33exdap3ZBkKXJE73B2CHpDbj4XG/BdnkRWeJcCsXQc50VyieMIuNGI7IIlUFEDwghvsXRkI7x9gC7NW7T4magasVzff2Qd1ci42FBBbUq8iacOGxWXkcg6jpFS9TgpXfwGlkGfKM0dgH/qYyDtqSPMVUci66iVNSlGe2AVfIrxMdgRlXHaz4hFXZU1so5sZAhHJkTOlOc8inQvitrRpi5POVEfxtKR/76WEPkOWFcuvg1ORGrzrr8vseXqGVnnT4ABAOkgqQNhq8AOAAAAAElFTkSuQmCC';
    this.images = this.getImages();
  }

  setState = (state)=> {
    this.tempState = state;
  };

  save = () => {
    this.state = this.tempState;
  }

  restore = () =>{
    this.tempState = this.state;
  }

  setX = (x)=> {
    this.x = x;
  };

  setY = (y)=> {
    this.y = y;
  };

  draw = (context) => {
    context.putImageData(this.tempState ? this.images.trueImage : this.images.falseImage, this.x, this.y);
  };

  getImages = ()=> {
    let canvas = document.createElement('canvas');
    let img = new Image();
    img.src = this.imageData;
    canvas.width = 34;
    canvas.height = 16;
    let ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0);

    let trueImage = ctx.getImageData(0, 0, 16, 16);
    let falseImage = ctx.getImageData(18, 0, 16, 16);

    return { trueImage, falseImage };
  };
}

export default Star;