export default {

  name: 'mapping-bubble',

  data() {
    return {
      metamodels: [],
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
    this.metamodels = JSON.parse((localStorage.getItem('obeo-jsvemf_entities') || '[]'));
    this.metamodels.forEach((metaM) => {
      const colorLength = this.colors.length;

      const backgroundIndex = this.getRandomArbitrary(0, colorLength);
      metaM.backgroundColor = metaM.backgroundColor || this.colors[backgroundIndex].value;

      const borderIndex = this.getRandomArbitrary(0, colorLength);
      metaM.borderColor = metaM.borderColor || this.colors[borderIndex].value;
    });
    this.saveMetamodel();
  },

  methods: {
    getRandomArbitrary(min, max) {
      return parseInt(Math.random() * (max - min) + min);
    },
    saveMetamodel(){
      localStorage.setItem('obeo-jsvemf_entities', JSON.stringify(this.metamodel));
    }
  }
}
