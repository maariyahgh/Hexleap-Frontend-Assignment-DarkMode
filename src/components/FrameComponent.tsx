import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import GroupComponent1 from "./GroupComponent1";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-mid text-white font-poppins">
      <div className="flex flex-col items-start justify-start pt-72 px-0 pb-0">
        <div className="w-[36.7px] h-[49px] relative box-border z-[2] border-[1px] border-solid border-cornflowerblue-100">
          <div className="absolute top-[0px] left-[0px] box-border w-full h-full hidden border-[1px] border-solid border-cornflowerblue-100" />
          <img
            className="absolute h-[39.18%] w-[29.97%] top-[30.41%] right-[35.97%] bottom-[30.41%] left-[34.06%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="w-[850px] grid flex-row items-start justify-start gap-[36px] max-w-[calc(100%_-_113px)] grid-cols-[repeat(3,_minmax(198px,_1fr))] z-[2] mq750:grid-cols-[minmax(198px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(198px,_343px))] mq450:gap-[36px_18px]">
        <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
          <div className="self-stretch [filter:drop-shadow(0px_10px_20px_rgba(0,_0,_0,_0.2))] flex flex-col items-end justify-start pt-[15.9px] pb-[10.2px] pr-4 pl-[15px] relative gap-[40px] mq450:gap-[20px_40px]">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] flex items-center justify-center z-[0]">
              <img
                className="w-full h-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.062)]"
                alt=""
                src="/group-1975@2x.png"
              />
            </div>
            <div className="self-stretch h-[401.3px] relative shrink-0 z-[1] flex items-center justify-center">
              <img
                className="self-stretch h-full max-w-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[0px] top-[16px] w-full [transform:scale(1.283)]"
                loading="lazy"
                alt=""
                src="/ticket-mockup-3@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[6.1px] pl-[7px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[13.8px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px]">
                  <div className="self-stretch relative leading-[27px] capitalize font-medium z-[1]">
                    Las Vegas Aviators
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[30px] text-sm">
                    <div className="flex-1 flex flex-row items-start justify-center gap-[4.8px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[5.3px] min-w-[36px]">
                        <div className="flex-1 relative uppercase inline-block min-w-[48px] z-[1]">
                          Oct 15
                        </div>
                        <div className="h-[16.8px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border">
                          <div className="w-[0.5px] h-[13.3px] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                        </div>
                      </div>
                      <div className="w-[33.8px] flex flex-row items-start justify-start gap-[5.3px]">
                        <div className="flex-1 relative uppercase inline-block min-w-[28px] z-[1]">
                          Sun
                        </div>
                        <div className="h-[16.8px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border">
                          <div className="w-[0.5px] h-[13.3px] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                        </div>
                      </div>
                      <div className="flex-1 relative uppercase inline-block min-w-[36px] whitespace-nowrap z-[1]">
                        4:30 PM
                      </div>
                    </div>
                  </div>
                </div>
                <FrameComponent1
                  lasVegasBallparkLasVegasN="Las Vegas Ballpark, Las Vegas, Nevada"
                  takeFlightCollection="Take Flight Collection"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[624px] [filter:drop-shadow(0px_10px_20px_rgba(0,_0,_0,_0.2))] flex flex-col items-end justify-start pt-[15.9px] pb-[10.2px] pr-[15px] pl-[15.4px] box-border relative gap-[40px] mq450:gap-[20px_40px]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] flex items-center justify-center z-[0]">
            <img
              className="w-full h-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.062)]"
              alt=""
              src="/group-1975-1@2x.png"
            />
          </div>
          <div className="self-stretch h-[401.3px] relative shrink-0 z-[1] flex items-center justify-center">
            <img
              className="self-stretch h-full max-w-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[0px] top-[16px] w-full [transform:scale(1.283)]"
              loading="lazy"
              alt=""
              src="/unnamed-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[7.8px]">
              <div className="self-stretch relative leading-[27px] capitalize font-medium z-[1]">
                Sacramento River Cats
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[13.8px] text-sm">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[30px]">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[4.8px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[5.3px]">
                      <div className="flex-1 relative uppercase inline-block min-w-[48px] z-[1]">
                        Oct 15
                      </div>
                      <div className="h-[16.8px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border">
                        <div className="w-[0.5px] h-[13.3px] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                      </div>
                    </div>
                    <div className="w-[33.8px] flex flex-row items-start justify-start gap-[5.3px]">
                      <div className="flex-1 relative uppercase inline-block min-w-[28px] z-[1]">
                        Sun
                      </div>
                      <div className="h-[16.8px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border">
                        <div className="w-[0.5px] h-[13.3px] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                      </div>
                    </div>
                    <div className="flex-1 relative uppercase inline-block min-w-[55px] whitespace-nowrap z-[1]">
                      4:30 PM
                    </div>
                  </div>
                </div>
                <FrameComponent1
                  lasVegasBallparkLasVegasN="Sutter Health Park, Sacramento, California"
                  takeFlightCollection="Orange Collection"
                  propWidth="110px"
                  propMinWidth="110px"
                />
              </div>
            </div>
          </div>
        </div>
        <GroupComponent1
          group1975="/group-1975-1@2x.png"
          ticketMockup3="/ticket-mockup-3@2x.png"
          propAlignSelf="unset"
          groupDivFilter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.2))"
          groupDivHeight="624px"
          ticketMockup3IconTop="16px"
          ticketMockup3IconTransform="scale(1.283)"
          lasVegasAviatorsColor="#fff"
          frameDivMinWidth="unset"
          oct15Color="#fff"
          lineDivBorderRight="0.5px solid #fff"
          sunColor="#fff"
          lineDivBorderRight1="0.5px solid #fff"
          pMColor="#fff"
          pMMinWidth="55px"
          lasVegasBallparkColor="#dfdfdf"
          groupButtonBackgroundColor="#000"
          rectangleDivBackgroundColor="#000"
        />
      </div>
      <div className="h-[337px] flex flex-col items-start justify-start pt-72 px-0 pb-0 box-border">
        <img
          className="w-[36.7px] flex-1 relative max-h-full object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/group-1717@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
