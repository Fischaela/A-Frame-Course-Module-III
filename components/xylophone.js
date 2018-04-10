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
    let barGroup = document.createElement('a-entity');
    barGroup.setAttribute('position', this.data.position);

    for (let i = 0, iMax = 8; i < iMax; i += 1) {
      let bar = document.createElement('a-box');
      let positionX = i * 0.055;
      let depth = 0.2 - (i * 0.01);

      bar.setAttribute('color', colors[i]);
      bar.setAttribute('shadow', 'cast: true; receive: false');
      bar.setAttribute('depth', depth);
      bar.setAttribute('width', 0.05);
      bar.setAttribute('height', 0.01);
      bar.setAttribute('position', positionX + ' 0 0' );
      barGroup.append(bar);
    }

    this.el.appendChild(barGroup);
  }
});
