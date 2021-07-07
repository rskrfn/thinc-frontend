export const nameValidation = (input) => {
  let reg = /^[a-z ,.'-]+$/i;

  if (input.length === 0) {
    return "Name cannot be empty";
  }
  if (!reg.test(input)) {
    return "Name cannot contain number and special characters";
  }
  if (!input.split(" ")[0]) {
    return "Provide your first name";
  }
  if (input.split(" ")[0].length < 3) {
    return "First name must be at least 3 characters";
  }
  if (!input.split(" ")[1]) {
    return "Provide your last name";
  }
  if (input.split(" ")[1]) {
    if (input.split(" ")[1].length < 3) {
      return "Last name must be at least 3 characters";
    }
  }
};

export const passwordValidation = (input, compare) => {
  let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%^*#?&])[A-Za-z\d@$!%^*#?&]{8,}$/;

  if (input.length === 0) {
    return "Password cannot be empty";
  }

  if (input.length < 8) {
    return "Password must be at least 8 characters";
  }
  if (!reg.test(input)) {
    return "Password must contain letter, number and special character";
  }
  if (compare) {
    if (input !== compare) {
      return "Password didn't match";
    }
    if (input === compare) {
      return "Password match";
    }
  }
};
export const emailValidation = (input) => {
  let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

  if (input.length === 0) {
    return "Email cannot be empty";
  }

  if (!reg.test(input)) {
    return "Wrong email format";
  }
};

export const usernameValidation = (input) => {
  let reg = /^(?=.{4,10}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?![_.])$/;
  if (input.length < 4) {
    return "Username must be at least 4 characters";
  }
  if (!reg.test(input)) {
    return 'Username cannot start or end with "_" or "."';
  }
};

export const usernameemailValidation = (input) => {
  let reg =
    /^(?:[A-Z\d][A-Z\d_-]{3,9}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;

  // console.log('cektype', typeof(input), {input});
  // let inputCheck = input.includes("@");

  //   if (input.length < 4 && !input.includes("@")) {
  //     return "Username must be at least 4 characters";
  //   }
  if (!reg.test(input) && !input.includes("@") && input.length < 4) {
    return "Username must be at least 4 characters";
  }
  if (
    !reg.test(input) &&
    !input.includes("@") &&
    input.length > 3 &&
    input.length < 11
  ) {
    return "Username can only contain letter, number, '-' or '_'";
  }
  if (!reg.test(input) && !input.includes("@") && input.length > 10) {
    return "Username must be under 10 characters";
  }
  if (!reg.test(input) && input.includes("@")) {
    return "Wrong email format";
  }
};
