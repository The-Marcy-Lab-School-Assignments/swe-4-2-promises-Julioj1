# Short Response Questions

## Question 1: Promise States

What are the three states of a Promise? For each state, explain what it represents and which Promise method (`.then()` or `.catch()`) is used to handle it.

**Your Answer:**

A `Promise` has three states: **pending**, **resolved** **(fulfilled)**, and **rejected**.

**Pending**:
This is the initial state. The `Promise` is still running and the result is not available yet. Nothing has succeeded or failed yet.

**Resolved**:
This means the `Promise` completed successfully and returned a value.
The `.then()` method is used to handle the fulfilled state and access the returned result.

**Rejected**:
This means the `Promise` failed and returned an error.
The `.catch()` method is used to handle the rejected state and deal with the error.

## Question 2: Callback Hell vs. Promise Chaining

Explain why deeply nested callbacks (callback hell) are problematic, and describe how `Promise` chaining with `.then()` solves this problem.

**Your Answer:**

**Callback hell** happens when callbacks are **nested inside** other callbacks multiple times. This makes the code hard to read, difficult to debug, and harder to maintain because everything moves to the right and becomes deeply nested.

`Promise` chaining solves this problem by using `.then()` to run asynchronous operations in sequence without nesting. This makes the code cleaner and easier to follow.

## Question 3: Error Handling with `.catch()`

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, what happens? Why is this behavior useful?

**Your Answer:**

If the second `.then()` throws an error, the Promise immediately stops running the remaining `.then()` calls and jumps directly to the `.catch() `block.

This behavior is useful because it allows you to handle errors in one place instead of adding error handling to every `.then()`. It makes the code cleaner and ensures that errors don’t break the program silently.
