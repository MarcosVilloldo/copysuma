import React from "react";
import FormularioDeLogin from "../../components/formulario-de-login/FormularioDeLogin";

const Login = (props) => {
    return (
        <FormularioDeLogin setSession={props.setSession} setIsLogged={props.setIsLogged}/>
    );
};

export default Login;