const Photo = ({ url, desc }: { url: string; desc: string }) => {
  return (
    <div className="">
      <img className="" src={url} alt={desc} />
    </div>
  );
};

export default Photo;
