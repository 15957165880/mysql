var mysql = require('mysql'); //调用MySQL模块
var connection = mysql.createConnection({
    host: 'localhost', //主机
    user: 'root', //MySQL认证用户名
    password: '19870425',
    port: '3306', //端口号
    database :'mydata',

});
connection.connect(function(err){
	if(err){
		console.log("error : "+err)
		return;
	}
	console.log("mysql service is beging!")
}); //开启


// connection.query('SELECT * FROM shoppingData', function(err, result) {
//     if (err) {
//         console.log('err :' + err);
//         return;
//     }
//     console.log(result);
// }); //查询


// var newLine={
// 	add:'INSERT INTO shoppingData(price,name,description,category,id) VALUES(?,?,?,?,?)',
// 	val:[123,"name1","descriptionfgfgh1","category1",160]
// }
// connection.query(newLine.add,newLine.val, function(err, result) {
//     if (err) {
//         console.log('err :' + err);
//         return;
//     }
//     console.log('--------------------------INSERT----------------------------');
//     console.log('INSERT id:',result);  
//     console.log('-----------------------------------------------------------------');
// }); //插入

// var changeTab={
// 	set:'UPDATE shoppingData SET name = ?,description = ?,category = ?,price = ? WHERE id = ?',
// 	val:['鲜花','dfdas','dsfdasf',300,"160"]
// }

// connection.query(changeTab.set,changeTab.val, function(err, result) {
//     if (err) {
//         console.log('err :' + err);
//         return;
//     }
//     console.log('--------------------------UPDATE----------------------------');
//     console.log('UPDATE affectedRows:',result.affectedRows);  
//     console.log('-----------------------------------------------------------------');
// }); //修改


// connection.query('DELETE FROM shoppingdata1', function(err, result) {
//     if (err) {
//         console.log('err :' + err);
//         return;
//     }
//     console.log('--------------------------DELETE----------------------------');
//     console.log('DELETE affectedRows',result.affectedRows);
//     console.log('-----------------------------------------------------------------');
// }); //删除

connection.query('CREATE TABLE dfdf1(title VARCHAR(255),name VARCHAR(255))', function(err, result) {
    if (err) {
        console.log('err :' + err);
        return;
    }
    console.log(result);
}); //查询


connection.end(function(err){
	if(err){
		console.log("error : "+err)
		return;
	}
	console.log("mysql service is end!")	
}); //关闭

