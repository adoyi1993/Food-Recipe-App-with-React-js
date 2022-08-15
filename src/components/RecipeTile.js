import React from 'react'

const RecipeTile = ({recipe}) => {
  return (
    
    <div className='recipeTile' onClick={()=> {window.open(recipe["recipe"]["url"]);}} >
        <img  className='recipeTile_img' src={recipe["recipe"]["image"]} alt=""   style={{borderRadius:"10px"}}/>
        <p className='recipeTile_label' >{recipe["recipe"]["label"]}</p>


    </div>
  )
}

export default RecipeTile