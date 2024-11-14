function Exams() {
  const exams = [
    {
      id: 1,
      subject: 'Mathematics',
      date: '2024-10-30',
      duration: '3 hours',
      link: 'https://www.selfstudys.com/mcq/cbse/mock-test/class-10th/maths-mix-test',
    },
    {
      id: 2,
      subject: 'Physics',
      date: '2024-11-02',
      duration: '3 hours',
      link: 'https://www.onlinefreetests.com/physics.html#google_vignette',
    },
    {
      id: 3,
      subject: 'Chemistry',
      date: '2024-11-05',
      duration: '2 hours',
      link: 'https://www.onlinefreetests.com/chemistry.html',
    },
  ];

  const handleStartExam = (link) => {
    window.location.href = link; // Redirect to the specified link
  };

  return (
    <div className='w-full h-[90vh] flex justify-center items-center bg-indigo-800 p-4 md:p-8'>
      <div className='w-full max-w-[1000px] h-full bg-gray-50 rounded-3xl shadow-lg overflow-hidden'>
        
        {/* Main Content */}
        <div className='w-full h-full bg-gray-100 rounded-3xl p-6 flex flex-col'>
          <h2 className='text-2xl font-bold text-center text-indigo-700 mb-8'>Upcoming Exams</h2>

          {/* Exams Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {exams.map((exam) => (
              <div key={exam.id} className='bg-white shadow-md rounded-lg p-6 flex flex-col justify-between'>
                
                {/* Exam Info */}
                <div>
                  <h3 className='text-lg font-semibold text-blue-600'>{exam.subject}</h3>
                  <p className='text-sm text-gray-700 mt-2'>
                    <strong>Date:</strong> {exam.date}
                  </p>
                  <p className='text-sm text-gray-700'>
                    <strong>Duration:</strong> {exam.duration}
                  </p>
                </div>

                {/* Start Button */}
                <div className='mt-4 w-full flex justify-center'>
                  <button
                    onClick={() => handleStartExam(exam.link)} // Pass the link to the handler
                    className="w-[200px] bg-blue-500 text-white px-4 py-2 rounded-lg border-blue-600 border-b-4 transition-all hover:bg-blue-600 hover:border-blue-700"
                  >
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
