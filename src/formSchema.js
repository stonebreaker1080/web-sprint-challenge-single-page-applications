import * as yup from 'yup';

const formSchema = yup.object().shape({
    size: yup
        .string()
        .trim()
        .min(1, 'Please pick a size')
        .required('Size required'),        
    sauce: yup
        .string()
        .trim()
        .min(1, "Please pick a sauce")
        .required("Sauce required"),
    toppings: yup.array(),
    substitutes: yup.array(),
    comment: yup
        .string()
        .trim()
        .min(3,"test validation")
        .required("test validation"),
    name: yup
        .string()
        .trim()
        .min(3,"name must be at least 2 characters")
        .required("test validation"),
    quantity: yup.number()
    
})

export default formSchema