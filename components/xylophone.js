AFRAME.registerComponent('xylophone', {
  schema: {
    position: {type: 'vec3'}
  },
  init: function () {
    const colors = [
      'crimson',
      'tomato',
      'goldenrod',
      'palegreen',
      'mediumseagreen',
      'lightseagreen',
      'royalblue',
      'mediumslateblue'
    ];
    const frequencies = [
      261.63,
      293.66,
      329.63,
      349.23,
      392.00,
      440.00,
      493.88,
      523.25
    ];

    let barGroup = document.createElement('a-entity');
    barGroup.setAttribute('position', this.data.position);

    let context = new (window.AudioContext || window.webkitAudioContext)();

    for (let i = 0, iMax = 8; i < iMax; i += 1) {
      let bar = document.createElement('a-box');
      let positionX = i * 0.055;
      let depth = 0.2 - (i * 0.01);
      let sound = new Sound(context);
      let frequency = frequencies[i];

      bar.setAttribute('color', colors[i]);
      bar.setAttribute('clickable');
      bar.setAttribute('shadow', 'cast: true; receive: false');
      bar.setAttribute('depth', depth);
      bar.setAttribute('width', 0.05);
      bar.setAttribute('height', 0.01);
      bar.setAttribute('position', positionX + ' 0 0' );
      bar.setAttribute('animation__anim-hit', 'property: scale; startEvents: mousedown; from: 1 1 1; to: 0.95 0.95 0.95; dur: 100; easing: linear; loop: 2; dir: alternate');
      bar.addEventListener('mousedown', function() {
        sound.play(frequency);
        sound.stop();
      });
      barGroup.append(bar);
    }

    this.el.appendChild(barGroup);
  }
});

AFRAME.registerPrimitive('a-xylophone', {
  defaultComponents: {
    xylophone: {}
  },
  mappings: {
    position: 'xylophone.position'
  }
});
