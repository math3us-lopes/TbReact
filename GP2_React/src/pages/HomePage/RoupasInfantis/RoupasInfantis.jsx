import React, { useState } from 'react';
import './RoupasInfantis.css';

const RoupasInfantis = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [zoomed, setZoomed] = useState(false);

    const products = [
        { id: 1, name: "Jardineira Infantil em Moletom com Estampa de Carros - Tam RN a 18 meses Azul", price: "R$ 79,90", image: '/src/Roupas-Categorias/Infantil/1.webp' },
        { id: 2, name: "Body Infantil em Algodão com Estampa Bichinhos no Safári - Tam 0 a 18 meses Bege", price: "R$ 39,90", image: '/src/Roupas-Categorias/Infantil/2.webp' },
        { id: 3, name: "Jardineira Infantil em Moletom Estampa Bichinhos - Tam 0 a 18 meses Multicores", price: "79,90", image: '/src/Roupas-Categorias/Infantil/3.webp' },
        { id: 4, name: "Camiseta Infantil com Estampa do Sonic e Máscara Interativa - Tam 4 a 12 Anos Azul", price: "R$ 69,90", image: '/src/Roupas-Categorias/Infantil/4.webp' },
        { id: 5, name: "Bermuda Infantil em Sarja com Amarração - Tam 1 a 5 anos Preto", price: "R$ 69,90", image: '/src/Roupas-Categorias/Infantil/5.webp' },
        { id: 6, name: "Camiseta Comfort Infantil com Estampa de Capivaras - Tam 1 a 5 anos Verde", price: "R$ 39,90", image: '/src/Roupas-Categorias/Infantil/6.webp' },
        { id: 7, name: "Camiseta Infantil com Estampa de Folhagens e Animais - Tam 1 a 5 anos Branco", price: "R$ 39,90", image: '/src/Roupas-Categorias/Infantil/7.webp' },
        { id: 8, name: "Camiseta Infantil Blocada em Algodão com Lettering Bordado - Tam 1 a 5 anos Verde/Bege", price: "R$ 49,90", image: '/src/Roupas-Categorias/Infantil/8.webp' },
        { id: 9, name: "Bermuda Infantil em Sarja com Amarração - Tam 1 a 5 anos Bege", price: "R$ 79,90", image: '/src/Roupas-Categorias/Infantil/9.webp' },
        { id: 10, name: "Regata Infantil Canelada com Bordado Stitch no Peito - Tam 5 a 14 Anos Branco", price: "R$ 49,90", image: '/src/Roupas-Categorias/Infantil/10.webp' },
    ];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const closePopup = () => {
        setSelectedProduct(null);
    };

    const toggleZoom = () => {
        setZoomed(!zoomed);
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('Você está inscrito na newsletter!');
    };

    return (
        <section className="mens-clothing">
            <h1 className="page-title">Roupas Infantis</h1>
            <div className="product-container">
                <div className="top-section">
                    <h2 className="section-title">Título da Seção</h2>
                    <p>NÃO SEI AINDA O QUE INSERIR</p>
                </div>
                <div className="product-list">
                    {products.map(product => (
                        <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedProduct.image} 
                            alt={selectedProduct.name} 
                            className={`popup-image ${zoomed ? 'zoomed' : ''}`} 
                            onClick={toggleZoom}
                        />
                        <div className="popup-details">
                            <h2>{selectedProduct.name}</h2>
                            <p>{selectedProduct.price}</p>

                            <div className="size-selection">
                                <h3>Selecione o tamanho:</h3>
                                <div className="size-buttons">
                                    <button className="size-button">1</button>
                                    <button className="size-button">2</button>
                                    <button className="size-button">3</button>
                                    <button className="size-button">4</button>
                                    <button className="size-button">5</button>
                                </div>
                            </div>

                            <button onClick={closePopup}>Fechar</button>
                            <button className="buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="newsletter-container">
                <h2>Receba ofertas e novidades por e-mail</h2>
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">*Digite seu nome</label>
                        <input type="text" id="name" required />
                        <span className="error-message">Este campo é obrigatório</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">*E-mail</label>
                        <input type="email" id="email" required />
                        <span className="error-message">Este campo é obrigatório</span>
                    </div>
                    <button type="submit" className="subscribe-button">Inscrever-se</button>
                </form>
            </div>
            <div className="whatsapp-container">
                <h2>Fale conosco pelo WhatsApp:</h2>
                <p>+55 11 99999-9999</p>
            </div>
        </section>
    );
};

export { RoupasInfantis };
