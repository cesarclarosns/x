// import bcrypt from "bcrypt";

// (async () => {
//   const salt = bcrypt.genSaltSync();
//   console.log({ salt });
// })();

let date = new Date(Date.now() + 2 * 60 * 1000);
console.log(date.toUTCString());

date = new Date("2023-10-09T07:14:44.025+00:00");
console.log({ date: date.toLocaleString() });
