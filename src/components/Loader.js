import React, {useState, useEffect} from 'react';
import ReactLoading from 'react-loading';
import Weather from './Weather';

const imagesbg = ["https://static.diariofemenino.com/uploads/psicologia/218851-sonar-nubes.jpg","https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541_960_720.jpg", "https://images6.alphacoders.com/438/438947.jpg", "https://images.alphacoders.com/777/77763.jpg", "https://live.staticflickr.com/1895/30449232538_9ebd2b9f9e_b.jpg"]

const Loader = () => {

    const [done, setDone] = useState(undefined);

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setDone(true);
        });
        }, 3000);
    },[])

    document.body.style = `background-image: url(${imagesbg[3]});
    background-size: 110%;
    background-repeat: no-repeat;
    padding-top: 20%;
    `

    return (
        <div align="center">
            {
                !done ? <div><h1 className="loader-title">Welcome!<br/>Loading <span className="span-title">Weather</span><span> App</span></h1> <ReactLoading type={"bubbles"} color={"white"} height={100} width={100} /></div> 
                :
                <Weather/>
            }
        </div>
    );
};

export default Loader;