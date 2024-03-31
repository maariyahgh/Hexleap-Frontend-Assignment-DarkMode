import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className="w-[1241px] flex flex-col items-start justify-start gap-[23px] max-w-full text-left text-5xl text-white font-poppins">
      <div className="w-20 flex flex-col items-start justify-start gap-[5px]">
        <h2 className="m-0 self-stretch h-9 relative text-inherit font-bold font-inherit inline-block z-[1] mq450:text-lgi">
          Sports
        </h2>
        <div className="w-[82px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-dodgerblue" />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[14px] text-mid font-inter">
        <GroupComponent
          maskGroup="/mask-group@2x.png"
          sacramentoRiverCats="Sacramento River Cats"
          events="48 Events"
          baseball="baseball"
        />
        <GroupComponent
          maskGroup="/mask-group-1@2x.png"
          sacramentoRiverCats="Las Vegas Aviators"
          events="28 Events"
          baseball="baseball"
          propMinWidth="57px"
        />
        <GroupComponent
          maskGroup="/mask-group-2@2x.png"
          sacramentoRiverCats="new jersey devils"
          events="15 Events"
          baseball="ice hockey"
          propMinWidth="74px"
        />
        <GroupComponent
          maskGroup="/mask-group-1@2x.png"
          sacramentoRiverCats="Las Vegas Aviators"
          events="28 Events"
          baseball="baseball"
          propMinWidth="57px"
        />
        <div className="flex-1 bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start p-2.5 box-border min-w-[232px] max-w-[237px] z-[1] text-smi-8">
          <div className="h-[511px] w-[237px] relative bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] hidden" />
          <div className="flex-1 bg-darkslategray-100 flex flex-col items-end justify-start pt-0 px-0 pb-[42px] gap-[28px] z-[1] border-[0.2px] border-solid border-teal mq750:pb-[27px] mq750:box-border">
            <div className="self-stretch h-[491px] relative bg-darkslategray-100 box-border hidden border-[0.2px] border-solid border-teal" />
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[193px] bg-[url('/public/unnamed-1-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
              <img
                className="h-[218px] w-[217px] relative object-cover hidden"
                alt=""
                src="/unnamed-1-1@2x.png"
              />
              <div className="bg-black flex flex-row items-start justify-start py-[3px] px-[14.9px] z-[2]">
                <b className="relative leading-[19px] inline-block min-w-[18px]">
                  Ad
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[14.9px] pl-[15px] text-xl">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-base">
                  Advertisement title
                </h3>
                <div className="self-stretch relative text-smi-8 leading-[19px] text-gainsboro z-[1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
