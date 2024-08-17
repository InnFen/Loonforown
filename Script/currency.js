/*
脚本作者：InnFen
脚本日期：2024-08-18
*/
var headers = $request['headers'];
headers['Cookie'] = $persistentStore.read("Cookie");
$done({ 'headers': headers });
