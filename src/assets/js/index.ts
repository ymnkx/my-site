import animationData from './animationData';
import animationObject from './animationObject';

const _data = animationData;

window.onload = function () {
  const _element:HTMLElement = <HTMLElement>document.querySelector('#js-container');
  let max = 0;
  let _timer = 0;

  let ao_list:animationObject[] = [];
  for (let i=0; i<_data.length; i++) {
    ao_list.push(
      new animationObject(_data[i])
    );
  }

  function scroll() {
    const st = (_element) ? _element.scrollTop : 0;
    const d = st / max;
    for (let i=0; i<ao_list.length; i++) {
      ao_list[i].update(d);
    }
  }

  function resize() {
    max = (_element) ? _element.scrollHeight - document.documentElement.clientHeight : 0;
    if (_timer > 0) {
      clearTimeout(_timer);
    }
    _timer = setTimeout(function () {
      scroll();
    }, 200);
  }

  if (_element) {
    _element.onscroll = scroll;
    window.onresize = resize;
  }
  resize();
  scroll();
};
