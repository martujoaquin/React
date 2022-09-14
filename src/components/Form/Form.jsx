import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const Form = () => {
    //const [datosorm, setDatosForm] = useState(initialState);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [talle, setTalle] = useState('');
    //const [x, setX] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nombre, apellido, talle); //enviar la info a la base de datos
        //console.log(nombre, apellido, talle); //enviar la info a la base de datos
        //setNombre('');
    };

    const Form = () => {
            //setX(e.clientX);
        };
        window.addEventListener('mousemove', handleMouseMove);
        console.log('Creo evento');
        //console.log('Creo evento');
        return () => {
            //siempre antes
            //clearInterval()
            window.removeEventListener('mousemove', handleMouseMove);
            console.log('Borro evento');
            //console.log('Borro evento');
        };
    };