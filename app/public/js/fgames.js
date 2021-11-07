const Assign = {
  data() {
    return {
      ref_assignment: [],
      game_details: [],
      selectedAssign: null,

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



   selectAssign(r) {
          if (r == this.selectedAssign) {
              return;
          }
          this.selectedAssign = r;
          this.game_details = [];
          this.fetchOfferData(this.selectedStudent);
      },

  },
  created() {
    this.fetchAssignData();
  }

}

Vue.createApp(Assign).mount('#assignApp');