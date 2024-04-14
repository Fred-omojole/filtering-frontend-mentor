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
            className="flex rounded-lg  mt-4 bg-white p-5 relative"
            key={id}
          >
            <div>
              <Photo url={job.logo} desc={"image"} />
            </div>

            <div className="grid grid-cols-1  text-xs gap-3 ml-3 tracking-tight h-0  ">
              <div className="flex items-center  gap-2">
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

              
                {/* <div className=""> */}
               
                  <h1>{job.position}</h1>
             
                <div className="flex">
                  <p>{job.postedAt}</p>
                  <p>{job.contract}</p>
                  <p>{job.location}</p>
                </div>
              

              {/* </div> */}
            </div>
          </div>
          {/* </div> */}
        </>
      ))}
    </>
  );
};

export default App;
