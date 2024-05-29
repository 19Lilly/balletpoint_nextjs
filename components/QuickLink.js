import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa';

const QuickLink = ({title, href}) => {
    return(
        <Link href={href} className="p-6 flex justify-center gap-2 rounded-lg bg-black/80 w-full  items-center hover:scale-105 hover:text-fuchsia-600">
            {/*nahlad na plagat/pozvanku/foto z treningu */}
            {title}
            <FaArrowRight />
        </Link>
    )
}

export default QuickLink;