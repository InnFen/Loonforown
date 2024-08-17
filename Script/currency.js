/*
脚本作者：InnFen
脚本日期：2024-08-18
*/
var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = $persistentStore.read("Cookie");
$done({'headers': modifiedHeaders});