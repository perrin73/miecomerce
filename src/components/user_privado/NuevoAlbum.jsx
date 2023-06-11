import { Form, Button } from "react-bootstrap/";
import TypeAhead from "./TypeAhead";
import React,{ useState } from 'react';

function NuevoAlbum() {
  const [albums, setAlbums] = useState([]);

  const listameAlbums = (losalbums) => {
    setAlbums(losalbums);
  };
  return (
    <div className="card-group w-75 mx-auto pt-3" style={{height:'500px'}}>
      <div className="card justify-content-evenly p-3">
        <h2 className="text-center">Agregar Album</h2>
        <TypeAhead albumestop={listameAlbums} />
        
      </div>
      <div className="card cardlist overflow-auto" style={{maxWidth:"800px",maxHeight:"500px"}}>
    
                {albums.map((album,index) => (
                  
                  <div className="row g-0 m-1 border border-secondary rounded" key={index}>
                    <div className="col-md-3" >
                     <img className="rounded-start" style={{maxHeight:"100px"}}  src={album.image[2]['#text'] ? album.image[2]['#text']:"https://dummyimage.com/100x100/b0b0b0/ffffff.jpg&text=SIN+IMAGEN" }></img>
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <h5 className="fs-6" >{album.name}</h5>
                        <p className="card-text">{album.mbid}</p>
                        
                      </div>
                    </div>
                  </div>
                



                  
                ))}
    </div>          
    </div>
  );
}

export default NuevoAlbum;
