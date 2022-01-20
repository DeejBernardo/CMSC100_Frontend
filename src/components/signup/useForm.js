import {  useState, useEffect } from 'react'


const useForm = (callback,validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName:'',
        hobbies:''
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

        const response = await fetch('http://localhost:8080/user',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                username: values.username,
                hobbies: values.hobbies,
                password: values.password

            })
        })

        const result = await response.json();
        window.location.href="http://localhost:3000/home"

        return(values.username);
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