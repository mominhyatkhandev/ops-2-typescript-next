'use client';

import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import apiClient from '@/api/apiClient';
import eye from '@/assets/icons/eye.svg';
import LoginBg from '@/assets/images/login-bg.svg';
import Button from '@/components/UI/Button/PrimaryButton';
import Input from '@/components/UI/Inputs/Input';
import type { LoginForm } from '@/interfaces/interface';
import loginSchema, { loginInitialValues } from '@/validations/loginSchema';

const Login = () => {
  const router = useRouter();
  const [apierror, setApierror] = useState('');

  const onSubmit = async (values: LoginForm, { setSubmitting }: any) => {
    try {
      const response: any = await apiClient.post(
        'auth/login',
        {},
        {
          headers: {
            username: values.Username,
            password: values.Password,
          },
        },
      );

      console.log('API Response:', response);
      if (response?.headers.responseCode == '000') {
        console.log(response, 'successssssssssssssssss');
        router.push('/login/loginSuccess');
      } else {
        console.log('hiiiiii  ');
      }
      setApierror('');
    } catch (error: any) {
      setApierror(error.response.headers.responseMessage);
    } finally {
      setSubmitting(false);
    }
    console.log('username and password is', values.Username, values.Password);
  };
  return (
    <>
      <div className="relative bg-primary-700 px-[380px] pb-[144px] pt-[120px] sm:md-max:px-[24px] sm:md-max:pb-[262px] sm:md-max:pt-[164px]">
        <Image
          src={LoginBg}
          alt="LoginBg"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 max-w-full"
        />
        <div className="relative h-max w-[680px] rounded-lg border-[1px] border-border-light bg-neutral-white-base px-[60px] py-9 sm:md-max:w-full sm:md-max:px-[20px] sm:md-max:py-8">
          {/* <div className="relative h-max w-[680px] rounded-lg border-[1px] border-border-light bg-neutral-white-base px-[60px] py-9 sm:md-max:w-full"> */}

          <span className="flex w-full justify-center pb-8 text-[40px] font-semibold text-secondary-base sm:md-max:text-[32px]">
            Login to your account
          </span>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form className="flex flex-col items-center">
                <div className="mb-6 flex w-full flex-col">
                  <Input
                    label="Username"
                    name="Username"
                    type="text"
                    error={formik.errors.Username}
                    touched={formik.touched.Username}
                  />
                </div>
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
                <div className="flex w-full justify-start px-3 pt-[8px] text-xs text-danger-base">
                  {apierror}
                </div>
                <Button
                  label="Login"
                  routeName="/login"
                  type="submit"
                  isDisabled={!formik.isValid}
                  className={`button-primary mt-8 w-[270px] px-3 py-[19px] text-sm leading-tight transition duration-300`}
                />
              </Form>
            )}
          </Formik>

          <span className="flex justify-center pt-6 text-sm font-normal leading-tight">
            Dont have an account? &nbsp;
            <Link
              href={'/sign-up'}
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
