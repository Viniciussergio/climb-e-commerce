import styled from 'styled-components';
import img from '../../assets/images/bg1.jpg';

export const MainPage = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${img});

    margin: 0px;
    padding: 0px;
`

export const SalesPage = styled.section`
    height: 200vh;
    width: 100%;

    margin: 0px;
    padding: 0px;

    h1 {
        font-size: 50px;
        text-align: center;
    }
`

export const Container = styled.div`
    height: 50%;
    width: 80%;
    margin: auto;

    section {
        display: grid;
        flex-wrap: wrap;

        justify-content: space-between;

        height: 78%;
        width: 100%;
        background: #e3e2;
        border-radius: 12px;
        display: flex;

        .product-content{
            margin: 4px;
            display:grid;
            justify-content: center;
            text-align: center;
            height: 300px;
            width: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
        }
    }
`

export const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;

        height: 100%;
        font-weight: 900;
        font-size: 50px;
        color: white;
        border: solid 2px white;

        div {
            height: 60%;
            margin-left: 50px;
            margin-right: 50px;
        }
    }

    .menu-div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        margin-right: 30px;

        .menu-items {
            display: flex;
            align-items: center;

            height: 60%;
            margin-left: 20px;
            margin-right: 20px;
            color: white;
            font-weight: 900;

            text-align: center;
            font-size: 30px;
        }
    }
`