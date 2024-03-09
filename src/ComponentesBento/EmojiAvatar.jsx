import React from 'react'
import '../ComponentesBento/Estilo.css'


export function EmojiAvatar ({ImgEmoji, shadowColor })  {
  return (
    <>
    <div className='ComponenteEmojiAvatar'>
        <img className='ImgAvatar' src={ImgEmoji} alt=""
          style={{ filter: `drop-shadow(0 4px 6px rgba(${shadowColor}))` }}
        />
    </div>
    </>
  )
}
