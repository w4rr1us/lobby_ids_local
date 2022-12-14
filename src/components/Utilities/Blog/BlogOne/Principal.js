import React from 'react';
import bgImg from '../../../../assets/img/bg/blog-bg.png';
import blogImg1 from '../../../../assets/img/blog/fortress.png';
import BlogCardFull from "../BlogCardFull";

const blogData = [
    {
        id: '1',
        thumb: blogImg1,
        title: 'FORTRESS',
    },
];
const Principal = () => {
    return (
        <section id="blog" className="blog-area">
            <div className="container">
                <div className="row">
                    <BlogCardFull blogData={blogData} />
                </div>
            </div>
        </section>
    )
}
export default Principal;