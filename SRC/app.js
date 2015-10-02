var app = angular.module('app', [])
app.directive('xinput', function () {

    return {
        replace:true,
        template:'<input />',
        compile: function (iElemen, iAttrs) {
        debugger;

            //iAttrs['ngRequired'] = true;
            //iAttrs['ngMinlength'] = "3";
            //iAttrs['ngMaxlength'] = "10";
            //iAttrs['type'] = "text";

            var ele = $(iElemen);
            ele.attr('ng-required',true);
            ele.attr('ng-minlength',"3");
            ele.attr('ng-maxlength',"10");
            ele.attr('type','text');

            return this.aLink;
        },
        aLink: function (scope, iElement, iAttrs, controller) {
            debugger;
        }
    }

});

app.directive('dcomp', function () {

    return {

        compile: function (iElemen, iAttrs) {



            return this.aLink;
        },
        aLink: function (scope, iElement, iAttrs, controller) {

        }
    }

});


app.controller('simpleCnt', function ($scope) {
    $scope.msg = "hello";
    $scope.save = function () {
        alert('saved');
    }
});