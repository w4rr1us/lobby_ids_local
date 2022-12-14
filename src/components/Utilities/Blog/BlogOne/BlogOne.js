import React from 'react';
import bgImg from '../../../../assets/img/bg/blog-bg.png';
import blogImg1 from '../../../../assets/img/blog/1.png';
import blogImg2 from '../../../../assets/img/blog/2.png';
import blogImg3 from '../../../../assets/img/blog/3.png';
import BlogCard from "../BlogCard";

const blogData = [
    {
        id: '1',
        thumb: blogImg1,
        title: 'Upcoming Events',
        admin: 'Admin',
        date: '24th March 2021',
        excerpt: '',
        url: '/',
        target: '',
    },
    {
        id: '2',
        thumb: blogImg2,
        title: 'Lasted Highlight',
        admin: 'Admin',
        date: '24th March 2021',
        excerpt: '',
        url: '/',
        target: '',
    },
    {
        id: '3',
        thumb: blogImg3,
        title: 'Hallow’s End Collection',
        admin: 'Admin',
        date: '24th March 2021',
        url: 'https://entrepot.app/sale/hallows-end',
        excerpt: '',
        target: '',
    },
];
const BlogOne = () => {
    return (
        <section id="blog" className="blog-area" style={{ background: `url(${bgImg}) no-repeat right bottom` }}>
            <div className="container">
                <div className="row">
                    <BlogCard blogData={blogData} />
                </div>
            </div>
        </section>
    )
}
export default BlogOne;