import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 flex flex-col items-center justify-start pt-16 pb-[88px] pr-5 pl-[21px] box-border gap-[50px] tracking-[normal] mq750:gap-[25px_50px]">
      <div className="w-[1444px] h-[1778px] relative bg-gray-100 hidden max-w-full" />
      <FrameComponent2 />
      <section className="w-[1240px] flex flex-col items-end justify-start gap-[35px] max-w-full text-left text-31xl text-white font-poppins mq750:gap-[17px_35px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
          <button className="cursor-pointer [border:none] py-2.5 px-[30px] bg-cornflowerblue-100 rounded-10xs shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-200">
            <div className="relative text-sm leading-[26px] font-semibold font-inter text-white text-left inline-block min-w-[64px]">
              See More
            </div>
          </button>
        </div>
        <div className="self-stretch [background:linear-gradient(180deg,_#18282a,_#221a2c)] flex flex-col items-start justify-start pt-[70px] px-[77px] pb-[50px] box-border gap-[51px] max-w-full z-[1] lg:pl-[38px] lg:pr-[38px] lg:box-border mq750:gap-[25px_51px] mq1050:pt-[45px] mq1050:pb-8 mq1050:box-border mq450:pt-[29px] mq450:pb-[21px] mq450:box-border">
          <div className="w-[1240px] h-[918px] relative bg-black hidden max-w-full" />
          <div className="w-[1240px] h-[918px] relative [background:linear-gradient(180deg,_#18282a,_#221a2c)] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
            <div className="w-[917px] flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                <h1 className="m-0 relative text-inherit leading-[105%] font-bold font-inherit z-[2] mq1050:text-21xl mq1050:leading-[42px] mq450:text-11xl mq450:leading-[31px]">
                  Collection Spotlight
                </h1>
              </div>
              <div className="self-stretch relative text-sm leading-[22.65px] font-inter text-center z-[2]">
                Discover extraordinary moments with our Spotlight Collection
                metatickets—exclusive access to premium events for an
                unforgettable experience. Grab yours today!
              </div>
            </div>
          </div>
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default Frame;
