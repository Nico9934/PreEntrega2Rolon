
##  Congelados e-commerce 


####  Project by: Nico Rolon

##  Instrucciones de instalación

Clonar el proyecto y entrar en el directorio:

```bash

git clone https://github.com/Nico9934/ecommerce-bienfrio

cd ecommerce-bienfrio

```

Instalar las dependencias

```bash

npm install

```

Iniciar el servidor local:

```bash

npm run dev

```

#  Comandos

+ **npm run build**: inicia el servidor local


## Sobre El proyecto
Mi nombre es Nicolás Rolón, y este es el proyecto final realizado para el curso de desarrollo web de React, en la academia CoderHouse. Tiene incoporado la lógica completa de un e-commerce, con su carrito de compras, detalles de tarjetas, links hacia las distintas redes sociales y guardado de compras en una base de datos. 

## Screenshots 

<div style="position: relative; width: 100%; height: 0; padding-top: 58.8235%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFaBKdmnk8&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">  </iframe></div>

##  Tecnologías

El proyecto está creado con Vite, y utiliza la aplicación FireStore de Firebase como base de datos para el guardado tanto de los productos, como de las compras hechas por los clientes. 
Para el styling se utilizó CSS puro, metodología BEM, y se compiló con SASS permitiendo una mejor organización para todo el código. 
Además, la página cuenta con notificaciones a través de la librería React-Toastify
Para el ruteo se utilizó una librería externa llamada React-Router-Dom facilitando la conexión entre los distintos componentes de la página. 
Se utilizaron hooks como useEffect, useState, y useContext para generar un ambiente de trabajo más óptimo y escalable. 

##  Features especiales

- Navegación a través de los distintos productos.
- Filtrado por categorías.
- Navegación hacia los itemDetail.
- CheckOut con formulario de datos y tracking number del pedido. 

