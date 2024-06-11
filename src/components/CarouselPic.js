export default function CarouselPic({ imgSrc }) {
  return (
    <div className="min-w-[80%] md:min-w-[40%]">
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
        className="h-96 w-full rounded-xl bg-cover bg-center shadow-md shadow-black/20"
      ></div>
    </div>
  );
}
