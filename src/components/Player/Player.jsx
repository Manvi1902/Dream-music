import { useContext } from 'react';
import { assets } from '../../assets/assets'
import { PlayerContext } from '../../context/PlayerContext'

const Player = () => {
  
    const { track, playStatus, play, pause, previous, next, seekBar, seekBg, seekSong, time } = useContext(PlayerContext);

    return (
        <div className='text-poppins text-white  lg:w-[20%] lg:h-[65%] overflow-auto lg:m-5 md:m-5 sm:h-[50%] sm:w-[20%] md:mt-5    bg-[#6B0000] lg:mt-[10%]  rounded font-semibold flex flex-col items-center justify-center gap-1 '>
                <h3 className='font-semibold m-5'>Now Playing</h3>
                <div className='flex flex-col text-center  text-white m-1 p-1'>
                    <img className=' md:w-[150px] md:h-[70px] lg:w-[230px] lg:h-[136px] rounded' src={track.image} alt="" />
                    <p className='text-[18px] mt-5'>{track.name}</p>
                    <p className='text-[13px] font-light'>{track.desc.slice(0, 12)}</p>
                </div>
             
            <div className='flex flex-row text-center overflow-auto '>
                    <p className='text-white'>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div onClick={seekSong} ref={seekBg} className='mt-2 w-[40vw]  h-[0.5vh] max-w-[150px] bg-gray-400 rounded-full cursor-pointer m-3'>
                        <hr ref={seekBar} className='h-1  border-none w-0 bg-white rounded-full' />
                    </div>
                    <p className='text-white'>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            <div className='flex flex-col items-center text-center md:m-0  gap-1 m-1 mt-3'>
                <div className='flex gap-4 '>
                    <img className='lg:w-4   md:w-2 cursor-pointer mt-1 mr-5'  src={assets.loop_icon} alt="" />
                    <img className='lg:w-5  md:w-3 cursor-pointer' onClick={previous} src={assets.prev_icon} alt="" />
                    {playStatus
                        ? <img className='lg:w-6 h-5 md:w-4  cursor-pointer' onClick={pause} src={assets.pause_icon} alt="" />
                        : <img className='lg:w-6 h-5 md:w-4  cursor-pointer ' onClick={play} src={assets.play_icon} alt="" />
                    }
                    <img className='lg:w-5  md:w-3  cursor-pointer' onClick={next} src={assets.next_icon} alt="" />
                    <img className='lg:w-4  md:w-2  cursor-pointer mt-1 ml-5' src={assets.shuffle_icon} alt="" />
                </div>
                
            </div>
          
        </div>
    )
}

export default Player