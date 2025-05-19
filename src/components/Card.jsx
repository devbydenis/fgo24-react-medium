import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Card(props) {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("test")
    navigate(`/article/@${props.username}/${props.slug}`)
  }

  return (
    <>
      <div className="card flex gap-4 rounded border border-gray-3git00 p-2 m-2">
        {/* <img src={props.img} className="w-50 h-40 aspect-auto object-fit" alt="..." /> */}
        <div style={{backgroundImage: `url(${props.img})`}} className='w-50 h-40 bg-contain bg-center rounded'> </div>
        <div className="card-body flex flex-col gap-2">
          <small>{props.username}</small>
          <h5 className="card-title font-bold text-2xl">{props.title}</h5>
          <p className="card-text text-gray-500">{(props.body).substring(0, 80)}...</p>
          <p className="w-fit p-1 rounded bg-black text-white hover:bg-white hover-text-black hover:border border-black hover:text-black cursor-pointer" onClick={() => handleClick()}>Read more</p>
        </div>
      </div>
    </>
  )
}

export default Card