
var app = angular.module('admin', [])

app.controller('datosController', function($scope, $http){


  $scope.datos_personales= function () {

    if ($scope.edad<1 || $scope.edad>100) {
      $("#error").empty();
      $("#error").append('<p style="color:red">Su edad esta fuera de rango, porfavor vuelva a ingresar su edad</p>')
    }else{
      window.location.href = 'datos.html';
    }
  }

  $scope.Reiniciar = function () {

    navigator.notification.confirm(
      '¿ Está seguro ? Al reiniciar se perderan los datos que proporcionó al principio de la aplicación',
      alertDismised,
      'Alerta',
      ['Aceptar','Cancelar']
    );
  }

  $scope.Cerrar = function() {
    navigator.app.exitApp();
  }

  //funcion collback de la alerta
  function alertDismised(botton) {
    if (botton==1) {
      localStorage.clear();
      window.location.href = 'index.html';
      //location.reload();
      //alert("Preciono Aceptar");
    }
    //console.log("You selected button number " + results.buttonIndex + " and entered " + results.input1);
  }

});
