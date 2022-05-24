# GitHub Topic Explorer - STARGAZER

The STARGAZER project is a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to a search term, along with how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic will display the topics related to that topic.

## API

This application uses the [GitHub GraphQL API](https://docs.github.com/en/graphql) to query topics and display its related topics. 

### To Get Started

Clone the repo and CD into 'stargazer'.

Copy the `.env.example` file to `.env` and insert a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) at `REACT_APP_GITHUB_API_TOKEN=`.

#### `yarn install`

#### `yarn start`

### To Test

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Dev Notes

The App component is broken down into three main components under the StargazerContent container component: Search, Topic, and TopicList. 

### Libraries and Tools

The Search component utilizes [Semantic UI](https://semantic-ui.com/) and [Materialize](https://materializecss.com/) for the input and search button.

[Apollo Client](https://www.apollographql.com/docs/#apollo-client) is the GraphQL interface used to fetch, cache, and manage the data. 

### Future Improvements

* Code Structuring:

This is my first application using GraphQL. I could improve on how the queries and Apollo client are organized in the source client. 

In a larger application I would likely have subdirectories for pages with their own components directories. 

* Refactoring:

I would spend more time on the TopicList component list items. On hover/focus/active over only the topic names might not be enough for call-to-action. I would make the entire list item more interactive. 

* Additional Features:

I would like to implement autofill for the search bar's input using only relevant search terms. 