import React from "react";
import memesData from "./memesData";
export default function Meme()
{
    const[meme,setmeme]=React.useState({
        topText: "",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
        
    })
    const[allmemesImages,setallmemesImages]=React.useState(memesData)
   
    function getMemeImage() {
        const memesArray = allmemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url=memesArray[randomNumber].url
        setmeme(prevmeme=>
            ({
                ...prevmeme,randomImage:url
            })
                
                
             
        )
        
    }
    return(
        <>
        <div>
            <input className="input" type="text"></input>
            <input className="input" type="text"></input>
            <button className="btn" onClick={getMemeImage}><img className="meme" src="./img/meme.png"/></button>
            <img  className="memeimg" src={meme.randomImage}/>
        </div>
        <footer className="foot">created by Harshit Kesharwani</footer>
        </>
    )
}