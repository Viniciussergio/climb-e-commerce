import styled from 'styled-components';
import bgMainPage from '../../assets/images/bg1.jpg';
import bgShoePage from '../../assets/images/bg2.jpg';
import bgPackPage from '../../assets/images/bg3.jpg';



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
        font-weight: 900;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    }
`

export const ShoeContainer = styled.div`
    height: 100%;
    width: 80%;
    margin: auto;

    section {
        display: grid;
        flex-wrap: wrap;

        justify-content: space-between;

        height: 80%;
        width: 100%;
        border-radius: 12px;
        display: flex;
        background-image: url(${bgShoePage});

        .product-content{
            margin: 13px;
            display:grid;
            justify-content: center;
            text-align: center;
            height: 280px;
            width: 280px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 12px;
            padding: 12px;
        }
    }
`

export const PackContainer = styled.div`
    height: 100%;
    width: 80%;
    margin: auto;

    section {
        display: grid;
        flex-wrap: wrap;

        justify-content: space-between;

        height: 80%;
        width: 100%;
        border-radius: 12px;
        display: flex;
        background-image: url(${bgPackPage});
        background-position: center;
        background-size: cover;

        .product-content{
            margin: 13px;
            display:grid;
            justify-content: center;
            text-align: center;
            height: 280px;
            width: 280px;
            background: rgba(255, 255, 255, 0.8);
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
        margin-left: 0px;

        height: 100%;
        font-weight: 900;
        font-size: 50px;
        color: white;

        div {
            height: 60%;
            margin-left: 0px;
            margin-right: 50px;

            img {
                width: 350px;
                height: auto;
            }
        }
    }

    .menu-div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        margin-right: 30px;
        margin-top: 55px;

        .menu-items {
            display: flex;
            align-items: center;

            height: 60%;
            margin-left: 20px;
            margin-right: 20px;
            color: white;
            font-weight: 900;

            text-align: center;
            text-decoration: none;
            font-size: 30px;
        }
    }
`