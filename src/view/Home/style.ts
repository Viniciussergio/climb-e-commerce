import styled from 'styled-components';
import bgMainPage from '../../assets/images/bg1.jpg';
import bgShoesContainer from '../../assets/images/bg2.jpg';

export const MainPage = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${bgMainPage});

    margin: 0px;
    padding: 0px;
`

export const SalesPage = styled.section`
    height: 100vh;
    width: 100%;

    margin: 0px;
    padding: 0px;

    h1 {
        font-size: 70px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    }
`

export const Container = styled.div`
    height: 100%;
    width: 80%;
    margin: auto;

    section {
        display: grid;
        flex-wrap: wrap;

        justify-content: space-between;

        height: 78%;
        width: 100%;
        border-radius: 12px;
        display: flex;
        background: pink;

        .product-content{
            margin: 4px;
            display:grid;
            justify-content: center;
            text-align: center;
            height: 300px;
            width: 300px;
            background: rgba(255, 255, 255, 0.9);
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