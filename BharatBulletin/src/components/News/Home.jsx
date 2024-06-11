import React ,{useState ,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

function Home() {
    const [loading, setLoading] = useState(true);
    const newsData = useLoaderData();
  
    useEffect(() => {
      if (newsData && newsData.articles) {
        setLoading(false);
      }
    }, [newsData]);
  
    return (
      <>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="spinner-border text-primary" role="status">
              
            </div>
          </div>
        ) : (
          <div className="row my-3 mx-3 mb-3" style={{ padding: "10px", margin: "10px" }}>
            {newsData.articles.map((news) => (
              news.description != null ? (
                <div key={news.title} className="col-md-4 card my-3" style={{ margin: "0px" }}>
                  <img className="card-img-top my-2" src={news.urlToImage ? news.urlToImage : logo} style={{ height: "250px" }} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">
                      {news.description ? news.description.split(' ').slice(0, 15).join(' ') : ""}
                      {news.description && news.description.split(' ').length > 15 ? "..." : ""}
                    </p>
                    <a target="_blank" href={news.url} className="btn btn-primary">Read More</a>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        )}
      </>
    );
  }
  
  export default Home;

export const NewsLoader = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=aae72716d956483886c899f0f01045d8");
    const news_data = await response.json();
    return news_data;
}
