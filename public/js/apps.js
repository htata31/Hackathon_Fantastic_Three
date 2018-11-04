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
                        document.push(new Array(d.data[i].game_id+'!!!'+d.data[i].names));
                    }
                    console.log(document);


                    $scope.fullDocument =[];
                    for(var x=0;x<6;x++) {
                        var val= document[x];
                        console.log('Data is '+document[x]);
                        $scope.fullDocument.push(val);
                    }


                    // console.log("it is already present" + d.data[0]);

                }

            },function(err)
            {
                console.log(err);
            }
        )


            }

        })



