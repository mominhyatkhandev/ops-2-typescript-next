import React from 'react';

import LoginCard from '@/components/UI/Card/LoginCard/LoginCard';

const LoginSucess = () => {
  const LoginCardData = [
    {
      title: 'Sandbox Integrationsss',
      description:
        'All you need is to select payment mode of your integration need and follow step by step integration guide to begin testing ',
      routeName: 'xyz',
    },
    {
      title: 'Production Onboarding',
      description:
        'All you need is to select payment mode of your integration need and follow step by step integration guide to begin testing ',
      routeName: 'xyz',
    },
    {
      title: 'Continue to My Dashboard',
      description:
        'All you need is to select payment mode of your integration need and follow step by step integration guide to begin testing ',
      routeName: 'xyz',
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-9 px-[150px] py-[60px]">
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-semibold text-secondary-base">
            Welcome to easypaisa{' '}
            <span className="text-primary-base"> Developer Portal </span>
          </p>
          <p className="text-base text-secondary-600">
            your sandbox account and store has been automatically created.
            Details have been sent to your email address. (only show first time)
          </p>
        </div>
        <div className="flex gap-5">
          {LoginCardData.map((item, index) => (
            <LoginCard
              key={index}
              title={item.title}
              description={item.description}
              routeName={item.routeName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LoginSucess;
