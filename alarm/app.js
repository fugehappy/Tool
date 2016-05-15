//编写入口文件
var express = require('express');//加载模块
var port = process.env.PORT || 3000;//设置

var app = express();//启动WEB服务器,实例化

//express jade moment mongoose
app.set('views','./views');//视图
app.set('view engine','jade');//模板引擎
app.listen(port);//监听端口

console.log('服务器端口号'+port);

//路由
app.get('/',function(req,res){
	res.render('index',{
		title:'index'
	})
})

