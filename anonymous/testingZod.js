const zod = require("zod");
//Testing of zod middleware

function validateInput(obj) {
  // const schema = zod.array(zod.number());
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email: "adbhutrei@email.com",
  password: "123456789msnvn",
});
