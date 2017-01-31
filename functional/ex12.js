var slice = Array.prototype.slice

function Spy(target, method) {
    var spy = {
        args: [],
        count: 0
    }

    var orig = target[method];
    target[method] = function() {
        var args = [].slice.apply(arguments)
        spy.count++;
        spy.args.push(args)
        return orig.apply(target, args)
    }
    console.log(spy)
    console.log(spy.count)
    return spy
}

module.exports = Spy
