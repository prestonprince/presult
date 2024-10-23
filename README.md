# presult

`presult` is a super lightweight, type-safe library for handling result types. It provides an alternative to try-catch with just two classes to handle results: `Ok` and `Err`.

## Usage

`presult` introduces two functions `sResult` and `asResult`. These functions return instances of either the `Err` or `Ok` class, depending if an error is thrown or not.

### sResult Function

Use the `sResult` function when executing a synchronous task that may fail. Simply pass in the function you want to call into `sResult`, and receive an instance of the `Ok` class if the function does not fail, and the `Err` class otherwise.

```ts
function syncFn(userId: number) {
  if (userId <= 0) {
    throw new Error("user ID must be greater than zero");
  }

  return `hello user ${userId}`;
}

const result = sResult(syncFn);
if (result.error) {
  console.log(result.message); // prints error message to screen
}

console.log(result.message); // prints hello user message to screen
```

### asResult Function

Use the `asResult` function when executing asynchronous tasks that may fail. Pass in the async function as an argument to `asResult`, and receive an instance of the `Ok` class if the function does not fail, and the `Err` class otherwise.

```ts
async function asyncFn(userId: number) {
  return await db.User.findById(userId).returning("users.id");
}

const result = await asResult(asyncFn);
if (result.error) {
  console.log(result.message); // prints database error message to screen
}

console.log(result.message); // prints user id to screen
```

### `Err` Class

The `Err` class contstructor takes in a mandatory `string` representing an error message as the first parameter and a second optional `number` parameter, representing the `status` of the error. This could be useful to send status codes like `404` or `500`.

### `Ok` Class

The `Ok` class takes in a generic type `T`, which will be used to correctly type the `message` field when constructed. The constructor takes in only one parameter of type `T` and assigns it to the `message` field, sets the `ok` field to `true` and the `error` field to `false`.
