/* eslint-disable react/no-unescaped-entities */

const Achievement = () => {
  return (
    <>
      <div className="p-16 h-[500px]">
        <span className="block text-lg font-semibold text-gray-700">
          ACHIEVEMENTS
        </span>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          What I've Achieved
        </h1>
        <div className="mt-8 relative left-[20%]">
          <div className="mb-4 p-4 w-[50%] h-[50px] rounded-md shadow-md transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-sm font-bold text-gray-800">
              🏅 <span className="font-semibold text-main-color">TCS iON Career Edge</span>
              Young Professional
            </h2>
          </div>

          <div className="mb-4 p-4 w-[50%] h-[50px] rounded-md shadow-md transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-sm font-bold text-gray-800">
              🏅 Completed a
              <span className="font-semibold text-main-color">Full Stack Java</span> training
              program at Capgemini.
            </h2>
          </div>

          <div className="mb-4 p-4 w-[50%] h-[50px] rounded-md shadow-md transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-sm font-bold text-gray-800">
              🏅 Successfully Completed a
              <span className="font-semibold text-main-color">NodeJS</span> course at Coding
              Ninjas.
            </h2>
          </div>

          <div className="mb-4 p-4 w-[50%] h-[50px] rounded-md shadow-md transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-sm font-bold text-gray-800">
              🏅 Earned a
              <span className="font-semibold text-main-color">
                JavaScript Course Completion Certificate
              </span>
              from Simplilearn | SkillUP.
            </h2>
          </div>

          <div className="mb-4 p-4 w-[50%] h-[60px] rounded-md shadow-md transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-sm font-bold text-gray-800">
              🏅 Participated in the
              <span className="font-semibold text-main-color">
                All India National Career Aptitude Test (NCAT)
              </span>
              organized by Naukri Campus.
            </h2>
          </div>

          <div className="mb-4 p-4 w-[50%] h-[50px] rounded-md shadow-md transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-sm font-bold text-gray-800">
              🏅 Certified in
              <span className="font-semibold text-main-color">Mastering DBMS Fundamentals</span>
              from Scaler Topics.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
