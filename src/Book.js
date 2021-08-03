import { useParams, useRouteMatch } from 'react-router-dom';

const Book = () => {
    const { name } = useParams();
    const match = useRouteMatch();

    console.log(match);

    return (
        <h1>Book is {name}</h1>
    )
}

export default Book;
