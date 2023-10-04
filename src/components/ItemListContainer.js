import React from 'react';
import { Link } from 'react-router-dom';

const productos = [
  { id: 850221, nombre: 'Ganador Energía', precio: 32000 },
  { id: 900315, nombre: 'Ganador Leche', precio: 34000 },
  { id: 601122, nombre: 'Ganador Proteína', precio: 36000 },
  { id: 630703, nombre: 'Ganador Porcinos', precio: 39000 },
];

function ItemListContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Catálogo de Productos</h2>
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                <Link to={`/item/${producto.id}`}>
                  {producto.nombre} - ${producto.precio.toFixed(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
