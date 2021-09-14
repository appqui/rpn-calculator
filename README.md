RPN Calculator with Deno
=======================

Why Deno?
---------

Initially I was going to implement it on NodeJs, but found missed Promise implementation for Console API. 

After that I considered Deno, as it had more modern async/await API, which was not needed for my case as reading from console was possible through prompt().

Also it supports TypeScript out-of-box, although in a bit specific way, which requires switch extensions to Deno and back to normal at VSCode.

Code Description
--------------

Code divided in 2 modules: `parse` and `execution`.

`Parse` part is a pipeline of transformations that eliminates unneeded spaces and non-operation symbols.

It returns array of Expressions which can be either Number or Operations in form of 1-char strings (i.e '+', '-')

`Execution` part encapsulates in form of class ExecuteEngine, mostly to be able to have several instances of calculator at the same time.

Expressions saved on stack, and execute when operations appears.

How to Run
----------

* Install Deno
* Repository Clone
* `deno run src/console.ts`

How to Test
----------
To execute tests, you can use Deno test built-in tools, just run
```shell
> deno test
```

To check coverage
```shell
> deno test --coverage=coverage
> deno coverage coverage
```

Should be 100% for parse.ts and execute.ts
