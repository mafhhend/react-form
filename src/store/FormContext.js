import { createContext, useState } from "react";


const FormContext = createContext()


export function FormProvider({ children }) {
    const [nameState, setNameState] = useState("")
    const [isNameStateValid, setNameStateValid] = useState(true)

    const [emailState, setEmailState] = useState("")
    const [isEmailStateValid, setEmailStateValid] = useState(true)

    const [phoneNumberState, setPhoneNumberState] = useState("")
    const [isPhoneNumberStateValid, setPhoneNumberStateValid] = useState(true)

    const [isFormValid, setFormValid] = useState(true)



    return <FormContext.Provider value={{
        nameState, emailState, phoneNumberState,
        isFormValid, isNameStateValid,
        isEmailStateValid, setEmailStateValid
        , isPhoneNumberStateValid, setPhoneNumberStateValid,

        setNameState, setEmailState, setPhoneNumberState,
        setFormValid, setNameStateValid,
    }}>{children}</FormContext.Provider>
}
export default FormContext