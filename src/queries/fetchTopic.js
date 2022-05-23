import gql from 'graphql-tag';

export default gql`
  query GetTopic($name: String!) {
    topic(name: $name) {
      name
      stargazerCount
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
    }
  }
`;