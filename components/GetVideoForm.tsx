import { FormEvent, useState } from "react";
import { Loader } from "@/components/Loader";
import { ErrorDisplay } from "@/components/ErrorDisplay";
import { VideoCard } from "@/components/VideoCard";

interface fetchDataProps {
  valid: boolean;
  videoURL: string;
  thumbnail: string;
  error: string;
  title: string;

}

export const GetVideoForm = () => {
  const [videoAddress, setVideoAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchData, setFetchData] = useState<fetchDataProps | null>(null);
  const inputData = (e: string) => {
    setVideoAddress(e);
  };
  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFetchData(null);

    const res = await fetch(`http://localhost:3000/video/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ videoAddress })
    });
    const data = await res.json();
    await setFetchData(data);
    setIsLoading(false);
    console.log(data);


  };
  return (
    <div className="container flex flex-col mx-auto text-center">
      <p className="p-4">Paste your link below to download video!</p>
      <form
        className=""
        onSubmit={sendForm}>
        <input
          className="w-3/4 rounded px-4 py-2"
          placeholder="Paste URL here..."
          type="text"
          onChange={e => inputData(e.target.value)}
          required />
        <button
          className="px-4 py-2 bg-sky-300 rounded ml-4 mt-1"
          type="submit">
          Start
        </button>
      </form>
      {isLoading && <Loader />}
      {fetchData?.error && <ErrorDisplay error={fetchData.error} />}
      {fetchData?.thumbnail &&
        <VideoCard
          imageSource={fetchData.thumbnail}
          title={fetchData.title}
          videoSource={fetchData.videoURL}
        />}
    </div>
  );
};