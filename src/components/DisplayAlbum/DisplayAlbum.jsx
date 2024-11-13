import React, { useContext } from 'react';  
import { albumsData, assets, songsData } from '../../assets/assets';  
import { useParams } from 'react-router-dom';  
import { PlayerContext } from '../../context/PlayerContext';  
import DisplayNav from '../DisplayNav/DisplayNav';  
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';  

const DisplayAlbum = () => {  
    const { id } = useParams();  
    const { playWithId } = useContext(PlayerContext);  
    const albumData = albumsData[id];  

    // State for managing songs order  
    const [songs, setSongs] = React.useState(songsData);  

    const onDragEnd = (result) => {  
        if (!result.destination) return; // Dropped outside the list  

        const reorderedSongs = Array.from(songs);  
        const [movedSong] = reorderedSongs.splice(result.source.index, 1);  
        reorderedSongs.splice(result.destination.index, 0, movedSong);  

        setSongs(reorderedSongs); // Update the state with the new order  
    };  

    return (  
        <>  
            <DisplayNav />  
            

                <div className='mt-10 relative flex gap-8 flex-col md:flex-row md:items-endmm text-poppins'>  
                    <img className='w-full mt-30 rounded' src={assets.bg_img} alt="" />  
                    {console.log(assets.music_logo)}
                        <div className='absolute  top-0 left-10 w-full h-full flex flex-col items-start justify-center transparent text-white rounded'>  
                            <div className='flex flex-row items-center'>  
                             <img  className='w-10 m-2' src={assets.verify_icon} alt="" />  
                             <p className='text-[15px]'>Verified Artist</p> 
                        </div>  
                        <h2 className='text-5xl font-bold mb-4 md:text-3xl'>{albumData.name}</h2>  
                        <h4>{albumData.desc}</h4>  
                      </div>  
                      <div>
                       <img className=' absolute top-0 left-[45%] w-500 h-full rounded' src={assets.michel_icon} alt="" /> 
                     </div>
                </div> 

         
            <div className='flex  flex-cols justify-between  mt-10 mb-4 pl-2 '>  
                <p className='mr-4 text-white text-[20px] '> Popular</p>  
                <p className='mr-8 text-[#a7a7a7] text-[15px] '> See all</p>  
               
            </div>  
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[16px] text-[#a7a7a7]'>  
                <p><b className='mr-4'>#</b> Title</p>  
                <p className='hidden sm:block text-center'>Playing</p>  
                <p className='hidden sm:block text-center'>Time</p>  
                <p className='hidden sm:block text-center '>Album</p>  
            </div>  
            <hr />  

            <DragDropContext onDragEnd={onDragEnd}>  
                <Droppable droppableId="songs">  
                    {(provided) => (  
                        <div {...provided.droppableProps} ref={provided.innerRef}>  
                            {songs.map((item, index) => (  
                                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>  
                                    {(provided) => (  
                                        <div  
                                            ref={provided.innerRef}  
                                            {...provided.draggableProps}  
                                            {...provided.dragHandleProps}  
                                            onClick={() => playWithId(item.id)}  
                                            className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'  
                                        >  
                                            <p className='text-white'>  
                                                <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>  
                                                <img className='inline w-10 mr-5' src={item.image} alt="" />  
                                                {item.name}  
                                            </p>  
                                            <p className='text-[15px] hidden sm:block text-center'>345.677.889</p>  
                                            <p className='text-[15px] text-center'>{item.duration}</p>  
                                            <p className='text-[15px] text-center'>{albumData.name}</p>  
                                        </div>  
                                    )}  
                                </Draggable>  
                            ))}  
                            {provided.placeholder}  
                        </div>  
                    )}  
                </Droppable>  
            </DragDropContext>  
        </>  
    );  
};  

export default DisplayAlbum;