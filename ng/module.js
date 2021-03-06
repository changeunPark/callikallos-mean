angular.module('app',[
    'ui.router',
    'ui.bootstrap',
    'userControllers',
    'mainControllers',
    'emailControllers',
    'artistControllers',
    'gallertControllers',
    'commentControllers',
    'boardControllers',
    'managementControllers',
    'uiCropper'
]).config(function($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptors');
});
