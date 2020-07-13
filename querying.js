const User = require("./models").user;
const { Op } = require("sequelize");

// async function getUsers() {
//   const users = await User.findAll();
//   console.log(users);
// }

// getUsers();

// async function getUserById(id) {
//   const user = await User.findByPk(id);
//   console.log(user);
// }

// getUserById(1);
// getUserById(2);

// what will happen? predictions
// undefined?
// empty array?
// empty object?
// error, not found?

// ANSWER: null (nothing, on purpose)
// getUserById(3);

// getUserById("Hello");
// what will happen? predictions
// undefined?
// Error?
// null?

// ANSWER: Error
// invalid input syntax for integer: "Hello"

// async function findByEmail() {
//   const users = await User.findAll({
//     where: {
//       [Op.or]: [
//         {
//           email: "leo@messi.com",
//         },
//         {
//           email: "dan@redux.com",
//         },
//       ],
//     },
//   });
//   console.log(users);
// }

// findByEmail();

async function emailAddressIncludes(name) {
  const user = await User.findAll({
    where: {
      email: {
        [Op.like]: `%${name}%`,
      },
    },
  });
  console.log(user);
}

emailAddressIncludes("bla");
