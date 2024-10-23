type OkResult<T> = {
  ok: true;
  error: false;
  message: T;
};

type ErrorResult = {
  ok: false;
  error: true;
  message: string;
};

export class Ok<T> implements OkResult<T> {
  ok = true as const;
  error = false as const;
  message: T;

  constructor(message: T) {
    this.message = message;
  }
}

export class Err implements ErrorResult {
  ok = false as const;
  error = true as const;
  message: string;
  status?: number;

  constructor(message: string, status?: number) {
    this.message = message;
    if (status) this.status = status;
  }
}

export function sResult<T>(cb: () => T | undefined): Ok<T | undefined> | Err {
  try {
    const result = cb();
    return new Ok(result ? result : undefined)
  } catch (e: any) {
    return new Err(e.message);
  }
}

export async function asResult<T>(cb: () => Promise<T | undefined>): Promise<Ok<T | undefined> | Err> {
  try {
    const result = await cb()
    return new Ok(result ? result : undefined);
  } catch (e: any) {
    return new Err(e.message)
  }
}
