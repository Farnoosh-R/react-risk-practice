import { useEffect, useState } from "react";

const FormRule = () => {

const [forms, setForms] = useState([])
 const [form, setForm] = useState({
    firstOperand: "",
    secondOperand: "",
    id: "",
    result: ""
 })
 

 useEffect(() => {
    localStorage.setItem("form", JSON.stringify(forms))
    
 })

 const handleChange = (e) => {
    // setForm({...form, [e.target.name]: e.target.value})
    setForm({...form, [e.target.name]: e.target.value})
};



const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = {...form, id: `rule${forms.length + 1}`, result: Number(form.firstOperand) > Number(form.secondOperand)}
    const newForms = [...forms, newForm]
    setForms(newForms);
    
    console.log(newForms);
}



    return(
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="firstOperand" placeholder="firstOperand" />
            <input onChange={handleChange} type="text" name="secondOperand" placeholder="secondOperand" />
            <button type="submit">send</button>
        </form>
    )
}
export default FormRule;