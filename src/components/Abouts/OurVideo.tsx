import ReactPlayer from "react-player";

const OurVideo = () => {
  return (
    <div className="h-96 my-28">
      <div className="flex-grow relative h-full">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=O4PmcP9ecE4&ab_channel=touropia"
          width="100%"
          height="100%"
          style={{ top: 0, left: 0 }}
          controls={true}
          playing={false}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0,
                fs: 1,
              },
            } as any,
          }}
        />
      </div>
    </div>
  );
};

export default OurVideo;
