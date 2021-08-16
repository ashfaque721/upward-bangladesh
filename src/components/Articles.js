import React, { Component } from 'react';

const article = [
    {
        title: 'E',
        content: 'সময়ের স্রোতে এগিয়ে চলা বিশ্বে প্রযুক্তির কল্যাণে আমরা যত কাছাকাছি আসছি, সবুজে ঘেরা নির্মল প্রকৃতি যেন ততই দূরে সরে যাচ্ছে আমাদের কাছ থেকে। আজ, ৫ই জুন, ৪৯ তম বিশ্ব পরিবেশ দিবস। ১৯৭২ সালে স্টকহোমে পালিত এই দিনটির স্মরণে গত প্রায় অর্ধ শতাব্দী ধরে পালিত হয়ে আসছে এই দিবস। এবারের পরিবেশ দিবসের প্রতিপাদ্য, ‘ Ecosystem Restoration’ যার বাংলা ভাবানুবাদ ‘প্রতিবেশ সংরক্ষণ ও পুনরুদ্ধার’।',
        image: '',
        link: ''
    }
]
class Articles extends Component {
    render() {
        return(
            <div class="container py-lg-5 py-md-4 py-2">
                <div class="row">
                    <div class="col-lg-8 about-right-faq align-self">
                        <h3 class="title-big mx-0">{article.title}</h3>
                        <p class="mt-lg-4 mt-3"></p>
                        <a class="btn btn-style btn-primary mt-lg-5 mt-4" href="https://www.facebook.com/UpwardBD/posts/317607989959926"> Continue Reading</a>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-5">
                        <img src="article/2.jpg" alt="" class="img-fluid radius-image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Articles;