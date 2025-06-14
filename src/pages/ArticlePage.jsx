import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ArticlePage() {
  const {username, slug} = useParams();
  console.log('username di article', username);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/ListArticle.json");
        const data = await response.json();
        console.log(data);
        setData(data);
        
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="px-40 my-20 h-screen">
        {/* <h1 className='text-6xl font-bold'>JUDUL</h1>
        <p className='text-gray-500'>{username}</p>
        <p className='text-gray-500'>{slug}</p> */}
        {data &&
          data
            .filter((article) => article.slug === slug)
            .map((article) => (
              <div key={article.slug}>
                <img src={article.img} className="w-full" alt="" />
                <h1 className="text-6xl font-bold mt-5">{article.title}</h1>
                <p className="text-gray-500 my-5">Written by: {article.username}</p>
                <p className="text-black">{article.body}</p>
              </div>
            ))}
      </div>
    </>
  );
}

export default ArticlePage;
