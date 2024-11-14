
import { Link } from 'react-router-dom';

function Head() {
    const menuItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Exams Dates", path: "/Exams" },
        { name: "Profile", path: "/Profile" },
        { name: "Sign In", path: "/" }
    ];

    return (
        <header className="w-full h-[80px] bg-blue-700 text-white flex justify-between items-center px-6 shadow-lg">
                <Link to='/'>
            <div className="text-2xl font-bold">
                <img src='/logo.png' alt='' className='w-10 h-10'/>
                </div>
                </Link>
            <nav className="flex gap-8">
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} className="hover:text-gray-300 transition-colors">
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Head ;
