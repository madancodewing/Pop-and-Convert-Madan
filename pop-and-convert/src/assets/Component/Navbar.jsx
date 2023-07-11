
import logo from "../img/Logo.png"
const Navbar = ({ onScreenChange, currentScreen }) => {

    const handleScreenChange = (screen) => () => {
        onScreenChange(screen)
    }
    return (

        <div className="navbar box-shadow mb-10 bg-white">
            <div className="container">

                <nav className="main-nav flex justify-between items-center py-5">
                    <div className="site-logo">
                        <a href="" className="flex gap-3 items-center">
                            <img src={logo} alt="site-logo" />
                            <h1 className="font-bold text-2xl">Pop and Convert <span className="text-primaryColor">PRO</span></h1>
                        </a>
                    </div>
                    <ul className="icons flex gap-5">
                        <li>
                            <a className="icon text-fontColor hover:text-primaryColor duration-300 " onClick={handleScreenChange('welcome')}>
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.00037" y="0.5" width="43" height="43" rx="21.5" fill="none" />
                                    <path d="M22.5003 30.3332C27.1027 30.3332 30.8337 26.6022 30.8337 21.9998C30.8337 17.3975 27.1027 13.6665 22.5003 13.6665C17.898 13.6665 14.167 17.3975 14.167 21.9998C14.167 26.6022 17.898 30.3332 22.5003 30.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.167 22H30.8337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.5003 13.6665C24.5847 15.9485 25.7693 18.9099 25.8337 21.9998C25.7693 25.0898 24.5847 28.0512 22.5003 30.3332C20.4159 28.0512 19.2314 25.0898 19.167 21.9998C19.2314 18.9099 20.4159 15.9485 22.5003 13.6665V13.6665Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="1.00037" y="0.5" width="43" height="43" rx="21.5" stroke="currentColor" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="icon text-fontColor hover:text-primaryColor duration-300 " onClick={handleScreenChange('notification')}>
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5857 17.4197C31.3676 16.5985 30.725 15.9518 29.9091 15.7323C28.4303 15.3335 22.5004 15.3335 22.5004 15.3335C22.5004 15.3335 16.5706 15.3335 15.0917 15.7323C14.2758 15.9518 13.6333 16.5985 13.4152 17.4197C13.0189 18.9081 13.0189 22.0136 13.0189 22.0136C13.0189 22.0136 13.0189 25.1191 13.4152 26.6076C13.6333 27.4287 14.2758 28.0485 15.0917 28.268C16.5706 28.6668 22.5004 28.6668 22.5004 28.6668C22.5004 28.6668 28.4303 28.6668 29.9091 28.268C30.725 28.0485 31.3676 27.4287 31.5857 26.6076C31.9819 25.1191 31.9819 22.0136 31.9819 22.0136C31.9819 22.0136 31.9819 18.9081 31.5857 17.4197ZM20.561 24.8332V19.1941L25.5172 22.0137L20.561 24.8332Z" fill="currentColor" />
                                    <rect x="1.00037" y="0.5" width="43" height="43" rx="21.5" stroke="currentColor" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="icon text-fontColor hover:text-primaryColor duration-300 " href="">
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0004 27V22C15.0004 20.0109 15.7905 18.1032 17.1971 16.6967C18.6036 15.2902 20.5112 14.5 22.5004 14.5C24.4895 14.5 26.3971 15.2902 27.8037 16.6967C29.2102 18.1032 30.0004 20.0109 30.0004 22V27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30.0004 27.8337C30.0004 28.2757 29.8248 28.6996 29.5122 29.0122C29.1996 29.3247 28.7757 29.5003 28.3337 29.5003H27.5004C27.0583 29.5003 26.6344 29.3247 26.3219 29.0122C26.0093 28.6996 25.8337 28.2757 25.8337 27.8337V25.3337C25.8337 24.8916 26.0093 24.4677 26.3219 24.1551C26.6344 23.8426 27.0583 23.667 27.5004 23.667H30.0004V27.8337ZM15.0004 27.8337C15.0004 28.2757 15.176 28.6996 15.4885 29.0122C15.8011 29.3247 16.225 29.5003 16.667 29.5003H17.5004C17.9424 29.5003 18.3663 29.3247 18.6789 29.0122C18.9914 28.6996 19.167 28.2757 19.167 27.8337V25.3337C19.167 24.8916 18.9914 24.4677 18.6789 24.1551C18.3663 23.8426 17.9424 23.667 17.5004 23.667H15.0004V27.8337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="1.00037" y="0.5" width="43" height="43" rx="21.5" stroke="currentColor" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="icon text-fontColor hover:text-primaryColor duration-300 " href="">
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8337 13.6665H23.3337L29.1671 19.4998V30.3332H15.8337V13.6665Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23.3337 13.6665V19.4998H29.1671" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.167 23.6665H25.8337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M19.167 27H22.5003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <rect x="1.00037" y="0.5" width="43" height="43" rx="21.5" stroke="currentColor" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a className="icon text-fontColor hover:text-primaryColor duration-300 " href="">
                                <svg width="47" height="44" viewBox="0 0 47 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.7504 19.2219V13.2504C33.7504 12.9086 33.4777 12 32.5008 12H32.5004C32.2222 12 31.9461 12.093 31.7199 12.2742L28.3984 14.9316C26.7301 16.2652 24.6355 17 22.5004 17H15.0004C13.6195 17 12.5004 18.1191 12.5004 19.5V23.25C12.5004 24.6309 13.6195 25.75 15.0004 25.75L14.9816 27C14.9816 28.5535 15.3433 30.0215 15.9801 31.3336C16.1828 31.7512 16.6254 32 17.0894 32H21.241C22.2586 32 22.8695 30.8344 22.2527 30.025C21.6121 29.1844 21.2312 28.1359 21.2312 27C21.2312 26.566 21.2945 26.1488 21.4035 25.75H22.5004C24.6355 25.75 26.7301 26.4848 28.398 27.8184L31.7195 30.4758C31.941 30.6531 32.2162 30.7498 32.5 30.75C33.4734 30.75 33.75 29.8602 33.75 29.5V23.5285C34.4941 23.0953 35 22.2984 35 21.3754C35.0004 20.452 34.4945 19.6551 33.7504 19.2219ZM17.4898 30.125C17.0695 29.1309 16.8566 28.0816 16.8566 27C16.8566 26.4445 16.9238 26.0102 16.9582 25.75H19.4937C19.4121 26.168 19.3562 26.5863 19.3562 27C19.3562 28.1023 19.6133 29.1641 20.1066 30.125H17.4898ZM21.8754 23.875H15.0004C14.6558 23.875 14.3754 23.5945 14.3754 23.25V19.5C14.3754 19.1555 14.6558 18.875 15.0004 18.875H21.8754V23.875ZM31.8754 28.1992L29.5691 26.3539C27.8972 25.0172 25.8664 24.191 23.7504 23.9535V18.7965C25.8664 18.559 27.8972 17.7328 29.5695 16.3957L31.8754 14.5508V28.1992Z" fill="currentColor" />
                                    <rect x="1.00037" y="0.5" width="45.4996" height="43" rx="21.5" stroke="currentColor" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div >

    )
}

export default Navbar