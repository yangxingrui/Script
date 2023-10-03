const appid = '20231003001835922';
const securityKey = 'tzwdq0I3GG0TnUhfssz5';

$done({
    response: {
        body: $response.body.replace(/"access_token":\s*"[^"]+"/, `"access_token": "${appid}:${securityKey}"`)
    }
});
