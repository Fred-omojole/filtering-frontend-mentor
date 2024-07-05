// import { Data } from "./lib/definition";
interface ActiveProps {
  activeFilters: string[];
  onHandleDelete: (filter: string) => void;
  onDeleteAll: () => void;
}

const ActiveInput = ({
  activeFilters,
  onHandleDelete,
  onDeleteAll,
}: ActiveProps) => {
  return (
    <>
      <div className=" flex gap-6 flex-grow h-auto relative bottom-20 bg-[#fff] p-5 ">
        <div className="h-auto w-[60vw] p-4 ">
          {" "}
          {activeFilters.map((filter, index) => (
            <Filters
              filter={filter}
              key={index}
              onHandleDelete={onHandleDelete}
            />
          ))}
        </div>
        <div
          onClick={onDeleteAll}
          className="flex items-center cursor-pointer  text-[hsl(180,29%,50%)]"
        >
          clear
        </div>
      </div>
    </>
  );
};

export default ActiveInput;

interface FilterProp {
  filter: string;
  onHandleDelete: (filter: string) => void;
}

export const Filters = ({ filter, onHandleDelete }: FilterProp) => {
  return (
    <>
      <span className=" bg-[hsl(180,31%,95%)] rounded-sm px-3 py-2 text-sm font-bold text-[hsl(180,29%,50%)] ">
        {filter}
      </span>
      <span
        onClick={() => onHandleDelete(filter)}
        className=" px-3 py-1 bg-[hsl(180,29%,50%)] rounded-md cursor-pointer text-[hsl(180,14%,20%)] font-semibold mr-3 hover:text-[#fff] hover:bg-[hsl(180,14%,20%)] transition"
      >
        <button>x</button>
      </span>
      {/* <div onClick={onDeleteAll}>clear</div> */}
    </>
  );
};
