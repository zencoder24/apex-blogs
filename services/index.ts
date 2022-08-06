import {request, gql} from 'graphql-request'


const strapiAPI = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT

export const getBlogs = async () => {
    const query = gql` 
    query MyQuery {
        blogs {
          data {
            attributes {
              createdAt
              slug
              title
              description
              featureImage{
                data{
                  attributes{
                    url
                  }
                }
              }
              categories{
                data{
                  attributes{
                    Name
                    Slug
                  }
                }
              }
              author {
                data {
                  id
                  attributes {
                    Bio
                    Name
                    Photo {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      
    `
}