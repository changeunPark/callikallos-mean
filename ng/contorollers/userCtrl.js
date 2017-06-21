angular.module('userControllers',['userServices'])
.controller('regCtrl', function ( $http, $location, $timeout,User, Auth ) {
    var app = this;

    this.regUser = function(regData, valid, confirmed){
      app.errorMsg = false;
      app.disabled = true;

      if(valid && confirmed){
        User.create(app.regData).then(function(data){
          if(data.data.success){
            app.disabled = true;
            app.successMsg = data.data.message;
            $timeout(function(){
              $location.path('/');
            },2000);
          }else {
            app.disabled = false;
            app.errorMsg = data.data.message;
          }
        });

      } else {
           app.disabled = false; // If error occurs, remove disable lock from form
           app.loading = false; // Stop bootstrap loading icon
           app.errorMsg = 'Please ensure form is filled our properly'; // Display error if valid returns false
      }

    };

});

// if(valid){
//   var permission = 'user';
//   var is_enrolled = '0';
// // 작가로 등록했을 경우
//   if($scope.isEnrolled === true){
//     permission = 'moderator';
//     is_enrolled = '1';
//     UserSvc.register(username, email, password, permission, is_enrolled)
//     .then(function (user) {
//       if(user){
//         $scope.$emit('login', user);
// // 작가 등록하기
//         UserSvc.created();
//         $state.go('app.profiles');
//       }
//       else {
//         $scope.regStatus = true;
//         $scope.regMessage = $rootScope.message;
//       }
//     });
//   }
// // 작가로 등록하지 않았을 경우
//   else {
//     permission = 'user';
//     is_enrolled = '0';
//     UserSvc.register(username, email, password, permission, is_enrolled)
//     .then(function (user) {
//       if(user){
//         $scope.$emit('login', user);
//         $state.go('app');
//       }
//       else {
//         $scope.regStatus = true;
//         $scope.regMessage = $rootScope.message;
//       }
//     });
//   }
// }
// else{
//   $scope.regStatus = true;
//   $scope.regMessage = "사용자의 정보를 입력하여주세요";
// }
// };