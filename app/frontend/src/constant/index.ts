const labels = {
  FULL_NAME: "Full name",
  PHONE_NUMBER: "Phone number",
  EMAIL: "Email",
  PASSWORD: "Password",
  CONFIRM_PASSWORD: "Confirm password",
  VERIFICATION_CODE: "Verification code",
  RE_SEND_BTN: "Resend",
  SIGN_IN: "Sign in",
  SIGN_UP: "Sign up",
  SEARCH_TRAIN: "Search train",
  CHOOSE_DEPARTURE: "Choose departure city...",
  CHOOSE_ARRIVAL: "Choose arrival city..."
} as const;

const messages = {
  // signup form
  requiredFullName: "Please fill out your full name",
  requiredEmail: "Please fill out your email",
  requiredPhoneNumber: "Please fill out your phone number",
  requiredPassword: "Please fill out your password",
  confirmPassword: "Please confirm your password",
  invalidEmail: "Invalid email address",
  minPassword: "Password must be at least 8 characters",
  maxPassword: "Password must be less than 20 characters",
  requiredNumberPassword: "Password requires a number",
  lowerCaseLetterPassword: "Password requires a lowercase letter",
  upperCaseLetterPassword: "Password requires an uppercase letter",
  symbolPassword: "Password requires a symbol",
  noMatchPassword: "Password doesn't match",
  minFullName: "Full name must be at least 5 characters",
  notValidPhoneNumber: "Phone number is not valid",
  minPhoneNumber: "Phone number must consist of 10 numbers",
  existedPhoneNumber: "Phone number already used in another account",
  acceptance: "The terms and conditions must be accepted",

  // OTP
  otpMessage: "Please check your phone for the verification code we just sent you and enter that code in the box below.",
  invalidOtp: "Your code isn't valid, try again",
  requiredOtp: "Please fill out your OTP",

  // Congrats
  congratsMessage: "You have created account successfully. Please go back to Sign in page to proceed further.",
} as const;

const routes = {
  signUp: "/signup",
  otp: "/otp",
  congrats: "/congrats",
  signIn: "/",
  home: "/home",
} as const;

const texts = {
  TO_SIGN_IN_PAGE: "To Sign in page",
  NOT_MEMBER: "Not a member?",
  TITLE_LATEST_NEWS: "Our latest news",
  TITLE_ABOUT_TRAVELBLISS: "About TravelBliss",
  DATE_NEWS: "02 April 2023",
  TITLE_WHY_CHOOSE: "Why choose TravelBliss?",
  CONTENT_WHY_CHOOSE: "Our first priority is to provide you with comfort by saving time and effort to securely book train ticket",
  ONE_CLICK_BOOKING: "One-click Booking",
  SAFETY: "Safety",
  ONLINE_PAYMENTS: "Online Payment",
  FAQ: "FAQs"
} as const;

const colors = {
  primary50: '#FEF4EE',
  primary500: '#EA4E22',
  primary600: '#DC381A',
  secondary50: '#f5f5f6',
  secondary100: '#e4e5e9',
  secondary300: '#AAAEB6',
  secondary400: '#7f8591',
  secondary500: '#646976',
  green100: "#dbf0e5",
  green600: "#276955"
} as const;

export { texts, messages, labels, routes, colors }