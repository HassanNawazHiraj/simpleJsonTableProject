var _0xef1a = ['readyState', 'GET', 'insertCell', 'src', 'open', 'removeChild', 'display', 'createTextNode', 'name', 'style', 'onreadystatechange', 'createElement', 'responseText', 'tableBody', 'getElementById', 'forEach', 'rows', 'insertRow', 'geslachten.json', 'vrouw', 'img', 'appendChild', 'gender', 'forename', 'send', 'status', 'firstChild', 'man', 'innerText'];
(function(_0x4ac2d5, _0xef1abb) { var _0x53a649 = function(_0x3269ea) { while (--_0x3269ea) { _0x4ac2d5['push'](_0x4ac2d5['shift']()); } };
    _0x53a649(++_0xef1abb); }(_0xef1a, 0x19e));
var _0x53a6 = function(_0x4ac2d5, _0xef1abb) { _0x4ac2d5 = _0x4ac2d5 - 0x0; var _0x53a649 = _0xef1a[_0x4ac2d5]; return _0x53a649; };
var list = [];

function loadAllPeople() { var _0x514781 = new XMLHttpRequest();
    _0x514781[_0x53a6('0x2')] = function() { if (this[_0x53a6('0x15')] == 0x4 && this[_0x53a6('0x11')] == 0xc8) { list = JSON['parse'](this[_0x53a6('0x4')]);
            showAllPeople(); } };
    _0x514781[_0x53a6('0x19')](_0x53a6('0x16'), _0x53a6('0xa'), !![]);
    _0x514781[_0x53a6('0x10')](); }

function showAllPeople() { var _0x84b48c = document[_0x53a6('0x6')](_0x53a6('0x5')); while (_0x84b48c['hasChildNodes']()) { _0x84b48c[_0x53a6('0x1a')](_0x84b48c[_0x53a6('0x12')]); }
    list[_0x53a6('0x7')](function(_0x515f09, _0x1d1874) { var _0x540b25 = _0x84b48c[_0x53a6('0x9')](); var _0x45a738 = _0x540b25[_0x53a6('0x17')](0x0); var _0x11966d = _0x540b25[_0x53a6('0x17')](0x1); var _0x369198 = _0x540b25[_0x53a6('0x17')](0x2); var _0x3dcdc5 = _0x540b25[_0x53a6('0x17')](0x3);
        _0x45a738[_0x53a6('0xd')](document[_0x53a6('0x1c')](_0x515f09[_0x53a6('0xf')]));
        _0x11966d[_0x53a6('0xd')](document[_0x53a6('0x1c')](_0x515f09[_0x53a6('0x0')]));
        _0x369198[_0x53a6('0xd')](document['createTextNode'](_0x515f09[_0x53a6('0xe')])); var _0x35dad3 = document[_0x53a6('0x3')](_0x53a6('0xc'));
        _0x35dad3[_0x53a6('0x18')] = 'images/' + _0x515f09['picture'];
        _0x3dcdc5[_0x53a6('0xd')](_0x35dad3); }); }

function showMaleOnly() { styleRow(_0x53a6('0x13')); }

function showFemaleOnly() { styleRow(_0x53a6('0xb')); }

function styleRow(_0x3692c2) { var _0x27413d = document[_0x53a6('0x6')](_0x53a6('0x5')); for (var _0xe99fd2 = 0x0, _0x433834; _0x433834 = _0x27413d[_0x53a6('0x8')][_0xe99fd2]; _0xe99fd2++) { var _0x37a474 = _0x433834['cells'][0x2][_0x53a6('0x14')]; if (_0x37a474 == _0x3692c2) { _0x433834[_0x53a6('0x1')]['display'] = 'none'; } else { _0x433834[_0x53a6('0x1')][_0x53a6('0x1b')] = ''; } } }