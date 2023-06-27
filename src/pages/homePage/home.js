import React from 'react';
import NavBar from '../../component/utils/navbar';
function Home() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className="title">¡Bienvenido a la tienda en línea!</h1>
        <p className="description">Explora nuestra amplia selección de productos</p>
  
      </div>
      {/* Otros componentes o secciones adicionales */}
    </div>
  );
}

export default Home;
