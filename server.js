var http=require('http'),fs=require('fs'),path=require('path'),url=require('url');
var PORT=8765;
var MIME={'html':'text/html;charset=utf-8','js':'application/javascript','css':'text/css','png':'image/png','jpg':'image/jpeg','svg':'image/svg+xml','ico':'image/x-icon'};
http.createServer(function(req,res){
  var fp=path.join(__dirname,url.parse(req.url).pathname==='/'?'roulette.html':url.parse(req.url).pathname.split('?')[0]);
  fs.readFile(fp,function(err,data){
    if(err){res.writeHead(404);res.end('Not found')}
    else{var ext=path.extname(fp).slice(1);res.writeHead(200,{'Content-Type':MIME[ext]||'text/plain'});res.end(data)}
  });
}).listen(PORT,'0.0.0.0',function(){
  var os=require('os'),ifs=os.networkInterfaces();
  console.log('\n  ✅  旅游大转盘已启动！\n');
  console.log('  本机访问: http://localhost:'+PORT);
  Object.keys(ifs).forEach(function(name){
    ifs[name].forEach(function(iface){if(iface.family==='IPv4'&&!iface.internal)console.log('  手机访问: http://'+iface.address+':'+PORT)});
  });
  console.log('\n  确保手机和电脑在同一 WiFi 网络下\n');
});
