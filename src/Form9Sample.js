import React, { useEffect, useState } from 'react'

const Form9Sample = () => {
    const [size, setSize] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        window.addEventListener('resize',() => {
            setSize(window.innerWidth);
            setHeight(window.innerHeight);
        })

        return function(){
            window.removeEventListener('resize', () => {
                setSize(window.innerWidth);
            });
        }

    }, [])
  return (
    <div>
        <h1>Width: {size}</h1>
        <h1>Height: {height}</h1>
    </div>
  )
}

export default Form9Sample