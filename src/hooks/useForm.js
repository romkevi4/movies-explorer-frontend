import React, { useState } from 'react';

// =============================== Хук управления формой ===============================
export default function useForm() {
    const [ values, setValues ] = useState({});

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    return {
        values,
        handleChange,
        setValues
    };
}
