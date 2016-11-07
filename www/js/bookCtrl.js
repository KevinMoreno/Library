angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'Roverandom', year: '1998', author: 'J. R. R. Tolkien', isbn: '843992688X', editorial: 'HarperCollins', cover: 'https://lamilanabonita.files.wordpress.com/2013/10/220px-roverandom.jpg' }, 
      { title: 'Silmarillion ', year: '1977', author: 'J. R. R. Tolkien', isbn: '0936388110', editorial: 'George Allen & Unwin', cover: "http://www-images.theonering.org/torwp/wp-content/uploads/2013/12/SilmarillionBook_LR.jpg" },       
      { title: 'The Hobbit, or There and Back Again', year: '1937',  author: 'J. R. R. Tolkien', isbn: '0844273619', editorial: 'George Allen & Unwin', cover: "https://images-na.ssl-images-amazon.com/images/I/61aqO0sPF%2BL._SX329_BO1,204,203,200_.jpg" },       
      { title: 'The Lord of the Rings', year: '1954', author: 'J. R. R. Tolkien', isbn: '8437624045', editorial: 'George Allen & Unwin', cover: "http://ecx.images-amazon.com/images/I/516GyHY9p6L.jpg" }     
      ];  