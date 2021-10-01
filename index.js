function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return (function receivesAFunction(callback) {
        callback()
    })
}

function returnsAnAnonymousFunction() {
    return function(feeling = good) {
        return `I'm having a ${feeling} time!`
    } 
}