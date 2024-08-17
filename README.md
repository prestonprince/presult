# presult

`presult` is a super lightweight, type-safe library for handling result types. It provides an alternative to try-catch with just two classes to handle results: `Ok` and `Err`.

## Usage

```ts
import { Ok } from "presult";

type TUser = {
  id: number;
  name: string;
};

async function getUser(userId: number): Promise<Ok<TUser> | Err> {
  const user = await User().findById(userId);

  if (!user) {
    return new Err("User not found");
  }

  return new Ok<TUser>(TUser);
}

const userResult = await getUser(1);
if (userResult.error) {
  console.error(userResult.message); // Logs error message "User not found"
}

console.log(userResult.message); // Prints instance of TUser!
```
