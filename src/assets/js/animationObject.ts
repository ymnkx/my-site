import anime, { AnimeParams } from 'animejs';

type AOO = {
  target:string,
  start: number,
  end: number,
  animParam: AnimeParams
}

export default class movingObject {
  stt = 0;
  end = 0;
  target = '';
  animation:any;
  dom: NodeList;

  constructor(param:AOO) {
    this.target = param.target;
    this.stt = param.start;
    this.end = param.end;
    const settings = param.animParam;
    settings.targets = this.target;
    settings.autoplay = false;
    this.animation = anime(settings);
    this.dom = document.querySelectorAll(this.target);
  }

  update(d:number) {
    if (d > this.stt && d < this.end) {
      Array.prototype.slice.call(this.dom).forEach(element => {
        element.classList.add('-moving');
      });
      this.animation.seek(
        this.animation.duration * ((d - this.stt) / (this.end - this.stt))
      );
    } else {
      Array.prototype.slice.call(this.dom).forEach(element => {
        element.classList.remove('-moving');
      });
      if (d >= this.end) {
        this.animation.seek(this.animation.duration);
      } else if (d <= this.stt) {
        this.animation.seek(0);
      }
    }
    if (d > this.stt) {
      Array.prototype.slice.call(this.dom).forEach(element => {
        element.classList.add('-moved');
      });
    } else {
      Array.prototype.slice.call(this.dom).forEach(element => {
        element.classList.remove('-moved');
      });
    }
  }
}