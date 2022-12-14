import React from 'react';
import bgImg from '../../../../assets/img/bg/blog-bg.png';
import blogImg1 from '../../../../assets/img/blog/news.png';
import BlogCardSecundario from "../BlogCardSecundario";

const blogData = [
    {
        id: '1',
        thumb: blogImg1,
        title: 'Updates And News',
    },
];
const News = () => {
    return (
        <section id="blog" className="blog-area">
            <div className="container">
                <div className="row">
                    <BlogCardSecundario blogData={blogData} />
                </div>
            </div>
        </section>
    )
}
export default News;