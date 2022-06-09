import fb from "@src/fizzbuzz";

test("it should return fizz for multiples of 3", () => {
  expect(fb(3)).toBe("fizz");
  expect(fb(6)).toBe("fizz");
  expect(fb(9)).toBe("fizz");
});

test("it should return buzz for multiples of 5", () => {
  expect(fb(5)).toBe("buzz");
  expect(fb(10)).toBe("buzz");
  expect(fb(20)).toBe("buzz");
  expect(fb(25)).toBe("buzz");
});

test("it should return fizzbuzz for multiples of both 3 and 5", () => {
  expect(fb(15)).toBe("fizzbuzz");
  expect(fb(30)).toBe("fizzbuzz");
});
