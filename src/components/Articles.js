import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { content } from './ArticleItems';
import './assets/css/articles.css';
const Articles = () => {
    useEffect(() => {
        Aos.init({duration: 2500});
    });
    return (
        <div className="container">
            <h1 className="text-center title3">Articles</h1>
            {content.map((article, index) => {
                return (
                    <div className="container py-lg-5 py-md-4 py-2 article-container"  data-aos="fade-down" key={index}>
                        <div className="row">
                            <div className="col-lg-8 about-right-faq align-self">
                                <h3 className="article-header">{article.title}</h3>
                                <p className="mt-lg-4 mt-3">{article.text}</p>
                                <a className="btn article-btn mt-5 mb-5" href={article.link} target="_blank" rel="noreferrer">Continue Reading</a>
                            </div>
                            <div className="col-lg-4 mt-lg-0">
                                <img src={article.img} alt={article.title} className="img-fluid radius-image visible-md" />
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Articles;