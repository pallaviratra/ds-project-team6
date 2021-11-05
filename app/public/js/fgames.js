const Assign = {
  data() {
    return {
      ref_assignment: [],
    }
  },
  computed: {},
  methods: {


        fetchAssignData() {
            console.log("A");
            fetch('api/assign/index.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                console.log("C");
                this.ref_assignment = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            console.log("B");
        },
  },
  created() {
    this.fetchAssignData();
  }

}

Vue.createApp(Assign).mount('#assignApp');