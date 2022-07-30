import React from "react";
import memesData from "./memesData";
export default function Meme()
{
    const[meme,setmeme]=React.useState({
        uppertext:"",
        lowertext:"",
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
    
    function handlechange(event) {
        const {name, value} = event.target
        setmeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

        
        
        
    
    return(
        <>
        <div>
            <input className="input" type="text" name="uppertext" value={meme.uppertext} onChange={handlechange}></input>
            <input className="input" type="text" name="lowertext" value={meme.lowertext} onChange={handlechange} ></input>
            <button className="btn" onClick={getMemeImage}><img className="meme" src="./img/meme.png"/></button>
            
        </div>
        <div className="meme">
        <img  className="memeimg" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.uppertext}</h2>
                <h2 className="meme--text bottom">{meme.lowertext}</h2>
            </div>
        
        </>
    )
}