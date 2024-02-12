'use client';

import { Form, Formik } from 'formik';
import React from 'react';

import DropdownInput from '@/components/UI/Inputs/DropdownInput';
import Input from '@/components/UI/Inputs/Input';
// import Timeline from '@/components/Timeline/Timeline'
import FormWrapper from '@/components/UI/Wrappers/FormLayout';
import type { BusinessAccInfoForm } from '@/interfaces/interface';
import {
  BusinessAccInfoInitialValues,
  businessAccInfoSchema,
} from '@/validations/businessAccInfo';

const AccountInfo = () => {
  const onSubmit = async (values: BusinessAccInfoForm) => {
    // Your form submission logic goes here
    console.log(values, 'hi');
  };

  return (
    <>
      {/* <div>AccountInfo</div> */}
      {/* <Timeline/> */}

      <Formik
        initialValues={BusinessAccInfoInitialValues}
        validationSchema={businessAccInfoSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormWrapper>
              <div className="flex w-full flex-col gap-4">
                <div className="text-base font-semibold leading-tight text-secondary-base">
                  Merchant Personal Details
                </div>
                <Input
                  label="Father Name"
                  name="fatherName"
                  type="text"
                  error={formik.errors.fatherName}
                  touched={formik.touched.fatherName}
                />
                <DropdownInput label={'Gender'} />
                <DropdownInput label={'Purpose of your Account'} />
                <DropdownInput label={'Citizenship'} />
                <DropdownInput label={'Country of your residency'} />
              </div>
            </FormWrapper>
            <FormWrapper>
              <div className="flex w-full flex-col gap-4">
                <div className="text-base font-semibold leading-tight text-secondary-base">
                  Business Details
                </div>
                <Input
                  label="Name of Business Owner as Per CNIC"
                  name="businessOwner"
                  type="text"
                  error={formik.errors.businessOwner}
                  touched={formik.touched.businessOwner}
                />
                <Input
                  label="Business Name"
                  name="businessName"
                  type="text"
                  error={formik.errors.businessName}
                  touched={formik.touched.businessName}
                />
                <Input
                  label="Legal Name of Business "
                  name="legalName"
                  type="text"
                  error={formik.errors.legalName}
                  touched={formik.touched.legalName}
                />
                <Input
                  label="Date of Incorporation"
                  name="incorporationDate"
                  type="text"
                  error={formik.errors.incorporationDate}
                  touched={formik.touched.incorporationDate}
                />

                <DropdownInput label={'Terror Financing'} />
                <DropdownInput label={'Politically Exposed'} />
                <Input
                  label="NTN Number"
                  name="ntnNumber"
                  type="text"
                  error={formik.errors.ntnNumber}
                  touched={formik.touched.ntnNumber}
                />
              </div>
            </FormWrapper>
            {/* <FormWrapper>
              <div className="flex w-full flex-col gap-4">
                <div className="text-base font-semibold leading-tight text-secondary-base">
                  Business Details
                </div>
                <Input
                  label="Name of Business Owner as Per CNIC"
                  name="businessOwner"
                  type="text"
                  error={formik.errors.businessOwner}
                  touched={formik.touched.businessOwner}
                />
                <Input
                  label="Business Name"
                  name="businessName"
                  type="text"
                  error={formik.errors.businessName}
                  touched={formik.touched.businessName}
                />
                <Input
                  label="Legal Name of Business "
                  name="legalName"
                  type="text"
                  error={formik.errors.legalName}
                  touched={formik.touched.legalName}
                />
                <Input
                  label="Date of Incorporation"
                  name="incorporationDate"
                  type="text"
                  error={formik.errors.incorporationDate}
                  touched={formik.touched.incorporationDate}
                />
              </div>
            </FormWrapper> */}
            <FormWrapper>
              <div className="flex w-full flex-col gap-4">
                <div className="text-base font-semibold leading-tight text-secondary-base">
                  Contact Details
                </div>
                <Input
                  label="Email Address"
                  name="emailAddress"
                  type="text"
                  error={formik.errors.businessOwner}
                  touched={formik.touched.businessOwner}
                />
                <Input
                  label="City"
                  name="cityName"
                  type="text"
                  error={formik.errors.businessName}
                  touched={formik.touched.businessName}
                />
                <Input
                  label="Business Address"
                  name="businessAddress"
                  type="text"
                  error={formik.errors.legalName}
                  touched={formik.touched.legalName}
                />
                <Input
                  label="Correspondence Address"
                  name="correspondenceAddress"
                  type="text"
                  error={formik.errors.incorporationDate}
                  touched={formik.touched.incorporationDate}
                />
                <DropdownInput label={'Are you an Account Holder'} />

                <Input
                  label="Primary Phone Number"
                  name="primaryPhoneNumber"
                  type="text"
                  error={formik.errors.incorporationDate}
                  touched={formik.touched.incorporationDate}
                />
                <Input
                  label="Other Phone Number"
                  name="otherPhoneNumber"
                  type="text"
                  error={formik.errors.incorporationDate}
                  touched={formik.touched.incorporationDate}
                />
              </div>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AccountInfo;
