
export default {

  name: 'representation-selector',

  data() {
    return {
      selectedRepresentation: 0
    }
  },

  created() {

  },

  mounted() {
    
  },

  methods: {
    switchRepresentation(i) {
      this.selectedRepresentation = i;
    },
    
    openConfigPage() {
      const configPages = [
        '/mapping-bubble',
        '/mapping-bar',
        '/representation-graph'
      ];
      this.$router.push(configPages[this.selectedRepresentation]);
    }
  }
}
