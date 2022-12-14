import bg from '../../../assets/img/bg/about-hd.png'
import { Link } from 'react-router-dom';
const Breadcrumb = ({ pageTitle, currentPage})=>{
    return(
        <section className="breadcrumb-area d-flex align-items-center" style={{background:`url(${bg}) no-repeat center center / cover`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="breadcrumb-wrap text-left">
                            <div className="breadcrumb-title">
                                <h2>{pageTitle}</h2>
                                <div className="breadcrumb-wrap">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to={'/'}>{'Home'}</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumb;