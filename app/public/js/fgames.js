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
          if (r === this.selectedAssign) {
              return;
          }
          this.selectedAssign = r;
          this.game_details = [];
          this.fetchOfferData(this.selectedAssign);
      },


     fetchOfferData(r) {
          console.log("Fetching offer data for ", r);
          fetch('/api/games/?games=' + r.ref_id)
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.game_details = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
          .catch( (error) => {
              console.error(error);
          });
      },

  },
  created() {
    this.fetchAssignData();
  }

}

Vue.createApp(Assign).mount('#assignApp');