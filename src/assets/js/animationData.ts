
const _len = '-8%';
const _len2 = '-8%';
const _easing = 'easeInSine';
const _skew = '-4.5deg';

const animationData = [
  {
    target: '#js-y',
    start: 0,
    end: 0.2,
    animParam: {
      translateX: [0, _len],
      easing: _easing,
    },
  },
  {
    target: '#js-m',
    start: 0.025,
    end: 0.225,
    animParam: {
      translateX: [0, _len],
      easing: _easing,
    },
  },
  {
    target: '#js-n',
    start: 0.05,
    end: 0.25,
    animParam: {
      translateX: [0, _len],
      easing: _easing,
    },
  },
  {
    target: '#js-k',
    start: 0.075,
    end: 0.275,
    animParam: {
      translateX: [0, _len],
      // keyframes: [
      //   {translateX: 0},
      //   {translateX: 2},
      //   {translateX: -10},
      // ],
      easing: _easing,
    },
  },
  {
    target: '.js-vowel-1',
    start: 0.05,
    end: 0.35,
    animParam: {
      skewX: _skew,
      translateX: '4%',
      easing: _easing,
      // delay: function(el, i, l) {
      //   return i * 500;
      // },
    },
  },
  {
    target: '.js-vowel-2',
    start: 0.15,
    end: 0.35,
    animParam: {
      skewX: _skew,
      translateX: '-10%',
      easing: _easing,
    },
  },
  {
    target: '#js-t',
    start: 0.1,
    end: 0.3,
    animParam: {
      translateX: [0, _len2],
      easing: _easing,
    },
  },
  {
    target: '#js-m2',
    start: 0.125,
    end: 0.325,
    animParam: {
      translateX: [0, _len2],
      easing: _easing,
    },
  },
  {
    target: '#js-h',
    start: 0.15,
    end: 0.35,
    animParam: {
      translateX: [0, _len2],
      easing: _easing,
    },
  },
  {
    target: '#js-r',
    start: 0.175,
    end: 0.375,
    animParam: {
      translateX: [0, _len2],
      easing: _easing,
    },
  },
  {
    target: '#js-effect',
    start: 0.3,
    end: 0.9,
    animParam: {
      opacity: [0, 0.65],
      easing: _easing,
    },
  },
  // {
  //   target: '#js-m2, #js-h, #js-r',
  //   start: 0.125,
  //   end: 0.325,
  //   animParam: {
  //     translateX: [0, _len],
  //     easing: _easing,
  //     delay: function(el, i, l) {
  //       return i * 250;
  //     },
  //   },
  // },
];

export default animationData;