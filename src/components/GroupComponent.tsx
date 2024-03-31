import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  maskGroup?: string;
  sacramentoRiverCats?: string;
  events?: string;
  baseball?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  maskGroup,
  sacramentoRiverCats,
  events,
  baseball,
  propMinWidth,
}) => {
  const baseballStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-start p-2.5 box-border gap-[15.4px] min-w-[232px] max-w-[237px] z-[1] text-left text-mid text-white font-inter">
      <div className="w-[237px] h-[511px] relative bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] hidden" />
      <img
        className="self-stretch h-[385.3px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className="relative capitalize font-medium z-[1]">
        {sacramentoRiverCats}
      </div>
      <div className="self-stretch rounded-sm bg-gray-100 flex flex-row items-start justify-start pt-3 px-2.5 pb-[11px] gap-[39px] z-[1] text-xs text-gainsboro">
        <div className="h-[54px] w-[217px] relative rounded-sm bg-gray-100 hidden" />
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="h-[9px] relative capitalize inline-block min-w-[70px] z-[1]">
            total events
          </div>
          <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[67px] z-[1]">
            {events}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="h-[9px] relative capitalize inline-block min-w-[32px] z-[1]">
            sport
          </div>
          <div
            className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[57px] z-[1]"
            style={baseballStyle}
          >
            {baseball}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
