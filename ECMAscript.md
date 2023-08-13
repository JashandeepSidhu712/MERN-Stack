# ECMASCRIPT
ECMA Script, often abbreviated as ES, is the standardized scripting language specification developed by Ecma International. It's the foundation for modern JavaScript, which is used extensively in web development for creating dynamic and interactive user interfaces. ES defines the rules, syntax, and features that JavaScript engines should adhere to.

#### ECMAScript 2015 (ES6)
This was a significant update that brought a wide range of new features, including **arrow functions**, **template literals**, **classes**, **modules**, and the **let and const variable declarations**.

## VARIABLE DECLARATIONS

### var
1. Variables declared with var are **function-scoped**. This means that the variable is accessible anywhere within the function where it's declared, regardless of block boundaries.
2. If var is **used outside of any function, it becomes a global variable accessible throughout the entire code**, which can lead to unintended side effects and naming conflicts.
3. Variables declared with var can be **re-declared within the same scope without any error**.
4. Variables declared with var are **hoisted to the top of their function or global scope**. This means you can **use the variable before it's actually declared**, although **its value will be undefined until the declaration is reached**.

#### let
1. Variables declared with let are **block-scoped**. This means they are limited to the block (enclosed by curly braces) in which they are defined, such as loops or conditional statements.
2. Unlike var, let variables are not automatically added to the global scope when declared outside of functions. This helps prevent global namespace pollution.
3. Attempting to re-declare a variable with let within the same scope will result in a syntax error.
4. Unlike var, let variables are not hoisted to the top of their scope. They are not accessible before the point of declaration.

