import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    articles :  {
        name: string;
        title: string;
        content: string[];
    }[]
}

const ArticleList = (props: Props) => {
    const {articles} = props;
  return (
    <>
    {articles.map((article) => (
        <Link to={`/articles/${article.name}`} key={article.name}>
          <h1>{article.title}</h1>
          <p>{article.content[0].substring(0, 150)}</p>
        </Link>
      ))}
    </>
  )
}

export default ArticleList
