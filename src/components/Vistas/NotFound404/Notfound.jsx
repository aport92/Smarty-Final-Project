import {React} from 'react';
import notFound from '../NotFound404/404 Error.svg';
import './notfound.css';

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center h-full">
        <h1 className='m-3 text-5xl'>File not found</h1>
      </div>
        <div className="mx-auto w-1/3 h1/3">
          <img src={notFound} alt="Not Found" />
        </div>
    </div>
  );
}

export default NotFound;