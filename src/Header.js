import {useHistory, useLocation} from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const location = useLocation();
    const history = useHistory();

    const aboutPage = location.pathname.includes('/about') || location.pathname.includes('/book');

    const backHandler = () => {
        history.goBack();
    }

    const forwardHandler = () => {
        history.goForward();
    }

    return (
        <div>
            <h1>I am a header!</h1>
            {
                aboutPage &&
                <div>
                    <Button onClick={backHandler} name='Back'/>
                    <Button onClick={forwardHandler} name='Forward'/>
                </div>
            }
        </div>
    )
}

export default Header;
