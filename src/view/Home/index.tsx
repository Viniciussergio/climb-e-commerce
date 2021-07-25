import React, { useEffect, useState } from 'react';
import * as S from './style';
import api from '../../services/api';
import { produtos } from './test';

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
        setData(produtos);
    }, []);

    const item1 = data[0];
    
    console.log(data);
    console.log(produtos);

    const handleCart = (index: number) => {
        const productStore = JSON.stringify(data[index]);

        localStorage.setItem(`@Produto-${index}`, productStore);
    }

    return (
        <>
            <S.MainPage>
                <S.Header role="banner">
                    <div className="logo-div">
                        <div>
                            LOGO
                        </div>
                    </div>
                    <div className="menu-div">
                        <div className="menu-items"> Saiba mais </div>
                        <div className="menu-items"> Home </div>
                        <div className="menu-items"> Compras </div>
                        <div className="menu-items"> Perfil </div>
                    </div>
                </S.Header>
            </S.MainPage>

            <S.SalesPage>
                <S.Container>
                    <h1>Sapatilhas</h1>
                    <section >
                        {data.map((prod, index) => (
                            <div className="product-content" key={prod.id}>
                                <img src={prod.photo} alt="iphone" width="200px" height="auto"/>
                                <h4>{prod.name}</h4>
                                <span>{prod.description}</span>
                                <h6>{prod.price}</h6>
                                <button onClick={() => handleCart(index)}>Adicionar ao Carrinho</button>
                            </div>
                        ))}
                    </section>
                </S.Container>
            </S.SalesPage>
            <S.SalesPage>
                <S.Container>
                    <h1>Mochilas</h1>
                </S.Container>
            </S.SalesPage>
        </>
    );
}

export default Home;