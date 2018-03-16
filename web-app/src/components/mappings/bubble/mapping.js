function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}


export default {

  name: 'mapping-bubble',

  data() {
    return {
      metamodel: [],
      colors: [
        { name: "Black", value: "#000000"},
        { name: "Blue", value: "#0000FF"},
        { name: "Yellow", value: "#FFFF00"},
        { name: "Green", value: "#008000"},
        { name: "Gray", value: "#808080"},
      ]
    }
  },

  created() {

  },

  mounted() {
    this.metamodel = JSON.parse((localStorage.getItem('obeo-jsvemf_entities') || '[]'));
    const self = this;
    this.metamodel.forEach(function(metaM){
      const randomIndex = getRandomArbitrary(0, self.colors.length);
      console.log(randomIndex);
      metaM.backgroundColor = self.colors[randomIndex].value;
    });
  },

  methods: {
    showMetamodel(){
      console.log(this.metamodel);
    },

    saveMetamodel(){
      localStorage.setItem('obeo-jsvemf_entities', JSON.stringify(this.metamodel))
    }
  }
}
