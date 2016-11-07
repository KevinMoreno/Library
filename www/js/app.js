angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/ibiblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/author.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/curriculum.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/book.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'Roverandom', year: '1998', author: 'J. R. R. Tolkien', isbn: '843992688X', editorial: 'HarperCollins', cover: 'https://lamilanabonita.files.wordpress.com/2013/10/220px-roverandom.jpg' }, 
      { title: 'Silmarillion ', year: '1977', author: 'J. R. R. Tolkien', isbn: '0936388110', editorial: 'George Allen & Unwin', cover: "http://www-images.theonering.org/torwp/wp-content/uploads/2013/12/SilmarillionBook_LR.jpg" },       
      { title: 'The Hobbit, or There and Back Again', year: '1937',  author: 'J. R. R. Tolkien', isbn: '0844273619', editorial: 'George Allen & Unwin', cover: "https://images-na.ssl-images-amazon.com/images/I/61aqO0sPF%2BL._SX329_BO1,204,203,200_.jpg" },       
      { title: 'The Lord of the Rings', year: '1954', author: 'J. R. R. Tolkien', isbn: '8437624045', editorial: 'George Allen & Unwin', cover: "http://ecx.images-amazon.com/images/I/516GyHY9p6L.jpg" }     
      ];       
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});

