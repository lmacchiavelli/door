/*
 * Name: Door mini text framework
 * Code Quality: JSHint Valid
 * Author: Lorenzo Macchiavelli - lmacchiavelli@gmail.com
 * Created: 30/10/2014
 */
var door = {};

door.Up = function (arg) {
    "use strict";
    /*
      Return Uppercase string
      door.Up("ball of fur"); ... BALL OF FUR
    */
    return arg.toUpperCase();
};

door.Lo = function (arg) {
    "use strict";
    /*
      Return Lowercase string
      door.Lo("Ball Of fur"); ... ball of fur
    */
    return arg.toLowerCase();
};

door.Ca = function (arg) {
    "use strict";
    /*
      Return Capitalized string
      door.Ca("ball of fur"); ... Ball Of Fur
    */
    var out = '';
    var a = arg.split(" ");
    for (var x in a) {
        out += a[x].charAt(0).toUpperCase() + a[x].slice(1) + " ";
    }
    return out.trim();
};

door.Ar = function (arg) {
    "use strict";
    /*
      Return string in array
      door.Ar("ball of fur"); ... ['Ball','Of','Fur']
    */
    return arg.trim().split(' ');
};

door.Wr = function (arg, a, b) {
    "use strict";
    /*
      Return string in array
      door.Wr("Text","div","className"); ... <div class="classname"></div>
    */
    return '<' + a + ((b = b || '') ? ' class="' + b + '"' : '') + '>' + arg + '</' + a + '>';
};
