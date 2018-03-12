
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
  },

  methods: {
    
  }
}
