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
