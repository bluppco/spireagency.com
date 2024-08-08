// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT REACT ICONS
import { IoMenu, IoClose } from "react-icons/io5"

// IMPORT JSX COMPONENTS
import SocialLinks from "@/components/common/header/social-links/jsx/index"

// IMPORT JSX ATOMS
import LinkJSX from "@/atoms/links/jsx/index"
import Paragraph3XlSemiboldJSX from "@/atoms/atoms-shiva/paragraphs/3xl/semibold/hover-orange/jsx/index"
import PictureContainJSX from "@/atoms/picture/internal/contain/jsx/index"

const Header = ( { header_data } ) => {

    const [isNavOpen, setNavOpen] = useState( false )

    // FUCTION TOOGLE NAVBAR
    const toggleNav = () => {

        setNavOpen( !isNavOpen )

    }

    return (

        <mainheader className="fixed w-full z-30">
            <nav className="flex justify-between items-center px-8 py-4">
                <LinkJSX href="/">
                    <div className="h-28 aspect-[2/10]">
                        <PictureContainJSX
                            alternative_text=""
                            source="/logos/spire.svg"
                        />
                    </div>
                </LinkJSX>
                <div className="cursor-pointer" onClick={ toggleNav }>
                    <IoMenu
                        color="white" 
                        size={40} 
                    />
                </div>
            </nav>
            <div className={`fixed inset-0 z-30 bg-white duration-700 ${ isNavOpen ? "translate-x-0" : "translate-x-full" }`}>
                <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-dvh">
                    <div className="absolute top-5 right-5 cursor-pointer" onClick={ toggleNav }>
                        <IoClose size={40} />
                    </div>
                    <div className="hidden md:flex items-center justify-center bg-orange-red h-full">
                        <LinkJSX href="/">
                            <div className="h-72 aspect-[2/10]">
                                <PictureContainJSX
                                    alternative_text=""
                                    source="/logos/spire.svg"
                                />
                            </div>
                        </LinkJSX>
                    </div>
                    <div className="flex flex-col justify-between md:justify-center gap-6 p-6 md:p-16">
                        <div className="md:hidden">
                            <LinkJSX href="/">
                                <div className="h-20 aspect-[2/10]">
                                    <PictureContainJSX
                                        alternative_text=""
                                        source="/logos/spire-black.svg"
                                    />
                                </div>
                            </LinkJSX>
                        </div>
                        <ul className="flex flex-col gap-6 w-full">
                            {

                                header_data.map( ( item ) => {

                                    return (

                                        <li>
                                            <LinkJSX href={ item.data.link }>
                                                <Paragraph3XlSemiboldJSX>{ item.data.title }</Paragraph3XlSemiboldJSX>
                                            </LinkJSX>
                                        </li>

                                    )

                                })

                            }
                        </ul>
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        </mainheader>

    )

}
export default Header
