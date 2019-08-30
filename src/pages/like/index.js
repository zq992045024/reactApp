import React, { Component } from 'react'
import Header from "@common/headBar/header.js"
import { Collect } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchProps } from "./connect";
class Ticket extends Component {
    render() {
        let { likeList } = this.props.users
        console.log(likeList)
        return (
            <Collect>
                <Header title='票夹' />
                <div className="collect">
                {
                    likeList.map((item, index) => (
                        
                            <div className="collect-list"  key={index}>
                                <div className="list-img">
                                    <img src={item.poster} alt="" />
                                </div>
                                <div className="list-info">
                                    <h3>{item.name}</h3>
                                    <p>{item.timeRange}</p>
                                    <div className="info_">
                                        <span>{item.venueName}</span>
                                    </div>
                                </div>
                            </div>
                        
                    ))
                }
                </div>
            </Collect>
        )
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Ticket)
