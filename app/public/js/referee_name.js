const Referees = {
    data() {
      return {
        "referees":[],
        }
    },

    computed:{},
   
    methods: {
        fetchRefData() {
            console.log("A");
            fetch('api/refs/refs.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.referees = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            console.log("B");
        },
    

      //   postNewRefs(evt) {  
      //       console.log("Create:", this.refForm);

      //       fetch('api/refs/create_ref.php', {
      //           method:'POST',
      //           body: JSON.stringify(this.refForm),
      //           headers: {
      //             "Content-Type": "application/json; charset=utf-8"
      //           }
      //         })
      //         .then( response => response.json() )
      //         .then( json => {
      //           console.log("Returned from post:", json);
      //           // TODO: test a result was returned!
      //           this.refs = json;
      //           this.refForm ={};
      //         });
      // }

      //   postDeleteBook(evt) {  
      //       if (!confirm("Are you sure you want to delete the book"))        
                

      //       fetch('api/books/delete.php', {
      //           method:'POST',
      //           body: JSON.stringify(this.bookForm),
      //           headers: {
      //             "Content-Type": "application/json; charset=utf-8"
      //           }
      //         })
      //         .then( response => response.json() )
      //         .then( json => {
      //           console.log("Returned from post:", json);
      //           // TODO: test a result was returned!
      //           this.books = json;
      //           this.bookForm ={};
      //     });
      // }
      
      
    },


    


        
    created() {
        this.fetchRefData();
    } //end created
} // end Offer config
  
Vue.createApp(Referees).mount('#refsApp');