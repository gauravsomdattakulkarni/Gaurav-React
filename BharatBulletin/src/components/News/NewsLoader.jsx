import React from 'react'

function NewsLoader() {
    async() => {
        const news_data = await(fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=aae72716d956483886c899f0f01045d8"))
    }
  return news_data.json()
}

export default NewsLoader