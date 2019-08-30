import React, { Component } from 'react'
import { BuyWrapper } from "./styled"
import { Button } from "antd";
export default class BuyTick extends Component {
    render() {
        let { id } = this.props.match.params
        return (
            <BuyWrapper>
                <div className="bottom-con" ref='buy'  >
                    <div className="kf">客服</div>
                    <div className="buy" onClick={this.buyTic.bind(this, id)}>直接购买</div>
                </div>
                <div className="buyNow" ref="buyNow"  onClick={this.hiddenHandler.bind(this, id)}>
                        
                </div>
                <div className='buyBox'>

                </div>
            </BuyWrapper>
        )
    }
    buyTic(id) {
        this.refs.buyNow.style.zIndex = 10;
        this.refs.buyNow.nextElementSibling.style.height = "60%"
    }
    hiddenHandler() {
        this.refs.buyNow.style.zIndex = -1;
        this.refs.buyNow.nextElementSibling.style.height = 0
    }
}
