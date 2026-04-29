import React from 'react'
import { IoLocation } from "react-icons/io5";

function Contact(){
    return(
        <div class="flex">
            <p>Холбоо барих</p>
                <p><IoLocation />Phone Number</p> 
                <p><i class="fa-solid fa-envelope"></i>Email</p>  
                <p><i class="fa-solid fa-phone"></i>Address</p>  
        </div>
    )
}

export default Contact