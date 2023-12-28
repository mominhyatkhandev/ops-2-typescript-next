import * as Yup from 'yup';

export const signUpInitialValues = {
  firstName: '',
  lastName: '',
  merchantName: '',
  email: '',
  phoneNumber: '',
  website: '',
  password: '',
  confirmPassword: '',
};

const phoneRegExp = /^(?:\+92|92|0)?[3456789]\d{9}$/;

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(4, 'Must be more than 4 letters')
    .max(12, 'Max limit exceed'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(3, 'Must be more than 3 letters')
    .max(12, 'Max limit exceed'),
  merchantName: Yup.string()
    .required('Merchant name is required')
    .min(3, 'Must be more than 3 letters')
    .max(12, 'Max limit exceed'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('Phone number is required'),
  website: Yup.string()
    .url('Invalid URL format include http://')
    .required('Website URL is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm Password is required'),
});
