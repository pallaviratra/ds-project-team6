
// const Books = {
//     data() {
//       return {
//         "books":[],
//         selectedBook: null,
//         bookForm:{}
//         }
//     },

//     computed:{},
   
//     methods: {
//         fetchBookData() {
//             console.log("A");
//             fetch('api/books/')
//             .then( response => response.json() )
//             .then( (responseJson) => {
//                 console.log(responseJson);
//                 console.log("C");
//                 this.books = responseJson;
//             })
//             .catch( (err) => {
//                 console.error(err);
//             })
//             console.log("B");
//         },


//         postBook(evt) {
//             console.log ("Test:", this.selectedBook);
//             if (this.selectedBook === null) {
//               this.postNewBook(evt);
//           } else {
//               this.postEditBook(evt);
//           }
//         },

    

//         postNewBook(evt) {  
//             console.log("Create:", this.bookForm);

//             fetch('api/books/create_book.php', {
//                 method:'POST',
//                 body: JSON.stringify(this.bookForm),
//                 headers: {
//                   "Content-Type": "application/json; charset=utf-8"
//                 }
//               })
//               .then( response => response.json() )
//               .then( json => {
//                 console.log("Returned from post:", json);
//                 // TODO: test a result was returned!
//                 this.books = json;
//                 this.bookForm ={};
//               });
//       },

//         postEditBook(evt) {
//         // this.offerForm.studentId = this.selectedStudent.id;
//         // this.offerForm.id = this.selectedOffer.id;
//         this.bookForm.id = this.selectedBook.id
//         console.log("Updating!", this.bookForm);

//         fetch('api/books/update.php', {
//             method:'POST',
//             body: JSON.stringify(this.bookForm),
//             headers: {
//               "Content-Type": "application/json; charset=utf-8"
//             }
//           })
//           .then( response => response.json() )
//           .then( json => {
//             console.log("Returned from post:", json);
//             // TODO: test a result was returned!
//             this.books = json;

//             // reset the form
//             this.resetBookForm();
//           });
//       },



//        postDeleteBook(book) {
//         if (!confirm("Are you sure you want to delete the book?"))
//           return;
//         }
//         // console.log("Delete!", book);

//         fetch('api/books/delete.php', {
//             method:'POST',
//             body: JSON.stringify(book),
//             headers: {
//               "Content-Type": "application/json; charset=utf-8"
//             }
//           })
//           .then( response => response.json() )
//           .then( json => {
//             console.log("Returned from post:", json);
//             // TODO: test a result was returned!
//             this.books = json;

//             // reset the form
//             this.resetBookForm();
//           });
//       },

//           selectBookToEdit(book) {
//           this.selectedBook = book;
//           this.bookForm = Object.assign({}, this.selectedBook);
//       },
//           resetBookForm() {
//           this.selectedBook = null;
//           this.bookForm = {};
//       }
      
      
//     },
        
//     created() {
//         this.fetchBookData();
//     } //end created
//  // end Offer config
  
// Vue.createApp(Books).mount('#booksApp');


const Books = {
  data() {
    return {
      books: [],
      bookForm: {},
      selectedBook: null
    }
  },
  computed: {},
  methods: {


        fetchBookData() {
            console.log("A");
            fetch('api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                console.log("C");
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            console.log("B");
        },


      postBook(evt) {
        if (this.selectedBook === null) {
            this.postNewBook(evt);
        } else {
            this.postEditBook(evt);
        }
      },



      postNewBook(evt) {
        // this.offerForm.studentId = this.selectedStudent.id;

        // console.log("Creating!", this.offerForm);

        fetch('api/books/create_book.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;

            // reset the form
            this.resetBookForm();
          })
          .catch( err => {
            alert("Something went horribly wrong!");
          });
      },
      postEditBook(evt) {
        // this.offerForm.studentId = this.selectedStudent.id;
        // this.offerForm.id = this.selectedOffer.id;

        console.log("Updating!", this.bookForm);

        fetch('api/books/update.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;

            // reset the form
            this.resetBookForm();
          });
      },
      postDeleteBook(o) {
        if (!confirm("Are you sure you want to delete the offer from ")) {
          return;
        }
        console.log("Delete!", o);

        fetch('api/books/delete.php', {
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
            this.books = json;

            // reset the form
            this.resetBookForm();
          });
      },
      selectBookToEdit(o) {
          this.selectedBook = o;
          this.bookForm = Object.assign({}, this.selectedBook);
      },
      resetBookForm() {
          this.selectedBook = null;
          this.bookForm = {};
      }
  },
  created() {
  this.fetchBookData();
  }

}

Vue.createApp(Books).mount('#booksApp');