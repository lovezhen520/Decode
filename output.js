//7/4/2024, 9:13:02 AM
//Modify:https://github.com/lck7/decode
function base64Decode(_0x5b2f90) {
  const _0x43d8bc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let _0x551253 = String(_0x5b2f90).replace(/=+$/, ""),
    _0x823b53 = "";
  if (_0x551253.length % 4 === 1) {
    throw new Error("Invalid base64 string");
  }
  for (let _0x484e60 = 0, _0x3a3a8a, _0x51f5ce, _0x1f2e76 = 0; _0x51f5ce = _0x551253.charAt(_0x1f2e76++); ~_0x51f5ce && (_0x484e60 % 4 ? _0x3a3a8a = _0x3a3a8a * 64 + _0x51f5ce : _0x3a3a8a = _0x51f5ce, _0x484e60++ % 4) ? _0x823b53 += String.fromCharCode(255 & _0x3a3a8a >> (-2 * _0x484e60 & 6)) : 0) {
    _0x51f5ce = _0x43d8bc.indexOf(_0x51f5ce);
  }
  return _0x823b53;
}
function base64Encode(_0x2e78ec) {
  const _0x5f4557 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let _0x151c14 = String(_0x2e78ec),
    _0x23a917 = "";
  for (let _0x515483, _0x3365ee, _0x56abf2 = 0, _0x43efe1 = _0x5f4557; _0x151c14.charAt(_0x56abf2 | 0) || (_0x43efe1 = "=", _0x56abf2 % 1); _0x23a917 += _0x43efe1.charAt(63 & _0x515483 >> 8 - _0x56abf2 % 1 * 8)) {
    _0x3365ee = _0x151c14.charCodeAt(_0x56abf2 += 3 / 4);
    if (_0x3365ee > 255) {
      throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
    }
    _0x515483 = _0x515483 << 8 | _0x3365ee;
  }
  return _0x23a917;
}
let url = $request.url,
  body = $response.body,
  binaryString = base64Decode(body),
  bytes = new Uint8Array(binaryString.length);
for (let i = 0; i < binaryString.length; i++) {
  bytes[i] = binaryString.charCodeAt(i);
}
let decodedData = new TextDecoder("utf-8").decode(bytes),
  jsonData = JSON.parse(decodedData);
if (url.includes("/playerinfo")) {
  jsonData.data.is_vip = 99;
  jsonData.data.nick_name = "Baby";
} else {
  if (url.includes("/api/get_advert")) {
    for (var i = 0; i < jsonData.data.length; i++) {
      delete jsonData.data[i].img;
      delete jsonData.data[i].url;
      delete jsonData.data[i].showtime;
    }
  } else {
    if (url.includes("/api/home/popup")) {
      jsonData.data = {};
    }
  }
}
let modifiedDataString = JSON.stringify(jsonData),
  modifiedDataBytes = new TextEncoder().encode(modifiedDataString),
  modifiedDataBinaryString = "";
for (let i = 0; i < modifiedDataBytes.length; i++) {
  modifiedDataBinaryString += String.fromCharCode(modifiedDataBytes[i]);
}
let encodedModifiedData = base64Encode(modifiedDataBinaryString);
$done({
  "body": encodedModifiedData
});