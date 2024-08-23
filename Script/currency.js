/*
脚本作者：InnFen
脚本日期：2024-08-23
*/

var headers = $request.headers;

var ck = $persistentStore.read("PCS_Cookie");

if (headers['Cookie'] != undefined) {
    headers['Cookie'] = ck;
} else {
    headers['cookie'] = ck;
}

$done({ 'headers': headers });