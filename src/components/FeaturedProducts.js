import React from 'react'
import testImage from "../113155-2-5_small.webp";
import Oem from "../assets/images/oem-hazir-sistemler.webp";
import CleanRobot from "../assets/images/robot.webp";
import TV from "../assets/images/mac-keyfi.webp";
import AirFryer from "../assets/images/airfry.webp";


const MyTexts = ({productCode, productName, productCost}) => {
  const myTL = <p className='text-xs font-["Roboto"] text-[#003177] font-bold'>TL</p>
  return(
    <div className='px-[35px] pt-10 pb-[5px] '>
      <div className='max-w-full max-h-full'>
        <img src={testImage}/>
      </div>
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
  );
};



const FeaturedProducts = () => {
  return(
    <div className='flex flex-wrap gap-8 justify-between  mt-2 ' >

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts 
            productCode={"Y36_8/256 Siyah"} 
            productName={"Vivo Y36 8/256 Gb Akıllı Telefon Meteor Siyahı"} 
            productCost={11.599}/>
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts 
            productCode={"53013PMR"} 
            productName={"Huawei MAteBook D15 11.Nesil Core i5 1155G7-8Gb-256Gb SSD-15.6inch-W11"} 
            productCost={11.599}/>
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"UE55CU7000UXTK"}
            productName={"SAMSUNG UE 55CU7000 55inc 138 cm 4K UHD Smart TV,Uydu Alıcılı"}
            productCost={24.799}/>
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"ZAAJ0378TR"}
            productName={"Lenovo Tab M10 Plus 2Ghz 4Gb 128Gb 10.61inch 2K -Android Tablet"}
            productCost={5.999}
          />
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"MHDH3TU/A"}
            productName={"iPhone 11 128 Gb Akıllı Telefon Siyah"}
            productCost={25.499}
          />
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"MKGT3TU/A"}
            productName={"MacBook Pro MKGT3TU/A M1 Pro 16Gb-1Tb Ssd-Liquid Retina-14inc-Silver"}
            productCost={49.999}
          />
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"58PUS8507"}
            productName={"PHILIPS 58PUS8507 58inc 146 cm 4K UHD Android TV,3 Taraflı Ambilight,Uydu Alıcı"}
            productCost={22.349}
          />
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"55028445"}
            productName={"HUAWEI WATCH GT3 46 MM B29S SIYAH"}
            productCost={4.449}
          />
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"N65"}
            productName={"Navee N65 500W Elektrikli Scooter"}
            productCost={17.499}
          />
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"MV7N2TU/A"}
            productName={"Apple MV7N2TU/A Airpods 2.Nesil ve Şarj Kutusu"}
            productCost={3.369}
          />
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"Mi SMART AIR FRYER"}
            productName={"Xiaomi Mi Smart Airfryer 3.5L"}
            productCost={2.499}
          />
        </div>

        <div className='border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] hover:shadow-[0_10px_36px_0px_rgba(0,0,0,0.3)]'>
          <MyTexts
            productCode={"7P698EA"}
            productName={"Hp 14-em0006nt 7.Nesil Ryzen 5 7520U-8Gb-512Gb Ssd-14inc-W11"}
            productCost={9.999}
          />
        </div>

      


        <div className='flex border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] p-2.5 relative'>
          <img src={Oem} className='rounded-[5px]' alt="Resim"/>          
          <p className='absolute rounded-[5px] border outline-none bg-[#7272723d] border-white text-white m-2.5 left-2 right-2 top-2 bottom-2 flex items-end justify-center'>
            OEM Hazır Sistemler
          </p>
        </div>



          <div className='flex border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] p-2.5 relative'>
            <img src={CleanRobot} className='rounded-[5px]'/>
            <p className='absolute rounded-[5px] border outline-none bg-[#7272723d] border-white text-white m-2.5 left-2 right-2 top-2 bottom-2 flex items-end justify-center'>
            Temizlik İşi Robot'ta
            </p>
          </div>

          <div className='flex border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] p-2.5 relative'>
            <img src={TV} className='rounded-[5px]'/>
            <p className='absolute rounded-[5px] border outline-none bg-[#7272723d] border-white text-white m-2.5 left-2 right-2 top-2 bottom-2 flex items-end justify-center'>
            Evde Stadyum Keyfi
            </p>
          </div>

          <div className='flex border outline-none rounded-[5px] w-[22.5%] max-lg:w-[47%] p-2.5 relative'>
            <img src={AirFryer} className='rounded-[5px]' />
            <p className='absolute rounded-[5px] border outline-none bg-[#7272723d] border-white text-white m-2.5 left-2 right-2 top-2 bottom-2 flex items-end justify-center'>
            Airfryer Ürünleri
            </p>
          </div>
        

    </div>
  );
};

export default FeaturedProducts;