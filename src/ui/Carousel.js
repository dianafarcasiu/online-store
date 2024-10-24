import CarouselPic from "./CarouselPic";

export default function Carousel() {
  return (
    <div className="w-full flex gap-4 overflow-x-auto scroll-smooth p-6 bg-gray-700 rounded-2xl shadow-lg shadow-black/20 lg:w-1/2 ">
      <CarouselPic imgSrc="https://static01.nyt.com/images/2021/02/28/realestate/26diyextra-slide-EVOY/26diyextra-slide-EVOY-superJumbo.jpg" />
      <CarouselPic imgSrc="https://media.houseandgarden.co.uk/photos/618937c87ec4df9dbbfebb22/master/w_1600%2Cc_limit/c68a2946.jpg" />
      <CarouselPic imgSrc="https://i.pinimg.com/originals/2c/8f/86/2c8f86040dfc6ea8062d574bb9a52dd4.jpg" />
      <CarouselPic imgSrc="https://i.pinimg.com/736x/4d/0f/79/4d0f79d5b4d92b178cec230f8a4dff46.jpg" />
    </div>
  );
}
