import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source, theme } = this.props;

    // Set styles/classes based on theme
    const isDark = theme === 'dark';
    const cardThemeClass = isDark ? 'bg-dark text-light border-light' : 'bg-light text-dark border-dark';
    const textMutedClass = isDark ? 'text-light' : 'text-muted';
    const buttonThemeClass = isDark ? 'btn-light' : 'btn-dark';

    return (
      <div className="mb-4">
        <div className={`card ${cardThemeClass}`}>
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
              <small className={textMutedClass}>
                By <strong>{author ? author : "Unknown"}</strong> | Source: <strong>{source}</strong><br />
                Published on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-sm ${buttonThemeClass}`}
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
