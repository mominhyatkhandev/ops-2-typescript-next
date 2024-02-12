import * as Yup from 'yup';

import type { BusinessAccInfoForm } from '@/interfaces/interface';

export const BusinessAccInfoInitialValues: BusinessAccInfoForm = {
  fatherName: '',
  gender: '',
  purpose: '',
  citizenship: '',
  residency: '',
  businessOwner: '',
  businessName: '',
  legalName: '',
  incorporationDate: '',
  ntnNumber: '',
};

// const phoneRegExp = /^(?:\92)?[3456789]\d{9}$/;

export const businessAccInfoSchema = Yup.object().shape({
  fatherName: Yup.string()
    .required('Father name is required')
    .min(4, 'Must be more than 4 letters')
    .max(12, 'Max limit exceed'),
  gender: Yup.string()
    .required('Gender is required')
    .min(3, 'Must be more than 3 letters')
    .max(12, 'Max limit exceed'),
  purpose: Yup.string()
    .required('purpose name is required')
    .min(3, 'Must be more than 3 letters')
    .max(120, 'Max limit exceed'),
  citizenship: Yup.string().required('citizenship is required'),
  residency: Yup.string()
    // .matches(phoneRegExp, 'Invalid phone number')
    .required('residency is required'),
  businessOwner: Yup.string()
    // .url('Invalid URL format include http://')
    .required('Business Owner Name is required'),
  businessName: Yup.string()
    .min(6, 'businessName must be at least 6 characters')
    .required('businessName is required'),
  legalName: Yup.string()
    // .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('legalName Password is required'),

  incorporationDate: Yup.string()
    // .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('incorporationDate Password is required'),

  ntnNumber: Yup.string()
    // .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Ntn Number is required'),
});
