import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import SuccessfulRegistration from "./SuccessfulRegistration";

function Form() {

    const [page, setPage] = useState(0)

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        hint: "",
    })

    const FormTitles = ['Sign Up']

    const PageDisplay = () => {
        if(page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />
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
            <div className="body">{PageDisplay()}</div>
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