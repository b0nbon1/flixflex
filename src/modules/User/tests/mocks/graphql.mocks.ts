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
