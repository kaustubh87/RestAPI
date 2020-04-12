const expect = require('chai').expect;
const sinon = require('sinon');
// const mocha = require('mocha');
const { TestThis, TestAsync } = require('../../src/test-code');

describe('Test code - ', () => {

    it('when param1 greater than param2, testthis should return sum', () => {

        // Setup
        const param1 = 5;
        const param2 = 2;
        const expected = param1 + param2

        // Act
        const result = TestThis(param1, param2);

        // Assert
        expect(result).to.equal(expected);

    });

    it('when param1 less than param2, testthis should return difference', () => {

        // Setup
        const param1 = 2;
        const param2 = 5;
        const expected = param2 - param1;

        // Act
        const result = TestThis(param1, param2);

        // Assert
        expect(result).to.equal(expected);

    });
});

describe.skip('Test Async - ', () => {
    var sandbox;
    beforeEach(function() {
        // create a sandbox
        sandbox = sinon.sandbox.create();
        // stub some console methods
        sandbox.stub(window, "sleep").rejects({});
    });

    afterEach(function() {
        // restore the environment as it was before
        sandbox.restore();
    });

    it('when value provided, should get value on invocation', () => {
        const expected = 6;

        const result = TestAsync(6);
        expect(result).to.equal(expected);
    });
});
