import { validate } from "./user.validator.mjs";

const data = {
  name: 123123,
  id: 1234
};

const result = validate(data);

console.log(result);
