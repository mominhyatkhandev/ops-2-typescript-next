'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import arrowDown from '@/assets/icons/arrow-down.svg';
import arrowUp from '@/assets/icons/arrow-up.svg';

const FAQ = () => {
  const faqs = [
    {
      question:
        'What modes of payment are available in easypaisa Online Payment Gateway?',
      answer:
        'We offer the following modes of payments. You may choose to integrate as many methods as you wish. • easypaisa Mobile Account • OTC (easypaisa token to be paid at 1link banks & franchise )',
    },
    {
      question:
        'What is the signing-up process for easypaisa Online Payment Gateway?',
      answer: 'CONTENT UNAVAILABLE',
    },
    {
      question: 'When will the amount be settled to the merchant?',
      answer: 'CONTENT UNAVAILABLE',
    },
    {
      question:
        'Are there any annual, monthly or setup charges to use the gateway service?',
      answer:
        'We offer the following modes of payments. You may choose to integrate as many methods as you wish. • easypaisa Mobile Account • OTC (easypaisa token to be paid at 1link banks & franchise )',
    },
    {
      question:
        'What modes of payment are available in easypaisa Online Payment Gateway?',
      answer:
        'We offer the following modes of payments. You may choose to integrate as many methods as you wish. • easypaisa Mobile Account • OTC (easypaisa token to be paid at 1link banks & franchise )',
    },
    {
      question:
        'Are there any annual, monthly or setup charges to use the gateway service?',
      answer:
        'We offer the following modes of payments. You may choose to integrate as many methods as you wish. • easypaisa Mobile Account • OTC (easypaisa token to be paid at 1link banks & franchise )',
    },
  ];
  const [activeTab, setActiveTab] = useState<string>('Online payment gateway');
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveQuestion((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="flex flex-col items-center justify-center gap-20 pb-[120px]">
      <div
        id="NewRootRoot"
        className="flex w-full flex-col items-start justify-between"
      >
        <div className="flex w-full flex-col items-start justify-end bg-screen-grey">
          {/* <div className="flex flex-col gap-12 pb-[120px] items-start"> */}
          <div className="flex w-full flex-col items-start justify-end gap-8 px-[150px] pt-[120px]">
            <div className="text-5xl font-semibold leading-tight text-secondary-base">
              How can we help you?
            </div>
            <div className="flex w-full flex-row items-center gap-8">
              <div
                className={`flex cursor-pointer items-center justify-center gap-9 font-500 leading-tight`}
                onClick={() => setActiveTab('Online payment gateway')}
              >
                <div className="flex items-start justify-center gap-9">
                  <span
                    className={`flex items-center justify-center pb-2 ${
                      activeTab === 'Online payment gateway'
                        ? 'border-b-2 border-primary-base text-primary-base'
                        : 'text-secondary-base'
                    }`}
                  >
                    Online payments gateway
                  </span>
                  <div className="mt-[5px] h-[10px] w-[1px] bg-border-dark"></div>
                </div>
              </div>
              <div
                className={`flex cursor-pointer flex-col items-start justify-start gap-9 font-500 leading-tight  `}
                onClick={() => setActiveTab('QR payments')}
              >
                <div className="flex items-start justify-center gap-9">
                  <span
                    className={`flex items-center justify-center pb-2 ${
                      activeTab === 'QR payments'
                        ? 'border-b-2 border-primary-base text-primary-base'
                        : 'text-secondary-base'
                    }`}
                  >
                    QR payments
                  </span>
                  <div className="mt-[5px] h-[10px] w-[1px] bg-border-dark"></div>
                </div>
              </div>

              <div
                className={`flex cursor-pointer items-center justify-center font-500 leading-tight`}
                onClick={() => setActiveTab('Mini apps')}
              >
                <div className="flex items-start justify-center gap-9">
                  <span
                    className={`flex items-center justify-center pb-2 ${
                      activeTab === 'Mini apps'
                        ? 'border-b-2 border-primary-base text-primary-base'
                        : 'text-secondary-base'
                    }`}
                  >
                    Mini apps
                  </span>
                  {/* <div className="w-[1px] h-[10px] mt-[5px] bg-border-dark"></div> */}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-8 px-[150px]">
        {faqs?.map((faq, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-between gap-8 border-b-[1px] border-b-border-light pb-8"
            >
              <div className="flex w-full flex-col items-start">
                <div className="w-full ">
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <div
                      onClick={() => handleToggle(index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-20 font-medium leading-tight text-secondary-base"
                    >
                      <div>{faq.question}</div>
                      <div onClick={() => handleToggle(index)}>
                        {activeQuestion === index ? (
                          <Image
                            src={arrowUp}
                            alt={'arrow up'}
                            height={7}
                            width={12}
                            onClick={() => handleToggle(index)}
                          />
                        ) : (
                          <Image
                            src={arrowDown}
                            alt={'arrow down'}
                            height={7}
                            width={12}
                            onClick={() => handleToggle(index)}
                          />
                        )}
                      </div>
                    </div>
                    {activeQuestion === index && (
                      <div className="w-4/5 text-sm leading-tight text-secondary-500">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

// {
//   faqs.map((faq, index) => (
//     <div key={index} className="mb-4">
//       <div
//         className="cursor-pointer bg-blue-500 text-white p-3 rounded"
//         onClick={() => handleToggle(index)}
//       >
//         {faq.question}
//       </div>
//       {activeIndex === index && (
//         <div className="bg-gray-200 p-3 mt-2 rounded">{faq.answer}</div>
//       )}
//     </div>
//   ));
// }
