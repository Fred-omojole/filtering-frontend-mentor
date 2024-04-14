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
          {/* <div className=""> */}
          <div
            className="flex rounded-lg  space-y-2 gap-2 mt-5 bg-white p-5"
            key={id}
          >
            <div>
              <Photo url={job.logo} desc={"image"} />
            </div>

            <div className="flex items-center text-xs gap-3 ml-3 tracking-tight h-0">
              <p className="color1 font-bold">{job.company}</p>
              <span className="">
                {job.new ? (
                  <p className="text-white font-semibold bg-[hsl(180,29%,50%)] rounded-full px-1 py-1">
                    NEW!
                  </p>
                ) : null}
              </span>
              <p>
                {job.featured ? (
                  <p className="text-white font-semibold bg-[hsl(180,14%,20%)] rounded-full px-1 py-1">
                    FEATURED
                  </p>
                ) : null}
              </p>
            </div>
          </div>
          {/* </div> */}
        </>
      ))}
    </>
  );
};

export default App;
