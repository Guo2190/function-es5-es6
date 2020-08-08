var a = 10;
var o = {
    a: 11,
    b: {
        fn: function() {
            console.log(this.a);
        }
    }
}
o.b.fn();