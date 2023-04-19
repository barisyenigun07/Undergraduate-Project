import * as yup from 'yup';

const validations = yup.object.shape({
    username: yup.string(),
    password: yup.string()
});

export default validations;