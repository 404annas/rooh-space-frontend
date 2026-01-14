import { MapPin, UserRound, TrendingUp, Plus } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { userInfo } = useSelector((state) => state.auth)

    const navLinkClass = "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#89C392] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

    return (
        <div className='bg-primary py-4 px-6 text-white sticky top-0 z-50'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <MapPin className='bg-primaryLight p-2.5 w-11 h-11 rounded-full' />
                    <h1 className='text-2xl font-bold'>RoohSpace</h1>
                </div>
                <div className='flex items-center gap-10'>
                    <Link
                        to={"/"}
                        onClick={() => scrollTo(0, 0)}
                        className={navLinkClass}
                    >
                        Home
                    </Link>

                    <Link
                        to={"/about"}
                        onClick={() => scrollTo(0, 0)}
                        className={navLinkClass}
                    >
                        About
                    </Link>

                    <Link
                        to={"/pricing"}
                        onClick={() => scrollTo(0, 0)}
                        className={navLinkClass}
                    >
                        Pricing
                    </Link>

                    <Link
                        to={"/contact"}
                        onClick={() => scrollTo(0, 0)}
                        className={navLinkClass}
                    >
                        Contact
                    </Link>
                </div>
                <div className='flex items-center gap-3'>
                    {
                        userInfo ? (
                            <Link to={"/add-space"} onClick={() => scrollTo(0, 0)} className='bg-primaryLight text-white px-4 py-2 rounded-xl hover:bg-[#5D8464] transition-all duration-300 flex items-center gap-2'>Add Space <Plus size={20} /></Link>
                        ) : (
                            <Link to={"/register"} onClick={() => scrollTo(0, 0)} className='bg-primaryLight text-white px-4 py-2 rounded-xl hover:bg-[#5D8464] transition-all duration-300 flex items-center gap-2'>SignUp Now <TrendingUp size={20} /></Link>
                        )
                    }
                    <Link to={"/profile"} onClick={() => scrollTo(0, 0)}><UserRound className='bg-primaryLight hover:bg-[#5D8464] transition-all duration-300 p-2.5 w-10 h-10 rounded-full' /></Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar