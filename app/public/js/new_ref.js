
const Refs = {
  data() {
    return {
      refs: [],
      refForm: {},
      selectedRef: null
    }
  },
  computed: {},
  methods: {


        fetchRefData() {
            console.log("A");
            fetch('api/refs/refs.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                console.log("C");
                this.refs = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            console.log("B");
        },


      // postRef(evt) {
      //   if (this.selectedRef === null) {
      //       this.postNewRef(evt);
      //   } else {
      //       this.postEditRef(evt);
      //   }
      // },



      postNewRef(evt) {
        // this.offerForm.studentId = this.selectedStudent.id;

        // console.log("Creating!", this.offerForm);

        fetch('api/refs/create_ref.php', {
            method:'POST',
            body: JSON.stringify(this.refForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.refs = json
            // reset the form
            this.resetRefForm();
          })
          .catch( err => {
            alert("Something went horribly wrong!");
          });
      },
      
      postDeleteRef(o) {
        if (!confirm("Are you sure you want to delete the offer from ")) {
          return;
        }
        console.log("Delete!", o);

        fetch('api/refs/delete.php', {
            method:'POST',
            body: JSON.stringify(o),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.refs = json;

            // reset the form
            this.resetRefForm();
          });
      },
      // selectRefToEdit(o) {
      //     this.selectedRef = o;
      //     this.refForm = Object.assign({}, this.selectedRef);
      // },
      resetRefForm() {
          this.selectedRef = null;
          this.refForm = {};
      }
  },
  created() {
  this.fetchRefData();
  }

}

Vue.createApp(Refs).mount('#refsApp');