const fizzbuzz = require("./fizzbuzz")

test("15 % 3  expect fizzbuzz",() => {
    expect(fizzbuzz(15)).toBe("fizzbuzz")
})
test("9 % 3 expect fizz",() => {
    expect(fizzbuzz(9)).toBe("fizz")
})
test("10 % 5 expect buzz",() => {
    expect(fizzbuzz(10)).toBe("buzz")
})
test("53 have 3 and 5 in it expect fizzbuzz",() => {
    expect(fizzbuzz(53)).toBe("fizzbuzz")
})
test("13 have 3 in it expect fizz",() => {
    expect(fizzbuzz(13)).toBe("fizz")
})
test("58 have 5 in it expect buzz",() => {
    expect(fizzbuzz(58)).toBe("buzz")
})