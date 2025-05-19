import React, { useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function HomePage() {
  const [data, setData] = React.useState([])
  const [searchParam, setSearchParam] = useSearchParams()
  const {register, handleSubmit} = useForm()
  // const [inputField, setInputField] = React.useState('')

  // console.log(inputField);

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
      <Navbar />
      <main className='flex flex-col items-center '>
        <form onSubmit={handleSubmit((data) => setSearchParam({search: data.search}))}>
          <input className='border border-gray-300 rounded p-2' type="text" placeholder='Search' {...register('search')} />
          <button type='submit' className='hidden'>Search</button>
        </form>
        {
          searchParam.get("search") && <p>Hasil Pencarian dari <span className='font-bold'>{searchParam.get("search")}</span></p>
        }
        <ul className=''>
        {
          searchParam.get("search") 
            ? data
                .filter(article => article.title.toLowerCase().includes(searchParam.get("search").toLowerCase()))
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
      </main>
    </>
  )
}

export default HomePage