import React from "react";

const Member = ({ teamData }) => {
    return (
        <React.Fragment>
            {
                teamData?.map(data => {
                    const { id, avatar, name, wallet } = data;
                    return (
                        <div className="col-lg-12 col-md-12" key={id}>
                            <div className="single-team text-center mb-30 wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="container" Style="padding-left: 0px; padding-right: 0px">
                                    <div className="row">
                                        <div className="">
                                            <p>{name}</p>
                                            <p>Wallet Connected</p>
                                            <p Style="font-size: 12px;">{wallet}</p>
                                        </div>
                                        <div className="col-sm no-pd">
                                            <div className="team-thumb">
                                                <div className="mxw150 mxh150">
                                                    {/* <img className="mxw150 mxh150" src={avatar} alt={'Avatar'} /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    );
}
export default Member;