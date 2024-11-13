import React, { useContext } from 'react'
import { albumsData, assets, songsData } from '../../assets/assets'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../../context/PlayerContext';
import DisplayNav from '../DisplayNav/DisplayNav';

const DisplayAlbum = () => {

    const { id } = useParams();
    const { playWithId } = useContext(PlayerContext);
    const albumData = albumsData[id];

    return (
        <>
            <DisplayNav />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                <div className='flex flex-row'>
                     <img src={'#'} alt=" "/>
                     <p>verified Artist</p>
                </div>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p className='mr-4'> Popular</p>
                
                <p className='hidden sm:block text-center ml-[250%]'>see all</p> 
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b> Title</p>
                <p className='hidden sm:block text-center'>Playing</p>
                <p className='hidden sm:block text-center'>Time</p>
                <p className='hidden sm:block text-center '>Album</p> 
            </div>
            <hr />
            {songsData.map((item, index) => {
                return (
                    <div onClick={() => playWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer' key={index}>
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                            <img className='inline w-10 mr-5' src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='text-[15px] hidden sm:block text-center'>345.677.889</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                        <p className='text-[15px] text-center'>{albumData.name}</p>
                        
                    </div>
                )
            })}
        </>
    )
}


export default DisplayAlbum