import { useHistory } from 'react-router-dom';
import Button from './Button';

const App = () => {
    const history = useHistory();

    const toAboutHandler = () => {
        history.push('/about');
    }

    const toBookHandler = (name) => {
        history.push(`/book/${name}`);
    }

    return (
        <div className="App">
            <h2>App</h2>
            <Button name='To About' onClick={toAboutHandler} />
            <Button name='To Book' onClick={() => toBookHandler('Andrii will be Rich')} />
        </div>
    );
}

export default App;
