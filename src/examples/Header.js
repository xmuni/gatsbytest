import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const myquery = graphql`
{
    site {
      info:siteMetadata {
        title
        person {
          name
        }
      }
    }
}`;

const Header = () => {

    // const data = useStaticQuery(myquery);
    // const {site: {siteMetadata: {title,person: {name},},},} = useStaticQuery(myquery);
    const {
        site: {
            info: {
                title,
                person: {name},
            }
        }
    } = useStaticQuery(myquery);

    // console.log(data);

    return (
        <div>
            {/* <h2>{data.site.siteMetadata.person.name}</h2> */}
            <hr/>
            <p>GraphQL result:</p>
            <h4>Title: {title}</h4>
            <h4>Name: {name}</h4>
        </div>
    )
}

export default Header
