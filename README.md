# GamingCentral
E-commerce de videojuegos

GamingCentral es una pagina web que esta destinada a convertirse en un e-commerce de videojuegos. En principio consta de 5 paginas:

1_Pagina de inicio
2_Pagina de noticias de videojuegos
3_Pagina Sobre Nosotros
4_Pagina de contacto
5_Pagina de iniciar sesion

La pagina de inicio consta del Navbar con acceso al resto de las paginas. Debajo de el hay un slider en el cual se muestran imagenes de videojuegos. 
Contiene 4 imagenes que se deslizan automaticamente durante un lapso de tiempo determinado. La pagina continua con una seccion en la que se encuentran descriptos los medios de pago
que aceptara el e-commerce.
El cuerpo de la pagina esta compuesto principalmente por una seccion de cards que contienen la imagen y el titulo de un juego, mas un boton de "ver mas". Estas cards son generadas
mediante un ciclo for creado mediante vue.js. La info de las cards es extraida de la api rawg (https://rawg.io/apidocs) que contiene informacion e imagenes de videojuegos.
Por ultimo tenemos el footer, el cual contiene el logo de la pagina mas una seccion de enlaces a redes sociales que no llevan a ningun lado, e informacion sobre la compañia.

Por su parte, la pagina de noticias cuenta tambien con el navbar (el cual se repetira en todas las paginas), y una seccion con noticas de videojuegos. Seguido a ellas se encuentra el footer,
el cual se repetira en todas las paginas tambien.

En el cuerpo de la pagina "sobre nosotros" hay informacion referente a la empresa y el enfoque que tiene. Contiene ademas una animacion creada a partir de una imagen. 

En la pagina de contacto podemos observar, en primer lugar, un mapa con la ubicacion de la tienda fisica de Gaming Central. Seguido a el tenemos un formulario para contactarse con nosotros.
Este formulario fue creado con bootstrap y esta asegurado mediante javascript. Ademas tiene la capacidad de enviar un email con los datos que se hayan completado en todos los campos. Dicho email
llegara a una casilla de correo que fue especificamente creada para el e-commerce.

Por ultimo tenemos una pagina para realizar el inicio de sesion. En el cuerpo de esta pagina nos encontramos con un formulario (protegido tambien) y el logo de la empresa a su derecha.
Con respecto a esta pagina, solo existe la maqueta. No tiene ninguna funcionalidad. Aun no se puede iniciar sesion de ninguna manera. Posee un enlace a la pagina de registro, la cual
queda pendiente de realizacion. 

Una caracterisitica que tienen en comun todas las paginas, es que son totalmente responsive. La pagina completa se adapta al tamaño de pantalla de cualquier dispositivo. Consta con varios puntos
de corte para que no haya ningun problema en ningun tamaño. 
