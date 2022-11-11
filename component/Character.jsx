import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Character = ({location}) => {

    const [residentcontent, setResidentcontent] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get(location)
        .then((res) => {
            setIsLoading(false);
            setResidentcontent(res.data)
        });
    }, [])

    return (
        <>
        { isLoading ? (
            <div className='loading2'>
                <img src=".././assets/loading.gif" alt="" />
            </div>
        ) : (
        <div className='card'>
            <div className='content-img'>
                <img src={residentcontent.image === undefined ? photoRickAndMorty : residentcontent.image} alt={`Character Photo: ${residentcontent.name}`} />
            </div>
            <div className='content'>
                    {residentcontent.status === "Alive" ? (
                        <div className='row-card-content'> 
                            <div className='status-content'>
                                <div className='status' style={{background:"green", boxShadow:"0 0 10px green"}}></div>
                            </div>
                            <div className='status-content'>
                                <p>{residentcontent.status} - {residentcontent.species}</p> 
                            </div>
                        </div>
                    ) : residentcontent.status === "Dead" ? (
                        <div className='row-card-content'> 
                            <div className='status-content'>
                                <div className='status' style={{background:"red", boxShadow:"0 0 10px red"}}></div>
                            </div>
                            <div className='status-content'>
                                <p>{residentcontent.status} - {residentcontent.species}</p> 
                            </div>
                        </div>
                    ) : (
                        <div className='row-card-content'> <div className='status' style={{background:"gray", boxShadow:"0 0 10px gray"}}></div> {residentcontent.status} - {residentcontent.species}</div>
                    )}
                    {/* dsps */}
                      {/* {RickAndMortyLocation.residents?.length === 0 && .main-cards{background:rgb(51, 255, 0)}} */}
                
                <p><b>Name:</b> <span>{residentcontent.name}</span></p>
                <p><b>Origin: </b> <span>{residentcontent.origin?.name}</span></p>
                <p><b>Episode: </b> <span>{residentcontent.episode?.length}</span></p>
            </div>
        </div>
        )}
        </>
    );
};

export default Character;