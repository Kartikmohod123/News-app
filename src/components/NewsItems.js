import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="mb-4">
        <div className="card">
           <span className="badge rounded-pill bg-danger position-absolute top-0 end-0 m-2">
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/108161615-1750405639478-gettyimages-2203400833-PORTUGAL_EUTELSAT.jpeg?v=1750405649&w=1480&h=833&ffmt=webp&vtcrop=y"
                : imageUrl
            }
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{author ? author : "Unknown"}</strong> | Source: <strong>{source}</strong><br />
                Published on {new Date(date).toGMTString()}
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

export default NewsItems;
