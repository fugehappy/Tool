//��д����ļ�
var express = require('express');//����ģ��
var port = process.env.PORT || 3000;//����

var app = express();//����WEB������,ʵ����

//express jade moment mongoose
app.set('views','./views');//��ͼ
app.set('view engine','jade');//ģ������
app.listen(port);//�����˿�

console.log('�������˿ں�'+port);

//·��
app.get('/',function(req,res){
	res.render('index',{
		title:'index'
	})
})

