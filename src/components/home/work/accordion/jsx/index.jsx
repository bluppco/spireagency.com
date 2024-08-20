// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT REACT ICONS
import { IoMdArrowDropdown, IoIosClose } from "react-icons/io"

// IMPORT JSX ATOMS 
import LinkJSX from "@/atoms/links/jsx"
import ParagraphXlGrayJSX from "@/atoms/atoms-shiva/paragraphs/xl/gray/hover-white/jsx"

const Accordion = ( { title, links } ) => {

    const [isOpen, setIsOpen] = useState( false )

    const toggleAccordion = () => (

        setIsOpen(!isOpen)

    )

    return (

        <div className="relative z-20 max-w-[700px] w-full"  onClick={ toggleAccordion }>
            <div className="flex items-center justify-between border-2 border-gray-400">
                <div className="px-4 py-2">
                    <ParagraphXlGrayJSX>{ title }</ParagraphXlGrayJSX>
                </div>
                <div className="border-l-2 border-gray-400 p-2">
                    <span className="text-gray-400"><IoMdArrowDropdown size={ 30 } /></span>
                </div>
            </div>
            <div className={`absolute top-0 left-0 overflow-hidden duration-300 ease-in-out w-full border-2 border-gray-400 ${ isOpen ? "max-h-screen" : "max-h-0 opacity-0" }`}>
                <div className="absolute top-2 right-2 cursor-pointer" onClick={ toggleAccordion }>
                    <span className="text-gray-400"><IoIosClose size={ 40 } /></span>
                </div>
                <div className="flex flex-col gap-4 bg-slate-800 p-4">
                    {

                        links.map( ( data ) => (

                            <LinkJSX href={ data.link }>
                                <ParagraphXlGrayJSX>{ data.title }</ParagraphXlGrayJSX>
                            </LinkJSX>

                        ))

                    }
                </div>
            </div>
        </div>

    )

}
export default Accordion
