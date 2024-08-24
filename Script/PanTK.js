/*
脚本作者：InnFen
脚本日期：2024-08-24
*/

var headers = $request['headers'];
delete headers["Cookie"];
headers['Cookie'] = $persistentStore.read("Pan_TK");
$done({ 'headers': headers });
