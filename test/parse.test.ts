import { expressionToOperators } from "../src/parse.ts";
import type { Operation } from '../src/types.d.ts'
import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";

Deno.test("parser input null", () => {
  assertEquals(expressionToOperators(null), []);
});

Deno.test("parser '1 2'", () => {
    assertEquals(expressionToOperators("1 2"), [1, 2]);
});

Deno.test("parser a lot of spaces '   1     2  '", () => {
    assertEquals(expressionToOperators("   1     2  "), [1, 2]);
});
  
Deno.test("parser some letters and even + inside '1  abc dd+d  2dd'", () => {
    assertEquals(expressionToOperators("1  abc dd+d  2dd"), [1, 2]);
});

Deno.test("parser real value '1 2.1 3.0 + -'", () => {
    assertEquals(expressionToOperators("1 2.1 3.0 + -"), [1, 2.1, 3.0, '+', '-']);
});