/*
脚本作者：InnFen
脚本日期：2024-08-23
*/

var headers = $request['headers'];
delete headers["Cookie"];
headers['cookie'] = $persistentStore.read("PCS_Cookie");
$done({ 'headers': headers });
