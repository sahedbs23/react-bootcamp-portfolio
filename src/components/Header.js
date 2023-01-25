import { Link } from "react-router-dom"

const Header = ({children}) => {
const style = {
    display: 'inline-block',
    width: 'auto',
    margin: '10px'
};
 return(
    <div>
        <div>
            <Link style={style} to="/"> Home </Link>
            <Link style={style} to="/jokes"> Jokes </Link>
        </div>
        {children}
    </div>
 )
}

export default Header;