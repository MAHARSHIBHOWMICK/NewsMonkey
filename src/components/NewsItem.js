import React from 'react'

export default function NewsItem(props) {
    let {title, description , imgUrl ,  newsUrl , author , date, source }=props;
    return (
      <div>
        <div className="card">
          <div style={{display : 'flex' , justifyContent : 'flex-end' , right:"0", position: "absolute"}}> 

        <span className="badge rounded-pill bg-danger" >{source}</span>
          </div>
            <img src={!imgUrl?"https://sportsfly.cbsistatic.com/fly-0911/bundles/sportsmediacss/images/fantasy/default-article-image-large.png":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

