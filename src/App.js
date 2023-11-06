import React from 'react';
import './App.css';
import logo from "./assets/images/vatan40 1.svg";
import images from './assets';
import MyCarousel from './components/MyCarousel';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import WraperProduct from './components/WrapperProduct';

function App() {

  return (
    <div className='mx-auto max-w-screen-xl '>
      <nav class="flex justify-center space-x-10 mt-3 font-[Roboto] text-sm text-[#6D6D6D]">
        <a href="" class="text-[#337ab7] font-medium">Web'e Özel</a>
        <a href="" class=" ">Yeni</a>
        <a href="" class="">Hazır Sistem</a>
        <a href="" class="">PC Toplama</a>
        <a href="" class="">Outlet</a>
        <a href="" class="">Sipraiş Takibi</a>
        <a href="" class="">İade</a>
        <a href="" class="">Mağazalar</a>
        <a href="" class="">Bize Ulaşın</a>
        <a href="" class="">Gaming</a>
      </nav>

      <div class="flex justify-between mt-2 items-center">

        <img src={logo} class="w-44"/>

        <div class="relative text-gray-600" >
          <input type='search' name='search' placeholder='Aramak İstediğiniz Ürünü Yazın' 
          class="bg-[#f7f7f7] pt-[10px] pb-[11px] pr-40 pl-[15px] rounded-full text-sm max-w-[623px] outline-none focus:border-[#cccccc] focus:border   "/>

          <button type='submit' class="absolute right-0 top-0 mt-3 mr-4 w-4 h-4">
            <img src={images.findIMG}/>
          </button>
        </div>

        <div>
        <button class="bg-[#003177] text-white rounded-full w-40 h-11 mr-2">
          Giriş Yap
        </button>
        <button class="bg-[#003177] text-white rounded-full w-40 h-11">
          Sepetim
        </button>
        </div>
      </div>

      <div className="border-t "/>

      <div class="flex justify-center space-x-5  font-medium text-[15px] pb-1">
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177]'>Telefon</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Bilgisayar</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Tv,Görüntü ve Ses</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Bilgisayar Parçaları</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Ev, Mutfak</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Kişisel Bakım</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Foto, Kamera</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Ofis, Kırtasiye</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Aksesuar</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Oyun, Hobi</a>
        <a href="" className='border-[3px] border-transparent  hover:border-t-[#003177] hover:text-[#003177] '>Soğutma, Isıtma</a>
      </div>
      <div class="border-t"/>
      <MyCarousel/>
      <div className='flex justify-between items-center'>
        <h2>
          Öne Çıkan Ürünler
        </h2>
        <a href='#' className='flex border outline-none h-11 rounded-full w-40 justify-center items-center'>Tümünü Gör </a>
      </div>
      <FeaturedProducts/>
      <Categories/>
      <WraperProduct/>
    </div>
  );
}

export default App;
