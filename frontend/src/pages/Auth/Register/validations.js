import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string(),
  username: yup.string(),
  contactInfo: yup.string(),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("Zorunlu Alan"),
  password: yup
    .string()
    .min(5, " Paralo En az 5 Karanter olmalıdır.")
    .required("Zorunlu Alan"),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref("password")], "Parola uyuşmamaktadır.")
    .required(),
  role: yup.string().required(),
});

export default validations;
