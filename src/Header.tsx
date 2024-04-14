import Image from "./assets/desktop.svg";

const Header = () => {
  return (
    <div className="bg-[hsl(180,29%,50%)] mb-12">
      <img className=" inset-0 w-full object-cover" src={Image} alt="" />
    </div>
  );
};

export default Header;
