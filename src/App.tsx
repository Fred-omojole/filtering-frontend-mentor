import { Data } from "./lib/definition";
import { useState } from "react";
import Photo from "./Logo";
// import color from  "./index.css"
const App = () => {
  // Destructuring using spread operator
  const [jobs, setJobs] = useState(Data);
  // const [filteredJobs, setFilteredJobs] = useState([])

  const handleFilter = (filter: string) => {
    setJobs(() =>
      Data.filter((job) => {
        if (job.role === filter) {
          return true;
        }

        if (job.level === filter) {
          return true;
        }

        const result = job.languages.find((language) => language === filter);
        if (result) return true;
      })
    );

    // setJobs(() => Data.filter((job) => job.level === filter));
  };

  return (
    <>
      {jobs.map((job, id) => (
        <>
          <div
            className="grid grid-cols-1 lg:flex rounded-lg mt-16 drop-shadow-xl bg-white p-6"
            key={id}
          >
            <div className=" relative bottom-14 items-center lg:mb-2 w-20  lg:w-auto lg:p-4 lg:relative lg:bottom-auto">
              <Photo url={job.logo} desc={"image"} />
            </div>

            <div className="grid grid-cols-1 text-lg lg:text-xs gap-3 ml-3 tracking-tight relative bottom-8 lg:bottom-auto lg:relative  ">
              {/* <div className="space-y-[-2]"> */}
              <div className="flex items-center gap-2 ">
                <p className="color1 font-bold text-lg ">{job.company}</p>
                <p>
                  {job.new ? (
                    <p className="text-white font-semibold bg-[hsl(180,29%,50%)] rounded-full p-2">
                      NEW!
                    </p>
                  ) : null}
                </p>
                <p>
                  {job.featured ? (
                    <p className="text-white font-semibold bg-[hsl(180,14%,20%)] rounded-full p-2">
                      FEATURED
                    </p>
                  ) : null}
                </p>
              </div>

              <h1 className=" font-extrabold text-sm color lg:font-bold lg:text-lg  ">
                {job.position}
              </h1>

              <div className="flex color3 gap-5 lg:gap-3 text-lg lg:text-sm font-medium lg:font-normal">
                <p>{job.postedAt}</p>
                <p>{job.contract}</p>
                <p>{job.location}</p>
              </div>
            </div>

            <div className="w-full border-b-[2px] my-5 lg:border-none lg:m-0 lg:p- lg:w-0 relative bottom-5  "></div>

            <div
              className="cursor-pointer
             flex flex-wrap lg:flex-nowrap color1 font-bold p-2 gap-y-4 gap-2 lg:gap-0 lg:justify-end space-x-2 lg:m-auto lg:p-auto lg:relative lg:left-20"
            >
              <p
                onClick={() => handleFilter(job.role)}
                className=" lg:text-xs bg-[hsl(180,31%,95%)] p-1 hover:bg-[hsl(180,29%,50%)] hover:rounded hover:text-white  transition-all"
              >
                {job.role}
              </p>
              <p
                onClick={() => handleFilter(job.level)}
                className="lg:text-xs bg-[hsl(180,31%,95%)] p-1 hover:bg-[hsl(180,29%,50%)] hover:rounded hover:text-white  transition-all"
              >
                {job.level}
              </p>
              {/* <p className="text-xs bg-[hsl(180,31%,95%)] p-1">{job.tools}</p> */}
              {/* <div className="flex flex-wrap lg:flex-nowrap"> */}

              {job.languages.map((item, index) => (
                <p
                  onClick={() => handleFilter(item)}
                  className=" lg:text-xs bg-[hsl(180,31%,95%)] p-1  relative right-2 lg:relative lg:right-auto hover:bg-[hsl(180,29%,50%)] hover:rounded hover:text-white  transition-all "
                  key={index}
                >
                  {item}
                </p>
              ))}

              {/* </div> */}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default App;
