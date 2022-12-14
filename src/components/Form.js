import React, { useState } from "react";
import './App.scss';
import image from './assets/img/Logotipo-Vertical-Verde-Alta.png'
import SignUpInfo from "./SignUpInfo";
import SuccessfulRegistration from "./SuccessfulRegistration";

function Form() {

    // const [user, changeUser] = useState({field: '', valid: null})
    // const [password, changePassword] = useState({field: '', valid: null})
    // const [confirmPassword, changeConfirmPassword] = useState({field: '', valid: null})
    // const [hint, changeHint] = useState({field: '', valid: null})

    const RegExp = {
        username: /^[a-zA-Z0-9\_\-]{4,16}$/,
        password: /^.{8,24}$/,
        hint: /^[a-zA-ZÀ-ÿ\s]{1,60}$/
    }

    const onChangePrivacy = (e) => {
        setFormData(e.target.checked)
    }

    const onChange = (e) => {
        e.preventDefault()
    }

    const [page, setPage] = useState(0)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        hint: '',
        privacy: false
    })

    const FormTitles = ["Sign Up", "Successful Registration"]

    const PageDisplay = () => {
        if(page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} onSubmit={onSubmit}/>
        } else if(page === 1) {
            return <SuccessfulRegistration />
        }
    }
    
    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="form-container"></div>
            <div className="header">
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}
                <p className='test' />Whell Hub Test Frontend =S
                    <img className="logo" src={ image } alt="logo"/>
                    <input className="checkbox" type="checkbox" name="privacy" id="privacy" checked={privacy} onChange={onChangePrivacy}/>
                    Para continuar, acepta los términos y condiciones con respecto a la protección y uso de tus datos
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

export default Form