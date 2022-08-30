import React from "react";

function SignUpInfo({ formData, setFormData }) {

    const Validation = () => {
        if(RegExp) {
            if(RegExp.test(formData.username)) {
                setFormData({...formData, valid: 'true'})
            } else {
                setFormData({...formData, valid: 'false'})
            }
        }
    }

    const validityConfirmPassword = () => {
        if(password.length > 0) {
            if(password !== confirmPassword) {

            }
        }
    }

    return (
        <div className="sign-up-container">
            <div className="body">{PageDisplay()}</div>
            <label>Crea tu usuario</label>
            <input type="text" placeholder="Write an Username" value={ formData.username } 
            onChange={(event) => setFormData({ ...formData, username: event.target.value })}/>
            <label>Crea tu constraseña</label>
            <input type="password" placeholder="Write a Password" value={ formData.password } 
            onChange={(event) => setFormData({ ...formData, password: event.target.value })}/>
            <label>Confirma tu constraseña</label>
            <input type="password" placeholder="Confirm Password" value={ formData.confirmPassword } 
            onChange={(event) => setFormData({ ...formData, confirmPassword: event.target.value })}/>
            <p />También puedes crear una pista que te ayude a recordar tu constraseña:
            <label>Crea tu pista para recordar tu contraseña (opcional)</label>
            <input type="text" placeholder="Write your hint"/>
            <div>
                <button type="submit">Submit</button>
            </div>
            <div className="footer">
                <button className="previous"
                disabled={page == 0}
                onClick={() => {
                    setPage((currentPage) => currentPage + 1)
                    }}
                    >
                        Prev
                    </button>
                <button className="next" 
                disabled={page == FormTitles.length - 1}
                onClick={() => {
                setPage((currentPage) => currentPage + 1)
                }}
                >
                    { page === FormTitles.length - 1 ? "Submit" : "Next" }
                </button>
            </div> 
        </div>
    )
}

export default SignUpInfo