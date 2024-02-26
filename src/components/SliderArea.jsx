import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../slider.css";
import { useState } from "react";
import { sliderInfos } from "../data/sliderInfos";
import Slider from "./Slider";

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 800px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2, spacing: 0 },
      },
      "(min-width: 1300px)": {
        slides: { perView: 3, spacing: 50 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="w-full relative px-14 max-sm:px-0 max-sm:mt-32">
      <div className="navigation-wrapper hover:cursor-grab">
        <div ref={sliderRef} className="keen-slider">
          {sliderInfos.map((info) => (
            <Slider key={info.title} info={info} />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left
          ? "arrow--left -left-[40px] max-sm:-left-7  max-sm:rounded-full max-sm:bg-[#ed2020] "
          : "arrow--right -right-[40px] max-sm:-right-7 max-sm:rounded-full max-sm:bg-[#ed2020]"
      } absolute fill-black max-sm:-top-12 max-sm:fill-white max-sm:p-2.5 ${disabled} `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
