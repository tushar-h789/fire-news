import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard'

const Category = () => {
  const categoryNews = useLoaderData()
  return (
    <>
      <div>This is category has: {categoryNews.length}</div>
    {
      categoryNews.map(news => <NewsSummaryCard
        key={news._id}
        news ={news}
      ></NewsSummaryCard>)
    }
    </>
  )
}
export default Category