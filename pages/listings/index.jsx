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
      availability, 
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
  const [activeTag, setActiveTags] = React.useState("All");
  const [filteredProperties, setFilteredProperties] = React.useState([...propertyListings]);

  const tags = [
    {displaytext: "ALL", tag: "All"},
    {displaytext: "NOW SELLING", tag: "Now Selling"},
    {displaytext: "COMING SOON", tag: "Coming Soon"},
    {displaytext: "SOLD", tag: "Sold"},
  ]

  const availabilityTags = (x) => {
    if (x == "now_selling"){
      return 'Now Selling'
    } else if (x == "coming_soon"){
      return "Coming Soon"
    } else {
      return "Sold"
    }
  }

  const updateFilteredProperties = (x) => {
    if(x !== "All"){
      const newProperties = propertyListings.filter((property) => availabilityTags(property.availability) === x);
      setFilteredProperties([...newProperties]);
    } else {
      setFilteredProperties([...propertyListings]);
    }


  }

  return (
    <MainLayout>
        <div className='listings-page'>
            <div className="container">
              <div className="banner">
                <h1>Get In Early</h1>
                <h1>Get In Cheaper</h1>
              </div>
              <div className="listings-container">
                <div className="listing-tags">
                  {tags.map(({displaytext, tag}, i) => (
                    <p  className={`${activeTag === tag? "active-tag" : ""} listing-tag`} key={i} onClick={() => {
                      updateFilteredProperties(tag);
                      setActiveTags(tag);
                    }}>{displaytext}</p>
                  ))}
                </div>
                <div className="listings-div">
                  {
                    filteredProperties.map(({id, title}) => (
                      <div className="listing-card" key={id}>{title}</div>
                    ))
                  }
                </div>
              </div>
            {/* {propertyListings.map(({title, id}) => (
                <h1 key={id}>{title}</h1>
            ))} */}
            </div>
            
        </div>
    </MainLayout>
    
  )
}

export default ListingsPage;