import React from 'react';
/* import estilos from './main.modules.css'; */

const Main = ({test, fecha=1, alumno})=>{
    /* console.log(props); */
    //console.log(props.alumno.nombre);
    //const comision = props.test;
    //const {test, fecha} = props;
    //const {nombre} =alumno;

    return (
        <main>
            <section>
                <h2>Bienvenidos! {test}</h2>
                <p>Hoy es {fecha} de Agosto</p>
                <h3>{alumno.nombre}</h3>
            </section>
        </main>
    )
}

export default Main;

/* {props.test} asi puedo leer lo enviado desde el app */