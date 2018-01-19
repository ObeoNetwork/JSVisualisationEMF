export default {
  
  xmlToBubbleData: function(xmlData) {

    let entities = [
      { label: 'parents', key: 'firstName', backgroundColor: '#f9eee6', data: [] }, 
      { label: 'sons', key: 'firstName', backgroundColor: '#b0e0e6', data: [] }, 
      { label: 'daughters', key: 'firstName', backgroundColor: '#ffe5fa', data: [] }, 
      { label: 'pets', key: 'name', backgroundColor: '#ddf7be', data: [] }
    ];

    const dom = document.createElement('div');
    dom.innerHTML = xmlData;

    const xmlThree = dom.lastElementChild;
    const nbEntities = entities.length;
    for (let i = 0; i < nbEntities; i++) {
      const xmlNodesOfThisEntity = xmlThree.querySelectorAll(entities[i].label);
      const nbNodes = xmlNodesOfThisEntity.length;
      for (let j = 0; j < nbNodes; j++) {
        let item = {
          x: i * 10,
          y: j * 20,
          r: 80 - (i * 10),
          title: xmlNodesOfThisEntity[j].attributes[entities[i].key].value
        };
        entities[i].data.push(item);
      }
    }

    return entities;
  }
}
