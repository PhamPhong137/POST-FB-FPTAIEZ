import { BookOpen, MessageCircle, CheckCircle } from 'lucide-react';

function App() {
  const peSubjects = [
    { code: 'SWT301', name: 'Software Testing' },
    { code: 'SWR302', name: 'Software Requirement' },
    { code: 'SWD392', name: 'Software Architecture and Design' }
  ];

  const feMathSubjects = [
    { code: 'MAE101', name: 'Mathematics for Engineering' },
    { code: 'MAD101', name: 'Discrete mathematics' },
    { code: 'MAI391', name: 'Mathematics for Machine Learning' },
    { code: 'MAS291', name: 'Statistics and Probability' },
    { code: 'MAS202', name: 'Applied Statistics for Business' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                FPT AI EZ 
              </h1>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center ml-4 shadow-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full opacity-60"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform group-hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl font-bold text-sm animate-bounce">
                🔥 HOT
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-700">PE (Practical Exam)</h2>
                  <p className="text-sm text-gray-500 font-normal">Thực hành chuyên sâu</p>
                </div>
              </div>

              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-4 mb-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 transform skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-bold mb-2">150K / 2 buổi</div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      <span className="font-medium text-sm">2 buổi Online qua Meet</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      <span className="font-medium text-sm">Kèm theo Source Code</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 flex-grow">
                {peSubjects.map((subject) => (
                  <div key={subject.code} className="flex items-center text-gray-700 bg-blue-50 px-4 py-3 rounded-lg border border-blue-100">
                    <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="font-semibold text-blue-600">{subject.code}</span>
                    <span className="mx-2 text-gray-400">-</span>
                    <span className="text-sm font-normal">{subject.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform group-hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl font-bold text-sm animate-bounce">
                ✨ NEW
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-700">FE Toán</h2>
                  <p className="text-sm text-gray-500 font-normal">Toán học cơ bản</p>
                </div>
              </div>

              <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-4 mb-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 transform skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-bold mb-2">150K / 3 buổi</div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      <span className="font-medium text-sm">3 buổi Online qua Meet</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      <span className="font-medium text-sm">Kèm theo Source Code</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 flex-grow">
                {feMathSubjects.map((subject) => (
                  <div key={subject.code} className="flex items-center text-gray-700 bg-green-50 px-4 py-3 rounded-lg border border-green-100">
                    <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0 text-green-500" />
                    <span className="font-semibold text-green-600">{subject.code}</span>
                    <span className="mx-2 text-gray-400">-</span>
                    <span className="text-sm font-normal">{subject.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-12 text-center transform group-hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm animate-bounce shadow-lg">
                🎉 LIÊN HỆ NGAY
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Liên hệ để được tư vấn
              </h3>
              <p className="text-lg text-gray-600 mb-8 font-normal">
                Inbox để đăng ký và nhận thông tin chi tiết
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://www.facebook.com/profile.php?id=100092640345636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-base rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Nhắn tin Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://www.facebook.com/profile.php?id=100092640345636"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 animate-pulse border-4 border-white"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          
          {/* Avatar Image */}
          <div className="w-16 h-16 rounded-full relative z-10 border-2 border-white shadow-inner overflow-hidden">
            <img 
              src="/assets/images/avatar.jpg" 
              alt="Chat Support Avatar"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                  fallback.classList.remove('hidden');
                }
              }}
            />
            {/* Fallback gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 items-center justify-center hidden">
              <div className="text-2xl animate-bounce">🤖</div>
            </div>
          </div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center animate-bounce border-2 border-white">
            <span className="text-white text-xs font-bold">🔔</span>
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-pink-600 animate-ping opacity-75"></div>
        </a>
        
        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Nhắn tin ngay!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
