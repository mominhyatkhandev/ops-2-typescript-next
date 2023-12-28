'use client';

import { Form, Formik } from 'formik';
import React, { useState } from 'react';

import apiClient from '@/api/apiClient';
import Button from '@/components/UI/Button/PrimaryButton';
import Input from '@/components/UI/Inputs/Input';
import FormWrapper from '@/components/UI/Wrappers/FormLayout';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';
import { signUpInitialValues, signUpSchema } from '@/validations/signUpSchema';

const onSubmit = async (values: any, { setSubmitting }: any) => {
  try {
    const response = await apiClient.post('api-point', values, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'jwt-token',
      },
    });

    // Handle the response as needed
    if (response.status === 200) {
      console.log('Form submitted successfully');
    } else {
      console.error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form', error);
  }

  setSubmitting(false);
};

const PersonalInfo = () => {
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    // Toggle the state value when the checkbox is clicked
    setChecked(!isChecked);
  };

  return (
    <>
      <Formik
        initialValues={signUpInitialValues}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <HeaderWrapper
              heading="Please fill in the Information below"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore"
              show
            />
            <div className="flex w-full flex-col gap-6">
              <FormWrapper>
                <div className="flex w-full flex-col items-start justify-between gap-4">
                  <div className=" text-base font-semibold leading-tight text-secondary-base">
                    Personal Information
                  </div>
                  {/* <div className="flex flex-col w-full"> */}
                  <Input
                    label="First Name"
                    name="firstName"
                    type="text"
                    error={formik.errors.firstName}
                    touched={formik.touched.firstName}
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    type="text"
                    error={formik.errors.lastName}
                    touched={formik.touched.lastName}
                  />
                  <Input
                    label="Merchant Name"
                    name="merchantName"
                    type="text"
                    error={formik.errors.merchantName}
                    touched={formik.touched.merchantName}
                  />
                  <Input
                    label="Mobile Number"
                    name="phoneNumber"
                    type="text"
                    error={formik.errors.phoneNumber}
                    touched={formik.touched.phoneNumber}
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    error={formik.errors.email}
                    touched={formik.touched.email}
                  />
                  <Input
                    label="Website"
                    name="website"
                    type="text"
                    error={formik.errors.website}
                    touched={formik.touched.website}
                  />
                </div>
              </FormWrapper>
              <FormWrapper
              // className="flex flex-col justify-center items-start gap-4"
              >
                <div className="flex w-full flex-col gap-4">
                  <div className=" text-base font-semibold leading-tight text-secondary-base">
                    Set your Login Password
                  </div>
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    error={formik.errors.password}
                    touched={formik.touched.password}
                  />
                  <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    error={formik.errors.confirmPassword}
                    touched={formik.touched.confirmPassword}
                  />
                </div>
              </FormWrapper>
              <FormWrapper>
                <div className="flex flex-col items-start justify-center gap-4">
                  <div className=" text-base font-semibold leading-tight text-secondary-base">
                    Terms & Conditions
                  </div>
                  <div className="bg-neutral-white-base p-6">
                    <div className="text-xs leading-tight">
                      In using this website, you are deemed to have read and
                      agreed to the following terms and conditions. The
                      following terminology applies to these Terms and
                      Conditions, Privacy Statement and applies to these Terms
                      and Conditions Disclaimer Notice and any or all Agree
                      Notice and any other terms and In using this website, you
                      are deemed to have read and agreed to the following terms
                      and conditions. The following terminology applies to these
                      Terms and Conditions, Privacy Statement and applies to
                      these Terms and Conditions Disclaimer Notice and any or
                      all Agree Notice and any other terms and In using this
                      website, you are deemed to have read and agreed to the
                      following terms and conditions. The following terminology
                      applies to these Terms and Conditions, Privacy Statement
                      and applies to these Terms and Conditions Disclaimer
                      Notice and any or all Agree Notice and any other terms and
                      In using this website, you are deemed to have read and
                      agreed to the following terms and co
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <p className="text-xs font-semibold leading-tight">
                      I agree to easypaisa Terms & Conditions
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="w-full">VERIFY COMPONENT</div>
                  <Button
                    label="Sign up"
                    type="submit"
                    path="/home"
                    isDisabled={!formik.isValid || !isChecked}
                    className={`button-primary w-[260px] px-4 py-[19px] text-sm leading-tight transition duration-300`}
                  />
                </div>
              </FormWrapper>
            </div>

            {/* </div> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalInfo;
