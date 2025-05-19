import React, { useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function HomePage() {
  const [data, setData] = React.useState([])
  const [searchParam, setSearchParam] = useSearchParams()
  const {register, handleSubmit} = useForm()
  const filterredData = data.filter(article => article.title.toLowerCase().includes(searchParam.get('search')))

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

  useEffect(() => {
    console.log(searchParam.get('search'));
  }, [searchParam])

  const showData = () => {
    return (
      data && data.map(article => (
        <li key={article.slug}>
          <Card {...article} />
        </li>
      ))
    )
  }

  return (
    <>
      <section className='flex flex-col items-center '>
        <form onSubmit={handleSubmit((data) => setSearchParam({search: data.search}))}>
          <input className='border border-gray-300 rounded p-2' type="text" placeholder='Search' {...register('search')} />
          <button type='submit' className='hidden'>Search</button>
        </form>
        {
          searchParam.get("search") && <p className='mt-5'>Hasil Pencarian dari <span className='font-bold'>{searchParam.get("search")}</span></p>
        }
        {
          filterredData.length === 0 && searchParam.get("search") && <p className='my-10 h-screen'>Tidak ada hasil pencarian</p>
        }
        <ul className=''>
        {
          searchParam.get("search") 
            ? filterredData
                .map(article => (
                  <li key={article.slug}>
                    <Card {...article} />
                  </li>
                )) 
            : showData()
        }
        {
          // data && data.map(article => (
          //   <li key={article.slug}>
          //     <Card {...article} />
          //   </li>
          // ))          
        }
        </ul>
      </section>
    </>
  )
}

export default HomePage