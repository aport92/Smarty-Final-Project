import {React} from 'react';
import notFound from '../NotFound404/404 Error.svg';

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center h-full">
        <h1 className='text-5xl font-bold text-blue-700'>File not found</h1>
      </div>
        <div className="mx-auto">
          <img src={notFound} alt="Not Found" />
        </div>
    </div>
  );
}

export default NotFound;