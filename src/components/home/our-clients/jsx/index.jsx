// IMPORT SWIPER SLIDER 
import { Swiper, SwiperSlide } from "swiper/react"


// IMPORT SWIPER SLIDES
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// IMPORT SWIPER MODULES
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// IMPORT ASTRO ATOMS
import ParagraphCenter from "@/atoms/atoms-nandini/paragraphs/center/index.astro"

// HARDCODED DATA
const clients = [

        {
            client:"– Chad Runeberg | President, Cervey",
            description:"They’re an excellent strategist in the B2B space, which has awarded them an impressive reputation.",
        },
        {
            client:"– Josh Myers  | Head of Marketing, North America for Airbus Helicopters",
            description:"I appreciate the thorough research that they’ve done to provide very unique marketing items that make us stand out in a way we’ve never been able to before.",
        },
        {
            client:"– Dara Engle | Chief People Officer, Howard Hughes",
            description:"The Spire Agency team’s main strengths are their approach and ability to connect with the project.",
        },
        {
            client:"– Larry Permenter | Brand Marketing Director, Tyler Technologies",
            description:"Spire Agency exceeds expectations, delivering high-quality creative work. They work hard to understand the root of their clients’ businesses.",
        },
        {
            client:"– Ocie Vest | Managing Partner, Southridge Park (Cole Ranch)",
            description:"We picked Spire because they’re different. And what they’ve created truly has been different…in the best way possible.",
        },

]

const client = () => {

    return (

        <section className="pt-10">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}

                pagination={{
                    clickable: true,
                }}

                scrollbar={{ draggable: true }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                
                    clients.map( ( item ) => (

                        <SwiperSlide>
                            <div className="space-y-4 mx-10 sm:mx-20 md:mx-52 xl:mx-80 mb-10">
                                <p className="text-center font-proxima_nova">{ item.description }</p>
                                <p className="text-center text-sm font-roboto">{ item.client }</p>
                            </div>
                        </SwiperSlide>

                    ))
                
                }
            </Swiper>
        </section>

    )

}

export default client
