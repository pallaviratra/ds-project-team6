
const Games = {
    data() {
      return {
        games: []
      }
    },
    computed: {},
    methods: {
        fetchGameData() {
              console.log("Loading games")
              fetch('api/games/index.php')
              .then( response => response.json() )
              .then( (responseJson) => {
                  console.log(responseJson);
                  this.refs = responseJson;
              })
              .catch( (err) => {
                  console.error(err);
              })
          },
        created() {
            this.fetchGameData();
        }
    }
}
  Vue.createApp(Games).mount('#gamesApp');