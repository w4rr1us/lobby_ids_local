import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogData }) => {
    return (
        <Fragment>
            {
                blogData.map(data => {
                    const { id, thumb, title, admin, date, excerpt, url, target } = data;
                    return (
                        <div className="col-lg-4 col-md-6" key={id}>
                            <div className="single-post2 mb-30  p-relative wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <a href="{url}">
                                        <img src={thumb} alt="img" />
                                    </a>
                                </div>
                                <div className="blog-content2">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4><a href={url} target={target}>{title}</a></h4>
                                            <div className="b-meta">
                                                <div className="meta-info">
                                                </div>
                                            </div>
                                            <p>{excerpt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
export default BlogCard;