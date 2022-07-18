/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
// @ts-ignore
import { Helmet } from "react-helmet"

interface props {
  description: string;
  lang: string;
  meta: any;
  title: string;
}

function Seo({ description, lang, meta, title }: props) {
  const metaDescription =
    description ||
    "Mancho Devs (ОсОО «Прораб») - это стартап, основанный в Бишкеке в феврале 2021 года Эсеном Сагыновым, разработчиком одной из крупнейших компаний в мире ..."

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
}

export default Seo
