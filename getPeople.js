import gql from 'graphql-tag';
 
export default gql`
query listPeople {
  listPeople  {
    items {
      name
      age
      id
    }
  }
}`