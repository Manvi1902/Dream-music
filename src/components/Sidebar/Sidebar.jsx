import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();/* DreamMusic */

    
    
    

    return (
        <div className='w-[20%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='  flex-col justify-around'>
                <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-4 cursor-pointer absolute w-[231px] h-[54px] top-[10px] font-poppins font-semibold  md:text-[25px] text-[33px]  flex items-center '>
                    <img className='w-12' src={assets.music_logo} alt="Logo" />
                    <h1><span className='md: hidden lg:flex text-[#FF5656]'>Dream</span>Music</h1>
                </div> 
            </div>
            <div className=" mt-[80px] ">
                <div className='p-4  m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1 className='font-light'>Menu</h1><br/>
                    <div className='flex gap-4 pl-1 mb-5'>
                        <img  className=" ml-0 w-[25px] h-[25px]" src={assets.home_icon}  alt="home"/>
                        <p>Home</p>
                    </div>
                    <div className='flex gap-4 pl-1  mb-5'>
                        <img className=" ml-0 w-[25px] h-[25px]" src={assets.trend_icon}  alt="home"/>
                        <p>Trends</p>
                    </div>
                    <div className='flex gap-4 pl-1  mb-5'>
                        <img className=" ml-0 w-[25px] h-[25px]" src={assets.music_logo}  alt="home"/>
                        <p>Library</p>
                    </div><div className='flex gap-4 pl-1  mb-5'>
                        <img className=" ml-0 w-[25px] h-[25px]" src={assets.discover_icon}  alt="home"/>
                        <p>Discover</p>
                    </div>
                
                </div>
              
            </div>
           
            <div className="lg:mt-[35%] md:mt-[25%] bg-gray  rounded">
              
                <div className='rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1 className='font-light' >General</h1><br/>
                    <div className='flex gap-4 pl-1  mb-5'>
                        <img className=" ml-0 w-[25px] h-[25px]" src={assets.setting_icon}  alt="home"/>
                        <p>setting</p>
                    </div>
                    <div className='flex gap-4 pl-1  mb-5'>
                        <img className=" ml-0 w-[25px] h-[25px]" src={assets.logout_icon}  alt="home"/>
                        <p>Logout</p>
                    </div>
                    
                   
                </div>
              
            </div>
        </div>
    )
}

export default Sidebar