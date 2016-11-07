angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: '2012 - hoy', description: 'Desarrollo de software' },      
	{ date: '2012 - Hoy', description: 'Tecnico en Informatica' },
	{ date: '2012 - Hoy', description: 'Certificacion basica en mantenimiento de equipos de computo' },      
	{ date: '2009 - Hoy', description: 'Certificacion basica en manejo de Microsoft Office' } 
]; 
})