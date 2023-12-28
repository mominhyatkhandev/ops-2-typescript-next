// 'use client';
// import React, { useState } from 'react';
// // import Checkbox from '@/components/UI/Checkbox';
// import Checkbox from '@/components/UI/Inputs/CheckboxInput';
// import GlobalIcon from '@/assets/icons/global.svg';
// import OnlinePayments from '@/components/Content/OnlinePayments/OnlinePayments';
// function test() {
//   const [selectedOption, setSelectedOption] =
//     useState<string>('Online Payments');

//   const handleOptionSelect = (option: string) => {
//     setSelectedOption(option);
//     // setSelectedOption(option === selectedOption ? null : option);
//     console.log('selected', selectedOption);
//   };
//   return (
//     <div>
//       <Checkbox
//         logo={GlobalIcon}
//         label="Online Payments"
//         selected={selectedOption === 'Online Payments'}
//         onSelect={() => handleOptionSelect('Online Payments')}
//       />
//       <Checkbox
//         logo={GlobalIcon}
//         label="QR Payments"
//         selected={selectedOption === 'QR Payments'}
//         onSelect={() => handleOptionSelect('QR Payments')}
//       />
//       {/* <Checkbox logo={GlobalIcon} label="Mini Apps" /> */}
//     </div>
//   );
// }

// export default test;

import React from 'react';

import SuccessModal from '@/components/UI/Modal/SuccessModal';

function test() {
  return (
    <div>
      <SuccessModal />
    </div>
  );
}

export default test;
