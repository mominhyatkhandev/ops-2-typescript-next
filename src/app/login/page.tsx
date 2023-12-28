'use client';

import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import eye from '@/assets/icons/eye.svg';
import LoginBg from '@/assets/images/login-bg.jpg';
import Button from '@/components/UI/Button/PrimaryButton';
import Input from '@/components/UI/Inputs/Input';
import loginSchema, { loginInitialValues } from '@/validations/loginSchema';

const Login = () => {
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
          <span className="flex w-full justify-center pb-8 text-[40px] font-semibold">
            Login to your account
          </span>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginSchema}
            onSubmit={() => {
              console.log('login submitted');
            }}
          >
            {(formik) => (
              <Form className="flex flex-col items-center gap-6">
                <Input
                  label="Username"
                  name="username"
                  type="text"
                  error={formik.errors.username}
                  touched={formik.touched.username}
                />
                {/* <Input
                  label="Password"
                  name="password"
                  type="password"
                  error={formik.errors.password}
                  touched={formik.touched.password}
                /> */}
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  error={formik.errors.password}
                  touched={formik.touched.password}
                  hasImage={true}
                  image={eye}
                />
                <Button
                  label="Login"
                  type="submit"
                  path="/"
                  isDisabled={!formik.isValid}
                  className={`button-primary w-[270px] px-4 py-[19px] text-sm leading-tight transition duration-300`}
                />
              </Form>
            )}
          </Formik>
          {/* <div className="flex flex-col gap-6">
            <InputPrimary
              label="Username or email"
              type="kmska"
              className="knak"
              error={'xyz'}
              touched={false}
              // hasImage={false}
              isDisabled={false}
            />
            <Input
              name={'password'}
              label="Password"
              type="password"
              className="knak"
              // hasImage={false}
              isDisabled={false}
              error={'xyz'}
              touched={false}
            />
          </div>
          <div className="flex justify-center pt-8 pb-6">
            <Button
              label="Login"
              className="button-primary w-[270px] px-3 py-[19px]"
            />
          </div> */}
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
