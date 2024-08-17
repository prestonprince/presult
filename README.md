# presult

`presult` is a super lightweight, type-safe library for handling result types. It provides an alternative to try-catch with just two classes to handle results: `Ok` and `Err`.

## Usage

`presult` introduces two classes `Ok` and `Err`. Both classes contain the same fields:
`ok`, `error`, and `message`.

### `Err`

The `Err` class contstructor takes in a mandatory `string` representing an error message as the first parameter and a second optional `number` parameter, representing the `status` of the error. This could be useful to send status codes like `404` or `500`.

The following example shows a function that returns an instance of the `Err` class.

```ts
import { Err } from "presult";

async function getUser(userId: number): Promise<Err> {
  return new Err("User not found");
}

const userResult = await getUser(1);
if (userResult.error) {
  console.error(userResult.message); // Logs error message "User not found"
}
```

The `userResult` will produce an instance of the `Err` class, where the `error` field will be `true`, and the `ok` field will be `false`.

### `Ok`

The `Ok` class takes in a generic type `T`, which will be used to correctly type the `message` field when constructed. The constructor takes in only one parameter of type `T` and assigns it to the `message` field, sets the `ok` field to `true` and the `error` field to `false`.

The following example shows a function that returns an instance of the `Ok` class.

```ts
import { Ok } from "presult";

type TUser = {
  id: number;
  name: string;
};

async function getUser(userId: number): Promise<Ok<TUser>> {
  const user: TUser = await User().findById(userId);
  return new Ok<TUser>(user);
}

const userResult = await getUser(1);
if (userResult.error) {
  console.error(userResult.message); // Logs error message "User not found"
}
```
