import React from 'react'
import ProductCard from '../components/productCard'
import { MdKeyboardArrowRight } from "react-icons/md";

function DisplayArea() {
  return (
    <div class="px-[80px] py-[32px]">
        <div class="flex mb-[20px]">
            <h4 class="text-[32px] font-bold">Эрэлттэй бүтээгдэхүүнүүд</h4>
            <h5 class="text-[16px] text-[#1A661A] ml-auto flex items-center">Дэлгэрэнгүй<MdKeyboardArrowRight class="text-[24px]"/></h5>
        </div>
        <div class="flex gap-[32px] items-center">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>     
        </div>
    </div>
  )
}

export default DisplayArea