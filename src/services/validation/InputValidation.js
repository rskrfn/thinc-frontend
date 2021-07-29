import moment from "moment";

export const nameValidation = (input) => {
  let reg = /^[a-z ,.'-]+$/i;

  if (input.length === 0) {
    return "Name cannot be empty";
  }
  if (input.length > 14) {
    return "Username must be under 15 characters";
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
    /^(?:[A-Z\d][A-Z\d_-]{3,14}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
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
  if (!reg.test(input) && !input.includes("@") && input.length > 14) {
    return "Username must be under 15 characters";
  }
  if (!reg.test(input) && input.includes("@")) {
    return "Wrong email format";
  }
};

export const inputValidation = (form, value, reference) => {
  let alphanumeric = /^[A-Za-z0-9\s]+[A-Za-z0-9\s]+$(\.0-9+)?/g;
  // let alpha = /^[A-Za-z\s]+[A-Za-z\s]+$(\.0-9+)?/g;
  // let number = /^[0-9]+$(\.0-9+)?/;
  // let time = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
  if (form === "coursename") {
    if (value.length < 4) {
      return "Course name must be at least 4 characters";
    } else if (!alphanumeric.test(value)) {
      return "Course name can only contain alphabetical characters and numeric";
    }
  }
  if (form === "category" && value === 0)
    return "Please select course category";
  if (form === "level" && value === 0) return "Please select course level";
  if (form === "time") {
    if (!value || !reference) return "Please select course time";
    if (moment(value).isSameOrBefore(reference))
      return "End time must be after the start time";
    if (!moment(value).isSameOrAfter(moment(reference).add(45, "m"))) {
      return "Minimum course duration is 45 minutes";
    }
  }
  if (form === "description") {
    if (value.split(" ").length < 10)
      return "Course description must be at least 10 words";
  }
  if (form === "price") {
    if (!value) return "Price must be determined";
    if (Number(value) < 10) return "Minimum price is $10";
    if (Number(value) > 200) return "Maximum price is $200";
  }
};
