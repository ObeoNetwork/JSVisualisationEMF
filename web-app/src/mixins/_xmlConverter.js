export default {
  
  xmlToBubbleData: function(ecoreEntities, xmlData) {

    const dom = document.createElement('div');
    dom.innerHTML = xmlData;

    const xmlThree = dom.lastElementChild;
    const nbEntities = ecoreEntities.length;
    
    for (let i = 0; i < nbEntities; i++) {
      const xmlNodesOfThisEntity = xmlThree.querySelectorAll(ecoreEntities[i].label);
      const nbNodes = xmlNodesOfThisEntity.length;
      for (let j = 0; j < nbNodes; j++) {
        let label = "";
        for (let ecoreEntitieAttribute of ecoreEntities[i].attrs) {
          const nodeAttribute = xmlNodesOfThisEntity[j].attributes[ecoreEntitieAttribute];
          label += " " + (nodeAttribute ? nodeAttribute.value : '');
        }
        let item = {
          label: label,
          x: i * 10,
          y: j * 20,
          r: 80 - (i * 10)
        };
        ecoreEntities[i].data.push(item);
      }
    }

    return ecoreEntities;
  }
}
