import { Data } from "./lib/definition";
import Photo from "./Logo";
// import color from  "./index.css"
const App = () => {
  // Destructuring using spread operator
  const [...jobs] = Data;

  return (
    <>
      {jobs.map((job, id) => (
        <>
          <div className="flex rounded-lg mt-4  bg-white p-6" key={id}>
            <div className="items-center ">
              <Photo url={job.logo} desc={"image"} />
            </div>

            <div className="grid grid-cols-1 text-xs gap-3 ml-3 tracking-tight ">
              {/* <div className="space-y-[-2]"> */}
              <div className="flex items-center gap-2">
                <p className="color1 font-bold">{job.company}</p>
                <p>
                  {job.new ? (
                    <p className="text-white font-semibold bg-[hsl(180,29%,50%)] rounded-full px-1 py-1">
                      NEW!
                    </p>
                  ) : null}
                </p>
                <p>
                  {job.featured ? (
                    <p className="text-white font-semibold bg-[hsl(180,14%,20%)] rounded-full px-1 py-1">
                      FEATURED
                    </p>
                  ) : null}
                </p>
              </div>

              <h1 className="font-bold text-lg color ">{job.position}</h1>

              <div className="flex color3 gap-3">
                <p>{job.postedAt}</p>
                <p>{job.contract}</p>
                <p>{job.location}</p>
              </div>
            </div>
            <div className=" flex items-center color1 font-semibold  flex-1 justify-end space-x-2">
              <p className="text-xs bg-[hsl(180,31%,95%)] p-1">{job.role}</p>
              <p className="text-xs bg-[hsl(180,31%,95%)] p-1">{job.level}</p>
              {job.languages.map((item, index) => (
                <p className="text-xs bg-[hsl(180,31%,95%)] p-1" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default App;
