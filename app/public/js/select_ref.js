
const Refs = {
  data() {
    return {
      refs: [],
      games: [],
      assignments: [],
      assignedGames: [],
      // ref_assignment: [],
      refForm: {},
      gameForm: {},
      assignForm: {},
      selectedRef: null,
      selectedGame: null,
      selectedAssign: null,
      selectedRefView: null,
      selectedRefAdd: null,
      selectedGameAdd: null,
      selectedGameAssign: null,
      fgames: [],
      pgames: [],
      games: []
    }
  },
  computed: {},
  methods: {
    // selectAssign(r) {
    //       if (r == this.selectedRef) {
    //           return;
    //       }
    //       this.selectedRef = r;
    //       this.refs = [];
    //       this.fetchAssignDetails(this.selectedRef);
    //   },

    fetchRefData() {
          console.log("Loading refs")
          fetch('api/refs/index.php')
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.refs = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
    },

    fetchAssignDetails(r) {
      this.selectedGameAssign=r;
      console.log("A");
      fetch('api/assign/?game=' + r.game_id)
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          console.log("C");
          this.assignedGames = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
    },

    fetchGameData() {
      console.log("Loading games")
      fetch('api/games/index.php')
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          this.games = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
    },

    fetchFutGameDetails(r) {
      this.selectedRefView = r;
      console.log("A");
      fetch('/api/games/fgames.php/?ref=' + r.ref_id)
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          console.log("C");
          this.fgames = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
      // this.selectedRefView = null;
    },

    fetchPastGameDetails(r) {
      this.selectedRefView = r;
      console.log("A");
      fetch('api/games/pgames.php/?ref=' + r.ref_id)
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          console.log("C");
          this.pgames = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
      // this.selectedRefView = null;
    },

    openAddRef() {
      this.selectedRefAdd = {};
      // console.log();
    },

    postNewRef() {
      fetch('/api/refs/create.php', {
        method: 'POST',
        body: JSON.stringify(this.refForm),
        headers: {
          "Content-type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        this.refs = json;
        this.refForm = {};
      });
      this.selectedRefAdd = null;
    },

    openAddGame() {
      this.selectedGameAdd = {};
    },

    postNewGame() {
      fetch('/api/games/create.php', {
        method: 'POST',
        body: JSON.stringify(this.gameForm),
        headers: {
          "Content-type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        this.games = json;
        this.gameForm = {};
      });
    },

    postEditRef(evt) {
      console.log("Updating!", this.refForm);

      fetch('/api/refs/update.php', {
          method:'POST',
          body: JSON.stringify(this.refForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.refs = json;

          // reset the form
          this.resetRefForm();
        });
    },

    postDeleteRef(r) {
      if (!confirm("Are you sure you want to delete this referee information?")) {
        return;
      }
      console.log("Delete!", r);
      fetch('/api/refs/delete.php', {
          method:'POST',
          body: JSON.stringify(r),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.refs = json;
          // reset the form
          this.resetRefForm();
          // this.$router.push('/referees.html');
        });
    },

    postEditGame(evt) {
      console.log("Updating Game!", this.gameForm);

      fetch('/api/games/update.php', {
          method:'POST',
          body: JSON.stringify(this.gameForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.games = json;

          // reset the form
          this.resetGameForm();
        });
    },

    postDeleteGame(g) {
      if (!confirm("Are you sure you want to delete this Game?")) {
        return;
      }
      console.log("Delete!", g);
      fetch('/api/games/delete.php', {
          method:'POST',
          body: JSON.stringify(g),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.games = json;
          // reset the form
          this.resetGameForm();
          // this.$router.push('/referees.html');
        });
    },

    postNewAssign() {
      this.assignForm.game_assign_id = this.selectedGameAssign.game_id;
      console.log(this.assignForm)
      fetch('/api/assign/create.php', {
        method: 'POST',
        body: JSON.stringify(this.assignForm),
        headers: {
          "Content-type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        this.assignedGames = json;
        this.assignForm = {};
      });
    },

    postEditAssign(evt) {
      this.assignForm.game_assign_id = this.selectedAssign.game_assign_id;
      console.log("Updating Assignment!", this.assignForm);

      fetch('/api/assign/update.php', {
          method:'POST',
          body: JSON.stringify(this.assignForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.assignedGames = json;

          // reset the form
          this.resetAssignForm();
        });
    },

    postDeleteAssign(a) {
      if (!confirm("Are you sure you want to delete this Assigned Referee?")) {
        return;
      }
      console.log("Delete!", a);
      fetch('/api/assign/delete.php', {
          method:'POST',
          body: JSON.stringify(a),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.assignedGames = json;
          // reset the form
          this.resetAssignForm();
        });
    },
    postAssign(evt) {
      if (this.selectedAssign === null) {
        this.postNewAssign(evt);
      } else {
        this.postEditAssign(evt);
      }
    },

    selectRefToEdit(r) {
        this.selectedRef = r;
        this.refForm = Object.assign({}, this.selectedRef);
    },

    selectGameToEdit(g) {
      this.selectedGame = g;
      this.gameForm = Object.assign({}, this.selectedGame);
    },

    selectAssignToEdit(a) {
      this.selectedAssign = a;
      this.assignForm = Object.assign({}, this.selectedAssign);
    },

    resetRefForm() {
        this.selectedRef = null;
        this.refForm = {};
    },

    resetGameForm() {
      this.selectedGame = null;
      this.selectedGameAdd = null;
      this.gameForm = {};
    },

    resetAssignForm() {
      this.selectedAssign = null;
      // this.selectedAssignAdd = null;
      this.assignForm = {};
    },

  },
  created() {
  this.fetchRefData();
  this.fetchGameData();
  }
}

Vue.createApp(Refs).mount('#refsApp');