/**
 * test task
 */
let task = require('./../index');

// callbacks

function testCallbacks() {

    console.log('------------------------callbacks');
    let cb = task.callbacks();

    cb.add(n => console.log(n));
    cb.add(n => console.log(n + n));

    cb.fire(1);


    console.log('------------------------callbacks-memory');
    cb = task.callbacks('memory');

    cb.add(n => console.log(n));

    cb.fire(1);

    cb.add(n => console.log(n + n));


    console.log('------------------------callbacks-stopOnFalse');
    cb = task.callbacks('stopOnFalse');

    cb.add(n => (console.log(n), false));

    cb.add(n => console.log(n + n));

    cb.fire(1);


    console.log('------------------------callbacks-once');
    cb = task.callbacks('once');

    cb.add(n => (console.log(n), false));

    cb.add(n => console.log(n + n));

    cb.fire(1);
    cb.fire(2);

    console.log('------------------------callbacks-once-memory');
    cb = task.callbacks('once memory');

    cb.add(n => (console.log(n), false));

    cb.add(n => console.log(n + n));

    cb.fire(1);
    cb.fire(2);

    cb.add(n => console.log(n * 3));
}

false && testCallbacks();

/**
 * deferred
 */

function testDeferred() {
    let dfd = task.deferred();
    dfd.then((n, m) => console.log(n + m));
    // dfd.resolve(1, 2);
    dfd.then((n, m) => console.log(n * m));
    dfd.catch(n => console.log(n));
    // dfd.resolve(2, 3);
    dfd.reject('error');
}

true && testDeferred();