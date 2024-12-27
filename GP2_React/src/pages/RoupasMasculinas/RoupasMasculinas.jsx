import { useState, useContext } from "react";
import { api } from "../../api/api";
import "./RoupasMasculinas.css";
import { useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

const RoupasMasculinas = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/produtos");
        const filteredProducts = response.data.filter(
          (product) => product.categoria === "masculino"
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

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
    alert("Você está inscrito na newsletter!");
  };

  return (
    <section className="mens-clothing">
      <h1 className="page-title">Roupas Masculinas</h1>
      <div className="product-container">
        <div className="top-section">
          <h2 className="section-title">Vestuário Masculino</h2>
          <p>
            Renove seu guarda-roupa com as últimas tendências e clássicos
            atemporais. Navegue por nossa seleção e encontre as peças perfeitas
            para expressar sua personalidade!
          </p>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.imgurl}
                alt={product.nome}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.nome}</h3>
                <p className="product-price">R$ {product.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProduct.imgurl}
              alt={selectedProduct.nome}
              className={`popup-image ${zoomed ? "zoomed" : ""}`}
              onClick={toggleZoom}
            />
            <div className="popup-details">
              <h2>{selectedProduct.nome}</h2>
              <p>R$ {selectedProduct.preco}</p>

              <div className="size-selection">
                <h3>Selecione o tamanho:</h3>
                <div className="size-buttons">
                  <button className="size-button">P</button>
                  <button className="size-button">M</button>
                  <button className="size-button">G</button>
                  <button className="size-button">GG</button>
                </div>
              </div>
              <input
                onClick={closePopup}
                className="botao-excluir"
                type="submit"
                value="X"
              />
              <button
                onClick={() => {
                  addToCart(selectedProduct), closePopup();
                }}
                className="buy-button"
              >
                Comprar
              </button>
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
          <button type="submit" className="subscribe-button">
            Inscrever-se
          </button>
        </form>
      </div>
      <div className="whatsapp-container">
        <h2>Fale conosco pelo WhatsApp:</h2>
        <p>+55 11 99999-9999</p>
      </div>
    </section>
  );
};

export { RoupasMasculinas };
