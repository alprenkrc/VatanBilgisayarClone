import React from 'react'
import Telephone from "../assets/images/CategoriesImages/mobile-svgrepo-com.svg";

const Categories = () => { //568CE6
  return(
    <div className='flex mt-10 flex-col mb-10 font-["Roboto"]'>
        <p className='text-[18px] font-medium'>Kategoriler</p>
        <div className='flex flex-wrap text-center justify-between mt-5 text-[13px] text-[#003177]  '>

            <a href='#' className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center '/>
                <p>Telefon</p>
            </a>
            <a href="#" className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center'/>
                <p>Notebook</p>
            </a>
            <a href="#" className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center'/>    
                <p>Televizyon</p>
            </a>
            <a href="#" className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center'/>
                <p>Akıllı Saat</p>
            </a>
            <a href="#" className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center'/>
                <p>Yazıcı</p>
            </a>
            <a href="#" className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center'/>
                <p>Oyun Konsolları</p>
            </a>
            <a href="#" className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center'/>
                <p>Ev Ürünleri</p>
            </a>
            <a href="#" className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center'/>
                <p>Kişisel Bakım</p>
            </a>
            <a href="#" className="border outline-none rounded-[5px] w-[10%] items-center flex flex-col p-2 hover:text-[#568CE6]">
                <img src={Telephone} className='w-10 items-center'/>
                <p>Aksesuar</p>
            </a>
        </div>
    </div>
  );
};

export default Categories;