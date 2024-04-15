import Image from "./assets/desktop.svg";
import Image2 from "./assets/mobile.svg";

const Header = () => {
  return (
    <div className="bg-[hsl(180,29%,50%)] mb-10">
      <img
        className=" inset-0 w-full object-cover hidden lg:block "
        src={Image}
        alt=""
      />
      <img
        src={Image2}
        className="w-full object-cover lg:hidden block inset-0"
        alt=""
      />
    </div>
  );
};

export default Header;
