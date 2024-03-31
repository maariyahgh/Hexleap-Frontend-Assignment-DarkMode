import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponent1Type = {
  group1975?: string;
  ticketMockup3?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  groupDivFilter?: CSSProperties["filter"];
  groupDivHeight?: CSSProperties["height"];
  ticketMockup3IconTop?: CSSProperties["top"];
  ticketMockup3IconTransform?: CSSProperties["transform"];
  lasVegasAviatorsColor?: CSSProperties["color"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  oct15Color?: CSSProperties["color"];
  lineDivBorderRight?: CSSProperties["borderRight"];
  sunColor?: CSSProperties["color"];
  lineDivBorderRight1?: CSSProperties["borderRight"];
  pMColor?: CSSProperties["color"];
  pMMinWidth?: CSSProperties["minWidth"];
  lasVegasBallparkColor?: CSSProperties["color"];
  groupButtonBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  group1975,
  ticketMockup3,
  propAlignSelf,
  groupDivFilter,
  groupDivHeight,
  ticketMockup3IconTop,
  ticketMockup3IconTransform,
  lasVegasAviatorsColor,
  frameDivMinWidth,
  oct15Color,
  lineDivBorderRight,
  sunColor,
  lineDivBorderRight1,
  pMColor,
  pMMinWidth,
  lasVegasBallparkColor,
  groupButtonBackgroundColor,
  rectangleDivBackgroundColor,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      filter: groupDivFilter,
      height: groupDivHeight,
    };
  }, [propAlignSelf, groupDivFilter, groupDivHeight]);

  const ticketMockup3IconStyle: CSSProperties = useMemo(() => {
    return {
      top: ticketMockup3IconTop,
      transform: ticketMockup3IconTransform,
    };
  }, [ticketMockup3IconTop, ticketMockup3IconTransform]);

  const lasVegasAviatorsStyle: CSSProperties = useMemo(() => {
    return {
      color: lasVegasAviatorsColor,
    };
  }, [lasVegasAviatorsColor]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  const oct15Style: CSSProperties = useMemo(() => {
    return {
      color: oct15Color,
    };
  }, [oct15Color]);

  const lineDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRight: lineDivBorderRight,
    };
  }, [lineDivBorderRight]);

  const sunStyle: CSSProperties = useMemo(() => {
    return {
      color: sunColor,
    };
  }, [sunColor]);

  const lineDiv1Style: CSSProperties = useMemo(() => {
    return {
      borderRight: lineDivBorderRight1,
    };
  }, [lineDivBorderRight1]);

  const pMStyle: CSSProperties = useMemo(() => {
    return {
      color: pMColor,
      minWidth: pMMinWidth,
    };
  }, [pMColor, pMMinWidth]);

  const lasVegasBallparkStyle: CSSProperties = useMemo(() => {
    return {
      color: lasVegasBallparkColor,
    };
  }, [lasVegasBallparkColor]);

  const groupButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: groupButtonBackgroundColor,
    };
  }, [groupButtonBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  return (
    <div
      className="self-stretch [filter:drop-shadow(0px_8px_16px_rgba(0,_0,_0,_0.1))] flex flex-col items-end justify-start pt-[15.9px] pb-[11.2px] pr-[15.9px] pl-[15px] relative gap-[40px] text-center text-mid text-black font-poppins mq450:gap-[20px_40px]"
      style={groupDivStyle}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] flex items-center justify-center z-[0]">
        <img
          className="w-full h-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.062)]"
          alt=""
          src={group1975}
        />
      </div>
      <div className="self-stretch h-[401.3px] relative shrink-0 z-[1] flex items-center justify-center">
        <img
          className="self-stretch h-full max-w-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[0px] top-[8px] w-full [transform:scale(1.142)]"
          loading="lazy"
          alt=""
          src={ticketMockup3}
          style={ticketMockup3IconStyle}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[6.1px] pl-[7px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[13.8px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px]">
            <div
              className="self-stretch relative leading-[27px] capitalize font-medium z-[1]"
              style={lasVegasAviatorsStyle}
            >
              Las Vegas Aviators
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[30px] text-sm">
              <div className="flex-1 flex flex-row items-start justify-center gap-[4.8px] mq450:flex-wrap">
                <div
                  className="flex-1 flex flex-row items-start justify-start gap-[5.3px] min-w-[36px]"
                  style={frameDivStyle}
                >
                  <div
                    className="flex-1 relative uppercase inline-block min-w-[48px] z-[1]"
                    style={oct15Style}
                  >
                    Oct 15
                  </div>
                  <div className="h-[16.8px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border">
                    <div
                      className="w-[0.5px] h-[13.3px] relative box-border z-[1] border-r-[0.5px] border-solid border-black"
                      style={lineDivStyle}
                    />
                  </div>
                </div>
                <div className="w-[33.8px] flex flex-row items-start justify-start gap-[5.3px]">
                  <div
                    className="flex-1 relative uppercase inline-block min-w-[28px] z-[1]"
                    style={sunStyle}
                  >
                    Sun
                  </div>
                  <div className="h-[16.8px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border">
                    <div
                      className="w-[0.5px] h-[13.3px] relative box-border z-[1] border-r-[0.5px] border-solid border-black"
                      style={lineDiv1Style}
                    />
                  </div>
                </div>
                <div
                  className="flex-1 relative uppercase inline-block min-w-[36px] whitespace-nowrap z-[1]"
                  style={pMStyle}
                >
                  4:30 PM
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm text-dimgray-100 font-inter">
            <div
              className="self-stretch h-[31px] relative leading-[20.58px] inline-block z-[1]"
              style={lasVegasBallparkStyle}
            >
              Las Vegas Ballpark, Las Vegas, Nevada
            </div>
            <button
              className="cursor-pointer [border:none] pt-[11px] px-[41px] pb-2.5 bg-gray-200 self-stretch flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dimgray-200"
              style={groupButtonStyle}
            >
              <div
                className="h-9 w-[213px] relative bg-gray-200 hidden"
                style={rectangleDivStyle}
              />
              <div className="w-[131px] relative text-smi-7 capitalize font-medium font-inter text-white text-center inline-block z-[1]">
                Take Flight Collection
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
