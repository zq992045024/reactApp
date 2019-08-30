import styled from 'styled-components'

export const BuyWrapper = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    top:0rem;
    background:#fff;
    .bottom-con {
        height: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        .kf {
            width: 1.2rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
        }
        .buy {
            background-color: #ff2661;
            flex: 1;
            font-size: .32rem;
            line-height:1rem;
            height: 100%;
            color: #fff;
            text-align: center;
            box-sizing: border-box;
        }
    }
    .buyNow{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        z-index:-1;
        transition: all 0.3s ease 0s;
        
}
.buyBox{
            height:0;
            width:100%;
            background:#fff;
            position:absolute;
            bottom:0;
            border-radius: 0.3rem 0.3rem 0 0;
            transition: all 0.3s ease 0s;
            z-index:11
        }
`