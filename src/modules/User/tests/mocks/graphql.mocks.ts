export const registerMutation = `
mutation createUser($data: RegisterInput!) {
  register(
    data: $data
    ){
    id
    name
    phone
    email
  }
}
`;

export const verifyAccountMutation = `
mutation Verify($data: VerifyInput!) {
  verifyAccount(
    data: $data
  ){
   id
   name
   email
   phone
   active
  }
}
`;

export const resendVerificationMutation = `
mutation Resend($data: ResendInput!) {
  resendVerification(data: $data) {
    id
    name
    active
    email
    phone
  }
}
`;

export const loginUserMutation = `
mutation Login($password: String! $email: String! $phoneNumber: String!) {
  login(password: $password email: $email phoneNumber: $phoneNumber) {
    id
    name
    active
    email
    phone
  }
}
`;
