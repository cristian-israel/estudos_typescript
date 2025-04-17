type VerfifyUserFn = (user: User, setValue: User) => boolean;
type User = {
  email: string;
  pass: string;
};

const verifyUser: VerfifyUserFn = (user, setValue) => {
  return user.email === setValue.email && user.pass === setValue.pass;
};

const BdUser: User = {
  email: "fulano@gmail.com",
  pass: "Admin@123",
};

const SetValueUser: User = {
  email: "fulano@gmail.com",
  pass: "Admin@12",
};

console.log(verifyUser(BdUser, SetValueUser));
