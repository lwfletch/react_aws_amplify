/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      explanation
      answers
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions($limit: Int, $nextToken: String) {
    listQuestions(limit: $limit, nextToken: $nextToken) {
      nextToken
      items {
        id
        text
        explanation
        answers
      }
    }
  }
`;
