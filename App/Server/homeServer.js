/**
 * Created by 123 on 2017/10/18.
 */
app.factory("homeServer",["ajaxServer",function(ajaxServer){
    server = {
        getData:function(){
            return ajaxServer.ajax("http://localhost:8000?data")
        }
    };
    return server;
}]);