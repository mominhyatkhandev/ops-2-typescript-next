'use client';

import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { POST } from '@/api/helper';
import eye from '@/assets/icons/eye.svg';
import LoginBg from '@/assets/images/login-bg.jpg';
import Button from '@/components/UI/Button/PrimaryButton';
import Input from '@/components/UI/Inputs/Input';
import loginSchema, { loginInitialValues } from '@/validations/loginSchema';
// import { error } from 'console';

// interface LoginForm {
//  Username: string;
//   Password: string;

// }

const Login = () => {
  // i am going to make onSubmit function

  const onSubmit = async (
    // values:LoginForm,
    // status: any,setStatus:any,
    { setSubmitting }: any,
  ) => {
    // console.log("sending api request")
    // console.log("username and password", values.Password, values.Username)
    try {
      // setStatus("xyztry")
      const response: any = await POST('auth/login', {
        // username: values.Username,
        // password: values.Password,
        username: 'iqbalsidddique@gmail.com',
        password: 'iqbaaaaal',
      });
      console.log('API Response:', response);
      if (response?.responseCode == 'SUCCESS') {
        console.log(response, 'successssssssssssssssss');
      } else {
        console.log('responsesssssssssss', response.responseMessage);
      }
    } catch (error: any) {
      // setStatus("xyz  error")
      console.error(
        'errorsssssssssssss',
        error,
        // error?.response?.data?.responseMessage,
      );
      console.log('should be hereeeeeeeeeeeeeeeeeeeeee');
    } finally {
      // setStatus("xyz")
      // console.log("finalllllllllly staussss", status);

      setSubmitting(false);
    }
  };
  return (
    <>
      <div className="relative bg-primary-700 px-[380px] pb-[144px] pt-[120px]">
        <Image
          src={LoginBg}
          alt="LoginBg"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 max-w-full"
        />
        <div className="relative h-max w-[680px] rounded-lg border-[1px] border-border-light bg-neutral-white-base px-[60px] py-9">
          <span className="flex w-full justify-center pb-8 text-[40px] font-semibold text-secondary-base">
            Login to your account
          </span>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginSchema}
            // onSubmit={() => {
            //   console.log('login submitted');
            // }}
            onSubmit={onSubmit}
          >
            {/* {({ errors, touched }) => ( */}
            {(formik) => (
              <Form className="flex flex-col items-center">
                {/* <div className={`w-full flex items-center flex-col ${formik.errors.Username && formik.touched.Username ? 'gap-2' : 'gap-6'}`}> */}
                {/* <div></div> */}
                <div className="mb-6 flex w-full flex-col">
                  <Input
                    label="Username"
                    name="Username"
                    type="text"
                    error={formik.errors.Username}
                    touched={formik.touched.Username}
                  />
                </div>
                {/* <Input
                  label="Password"
                  name="password"
                  type="password"
                  error={formik.errors.password}
                  touched={formik.touched.password}
                /> */}
                <Input
                  name="Password"
                  label="Password"
                  type="password"
                  error={formik.errors.Password}
                  touched={formik.touched.Password}
                  hasImage={true}
                  image={eye}
                  eyeinput={true}
                />
                {/* <div>{status}</div> */}
                <Button
                  label="Login"
                  routeName="/login"
                  type="submit"
                  isDisabled={!formik.isValid}
                  className={`button-primary mt-8 w-[270px] px-3 py-[19px] text-sm leading-tight transition duration-300`}
                />
                {/* </div> */}
              </Form>
            )}
          </Formik>

          <span className="flex justify-center pt-6 text-sm font-normal leading-tight">
            Dont have an account? &nbsp;
            <Link
              href={'/sign-up'}
              // className="text-primary-base underline after:translate-y-1"
              className="after:-content-[''] relative inline-block text-primary-base after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-bottom after:translate-y-1 after:bg-primary-base after:transition-transform"
            >
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
