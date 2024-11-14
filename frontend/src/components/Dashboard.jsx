import { useContext } from 'react';
import { UserContext } from '../context/contextapi'; // Import UserContext

function Dashboard() {
  const { user } = useContext(UserContext); // Access the user data

  return (
    <div className='w-full h-auto min-h-[90vh] flex justify-center items-center px-6 py-10'>
      <div className='w-full max-w-[1200px] bg-gray-50 rounded-3xl shadow-2xl overflow-hidden p-8'>
        
        <h2 className='text-4xl font-bold mb-10 text-center text-indigo-700'>Dashboard</h2>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {/* Student Profile Card */}
          <div className='bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg rounded-xl p-8 flex flex-col items-center text-white'>
            <div className="w-28 h-28 bg-gray-300 rounded-full overflow-hidden shadow-inner mb-4">
              <img src="/image.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h3 className='text-2xl font-semibold'>{user?.name || 'Guest User'}</h3>
            <p className='text-lg mt-1'>ID: {user?.id || 'ST0001'}</p>
            <p className='text-lg'>{user?.course || 'Computer Science'}</p>
          </div>

          {/* Exam Schedule Card */}
          <div className='bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 shadow-lg rounded-xl p-8 text-white'>
            <h3 className='text-2xl font-semibold mb-4'>Exam Schedule</h3>
            <ul className='text-lg'>
              <li className='mb-3'><strong>Mathematics:</strong> Oct 30, 3 hours</li>
              <li className='mb-3'><strong>Physics:</strong> Nov 2, 3 hours</li>
              <li><strong>Chemistry:</strong> Nov 5, 2 hours</li>
            </ul>
          </div>

          {/* Performance Overview Card */}
          <div className='bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-lg rounded-xl p-8 text-white'>
            <h3 className='text-2xl font-semibold mb-4'>Performance Overview</h3>
            <p className='text-lg'>Last Exam: <strong>85%</strong></p>
            <p className='text-lg'>Overall Grade: <strong>A</strong></p>
          </div>

          {/* Inbox Card */}
          <div className='bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 shadow-lg rounded-xl p-8 text-white'>
            <h3 className='text-2xl font-semibold mb-4'>Inbox</h3>
            <p className='text-lg'>You have <strong>6</strong> new messages.</p>
          </div>

          {/* Notifications Card */}
          <div className='bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 shadow-lg rounded-xl p-8 text-white'>
            <h3 className='text-2xl font-semibold mb-4'>Notifications</h3>
            <ul className='text-lg'>
              <li className='mb-3'>New exam schedule uploaded.</li>
              <li>Assignment deadline extended to Oct 20.</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
