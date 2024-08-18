import { MdMenu } from 'react-icons/md';

const MobileMenuButton = ({onClick}) => {
    return(
        <button className="text-3xl ml-auto hover:text-fuchsia-600" onClick={onClick}>
            <MdMenu  />
        </button>
    )
}


export default MobileMenuButton