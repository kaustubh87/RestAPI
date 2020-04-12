function TestThis(param1, param2) {
    if (param1 > param2) {
        return param1 + param2;
    } else if (param1 < param2) {
        return param2 - param1;
    } else {
        return null;
    }
}

async function TestAsync(param) {
    await setTimeout(test, 2000);
    return param;
}

function test() {

}
module.exports.TestThis = TestThis;
module.exports.TestAsync = TestAsync;
