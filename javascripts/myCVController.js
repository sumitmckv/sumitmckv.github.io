	
	var cvDoc = angular.module('myGithubCV', []);
	cvDoc.controller('aboutMe',['$scope', function ($scope) {
		 var description = "Hi it's sumit ghosh and i am a software developer."+
			  "I have done several projects in JAVA, GWT. Recently i started learning web development"+ 
			  "and so far it's been a wonderful experience for me.";
		 $scope.myself =  {
			'name': 'Sumit Ghosh',
			'details': description,
			'photo': 'https://avatars1.githubusercontent.com/u/8362957?v=3&u=2966bcf519ae6fe4c9ffbe60a02a1875de949793&s=400'		
		};
	}]);
