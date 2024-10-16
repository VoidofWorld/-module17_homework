import {countDown} from '../countDown.js'

describe("tests for the countdown function", () => {

    it("countdown 3 is 321", () => {
     expect(countDown(3)).toBe('321')
    }),

    it("countdown 1 is 1", () => {
        expect(countDown(1)).toBe('1')
    }),
    
    it("countdown 0 is ''", () => {
        expect(countDown(0)).toBe('');
    });
})
