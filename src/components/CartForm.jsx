import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useCarrito } from "./CarritoProvider";
import CartListItem from "./CartListItem";

const CartForm = ({ setSteps, steps, usuario, setUsuario, handleSubmit }) => {
  
  const { cartItems, precioTotal } = useCarrito();

 

  return (
    <>
      <div className="form__container">
        <form action="submit" className="form">
          <div className="form__field">
            <label className="form__label" htmlFor="name">
              Nombre:{" "}
            </label>
            <input
              className="form__input"
              onChange={(e) =>
                setUsuario({ ...usuario, nombre: e.target.value })
              }
              placeholder="Ingresa tu nombre"
              type="text"
              name="name"
              id="name"
              value={usuario.nombre}
            />
          </div>
          <div className="form__field">
            <label className="form__label" htmlFor="mail">
              Mail:{" "}
            </label>
            <input
              className="form__input"
              onChange={(e) => setUsuario({ ...usuario, mail: e.target.value })}
              placeholder="Ingresa tu email"
              type="text"
              name="mail"
              id="mail"
              value={usuario.mail}
            />
          </div>
          <div className="form__field">
            <label className="form__label" htmlFor="adress">
              Calle:{" "}
            </label>
            <input
              className="form__input"
              onChange={(e) =>
                setUsuario({ ...usuario, calle: e.target.value })
              }
              placeholder="Ingresa tu direccion"
              type="text"
              name="adress"
              id="adress"
              value={usuario.calle}
            />
          </div>
          <div className="form__field">
            <label className="form__label" htmlFor="adress">
              Altura:{" "}
            </label>
            <input
              className="form__input"
              onChange={(e) =>
                setUsuario({ ...usuario, altura: e.target.value })
              }
              placeholder="123"
              type="text"
              name="adress"
              id="adress"
              value={usuario.altura}
            />
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="payment">
              Método de pago:{" "}
            </label>
            <select
              className="form__input"
              name=""
              id=""
              onChange={e => setUsuario({ ...usuario, medio: e.target.value })}
              value={usuario.medio}
            >
              <option value="efectivo">Efectivo</option>
              <option value="credito">Tarjeta de crédito</option>
              <option value="transferencia">Transferencia</option>
            </select>
          </div>

          {usuario.medio == "credito" && 
            <div className="form__field">
              <label className="form__label" htmlFor="creditcard">
                Numero de Tarjeta:{" "}
              </label>
              <input
                className="form__input"
                onChange={(e) =>
                  setUsuario({ ...usuario, tarjeta: e.target.value })
                }
                placeholder="xxxx-xxxx-xxxx-xxxx"
                type="text"
                name="creditcard"
                id="creditcard"
                value={usuario.tarjeta}
              />
            </div>
          }
        </form>

        <div className="form__buttons">
          <button className="form__button" onClick={() => setSteps(steps - 1)}>
            Atras
          </button>
          <p className="form__total">Total: ${precioTotal}</p>
          <button className="form__button" onClick={() => handleSubmit()}>
            Confirmar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default CartForm;
