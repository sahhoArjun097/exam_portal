import  { useContext } from 'react';
import { UserContext } from '../context/contextapi';

function Profile() {
    const { user } = useContext(UserContext); // Access the user data

    return (
        <div className='w-[100vw] h-[90vh] flex justify-center items-center bg-slate-600 '>
            <div className='w-[90%] h-[90%] bg-slate-100 rounded-xl flex justify-between'>
                
                <div className='w-[100%] h-full rounded-r-xl p-9'>
                    <div className='w-full h-full rounded-xl p-5'>

                        {/* Profile Image */}
                        <div className="flex justify-center items-center mb-5">
                            <div className="w-36 h-36 bg-gray-200 rounded-full flex justify-center items-center overflow-hidden">
                                <img src={user?.profileImage || "/image.png"} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                      
                        {/* User Details */}
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-semibold">{user?.name || 'Guest User'}</h2>
                            <span className="text-red-500">({user?.id || 'ST0001'})</span>
                        </div>

                        <div className="flex justify-around mb-6">

                            {/* Roll Number */}
                            <div className="flex flex-col items-center w-32 bg-green-400 text-white rounded-lg p-4">
                                <span className="text-xl">Roll No.</span>
                                <div className="text-3xl mb-2">{user?.rollNumber || 'N/A'}</div>
                            </div>

                            {/* Date of Birth */}
                            <div className="flex flex-col items-center w-32 bg-teal-400 text-white rounded-lg p-4">
                                <div className="text-xl mb-2">D.O.B</div>
                                <span className="text-sm">{user?.dob || 'N/A'}</span>
                            </div>

                            {/* Exams */}
                            <div className="flex flex-col items-center w-32 bg-orange-400 text-white rounded-lg p-4">
                                <span className="text-xl">Exams</span>
                                <div className="text-3xl mb-2">{user?.examCount || '0'}</div>
                            </div>
                        </div>

                        {/* Buy Packages Button */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
