
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

    selectRef(r) {
          if (r == this.selectedRef) {
              return;
          }
          this.selectedRef = r;
          this.refs = [];
          this.fetchIndRefData(this.selectedRef);
      },

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

      fetchIndRefData(r) {
            console.log("A");
            fetch('api/refs/?ref=' + r.ref_id)
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                console.log("C");
                this.refs = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },


      postRef(evt) {
        if (this.selectedRef === null) {
            this.postNewRef(evt);
        } else {
            this.postEditRef(evt);
        }
      },



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
            this.refs = json;

            // reset the form
            this.resetRefForm();
          })
          .catch( err => {
            alert("Something went horribly wrong!");
          });
      },
      postEditRef(evt) {
        // this.offerForm.studentId = this.selectedStudent.id;
        // this.offerForm.id = this.selectedOffer.id;

        console.log("Updating!", this.refForm);

        fetch('api/refs/update.php', {
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
            this.refs = json;

            // reset the form
            this.resetRefForm();
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
      selectRefToEdit(o) {
          this.selectedRef = o;
          this.refForm = Object.assign({}, this.selectedRef);
      },
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