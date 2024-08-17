/*
脚本作者：InnFen
脚本日期：2024-08-18
*/
var headers = $request['headers'];
delete headers["Authorization"];
delete headers["User-Agent"];
headers['authorization'] = $persistentStore.read("Bilibili_Authorization");
headers['user-agent'] = $persistentStore.read("Bilibili_User-Agent");
$done({ 'headers': headers });