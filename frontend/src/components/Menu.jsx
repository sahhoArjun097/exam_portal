
import { Link } from 'react-router-dom'

function menu() {
    const menuitems = [
        {
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            name: "Exams Dates",
            path: "/Exams"

        },
        {
            name: "Exams",
            path: ""

        },

        {
            name: "Profile",
            path: "/"
        },
        {
            name: "Sign In",
            path: ""

        }
    ]
    return (
        <div className='w-full h-full p-5 '>
            <div className='w-full h-full   flx-col'>
                <div className='w-full h-[100px] bg-blue-700 rounded-xl mb-5'>
                </div>
                <div className='w-full h-[450px] rounded-xl flex flex-col  gap-7'>
                    {
                        menuitems.map((data, index) => (
                            <Link to={data.path} key={index}>
                                <div key={index} className='w-full h-[50px] flex items-center justify-start bg-gray-200 rounded-lg p-4'>

                                    <div>{data.name}</div>

                                </div>
                            </Link>


                        ))
                    }

                </div>


            </div>

        </div>
    )
}

export default menu