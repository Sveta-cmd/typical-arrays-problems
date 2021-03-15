exports.min = function min(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    } else return Math.min(...arr);
}

exports.max = function max(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    } else return Math.max(...arr);
}

exports.avg = function avg(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    } else {
        let avg = arr.reduce(function(x, y) {
            return (x + y);
        });
        return avg / arr.length;
    }
}
