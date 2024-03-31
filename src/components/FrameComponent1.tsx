import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  lasVegasBallparkLasVegasN?: string;
  takeFlightCollection?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  lasVegasBallparkLasVegasN,
  takeFlightCollection,
  propWidth,
  propMinWidth,
}) => {
  const takeFlightCollectionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-center text-sm text-gainsboro font-inter">
      <div className="self-stretch h-[31px] relative leading-[20.58px] inline-block z-[1]">
        {lasVegasBallparkLasVegasN}
      </div>
      <div className="self-stretch bg-black flex flex-row items-start justify-start pt-[11px] px-[41px] pb-2.5 whitespace-nowrap z-[1] text-smi-7 text-white">
        <div className="h-9 w-[213px] relative bg-black hidden" />
        <div
          className="w-[131px] relative capitalize font-medium inline-block z-[1]"
          style={takeFlightCollectionStyle}
        >
          {takeFlightCollection}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
