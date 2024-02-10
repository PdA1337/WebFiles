/*
v
^https:\//api-hdcjgo.9w9.com\/login url script-response-body https://raw.githubusercontent.com/PdA1337/WebFile/main/test.js
mitm=api-hdcjgo.9w9.com
*/

var body = $response.body
    .replace(/\"user_type\":0/, "\"user_type\":0").replace("\"vipEndTime\":0","\"vipEndTime\":9999999999").replace("\"brandVipType\":0","\"brandVipType\":0").replace("\"isManager\":0","\"isManager\":1");
$done({ body });
