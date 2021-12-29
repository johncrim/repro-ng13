export interface OptionalObject {
  foo: string;
}

export interface Environment {
  production: boolean;
  optionalObject?: OptionalObject;
}
