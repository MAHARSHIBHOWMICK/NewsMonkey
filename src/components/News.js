import React, {useEffect , useState } from 'react'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'


export default function News(props) {
    const [articles , setArticles] = useState([]);
    const [loading , setLoading] = useState(true);
    const [page , setPage] = useState(1);
    const [totalResults , setTotalResults] = useState(0);
    

    const capitalize = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updatePage = async()=>{
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data=  await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(50);
        // console.log(parseData);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        setArticles(parseData.articles);
        props.setProgress(100);
    }


    useEffect(()=>{
        document.title = `${capitalize(props.catagory)} - NeawsMonkey`;
        updatePage();
        // eslint-disable-next-line 
    }, []);
    

    const fetchMoreData = async() => {
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        setLoading(true);
        let data=  await fetch(url);
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
        setLoading(false);
      };

    
    



    return (
      <>
            <h2 className='text-center' style={{margin:'90px 0px'}}>NewsMonkey - Top {capitalize(props.catagory)} Headlines </h2>
            {loading && <Loading/>}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={articles.length < totalResults ? <Loading/> : null} // Loader only appears if there's more data
                >
                {/* {!loading && articles.map((element)=>{ */}
                    <div className="container">
                    <div className="row my-3">
                        {articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                            <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Internal Sources"} date={element.publishedAt?element.publishedAt.slice(0,10):""} source={element.source.name}/>
                        </div>
                        })}
                    </div>
                    </div>
            </InfiniteScroll>



            
            
            {/* <div className="container d-flex justify-content-between my-3">
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
                <button disabled={(page +1)> Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
      </>
    )
  
}

News.defaultProps = {
    country: "us",
    pageSize : 5,
    catagory : "general"
}
News.propTypes={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    catagory : PropTypes.string
}

