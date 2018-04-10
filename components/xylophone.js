AFRAME.registerComponent('xylophone', {
  schema: {
    position: {type: 'vec3'}
  },
  init: {
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
      let bar = document.createElement('a-box')
      barGroup.append(bar);
    }

    this.el.appendChild(barGroup);
  }
});
