import logo from '../assets/logosneaker.jpg';
import '../styles/Banner.css';

function Banner() {
  return (
    <header className="banner">
      <div className="banner-content">
        {/* Affichage en JSX du Logo de la boutique en ligne */}
        <img src={logo} className="banner-logo" alt="Logo Sneakers" />
      
        {/* Section contenant le titre et la description */}
        
        {/* Titre principal de l'application */}
        <h1>Sneakers Store</h1>

        {/* Slogan attractif pour les visiteurs */}
        <p>Trouvez les sneakers de vos rêves</p>
      </div>
    </header>
  );
}

export default Banner;