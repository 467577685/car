/**
 * Created by 123 on 2017/10/19.
 */
app.controller("homeController",["$scope","homeServer","$timeout",function($scope,homeServer,$timeout){
    //var myScroller = new IScroll(".wrapper",{});
    $scope.num = 4;
    homeServer.getData().then(function(result){
        $scope.data = result.data.slice(0,$scope.num);
        $scope.add = function(){
            $scope.num += 4;
            $scope.data = result.data.slice(0,$scope.num);
        };

    });
    new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        loop: true,
        autoplay: 2000
    });
    new IScroll(".move-dl", {
        scrollX: true
    });





}]);