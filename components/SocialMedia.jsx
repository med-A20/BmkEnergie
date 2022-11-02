import Image from "next/image";

export const SocialMedia = ({social}) => {
  const images = [
    "/assets/Facebook-1.png",
    "/assets/Instagram-1.png",
    "/assets/LinkedIn-1.png",
    "/assets/Whatsapp-1.png",
  ];
  const list = [
    "facebook", "instagram", "linkedIn", "whatsapp"
  ]
  return (
      <div className="absolute bottom-[5px] flex flex-col justify-center items-center ">
        {images.map((image, key) => (
          <a href={`${social[0][list[key]] || "https://www.facebook.com"}`} target={"_blank"} key={key}>
            <Image src={image} alt="test" width={40} height={40} />
          </a>
        ))}
      </div>
  );
};
