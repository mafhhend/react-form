import { Fragment, useContext, useEffect } from "react"
import { Button, TextField } from "@mui/material"
import FormContext from "./../store/FormContext"
const Register = () => {

    const { nameState, emailState, phoneNumberState,
        setNameState, setEmailState, setPhoneNumberState
        , isFormValid, setFormValid,
        isEmailStateValid, setEmailStateValid
        , isPhoneNumberStateValid, setPhoneNumberStateValid, setNameStateValid, isNameStateValid } = useContext(FormContext);

    const nameHandler = ({ target }) => setNameState(target.value)
    const emailHandler = ({ target }) => setEmailState(target.value)
    const phoneNumberHandler = ({ target }) => setPhoneNumberState(target.value)


    const nameBlur = () => {
        if (nameState.length < 8)
            setNameStateValid(false)
        else
            setNameStateValid(true)
    }

    const emailBlur = () => {
        if (emailState.length < 8)
            setEmailStateValid(false)
        else
            setEmailStateValid(true)
    }

    const phoneNumberBlur = () => {
        if (phoneNumberState.length < 4)
            setPhoneNumberStateValid(false)
        else
            setPhoneNumberStateValid(true)
    }
    return <Fragment>
        <form>
            <div>
                <TextField id="filled-basic" label="Name" type="text" variant="filled" error={!isNameStateValid} helperText="Minimum length is 8 characters" value={nameState} onChange={nameHandler} onBlur={nameBlur} />
            </div>
            <div>
                <TextField id="filled-basic" label="Email" type="email" variant="filled" error={!isEmailStateValid} value={emailState} helperText="without .com" onChange={emailHandler} onBlur={emailBlur} />
            </div>
            <div>
                <TextField id="filled-basic" label="Phone Number" type="number" variant="filled" error={!isPhoneNumberStateValid} value={phoneNumberState} helperText="phone number with code" onChange={phoneNumberHandler} onBlur={phoneNumberBlur} />
            </div>
            <div>
                <Button disabled={!isFormValid} variant="contained">Register</Button>
            </div>
        </form>
    </Fragment>
}

export default Register