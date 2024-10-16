import { revertString } from "../task17.5.1.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("строка")).toBe("акортс"));
});
