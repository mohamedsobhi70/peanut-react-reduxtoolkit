import { Link } from 'react-router-dom';
import notfound from '../../assets/images/404.png'
const PageNotFound = () => {
    return <div className='container flex flex-col justify-center items-center gap-12'>
        <img src={notfound} width="592" height="395" alt="404 Not Found" />
        <div className="flex flex-col lg:items-center gap-8">
            <div className="flex flex-col lg:w-2/3 gap-6">
                <h2 className="font-extrabold text-4xl lg:text-6xl text-Text text-center">
                    404 Error
                </h2>
                <p className="font-semibold text-lg text-Text text-center leading-relaxed">
                    Sorry! We could not find you the page you are looking for. Please check URL in address bar and try again.
                </p>
            </div>

            <div className="flex flex-col sm:justify-center sm:flex-row gap-6 sm:items-center">
                <Link to="/" className='btn-primary btn-lg'>
                    Go to Homepage
                </Link>
                <Link to="/contact" className='btn-primary-alt btn-lg'>
                    Contact Support
                </Link>
            </div>
        </div>
    </div>;
};

export default PageNotFound;
