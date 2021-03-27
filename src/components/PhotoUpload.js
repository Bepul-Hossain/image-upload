import React, { useEffect, useRef, useState } from 'react'
import Axios from 'axios'
export default function PhotoUpload() {
    const [image, setImage] = useState([])
    const inputRef = useRef(null)
    const varRef = useRef(image.length);

    useEffect(() => {
        Axios.get('http://localhost:8000/605ed53c8232ff70f0cdde4a').then(
            res=>{
                setImage(res.data)
               console.log(res.data);
            }
        )
    }, [])

    return (
        <div>
            
            
           {image.map(imgs=><img key={0} src="imgs.data.photo" alt="not found"></img>)}
        </div>
    )
}
