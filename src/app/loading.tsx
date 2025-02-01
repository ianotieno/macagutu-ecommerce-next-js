export default async function LoadingPage() {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-red-50'>
        <div className='p-8 rounded-2xl shadow-2xl bg-white w-1/3 text-center transform transition-all hover:scale-105'>
          <div className='flex justify-center'>
            <div className='w-14 h-14 border-4 border-t-green-500 border-yellow-200 rounded-full animate-spin'></div>
          </div>
          <p className='mt-6 text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>
            Loading Your Shopping Experience...
          </p>
          <p className='mt-2 text-sm text-gray-600'>
            Please wait while we prepare the best deals for you!
          </p>
        </div>
      </div>
    );
  }
