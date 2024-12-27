import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <img className="outdor" src="./src/assets/outdor.png" alt="Outdor da Loja" />
      <div className="options">
        <div className="option"><Link to="/masculino">Roupas Masculinas</Link></div>
        <div className="option"><Link to="/feminino">Roupas Femininas</Link></div>
        <div className="option"><Link to="/infantil">Roupas Infantis</Link></div>
        <div className="option"><Link to="/calcados">Calçados</Link></div>
      </div>
    </div>
  );
}
