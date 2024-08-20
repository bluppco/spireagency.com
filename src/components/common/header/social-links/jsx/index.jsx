// IMPORT REACT ICONS
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaSpotify } from "react-icons/fa6"

// IMPORT JSX ATOMS
import LinkJSX from "@/atoms/links/jsx"

// LINKS DATA
const links = [

    {
        icon: <FaXTwitter/>,
        link: "/",
    },
    {
        icon: <FaFacebookF/>,
        link: "/",
    },
    {
        icon: <FaInstagram/>,
        link: "/",
    },
    {
        icon: <FaLinkedinIn/>,
        link: "/",
    },
    {
        icon: <FaSpotify/>,
        link: "/",
    },

]

const SocialLinks = () => (

    <div className="flex gap-6">
        {
        
            links.map( ( item ) => (

                    <LinkJSX href={ item.link }>
                        <span className="text-xl text-gray-400 hover:text-black duration-300">{ item.icon }</span>
                    </LinkJSX>   

            ))
        
        }
    </div>

)
export default SocialLinks
