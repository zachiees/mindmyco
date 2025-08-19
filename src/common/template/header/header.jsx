import { Link } from 'react-router-dom';
import styles from './header.module.css';


function CommonHeader(){

    return (
    <header className={ styles.rootContainer }>
        <Link to='/'>Home</Link>
        <Link to='/'>Discover</Link>
        <Link to='/'>Market</Link>
        <Link to='/'>Analysis</Link>
        <Link to='/'>About us</Link>
    </header>
    )
}

export default CommonHeader;