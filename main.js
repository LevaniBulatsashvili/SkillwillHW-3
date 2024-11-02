// Task N1

const sumTwoMultiplyRest = (num1, num2, ...args) => {
  const firstElement = num1 + num2;
  let secondElement = 1;

  for (const number of args) {
    secondElement *= number;
  }
  return [firstElement, secondElement];
};

console.log(sumTwoMultiplyRest(1, 2, 3));

// Task N2
const user = {
  banks: [
    { address: { city: "Batumi" } },
    { address: { city: "Tbilisi" } },
    { address: { city: "Kobuleti" } },
  ],
};

const findCity = (user) => {
  // Check if provided user input is valid else prevent crash by returning undefined
  if (!user.banks || user.banks?.length < 3 || !user.banks[2]?.address)
    return undefined;

  const {
    banks: [
      ,
      ,
      {
        address: { city },
      },
    ],
  } = user;

  return city;
};

console.log(findCity(user));
console.log(findCity({}));
console.log(findCity({ banks: "asd" }));
console.log(findCity({ banks: [{}, {}] }));
console.log(findCity({ banks: [{}, {}, {}] }));
console.log(findCity({ banks: [{}, {}, { address: {} }] }));
console.log(findCity({ banks: [{}, {}, { address: { city: "Kutaisi" } }] }));

// Task N3
const userDetails = {
  firstName: "Jon",
  lastName: "Doe",
  profile: {
    address: "Tbilisi",
  },
  targets: ["Jane", "June", "James"],
};

const createNewObject = (obj) => {
  // Method1 Downside you have to know object layout for deep cloning
  return { ...obj, profile: { ...obj.profile }, targets: [...obj.targets] };

  // Method2 Downside performance heavy
  // return JSON.parse(JSON.stringify(obj));
};

const newUserDetails = createNewObject(userDetails);
newUserDetails.firstName = "james";
newUserDetails.profile.address = "Batumi";
newUserDetails.targets[0] = "George";

console.log(userDetails, newUserDetails);
