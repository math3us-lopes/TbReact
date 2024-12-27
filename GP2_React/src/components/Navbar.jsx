import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { Carrinho } from "./carrinho/Carrinho";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCarrinhoVisible, setIsCarrinhoVisible] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState(null);


  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCarrinho = (e) => {
    e.preventDefault();
    setIsCarrinhoVisible(!isCarrinhoVisible);
  };

  useEffect(() => {
    if (location.pathname === '/login') {
      setIsCarrinhoVisible(false);
    }
  }, [location]);

  const handleLogout = () => {

    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";  
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="./src/assets/logo.png" alt="Logo da Loja" />
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/masculino">Roupas Masculinas</Link></li>
        <li><Link to="/feminino">Roupas Femininas</Link></li>
        <li><Link to="/infantil">Roupas Infantis</Link></li>
        <li><Link to="/calcados">Calçados</Link></li>

        {(location.pathname !== '/login' && location.pathname !== '/cadastro') && (
          <li>
            <Link to="#" onClick={toggleCarrinho}>
              {isCarrinhoVisible ? 'Fechar Carrinho' : 'Abrir Carrinho'}
            </Link>
          </li>
        )}

        {user ? (
          <li>
            <div className="user-profile">
              <button onClick={handleLogout}>Logout</button>
              <img src={user.imgurl || "./src/assets/avatar.png"} alt="Foto do usuário" className="profile-img" />
            </div>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>

      {isCarrinhoVisible && <Carrinho />}
    </nav>
  );
}
