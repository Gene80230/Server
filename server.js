var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\n如 node server.js 8888 这样')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/













  console.log('服务器说: 得到 HTTP 路径为\n' + path)
  if(path == '/'){
    response.write('Hi\n')
    response.end()
  }else if(path == '/index'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')	  
    response.write('<!DOCTYPE>\n<html>'+
    '<head><link rel="stylesheet" href="/style.css">' +
    '</head><body>' + 
    '<h1>你好 Node.js</h1>' +
    '<script src="/main.js"></script>' +
    '</body></html>')
    response.end()  
  }
  else{
    response.statusCode = 404
    response.end()
  }
  //console.log('服务器说: 查询字符串为\n' + query)
  //console.log('服务器说: 不含查询字符串的路径为\n' + pathNoQuery)










  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用阿姆斯特朗回旋加速炮打开 http://localhost:' + port)


