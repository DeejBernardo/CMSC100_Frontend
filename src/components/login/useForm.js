import {  useState, useEffect } from 'react'
import {  Link } from 'react-router-dom'


const useForm = (callback,validate) => {
    const [values, setValues] = useState({
        password: '',
        email:''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    async function handleSubmit (e) {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        console.log(values);

        const response = await fetch('http://localhost:8080/auth/login',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                email: values.email,
                password: values.password

            })
        })

        const result = await response.json()
        if(result.success == true){
            <Link to={{
                pathname: '/home',
                state: {username: values.username}
            }}></Link>
            window.location.href = "http://localhost:3000/home";
        } else {
            window.location.href = "http://localhost:3000/login"
        }
    }

    const handleClick = e => {
        e.preventDefault();
        console.log("Here");
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    }, [errors]
    )

    return {handleChange, values, handleSubmit, handleClick, errors};
}

export default useForm;