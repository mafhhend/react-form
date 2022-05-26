import { Fragment, useContext, useEffect } from "react"
import { Button, TextField } from "@mui/material"
import FormContext from "./../store/FormContext"
import useInput from "./../hooks/useInput"

const Register = () => {

    // Validations for Custom Hook:
    const nameValidation = (value) => value.length >= 8
    const phoneValidation = (value) => value.length === 11
    const emailValidation = (value) => value.includes("@")

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(nameValidation);


    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,
    } = useInput(phoneValidation);


    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(emailValidation);

    const formHandler = e => {
        e.preventDefault()
        resetFirstName()
        resetEmail()
        resetPhone()

    }

    return <Fragment>
        <form onSubmit={formHandler}>
            <div>
                <TextField id="filled-basic" label="Name" type="text" variant="filled" error={firstNameHasError} helperText="Minimum length is 8 characters" value={firstNameValue}
                    onChange={firstNameChangeHandler}
                    onBlur={firstNameBlurHandler} />
            </div>
            <div>
                <TextField id="filled-basic" label="Email" type="email" variant="filled" error={emailHasError} helperText="without .com" value={emailValue} onChange={emailChangeHandler}
                    onBlur={emailBlurHandler} />
            </div>
            <div>
                <TextField id="filled-basic" label="Phone Number" type="number" variant="filled" error={phoneHasError} value={phoneValue} helperText="phone number with code" onChange={phoneChangeHandler}
                    onBlur={phoneBlurHandler} />
            </div>
            <div>
                <Button type="submit" disabled={firstNameHasError || emailHasError || phoneHasError} variant="contained">Register</Button>
            </div>
        </form>
    </Fragment>
}

export default Register