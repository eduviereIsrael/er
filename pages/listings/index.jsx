import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import MainLayout from "../../components/MainLayout"


const graphCms = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/cle3apban0jyl01uh6btpejkt/master");

const QUERY = gql`
  {
    propertyListings{
      id,
      address,
      slug,
      title,
      coverImage {
        url
      },
      shortInfo
    }
  }
`;

export async function getStaticProps(){
    const {propertyListings} = await graphCms.request(QUERY);

    return {
      props: {
        propertyListings,
      },
      revalidate: 10,
    }
}

const ListingsPage = ({propertyListings}) => {
  return (
    <MainLayout>
        <div className='listings-page'>
            <div className="container">
            {propertyListings.map(({title, id}) => (
                <h1 key={id}>{title}</h1>
            ))}
            </div>
            
        </div>
    </MainLayout>
    
  )
}

export default ListingsPage;