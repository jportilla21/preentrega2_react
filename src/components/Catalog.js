import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import producto1Image from '../energia.jpg';
import producto2Image from '../leche.jpg';
import producto3Image from '../proteina.jpg';
import producto4Image from '../cerdos.jpg';

const productos = [
  { id: 850221, nombre: 'Ganador Energía', precio: 32000, imagen: producto1Image },
  { id: 900315, nombre: 'Ganador Leche', precio: 34000, imagen: producto2Image },
  { id: 601122, nombre: 'Ganador Proteína', precio: 36000, imagen: producto3Image },
  { id: 630703, nombre: 'Ganador Porcinos', precio: 39000, imagen: producto4Image },
];

const Catalog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="titulo">Catálogo de Productos</h2>
          <ul className="puntos">
            {productos.map((producto) => (
              <li key={producto.id}>
                <Link to={`/item/${producto.id}`}>
                  <div className="producto">
                    <img src={producto.imagen} alt={producto.nombre} className="product-image" /> 
                    <div>
                      <h4 className="lineas">{producto.nombre}</h4>
                      <p>Precio: ${producto.precio.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

