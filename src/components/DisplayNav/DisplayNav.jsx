
import { assets } from '../../assets/assets';

const DisplayNav = () => {
    return (
        <>
            
            <div className=' flex items-center gap-2 mt-4 font-poppins text-[15px] font-semibold leading-[27px] text-left  decoration-none"'>
               
                <p className='text-white px-4 py-1 '>Music</p>
                <p className='text-white px-4 py-1 '>Podcasts</p>
                <p className=' text-white px-4 py-1 '>Live</p>
                <p className=' text-white px-4 py-1 '>Radio</p>

                <div className=' lg:w-[50%]  md:w-[35%]  sm:w-[25%]    h-[36px]   bg-[#2C0000]  px-4 py-1 rounded-2xl flex items-start gap-2  pl-5 '>
                    
                    <img className='w-5 mt-1 hidden lg:flex' src={assets.search_icon} alt="" />
                    <p className='font-medium text-white'>Search</p>
                </div>
            </div>
            
        </>
    )
}


export default DisplayNav