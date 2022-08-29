import React from "react";

function SignUpInfo({ formData, setFormData }) {
    return (
        <div className="sign-up-container">
            <div className="body">{PageDisplay()}</div>
            <label>Crea tu usuario</label>
            <input type="text" placeholder="Write an Username" value={ formData.username } 
            onChange={(event) => setFormData({ ...formData, username: event.target.value })}/>
            <label>Crea tu constraseña</label>
            <input type="text" placeholder="Write a Password" value={ formData.password } 
            onChange={(event) => setFormData({ ...formData, password: event.target.value })}/>
            <label>Confirma tu constraseña</label>
            <input type="text" placeholder="Confirm Password" value={ formData.confirmPassword } 
            onChange={(event) => setFormData({ ...formData, confirmPassword: event.target.value })}/>
            <p />También puedes crear una pista que te ayude a recordar tu constraseña:
            <label>Crea tu pista para recordar tu contraseña (opcional)</label>
            <input type="text" placeholder="Introduce tu pista"/>
        </div>
    )
}

export default SignUpInfo