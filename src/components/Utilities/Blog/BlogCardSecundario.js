import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogCardSecundario = ({ blogData }) => {
    return (
        <Fragment>
            {
                blogData.map(data => {
                    const { id, thumb, title, admin, date, excerpt } = data;
                    return (
                        <div className="col-lg-12 col-md-12" key={id}>
                            <div className="single-post2 mb-30  p-relative wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="blog-thumb2-secundario">
                                    <a href="/">
                                        <img src={thumb} alt="img" width="1500px" />
                                    </a>
                                </div>
                                <div className="blog-content2">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4><Link to={'/'}>{title}</Link></h4>
                                            <div className="b-meta">
                                                <div className="meta-info">
                                                    <ul>
                                                        {/* <li>
                                                            <i className="fal fa-user"></i>
                                                            {admin}
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-calendar-alt"></i>{date}
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>{excerpt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </Fragment>
    )
}
export default BlogCardSecundario;