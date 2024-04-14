const Photo = ({ url, desc }: { url: string; desc: string }) => {
  return (
    <div>
      <img src={url} alt={desc} width={100} height={80} />
    </div>
  );
};

export default Photo;
