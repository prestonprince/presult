declare type OkResult<T> = {
  ok: true;
  error: false;
  message: T;
};

declare type ErrorResult = {
  ok: false;
  error: true;
  message: string;
};

export declare class Ok<T> implements OkResult<T> {
  readonly ok: true;
  readonly error: false;
  message: T;
  constructor(message: T);
}

export declare class Err implements ErrorResult {
  readonly ok: false;
  readonly error: true;
  message: string;
  status?: number;
  constructor(message: string, status?: number);
}
