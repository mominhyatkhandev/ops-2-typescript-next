// import "./QRPayments.css";
import Image from 'next/image';
import React from 'react';

import qrPayments from '../../../assets/images/qrpayments.png';

const QRPayments = () => {
  return (
    <div id="NewRootRoot" className="flex w-full flex-col">
      {/* <div className="qr-bg bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end min-h-[640px] shrink-0 items-start pl-40 py-24"> */}
      <div className="relative flex min-h-[640px] shrink-0 flex-col items-start justify-end py-24 pl-40">
        <Image
          src={qrPayments}
          alt="QrPayments Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />

        <div className="relative flex h-auto max-w-[560px] shrink-0 flex-col items-start justify-center gap-12 rounded-lg bg-neutral-white-base px-[32px] py-[40px] shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)]">
          <div
            id="QRPayments1"
            className="self-start text-5xl font-semibold leading-tight text-secondary-base"
          >
            QR <span className="text-primary-base">Payments</span>
          </div>
          <div className="text-base font-normal leading-tight text-secondary-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt
            ut labore et doloreLorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRPayments;
