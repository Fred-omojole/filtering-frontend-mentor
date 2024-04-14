const Photo = ({ url, desc }: { url: string; desc: string }) => {
  return (
    <div>
      <img src={url} alt={desc} width={50} height={50} />
    </div>
  );
};

export default Photo;
