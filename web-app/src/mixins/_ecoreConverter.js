import _ from 'lodash';

export default {

  ecoreToJsData: function (ecoreData) {

    let entities = [];
    const colors = [
      '#f9eee6',
      '#b0e0e6', 
      '#ffe5fa', 
      '#ddf7be'
    ];
    const nbColors = colors.length;

    const dom = document.createElement('div');
    dom.innerHTML = ecoreData;

    const metaModelName = dom.lastElementChild.getAttribute('name');
    const entitiesMetaData = dom.querySelectorAll('eClassifiers');
    let i = 0;
    entitiesMetaData.forEach((emd, i) => {
      const name = emd.getAttribute('name');
      const label = name.toLowerCase() + 's';
      let superType = emd.getAttribute('eSuperTypes');
      let attrsMetaData = [];
      if (superType) {
        superType = superType.split('#//')[1];
        const superClass = dom.querySelector('eClassifiers[name="' +  superType + '"]');
        attrsMetaData = superClass ? superClass.querySelectorAll('eStructuralFeatures') : [];
      } else {
        attrsMetaData = emd.querySelectorAll('eStructuralFeatures');
      }
      let attrs = [];
      for (let a of attrsMetaData) {
        const attrName = a.getAttribute('name');
        if (!_.find(attrs, (e) => e == attrName)) attrs.push(attrName);
      }
      if (!_.find(entities, (e) => e.name == name)) {
        entities.push({
          name: name,
          label: label, 
          attrs: attrs, 
          backgroundColor: colors[i % nbColors],
          data: [],
          superClass: superType ? superType : null
        });
      }
    });
    return { name: metaModelName, entities: entities };
  }
}
