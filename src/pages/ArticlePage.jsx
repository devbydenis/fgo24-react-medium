import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

function ArticlePage() {
  const {username, slug} = useParams();
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
    <div className="p-5">
      {/* <h1 className='text-6xl font-bold'>JUDUL</h1>
      <p className='text-gray-500'>{username}</p>
      <p className='text-gray-500'>{slug}</p> */}
      {data &&
        data
          .filter((article) => article.slug === slug)
          .map((article) => (
            <div key={article.slug}>
              <h1 className="text-6xl font-bold">{article.title}</h1>
              <p className="text-gray-500 my-5">{article.username}</p>
              <p className="text-black">{article.body}</p>
            </div>
          ))}
    </div>
  );
}

export default ArticlePage;
