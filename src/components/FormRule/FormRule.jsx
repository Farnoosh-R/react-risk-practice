import { useEffect, useState } from "react";

const FormRule = () => {

 const [form, setForm] = useState({
    name: "",
    lastName: "",
    mobile: "",
 })
 const [forms, setForms] = useState([])

 useEffect(() => {
    localStorage.setItem("form", JSON.stringify(forms))
 })

 const handleChange = (e) => {
    // setForm({...form, [e.target.name]: e.target.value})
    setForm({...form, [e.target.name]: e.target.value})
};


const handleSubmit = (e) => {
    e.preventDefault();
     const nextId = `rule${forms.length + 1}`;
     const newForm = { id: nextId, ...form };
    const newForms = [...forms, newForm]
    setForms(newForms);
    console.log(newForms);

}

    return(
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="name" placeholder="name" />
            <input onChange={handleChange} type="text" name="lastName" placeholder="lastName" />
            <input onChange={handleChange} type="text" name="mobile" placeholder="mobile" />
            <button type="submit">send</button>
        </form>
    )
}
export default FormRule;