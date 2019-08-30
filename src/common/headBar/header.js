import React, { Component } from 'react'
// import Wrapper from "./headHoc"
import { Header } from "./styled"
import { withRouter } from "react-router-dom"
 class header extends Component {

    render() {
        return (
            <Header>
                <div className="iconfont" onClick={this.handleBack.bind(this)}>&#xe699;</div>
                <h2>{this.props.title}</h2>
            </Header>

        )
    }
    handleBack() {
        this.props.history.goBack()
    }
}

export default withRouter(header)