import React, { Component } from 'react'
import { contentMenu } from './MenuArticleItems';
class MenuArticles extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center title3">Featured Articles</h1>
                {contentMenu.map((article, index) => {
                    return (
                        <div class="container py-lg-5 py-md-4 py-2 article-container" key={index}>
                            <div class="row">
                                <div class="col-lg-8 about-right-faq align-self">
                                    <h3 class="article-header">{article.title}</h3>
                                    <p class="mt-lg-4 mt-3">{article.text}</p>
                                    <a class="btn article-btn mt-5 mb-5" href={article.link} target="_blank" rel="noreferrer">Continue Reading</a>
                                </div>
                                <div class="col-lg-4 mt-lg-0">
                                    <img src={article.img} alt={article.title} class="img-fluid radius-image visible-md" />
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="text-center">
                    <a href="/articles"><button className="a text-center">View Articles</button></a>
                </div>
                <hr />
            </div>
        )
    }
}

export default MenuArticles;