import React from 'react'
import { LuCalendarClock } from "react-icons/lu";
function NewsHighlight(){
    return(
        <div class="rounded-[20px] flex flex-col gap-[14px] border-2">
            <img class="max-h-[320px]"src=""/>
            <div class="flex items-center gap-1">
                <h5 class="bg-[#E5EEE5] rounded-[8px] text-[14px] px-[12px] py-[8px] text-[#4D884D]">Doctor</h5>
                <LuCalendarClock class="text-[24px] text-[#4D884D]"/>
                <h5 class="text-[13px]">2026.4.10</h5>
            </div>
            <h5 class="text-[36px] font-medium">Гарчиг</h5>
            <h5 class="text-[16px]">Тайлбар</h5>
            <h5 class="rounded-[8px] bg-[#4D884D] text-white text-[14px] py-[14px] px-[24px]">Дэлгэрэнгүй</h5>
        </div>
    )
}

export default NewsHighlight