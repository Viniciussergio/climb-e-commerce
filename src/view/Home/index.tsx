import React, { useEffect, useState } from 'react';
import * as S from './style';
import { sapatilha, mochilas } from './test';

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
}

const Home: React.FC = () => {
    const [shoes, setShoes] = useState<IProduct[]>([]);
    const [packs, setPacks] = useState<IProduct[]>([]);

    useEffect(() => {
        setShoes(sapatilha);
        setPacks(mochilas);
    }, []);
    
    console.log(shoes);

    const handleShoeCart = (index: number) => {
        const productStore = JSON.stringify(shoes[index]);

        localStorage.setItem(`@Produto-Sapatilha(${index})`, productStore);
    }

    const handlePackCart = (index: number) => {
        const productStore = JSON.stringify(packs[index]);

        localStorage.setItem(`@Produto-Mochila(${index})`, productStore);
    }

    return (
        <>
            <S.MainPage>
                <S.Header role="banner">
                    <div className="logo-div">
                        <div>
                            <img 
                            src="https://jobs.gama.academy/assets/novo-logo-horizontal-b27eeb6004e3ed7893043bc7a077c267080ebc34a7054e2550367534ca831a6b.png" 
                            alt="Logo" />
                        </div>
                    </div>
                    <div className="menu-div">
                        <a href="/" className="menu-items"> Saiba mais </a>
                        <a href="/" className="menu-items"> Home </a>
                        <a href="/" className="menu-items"> Compras </a>
                        <a href="/" className="menu-items"> Perfil </a>
                    </div>
                </S.Header>
            </S.MainPage>

            <S.SalesPage>
                <S.ShoeContainer>
                    <h1>Sapatilhas</h1>
                    <section >
                        {shoes.map((prod, index) => (
                            <div className="product-content" key={prod.id}>
                                <img src={prod.photo} alt="iphone" width="200px" height="auto"/>
                                <h4>{prod.name}</h4>
                                <span>{prod.description}</span>
                                <h6>{prod.price}</h6>
                                <button onClick={() => handleShoeCart(index)}>Adicionar ao Carrinho</button>
                            </div>
                        ))}
                    </section>
                </S.ShoeContainer>
            </S.SalesPage>
            <S.SalesPage>
                <S.PackContainer>
                    <h1>Mochilas</h1>
                    <section >
                        {packs.map((prod, index) => (
                            <div className="product-content" key={prod.id}>
                                <img src={prod.photo} alt="iphone" width="200px" height="auto"/>
                                <h4>{prod.name}</h4>
                                <span>{prod.description}</span>
                                <h6>{prod.price}</h6>
                                <button onClick={() => handlePackCart(index)}>Adicionar ao Carrinho</button>
                            </div>
                        ))}
                    </section>
                </S.PackContainer>
            </S.SalesPage>
        </>
    );
}

export default Home;