import { Link } from 'react-router-dom';

function NotFound (): JSX.Element {
  return (
    <div>
      <p>404</p>
      <p>Not Found</p>
      <Link to='/'>Вернуться назад</Link>
    </div>
  );
}

export default NotFound;
