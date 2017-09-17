var app = angular.module("Demo", ["ngRoute"])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
        
            .when("/home",{
                templateUrl: "partials/home.html",
                controller: "homeController"
            })
            .when("/courses",{
                templateUrl: "partials/courses.html",
                controller: "coursesController"
            })
            .when("/students",{
                templateUrl: "partials/students.html",
                controller: "studentsController"
            })
            .when("/students/:id",{
                templateUrl: "partials/student.html",
                controller: "studentController"
            })        
            .otherwise({
                redirectTo:"/home"
            })
        $locationProvider.html5Mode(true);
    })
    .controller("homeController", function($scope, ){
        $scope.message = "Home Page";
    })
    .controller("coursesController", function($scope, ){
        $scope.courses = ["C#","HTML","CSS","PHP","Web design","SQL server","ASP.net"];
        
    })
    .controller("studentsController", function($scope, $http){
        $http.get("ajax/allStudents.php")
            .then(function(response){
            $scope.students = response.data.records;
            
        })
    })
    .controller("studentController", function($scope,$log, $http, $routeParams){
       
        $http({            
            url: "ajax/studentDetails.php",
            data: { id : $routeParams.id},
            //data: { request_type:2},
            method: "post"
        }).then(function(response){
            $scope.student = response.data;
            console.log("controller student");
            $log.info($scope.student);
        });
        
        
        console.log($routeParams.id);
        
    })
