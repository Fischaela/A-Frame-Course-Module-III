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
    this.el.appendChild(barGroup);
  }
});
