import * as yup from 'yup';

const formSchema = yup.object().shape({
    size: yup
        .string()
        .trim()
        .min(1)
        .required('Size required'),        
    sauce: yup
        .string()
        .trim()
        .required("Sauce required"),
    toppings: yup.array(),
    substitutes: yup.array(),
    comment: yup.string(),
    quantity: yup.number()
    
})

export default formSchema