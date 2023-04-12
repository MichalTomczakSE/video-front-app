import { VideoCard } from "@/components/VideoCard";
import { useEffect, useState } from "react";

interface BackendApiResponse {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  duration: string;
}

export const RecentVideos = () => {
  const [data, setData] = useState<BackendApiResponse[]>([]);

  const getData = async (): Promise<BackendApiResponse[]> => {
    const res = await fetch("http://localhost:3000/video/recent");
    const responseData: BackendApiResponse[] = await res.json();
    return responseData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <ul className="grid grid-cols-1 gap-4 mx-auto">
      {data.map(video => {
        return <li className="text-center" key={video.id}>
          <VideoCard
            imageSource={video.thumbnailUrl}
            videoSource={video.videoUrl}
            title={video.title}
            duration={video.duration} />
        </li>;
      })}
    </ul>
  );
};