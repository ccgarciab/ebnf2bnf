function product(a) {
    if (a.length == 1) {
        // Special case: the one-liner below can't handle the 1 element case
        // To ensure proper type soundness, this is handled separately
        return a.pop().map((e) => [e]);
    }
    return a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
}

function flatten(iterable) {
    let result_list = [];
    for (const it of iterable) {
        for (const item of it) {
            result_list.push(item);
        }
    }
    return result_list;
}

function* range(start = 0, stop = Infinity, step = 1) {
    for (let i = start; i < stop; i += step) {
        yield i;
    }
}

export { flatten, product, range };