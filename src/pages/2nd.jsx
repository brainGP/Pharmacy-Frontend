import React from 'react'
import Header from '../components/header'
import TitleMenu from '../components/titleMenu'
import ProductCard from '../components/displayArea/productCard'
import AdBig from '../components/ad/adBig'
import AdSmall from '../components/ad/adSmall'
import Footer from '../components/footer/footer'
function Second(){
    return(
        <div>
            <Header/>
            <TitleMenu/>
            <div class="flex gap-[32px] items-center px-[80px] py-[32px]">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>    
            </div>
            <div class="flex gap-[32px] items-center px-[80px] py-[32px]">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>    
            </div>
            <div class="flex gap-[20px] px-[80px] py-[32px]">
                <AdBig class="flex-1"/>
                <div class="flex-1 flex flex-col gap-[20px]">
                    <AdSmall/>
                    <AdSmall/>
                </div>
            </div>
            <div class="flex mb-[20px] px-[80px] py-[32px]">
                <h4 class="text-[32px] font-bold">Эрэлттэй бүтээгдэхүүнүүд</h4>
                <h5 class="text-[16px] text-[#1A661A] ml-auto flex items-center">Дэлгэрэнгүй<MdKeyboardArrowRight class="text-[24px]"/></h5>
            </div>
            <div class="flex gap-[32px] items-center px-[80px] py-[32px]">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>    
            </div>
            <Footer/>
        </div>
    )
}

export default Second