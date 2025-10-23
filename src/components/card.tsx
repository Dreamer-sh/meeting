import type React from "react";
import { useMemo, useState } from "react";
import DoubleLeft from "../assets/icons/doubleleft.svg";

interface MettingCardProps {
  progress: "ongoing" | "paused" | "pending" | "completed";
  crumb: {
    first: string;
    second?: string;
  };
  creators: string[];
  collaborators: string[];
  startTime: string;
  endTime: string;
  location: string;
  histories?: Array<HistoryRowProps>;
}

interface HistoryRowProps {
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  creator: string;
}

const HistoryRow: React.FC<HistoryRowProps> = ({
  title,
  startTime,
  endTime,
  location,
  creator,
}) => {
  return (
    <div className="flex p-3 border-t border-black justify-between text-sm">
      <span>{title}</span>
      <span>
        时间：{startTime} - {endTime}
      </span>
      <span>{location}</span>
      <span>{creator}</span>
    </div>
  );
};

const MeetingCard: React.FC<MettingCardProps> = ({
  progress,
  crumb,
  creators,
  collaborators,
  startTime,
  endTime,
  location,
  histories,
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const data = useMemo(() => {
    switch (progress) {
      case "ongoing":
        return {
          title: "进行中",
          color: "#52C41A",
          button: "进入直播",
        };
      case "paused":
        return {
          title: "暂停中",
          color: "#6078FF",
          button: "继续直播",
        };
      case "pending":
        return {
          title: "未开始",
          color: "#E3B016",
          button: "开始直播",
        };
      default:
        return {
          title: "历史数据",
          color: "#D9D9D9",
        };
    }
  }, [progress]);

  return (
    <div>
      <p className="mb-3 text-[18px]">{data.title}</p>
      <div
        className={`border-l-6 min-h-[116px] rounded-sm pr-8 py-3.5 bg-white`}
        style={{ borderLeftColor: data.color }}
      >
        <div className="flex items-center">
          {progress === "completed" && (
            <div
              className="w-6 h-4 border border-[#ECECEC] mx-2.5 rounded-sm flex justify-center items-center"
              onClick={() => setIsExpand(!isExpand)}
            >
              <div className="w-2 h-2 relative">
                <div
                  className={`absolute w-0 h-0  ${
                    isExpand
                      ? "border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[rgba(45,45,45,0.35)]"
                      : "border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[rgba(45,45,45,0.35)]"
                  }`}
                ></div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-y-[11px] ml-[26px]">
            <div className="flex gap-x-2">
              <span className="bg-[#E6E8F2] text-sm px-2 rounded-sm">天美</span>
              <p className="bg-[#F4D7C3] text-sm px-2 rounded-xl flex gap-x-1 items-center">
                <span className="w-1 h-1 bg-[#A85212] rounded-full"></span>
                <span>王者荣耀</span>
              </p>
            </div>
            <div className="flex gap-x-2 items-center text-sm">
              <span className="font-semibold">{crumb.first}</span>
              {crumb.second && (
                <>
                  <img src={DoubleLeft} alt="" />
                  <span className="text-[#2B4096]">{crumb.second}</span>
                </>
              )}
            </div>
            <div className="flex gap-x-[43px]">
              <div className="flex gap-x-2">
                <span className="text-[rgba(11,11,11,0.45)] text-[12px]">
                  创建者
                </span>
                <div className="flex">
                  {creators.slice(0, 4).map((creator) => (
                    <img src={creator} key={creator} className="-mx-0.5" />
                  ))}
                  {creators.length > 4 && (
                    <div className="w-4 h-4 rounded-2xl bg-[rgba(221,221,221,1)] text-[8px] text-[rgba(0,0,0,0.59)] text-center leading-4">
                      +{creators.length - 4}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-x-2">
                <span className="text-[rgba(11,11,11,0.45)] text-[12px]">
                  协作者
                </span>
                <div className="flex">
                  {collaborators.slice(0, 4).map((collaborator) => (
                    <img
                      src={collaborator}
                      key={collaborator}
                      className="-mx-0.5"
                    />
                  ))}
                  {collaborators.length > 4 && (
                    <div className="w-4 h-4 rounded-2xl bg-[rgba(221,221,221,1)] text-[8px] text-[rgba(0,0,0,0.59)] text-center leading-4">
                      +{collaborators.length - 4}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-px bg-gray-200 h-[76px] mx-[51px]" />
          <div className="flex flex-col items-center">
            <span>{startTime}</span>
            <span>|</span>
            <span>{endTime}</span>
          </div>
          <div className="w-px bg-gray-200 h-[76px] mx-[51px]" />
          <p>{location}</p>
          <div className="w-px bg-gray-200 h-[76px] mx-[51px]" />
          <div className="flex gap-x-4 items-center justify-end ml-auto">
            {progress !== "completed" && (
              <button
                className={`text-sm border border-[#2B4096] rounded-sm ${
                  progress === "ongoing"
                    ? "bg-[#2B4096] text-white"
                    : "bg-white text-[#2B4096]"
                }`}
              >
                {data.button}
              </button>
            )}
            <div className="w-8 h-8 bg-[#E6E8F0] rounded-full flex flex-col gap-0.5 justify-center items-center cursor-pointer">
              {new Array(3).fill("").map((_, index) => {
                return (
                  <div
                    key={index}
                    className="w-[3px] h-[3px] bg-[#2B4096]"
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        {isExpand && (
          <ul className="flex flex-col bg-white mt-4 mx-15">
            {histories?.map((history) => (
              <HistoryRow {...history} key={history.title} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MeetingCard;
