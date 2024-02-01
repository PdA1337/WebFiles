/*
爱企查vip
^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body https://raw.githubusercontent.com/PdA1337/WebFile/main/test.js
mitm=aiqicha.baidu.com
*/

var body = $response.body
    .replace(/\"svip\":\{\"status\":0,\"startTime\":\"2023-01-12\",\"endTime\":\"2023-01-18\"/, "\"svip\":\{\"status\":1,\"startTime\":\"\",\"endTime\":\"2099-12-31\"");
$done({ body });
