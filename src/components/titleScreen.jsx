import React from 'react'

function titleScreen(){
    return(
        <div id="titleScreen">
            <h1>Хурдан Шуурхай<b>Амархан</b></h1>
            
            <h2>Хамгийн ойрхон, хурднаар эмийн сан орж хэрэгтэй эмээ олж аваарай</h2>
            <div id="titleSearchBar">
                <div id="iconText">
                    <button id="searchIcon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                    </button>   
                    <div id="titleSearchBox">
                        <input type="text" id="titleSearchBarText" placeholder="Эм, эмийн сан хайх"></input>
                    </div>
                </div>
                <h3 id="titleSearchBtn">Хайх</h3>
            </div>  
            <div id="titleMenu">
                <p>Байршил</p>
                <p>Эм найрлага</p>
                <p>Нярай хүүхэд</p>
                <p>Эм</p>
            </div>
        </div>
    )
}

export default titleScreen