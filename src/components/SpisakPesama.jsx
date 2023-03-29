import React from "react"
import '../assets/css/spisak-pesama.scss'
import '../assets/css/pocetna.scss'
import '../assets/css/lista-pesama.scss'

import { graphql, useStaticQuery, Link } from 'gatsby'
import slugify from "slugify"


// const query = graphql`
// query {
//     allContentfulPesma(sort: {datum: ASC}) {
//         nodes {
//             title
//             datum(locale: "sr")
//             id
//         }
//     }
// }
// `


const query = graphql`
  query {
    allContentfulPesme(sort: {datum: ASC}) {
      nodes {
        naslov
        datum(formatString: "D.M.YYYY.")
        id
        pesma1 {
            pesma1
        }
      }
    }
  }
`


 const SpisakPesama = () => {

    // const data = useStaticQuery(query)

    // const pesme = data.allContentfulPesma.nodes

    const data = useStaticQuery(query)

    const pesme = data.allContentfulPesme.nodes

  
    return (
        <>
       
        {/* <div className="lista-pesama">
          {pesme.map(pesma => (

            <Link to={`${slugify(pesma.naslov,{lower:true})}`} key={pesma.id}>
              <h1>{ pesma.title }</h1>
            </Link>
          ))}
  
        </div>  */}

          <div className="lista-pesama">

            {pesme.map(pesma => {
                const { naslov, id } = pesma
                const slug = slugify(naslov, {lower:true})

                return (
                    <Link key={id} to={`/${slug}`}><h1>{pesma.naslov}</h1></Link>
                )
            })}

          </div>

        </>
    )
  }

  export default SpisakPesama


