import { useState, useEffect } from "react";
import { getNews } from "../../apiCall/external";
import styles from "./Home.module.css";
import Loader from "../../Components/Loader/Loader";
function Home() {
    const [articles, setArticles] = useState([]);

  useEffect(() => {
    newsApiCall();

    setArticles([]);
  }, []);

  const newsApiCall = async () => {
    const response = await getNews();
    setArticles(response);
  };

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  if (articles.length === 0) {
    return <Loader text="homepage" />;
  }

  return (
    <>
      <div className={styles.header}>Latest Articles</div>
      <div className={styles.grid}>
        {articles.map((article) => (
          <div
            className={styles.card}
            key={article.url}
            onClick={() => handleCardClick(article.url)}
          >
            <img src={article.urlToImage} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
