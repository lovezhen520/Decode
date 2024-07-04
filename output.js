//7/4/2024, 9:06:34 AM
//Modify:https://github.com/lck7/decode
var Url = $request.url;
function setQueryString(_0x4f5ad9, _0x2f8f4c) {
  var _0x3b0287 = Url.split("?"),
    _0x2b9298 = _0x3b0287[1];
  var _0x21cd3d = {};
  _0x2b9298 && _0x2b9298.split("&").forEach(_0x16ff08 => {
    var _0x4dc6a6 = _0x16ff08.split("=");
    _0x21cd3d[_0x4dc6a6[0]] = _0x4dc6a6[1];
  });
  _0x21cd3d[_0x4f5ad9] = _0x2f8f4c;
  var _0x151685 = [];
  for (var _0x549172 in _0x21cd3d) {
    _0x151685.push(_0x549172 + "=" + _0x21cd3d[_0x549172]);
  }
  return _0x3b0287[0] + "?" + _0x151685.join("&");
}
Url = setQueryString("uid", "2");
Url = setQueryString("token", "");
$done({
  "url": Url
});