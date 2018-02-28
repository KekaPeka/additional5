module.exports = function check(str, bracketsConfig) {
    for (var d = /(\u005B|\u0028|\u007B)[^\u005B\u0028\u007B]*?$/,
     e = {
        "(": /\u0028[^\u007D\u005D]*?\u0029/,
        "[": /\u005B[^\u0029\u007D]*?\u005D/,
        "{": /\u007B[^\u0029\u005D]*?\u007D/,
    }, b, c = !0; c;)
	 b = str, str = str.replace(d, function (str, b)
 {
        return str.replace(e[b], "")
    }), b == str && (c = !1);
    return !/[\u005B\u005D\u0028\u0029\u007B\u007D]/.test(str)
}