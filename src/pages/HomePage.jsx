import React, { useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

function HomePage() {
  const [data, setData] = React.useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/ListArticle.json')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center '>
        <ul className=''>
        {
          data && data.map(article => (
            <li key={article.slug}>
              <Card {...article} />
            </li>
          ))
        }
        </ul>
      </main>
    </>
  )
}

export default HomePage