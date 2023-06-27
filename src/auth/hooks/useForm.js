import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }
    
    return {
        ...formState, //Al usar spred operator en el formState,
        // si es un objeto retorna todas las variables que contiene
        formState,
        onInputChange,
        onResetForm
    }
}
