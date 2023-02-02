import * as yup from "yup";

const validations = yup.object().shape({
    name: yup
    .string(),
    username: yup
    .string(),
    phone: yup
    .string(),
    email:yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("Zorunlu Alan"),
    password: yup.string().min(5, " Paralo En az 5 Karanter olmalıdır.").required("Zorunlu Alan"),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Parola uyuşmamaktadır.').required()
})

export default validations;