import {React, useEffect, useState} from "react";
import './App.css';
import SearchIcon from "./search.svg";
import ImageCard from './ImageCard';

const API_URL = 'https://lexica.art/api/v1/search'

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [gallery, setGallery] = useState([]);

    const searchImages = async (keyword) => {
        const response = await fetch(`${API_URL}?q=${keyword}`, {mode:'cors'})
        const data = await response.json()
        setGallery(data.images)
    };

    useEffect(() => {
        searchImages('3d style,high detailed painting,hd,queen,robot');
    },[]);

    return (
        <div className="app">
            <h1>Diffuse</h1>
            <h5>Stable diffusion image prompts</h5>
            <div className="search">
                <input placeholder="Search for image prompts"
                        value={searchTerm}
                        onChange={(e)=>{setSearchTerm(e.target.value)}}
                        onKeyUp={ (e)=> {if(e.key === 'Enter') {searchImages(searchTerm)} }}/>

                <img src={SearchIcon} alt="search"
                        onClick={()=>{searchImages(searchTerm)}}/>
            </div>

            {gallery?.length > 0 ? (
                <div className="container">
                    {gallery.map((image) => (
                        <ImageCard image={image} />
                    ))}
                </div>
            ) : (
                 <div className="empty">
                    <h2>No Images found</h2>
                </div>
            )}

        </div>
    );
}

export default App;