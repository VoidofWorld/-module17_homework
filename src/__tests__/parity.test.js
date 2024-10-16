import {parity} from '../parity.js'

describe("tests for the parity function", () => {
  const  odd = 7;
  const even = 2;

  it("should operate correctly with odd number", () => {
    expect(parity(odd)).toBe(`Число ${odd} нечетное!`);
  }),
  it("should operate correctly with even number", () => {
    expect(parity(even)).toBe(`Число ${even} четное`);
  })
  it("should handle invalid numbers correctly", () => {
    expect(parity("abc")).toBe("Число abc не является валидным числом!");
  });
  it("should treat 0 as an even number", () => {
    expect(parity(0)).toBe(`Число 0 четное`);
  });
});
