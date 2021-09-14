import type { Operation } from '../src/types.d.ts'
import { assert, assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { ExecuteEngine } from "../src/execute.ts";

Deno.test("execute simple '5 5 5 8 + + -' result is -13", () => {
  const engine = new ExecuteEngine();
        engine.executeOperations([5, 5, 5, 8, '+', '+', '-'])

  assertEquals(engine.lastValue(), -13);
});

Deno.test("multi add stack '-3 -2 * 5 +'", () => {
    const engine = new ExecuteEngine();
    engine.executeOperations([-3])
    engine.executeOperations([-2])
    engine.executeOperations(['*'])
  
    assertEquals(engine.lastValue(), 6);

    engine.executeOperations([5])
    engine.executeOperations(['+'])

    assertEquals(engine.lastValue(), 11);
});

Deno.test("multi add stack '5 9 1 - /'", () => {
    const engine = new ExecuteEngine();
    engine.executeOperations([5])
    engine.executeOperations([9])
    engine.executeOperations([1])
    engine.executeOperations(['-'])
  
    assertEquals(engine.lastValue(), 8);

    engine.executeOperations(['/'])

    assertEquals(engine.lastValue(), 0.625);
});

Deno.test("execute simple '5 +' gives error", () => {
    const engine = new ExecuteEngine();
    const state = engine.executeOperations([5, '+']);
  
    assert('error' in state);
    assertEquals(state.error, 'To execute operation enter atleast 2 values');
});