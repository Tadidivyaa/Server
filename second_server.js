var http=require('http');
var imp =require('./second_module');
http.createServer(function(req,res){
    const msg=imp.example();
    console.log(msg);
    res.write(msg);
    res.end();

    
}).listen(1005);