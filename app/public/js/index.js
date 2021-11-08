
const Refs = {
  data() {
    return {
      refs: [],
      games: [],
      assignedGames: [],
      assignedRefGames: [],
      assignedRefGamesRep: [],
      fgames: [],
      pgames: [],
      futUnass: [],
      refForm: {},
      gameForm: {},
      assignForm: {},
      refAssignForm: {},
      dateRepForm: {},
      selectedRef: null,
      selectedGame: null,
      selectedAssign: null,
      selectedRefView: null,
      selectedRefAdd: null,
      selectedGameAdd: null,
      selectedGameAssign: null,
      selectedRefAssign: null,
      dateRep: null,
      futDateRep: null,
      viewDateRep: null
    }
  },
  computed: {},
  methods: {
    fetchRefData() {
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
      this.selectedGame = null;
      this.selectedGameAdd = null;
      this.gameForm = {};
      this.selectedGameAssign = r;
      fetch('api/assign/?game=' + r.game_id)
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          this.assignedGames = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
    },

    fetchGameData() {
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
      this.selectedRefAdd = null;
      this.selectedRef = null;
      this.selectedRefView = r;
      fetch('/api/games/fgames.php/?ref=' + r.ref_id)
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          this.fgames = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
    },

    fetchPastGameDetails(r) {
      this.selectedRefAdd = null;
      this.selectedRef = null;
      this.selectedRefView = r;
      fetch('api/games/pgames.php/?ref=' + r.ref_id)
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          this.pgames = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
    },

    openAddRef() {
      this.selectedRef = null;
      this.selectedRefView = null;
      this.selectedRefAdd = {};
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
      // reset the form
      this.resetRefForm();
      });
      this.selectedRefAdd = null;
    },

    openAddGame() {
      this.selectedGameAssign = null;
      this.gameForm = {};
      this.selectedGame = null;
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
      // reset the form
      this.resetGameForm();
      });
      this.selectedGameAdd = null;
    },

    postEditRef(evt) {
      this.selectedRefAdd = null;
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
        this.selectedRef = null;
    },

    postDeleteRef(r) {
      if (!confirm("Are you sure you want to delete this referee information?")) {
        return;
      }
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
        });
    },

    postEditGame(evt) {
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
        this.selectedGame = null;
    },

    postDeleteGame(g) {
      if (!confirm("Are you sure you want to delete this Game?")) {
        return;
      }
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
        });
    },

    postNewAssign() {
      this.assignForm.game_assign_id = this.selectedGameAssign.game_id;
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

    fetchRefAssignDetails() {
      this.selectedRefAssign = this.refAssignForm;
      fetch('/api/assign/fetchRef.php/?ref=' + this.refAssignForm.ref_assign_id)
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          this.assignedRefGames = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      })
    },

    postDecline(a) {
      if (!confirm("Are you sure you want to Decline this Assignment?")) {
        return;
      }
      fetch('/api/assign/delRefAssign.php', {
          method:'POST',
          body: JSON.stringify(a),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.assignedRefGames = json;
          // reset the form
          this.resetAssignForm();
        });
    },

    openDateRep() {
      this.futDateRep = null;
      this.dateRep = {};
    },

    fetchDateRep() {
      this.viewDateRep = {};
      this.dateRep = this.dateRepForm;
      fetch('/api/games/dateRep.php/?ref_assign_id=' + this.dateRepForm.ref_assign_id + '&startDate=' + this.dateRepForm.startDate + '&endDate=' + this.dateRepForm.endDate)
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.assignedRefGamesRep = json;
      })
      .catch( (err) => {
          console.error(err);
      })
    },

    fetchFutureUnassData() {
      this.viewDateRep = null;
      this.dateRep = null;
      this.futDateRep = {};
      this.dateRepForm = {};
      fetch('api/games/futDateRep.php')
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          this.futUnass = responseJson;
      })
      .catch( (err) => {
          console.error(err);
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
        this.selectedRefAdd = null;
        this.selectedRefView = null;
        this.selectedRef = r;
        this.refForm = Object.assign({}, this.selectedRef);
    },

    selectGameToEdit(g) {
      this.selectedGameAssign = null;
      this.selectedGameAdd = null;
      this.selectedGame = g;
      this.gameForm = Object.assign({}, this.selectedGame);
    },

    selectAssignToEdit(a) {
      this.selectedAssign = a;
      this.assignForm = Object.assign({}, this.selectedAssign);
    },

    resetRefForm() {
        this.selectedRef = null;
        this.selectedRefAdd = null;
        this.refForm = {};
    },

    resetGameForm() {
      this.selectedGame = null;
      this.selectedGameAdd = null;
      this.gameForm = {};
    },

    resetAssignForm() {
      this.selectedAssign = null;
      this.assignForm = {};
    }
  },
  created() {
  this.fetchRefData();
  this.fetchGameData();
  }
}

Vue.createApp(Refs).mount('#refsApp');