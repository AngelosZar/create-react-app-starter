import heroImg from '../media/images/pexels-n-voitkevich-6214474.jpg';

export function HeroOnHome() {
  return (
    <div>
      <img
        src={heroImg}
        alt="a shopping cart"
        className="w-full max-h-screen object-cover"
      />
    </div>
  );
}
