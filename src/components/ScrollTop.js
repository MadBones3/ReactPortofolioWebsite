import { useEffect } from "react";
import { useLocation } from "react-router";

// Pull user to top of pg when change links
const ScrollTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0
        })
    }, [pathname])
    return null;
}
export default ScrollTop;