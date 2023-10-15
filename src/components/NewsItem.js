import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className=" my-3">
        <div className="card h-100" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zindex:'1'}}>{source}
                
                </span>
          <img
            src={
              !imageUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQdma6SJigRVl7q3BNhW9IYBfoY1Az-4JKQ&usqp=CAU"
                : imageUrl
            }
            className="card-img-top" style={{ height: 200}}
            alt="..."
          />
          <div className="card-body" style={{backgroundColor: "#edebdf", height: 300}}>
            <h4 className="card-title">
              {title}...
              
            </h4>
            <h5 className="card-text" style={{color: "gray"}}>{description}...</h5>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
