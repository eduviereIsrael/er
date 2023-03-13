import Link from "next/link";
import { useStateContext } from "../Context/StateContext";

const MobileMenuLinks = (props) => {
    // console.log(link)
    const {setActiveNavbar} = useStateContext();
    return (
        <Link href={props.link}>
            <p onClick={() => setActiveNavbar(false)}>{props.text}</p>
        </Link>
    )
}

export default MobileMenuLinks;