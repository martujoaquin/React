import React from 'react';
import Button from '../Button/Button';
/* import estilos from './main.modules.css'; */
/* import logoReact from "../../img/logo192.png" */

const Main = ({test, fecha=1, alumno})=>{
    /* console.log(props); */
    //console.log(props.alumno.nombre);
    //const comision = props.test;
    //const {test, fecha} = props;
    //const {nombre} =alumno;

    return (
        <main>
            <section>
                {/* <h2>Bienvenidos! {test}</h2>
                <p>Hoy es {fecha} de Agosto</p>
                <h3>{alumno.nombre}</h3> */}
                <Button value='Logout' variante='secondary'/>
                {/* 
                Public 
                <img src="logo192.png" alt="" />
                src 
                <img src={logoReact} alt="" />
                link desde internet 
                <img src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg" alt="" /> */}
            </section>
        </main>
    )
}

export default Main;

/* {props.test} asi puedo leer lo enviado desde el app */