// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { socketIoClient } from 'socket.io-client'

// const ENDPOINT = "http://localhost:3000"
// function Home() {
//     const [contant , setContant] = useState("")
//     const [socket , setSocket] = useState(null)
//     useEffect(()=>{
//         const s = socketIoClient(ENDPOINT)
//         s.on("receive-content",(data)=>{
//             setContant(data)
//         })
//         setSocket(s)
//     },[])
//     const handleContantChange = (e)=>{
//     const newContant = e.target.value;
//     setContant(newContant)
//     if (socket) {
//         socket.emit("contant-update",newContant)
//     }
//     }
//   return (
    

//     <div>
        
// <textarea value={contant} 
//  onChange={handleContantChange} >
//     psofjfdpo
//  </textarea>

//     </div>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const ENDPOINT = "http://localhost:3000";

function Home() {
    const [content, setContent] = useState(""); // content کو درست کیا گیا
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const s = io(ENDPOINT); // io() کے ذریعے socket کنکشن
        s.on("receive-content", (data) => {
            setContent(data); // content کو اپڈیٹ کریں
        });
        setSocket(s);

        return () => {
            s.disconnect(); // کنکشن کو صاف کریں
        };
    }, []);

    const handleContentChange = (e) => {
        const newContent = e.target.value;
        setContent(newContent);

        if (socket) {
            socket.emit("content-update", newContent); // content-update 
        }
    };

    return (
        <div>
            <textarea
                value={content}
                onChange={handleContentChange}
                placeholder="Type your content here"
                rows={10}
                cols={30}
            ></textarea>
        </div>
    );
}

export default Home;
