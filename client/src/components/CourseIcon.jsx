function CourseIcon() {
  return (
    <div>
      <div>
        <div className="container px-6 mx-auto grid">
          <h2 className="my-6 text-2xl font-semibold text-gray-700">
            Dashboard
          </h2>
          <div className="w-full">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs w-full justify-between">
              <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div className="flex justify-end">
                <div>
                  <p className="text-lg font-semibold text-gray-700">19238</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseIcon;
