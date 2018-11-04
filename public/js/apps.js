/**
 * Created by user on 23/10/2016.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $http.defaults.headers.post['dataType'] = 'json'
});



myapp.controller('indexctrl', function($scope, $http,$window) {


    $scope.getSearchResult = function() {

        console.log($scope.players);
        console.log($scope.time);

        var x=console.log(document.getElementById("interest").value);


        $http.get('http://127.0.0.1:5000/getHackData?keywords='+$scope.players+'!!!'+$scope.time+'@@@'+document.getElementById("interest").value).then(function(d)
            {
                console.log("Len is already present"+d.data.length);
                console.log("val already present"+JSON.stringify({d: d}));
                if(d.data.length!=0) {

                    var document=[];
                    for (i=0;i<d.data.length;i++)
                    {
                        $http.get('http://127.0.0.1:5000/kg?query='+d.data[i].game_id).success(function (data) {
                            try {

                                console.log(data);
                                $scope.searchDescription = data.boardgames.boardgame.description._text;
                                $scope.searchImage = data.boardgames.boardgame.image._text;
                                console.log($scope.searchDescription);
                            }
                            catch (err) {
                            }
                        })
                        document.push(new Array($scope.searchDescription));
                    }
                    console.log(document);


                    // console.log("it is already present" + d.data[0]);

                }

            },function(err)
            {
                console.log(err);
            }
        )


            }

        })



