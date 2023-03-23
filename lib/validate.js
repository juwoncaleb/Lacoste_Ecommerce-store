export default function login_validate(values) {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    if (!values.password) {
        errors.password = "Required password"
    } else if (values.password.length < 8 || values.password > 20) {
        errors.password = "Must be greater than 8 and less than 20 characters"
    } else if (values.password.includes(" ")) {
        errors.password = "Invalid password"
    }
    return errors;
}