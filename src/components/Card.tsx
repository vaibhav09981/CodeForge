import Image from "next/image";

interface CardProps {
  title1: string;
  title2: string;
  description: string;
  titleColor?: string;
  titleBgColor: string;
  bgColor: string;
  imgUrl: string;
  iconColor?: string;
  descriptionColor?: string;
  imagePosition?: 'left' | 'right';
}

const Card = ({
  title1,
  title2,
  description,
  titleBgColor,
  bgColor,
  imgUrl,
  titleColor = "text-black",
  iconColor = "black",
  descriptionColor = "text-black",
  imagePosition = 'right',
}: CardProps) => {
  return (
    <div
      className={`grid grid-cols-2 gap-2 px-2 py-3 md:py-4 md:px-4 rounded-xl border border-b-4 w-full max-w-xl lg:max-w-6xl mx-auto ${bgColor}`}
    >
      <div className={`flex flex-col gap-6 justify-between ${imagePosition === 'left' ? 'order-2' : 'order-1'}`}>
        <h2 className={`text-lg md:text-xl font-bold leading-6 ${titleColor}`}>
          <span className={`px-2 rounded-md ${titleBgColor}`}>{title1}</span>{" "}
          <br />
          <span className={`px-2 rounded-md ${titleBgColor}`}> {title2}</span>
        </h2>
        <p className={`text-xs md:text-sm ${descriptionColor}`}>{description}</p>
        <button
          className={`flex items-center gap-2 justify-self-end ${
            iconColor === "white" ? "text-white" : "text-black"
          }`}
        >
          <span>
            <Image
              src={
                iconColor === "black" ? "/btn-icon-b.svg" : "/btn-icon-w.svg"
              }
              alt="Arrow icon"
              width={30}
              height={30}
              className="w-full h-auto"
            />
          </span>{" "}
          <span className="hidden lg:inline-block"> Learn more </span>
        </button>
      </div>
      <div className={`${imagePosition === 'left' ? 'order-1' : 'order-2'} flex items-center`}>
        <Image
          src={imgUrl}
          alt={`${title1} ${title2}`}
          width={300}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Card;