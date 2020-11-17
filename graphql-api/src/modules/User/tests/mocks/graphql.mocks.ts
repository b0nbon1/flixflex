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

export const ProfileQuery = `
  query {
    profile {
      id
      name
      active
      email
    }
  }
`;

export const AllUsersQuery = `
  query {
    allUsers {
      id
    }
  }
`;

export const ProfileMutation = `
mutation Update($data: ProfileInput!) {
  updateProfile(data: $data) {
    id
    name
    active
    email
  }
}
`;
