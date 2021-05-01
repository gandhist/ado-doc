import { useState } from "react";

export const useForm = (initialState) => {
    const [state, setState] = useState(initialState)
    return [state, (formType, formValue) => {
        if (formType === 'reset') {
            return setState(initialState);
        }
        return setState({ ...state, [formType]: formValue })
    }]
}