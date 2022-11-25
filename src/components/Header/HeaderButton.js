import React from "react";
import { Link } from "gatsby";
const HeaderButton = () => {
    return (
        <Link className="btn btn btn-dodger-blue-2 header-btn rounded-5" to={"/get-a-quote/"}>
            Get a quote
        </Link>
    );
};
export default HeaderButton;
