export default {
  
  xmlToBubbleData: function(xmlData) {

    let entities = [
      { label: 'parents', attrs: ['firstName', 'lastName'], backgroundColor: '#f9eee6', data: [] }, 
      { label: 'sons', attrs: ['firstName', 'lastName'], backgroundColor: '#b0e0e6', data: [] }, 
      { label: 'daughters', attrs: ['firstName', 'lastName'], backgroundColor: '#ffe5fa', data: [] }, 
      { label: 'pets', attrs: ['name', 'breed'], backgroundColor: '#ddf7be', data: [] }
    ];

    const dom = document.createElement('div');
    dom.innerHTML = xmlData;

    const xmlThree = dom.lastElementChild;
    const nbEntities = entities.length;
    for (let i = 0; i < nbEntities; i++) {
      const xmlNodesOfThisEntity = xmlThree.querySelectorAll(entities[i].label);
      const nbNodes = xmlNodesOfThisEntity.length;
      for (let j = 0; j < nbNodes; j++) {
        let label = "";
        for (let attr of entities[i].attrs) {
          label += " " + xmlNodesOfThisEntity[j].attributes[attr].value;
        }
        let item = {
          label: label,
          x: i * 10,
          y: j * 20,
          r: 80 - (i * 10)
        };
        entities[i].data.push(item);
      }
    }

    return entities;
  }
}
