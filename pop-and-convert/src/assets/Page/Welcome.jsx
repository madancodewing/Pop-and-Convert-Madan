import Button from "../Component/Button"
import Navbar from "../Component/Navbar"
import banner from "../img/banner.jpg"
import Card from "../Component/Card"
import ArrowIcon from "../Component/ArrowIcon"


const cardData =
    [
        {
            title: 'Documentation',
            content: 'Comprehensive and well-organized documentation that provides users with clear instructions and valuable information.',
            link: () => <a className="text-primaryColor hover:opacity-70 inline-flex gap-2 duration-300" href="#">Explore Documentation <ArrowIcon /></a>
        },
        {
            title: 'Support',
            content: 'Empower your customer support team with this practical video tutorial, designed to enhance their skills and knowledge.',
            link: () => <a className="text-primaryColor hover:opacity-70 inline-flex gap-2 duration-300" href="#">Contact Support Team <ArrowIcon /></a>
        },
        {
            title: 'Video Tutorials',
            content: 'Empower your customer support team with this practical video tutorial, designed to enhance their skills and knowledge.',
            link: () => <a className="text-primaryColor hover:opacity70 inline-flex gap-2 duration-300" href="#">Check Out Now <ArrowIcon /></a>
        }
    ]

const Welcome = () => {
    return (
        <>
            <Navbar />
            <div className="container xl mx-auto mb-8">
                <div className="banner-wrapper flex justify-between gap-20 box-shadow-2 p-14 bg-white items-center rounded">

                    <div className="content flex-1">
                        <h2 className="text-2xl font-bold mb-4">
                            Welcome to Pop and Convert Pro
                        </h2>
                        <p className="mb-8">
                            We're glad you're here. This platform is designed to provide you with all the tools and resources you need to be a successful coach. Whether you're new to coaching or a seasoned pro, we're confident that you'll find everything you need here to help your athletes.
                        </p>
                        <Button link="#" text="Create New Notification" />
                    </div>
                    <div className="banner flex-1 relative">
                        <img className="w-full" src={banner} alt="" />
                        <a className="absolute hover:opacity-80 duration-300" href="https://www.youtube.com/watch?v=8aZAsLU_BYI">
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="66" height="66" rx="33" fill="white" />
                                <path d="M33 4.125C27.2891 4.125 21.7064 5.81849 16.9579 8.99132C12.2095 12.1641 8.50847 16.6738 6.32299 21.95C4.13751 27.2262 3.56569 33.032 4.67984 38.6332C5.79399 44.2344 8.54406 49.3795 12.5823 53.4177C16.6205 57.4559 21.7656 60.206 27.3668 61.3202C32.968 62.4343 38.7738 61.8625 44.05 59.677C49.3262 57.4915 53.8359 53.7906 57.0087 49.0421C60.1815 44.2936 61.875 38.7109 61.875 33C61.875 25.3419 58.8328 17.9974 53.4177 12.5823C48.0026 7.16718 40.6581 4.125 33 4.125ZM48.3595 34.8459L23.6095 47.2209C23.2949 47.3781 22.9454 47.4523 22.5942 47.4363C22.243 47.4204 21.9016 47.315 21.6026 47.13C21.3035 46.9451 21.0568 46.6868 20.8857 46.3796C20.7146 46.0724 20.6248 45.7266 20.625 45.375V20.625C20.6252 20.2736 20.7152 19.928 20.8864 19.6211C21.0577 19.3142 21.3045 19.0562 21.6035 18.8715C21.9024 18.6868 22.2436 18.5815 22.5947 18.5657C22.9458 18.5499 23.2951 18.624 23.6095 18.7811L48.3595 31.1561C48.7016 31.3276 48.9893 31.5909 49.1903 31.9165C49.3913 32.2422 49.4978 32.6173 49.4978 33C49.4978 33.3827 49.3913 33.7578 49.1903 34.0835C48.9893 34.4091 48.7016 34.6724 48.3595 34.8439V34.8459Z" fill="#2F65D5" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
            <div className="container flex gap-10">
                {
                    cardData.map(({ title, content, link: Link }, index) => {
                        return (

                            <Card
                                key={index}
                                title={title}
                            >
                                <p className="pb-8">
                                    {content}
                                </p>
                                <Link />
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )

}

export default Welcome