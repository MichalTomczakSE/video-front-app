import Image from "next/image";

interface VideoCardProps {
  imageSource: string;
  videoSource: string;
  title: string;
  duration: string;
}

export const VideoCard = ({ imageSource, title, videoSource, duration }: VideoCardProps) => {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
      <div className="border p-5 sm:p-6 lg:px-14">
        <div className="text-xs md:text-base font-bold py-3">
          {title}
        </div>
        <div className="flex justify-center">
          <Image src={imageSource} alt="Video thumbnail"
                 width={500}
                 height={500}
          />
        </div>
        <div className="text-xs md:text-base font-bold py-3">
          {duration.length < 3 ? `Duration: ${duration} seconds` : `Duration: ${duration}`}
        </div>
      </div>
      <div className="flex flex-col justify-center border p-5 sm:p-6 lg:px-14">
        <div>
          <a href={videoSource} download>
            <button className="text-xs md:text-base font-bold px-6 py-4 rounded-full uppercase font-bold bg-sky-300 ">
              download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};