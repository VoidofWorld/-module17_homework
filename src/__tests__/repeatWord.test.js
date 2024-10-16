import {repeatWord} from '../repeatWord.js'

describe('repeatWord function', () => {

    it("repeats word 'eat' 2 times", () => {
        expect(repeatWord('eat', 2)).toBe('eat, eat');
    }),
    
    it("repeats word 'cat' 0 times", () => {
        expect(repeatWord('cat', 0)).toBe('');
    }),

    it("repeats word '' 5 times", () => {
        expect(repeatWord('', 5)).toBe(', , , , ');
    });
});
