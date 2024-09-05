// // src/components/NewPropertyCard.js

// import React from 'react';
// import ngnIcon from '../../assets/Images/CurrencyNgn.png';
// import heart from '../../assets/Images/Heart.png';
// import bedIcon from '../../assets/Images/Bed.png';
// import bathIcon from '../../assets/Images/Bathtub.png';
// import tdesign from '../../assets/Images/tdesign_measurement-2.png';

// const NewPropertyCard = ({ _id, title, image, price, bed, bath, size }) => {
//     return (
//         <div className="bg-slate-100 rounded-xl shadow-lg overflow-hidden">
//             <img src={image} alt={title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//                 <div className="flex items-center text-lg text-gray-800 mb-2">
//                     <img src={ngnIcon} alt='NGN' className="w-6 h-6 mr-1" />
//                     <span>{price && price.toLocaleString("en-us")}</span>
//                     <img src={heart} alt='Favorite' className="ml-auto w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//                 <div className="flex text-gray-600 text-sm">
//                     <div className="flex items-center mr-4">
//                         <img src={bedIcon} alt='Bed' className="w-5 h-5 mr-1" />
//                         <span>{bed} bed</span>
//                     </div>
//                     <div className="flex items-center mr-4">
//                         <img src={bathIcon} alt='Bath' className="w-5 h-5 mr-1" />
//                         <span>{bath} bath</span>
//                     </div>
//                     <div className="flex items-center">
//                         <img src={tdesign} alt='Size' className="w-5 h-5 mr-1" />
//                         <span>{size} sq ft</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewPropertyCard;
