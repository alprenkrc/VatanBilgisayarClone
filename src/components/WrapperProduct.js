import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SkuterImage from "../assets/images/140386-1_small.webp";

const MyTexts = ({productCode, productName, productCost}) => {
  const myTL = <p className='text-xs font-["Roboto"] text-[#003177] font-bold'>TL</p>
  return(
    <div className='py-8 px-10 flex outline-none border rounded-md w-[45%] bg-white justify-evenly hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>

      <div className='w-[40%] flex '>
        <img src={SkuterImage}/>
      </div>

      <div className='flex flex-col justify-center'>
        <div>
          <p className='text-[11px] text-[#858585] font-["Arial"]'>{productCode}</p>
          <p className='text-xs font-["Roboto"] '>{productName}</p>
        </div>
        <br></br>
        <div className='flex items-baseline'>
          <p className='text-[32px] text-[#003177] font-bold font-["Roboto"] '>{productCost}</p>
          <p className='text-xs font-["Roboto"] text-[#003177] font-bold'>TL</p>
        </div>
        <div className='text-center text-[11px] font-["Roboto"] text-[#003177] font-bold pb-0.5 pt-[3px] border-solid border rounded-[5px] border-[#b2c1d6]'>
          <p>KARGO BEDAVA</p>
        </div>
      </div>
      
    </div>
  );
};




const WraperProduct = () => {
  return(
    <div className='bg-[#F5F5F5] pt-10 pb-1'>
        <div className='flex flex-row justify-between items-center font-["Roboto"]'>
            <p className='text-[18px] font-medium text-[#333333]'>Web'e Özel Sınırlı Stok</p>
            <a href='#' className='flex border text-[12px] text-[#1C1C1C] font-bold border-[#cecece] hover:border-[#adadad] outline-none rounded-full px-11 py-3'>TÜMÜNÜ GÖR</a>
        </div>
        <div>
          <Carousel showArrows={false} showStatus={false}>

            <div className='flex justify-center gap-4 mt-6 mb-20'>
              <MyTexts productCode={"G3"} productCost={14.998} productName={"Gotrax G3 300W Elektrikli Scooter"}/>
              <MyTexts productCode={"G3"} productCost={14.998} productName={"Gotrax G3 300W Elektrikli Scooter"}/>
            </div>


            <div className='flex justify-center gap-4 mt-6 mb-20'>
              <MyTexts productCode={"G3"} productCost={14.998} productName={"Gotrax G3 300W Elektrikli Scooter"}/>
              <MyTexts productCode={"G3"} productCost={14.998} productName={"Gotrax G3 300W Elektrikli Scooter"}/>
            </div>

            <div className='flex justify-center gap-4 mt-6 mb-20'>
              <MyTexts productCode={"G3"} productCost={14.998} productName={"Gotrax G3 300W Elektrikli Scooter"}/>
              <MyTexts productCode={"G3"} productCost={14.998} productName={"Gotrax G3 300W Elektrikli Scooter"}/>
            </div>

            <div className='flex justify-center gap-4 mt-6 mb-20'>
              <MyTexts productCode={"G3"} productCost={14.998} productName={"Gotrax G3 300W Elektrikli Scooter"}/>
              <MyTexts productCode={"G3"} productCost={14.998} productName={"Gotrax G3 300W Elektrikli Scooter"}/>
            </div>

          </Carousel>
        </div>
    </div>
  );
};

export default WraperProduct;