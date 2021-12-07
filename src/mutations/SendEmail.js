import { gql } from "@apollo/client";

export const SEND_EMAIL = gql`
  mutation sendEmail($input: BusinessInput!) {
    sendEmail(input: $input) {
      message
      success
      error
    }
  }
`;
