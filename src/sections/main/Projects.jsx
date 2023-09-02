import { forwardRef } from "react";
import Section from "../../componets/Section";
import sayag from "../../data/media/videos/sayag-studio.mp4";
import ReactPlayer from "react-player";
const Projects = forwardRef((_, ref) => {
  const data = (
    <div className="">
      <div className=" flex flex-row snap-x snap-mandatory overflow-scroll gap-6 rounded-lg">
        {videos.map((video, i) => (
          <div
            className="shadow-lg snap-center w-fit h-fit flex-shrink-0 rounded-lg object-fit overflow-hidden "
            key={i}
          >
            <a href="https://ynlevi.github.io/sayag-studio/">
              <ReactPlayer
                url={video}
                playing={true}
                loop={true}
                muted={true}
                width={"100%"}
                height={"100%"}
                playsinline
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
  return <Section header={"Projects"} data={data} ref={ref} />;
});
export default Projects;

const videos = [sayag, sayag, sayag];
