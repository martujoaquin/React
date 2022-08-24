const Button = (prop) =>{
    return <button className={prop.variante}>
        {prop.value}
        </button>;
}

export default Button;