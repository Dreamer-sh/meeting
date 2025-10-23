import MeetingCard from "./components/card";
import searchIcon from "./assets/icons/Icon_search.svg";
import avatar1 from "./assets/avatars/avatar1.svg";
import avatar2 from "./assets/avatars/avatar2.svg";
import avatar3 from "./assets/avatars/avatar3.svg";
import avatar4 from "./assets/avatars/avatar4.svg";
import { useState } from "react";

function App() {
  const [meetings, setMettings] = useState([
    {
      id: 1,
      progress: "ongoing",
      crumb: {
        first: "NGR流失访谈",
        second: "Product",
      },
      creators: [avatar1, avatar2, avatar3, avatar4, avatar4, avatar4],
      collaborators: [avatar1, avatar2, avatar3, avatar4],
      startTime: "2024-10-11 18:00:00",
      endTime: "2024-10-11 18:00:00",
      location: "端手游体验室(深圳-D1-0445)",
    },
    {
      id: 2,
      progress: "paused",
      crumb: {
        first: "NGR流失访谈",
        second: "Day5 AM",
      },
      creators: [avatar1, avatar2, avatar3, avatar4],
      collaborators: [avatar1, avatar2, avatar3, avatar4],
      startTime: "2024-10-11 18:00:00",
      endTime: "2024-10-11 18:00:00",
      location: "端手游体验室(深圳-D1-0445)",
    },
    {
      id: 3,
      progress: "pending",
      crumb: {
        first: "NGR流失访谈",
        second: "Day5 AM",
      },
      creators: [avatar1, avatar2, avatar3, avatar4],
      collaborators: [avatar1, avatar2, avatar3, avatar4],
      startTime: "2024-10-11 18:00:00",
      endTime: "2024-10-11 18:00:00",
      location: "端手游体验室(深圳-D1-0445)",
    },
    {
      id: 4,
      progress: "completed",
      crumb: {
        first: "NGR流失访谈",
        second: "Day5 AM",
      },
      creators: [avatar1, avatar2, avatar3, avatar4],
      collaborators: [avatar1, avatar2, avatar3, avatar4],
      startTime: "2024-10-11 18:00:00",
      endTime: "2024-10-11 18:00:00",
      location: "端手游体验室(深圳-D1-0445)",
      histories: [
        {
          title: "NGR流失访谈NGR4",
          startTime: "2024-10-11 18:00:00",
          endTime: "2024-10-11 18:00:00",
          location: "端手游体验室(深圳-D1-0445)",
          creator: "luceyyang(杨琪丹)",
        },
        {
          title: "NGR流失访谈NGR3",
          startTime: "2024-10-11 18:00:00",
          endTime: "2024-10-11 18:00:00",
          location: "端手游体验室(深圳-D1-0445)",
          creator: "luceyyang(杨琪丹)",
        },
        {
          title: "NGR流失访谈NGR2",
          startTime: "2024-10-11 18:00:00",
          endTime: "2024-10-11 18:00:00",
          location: "端手游体验室(深圳-D1-0445)",
          creator: "luceyyang(杨琪丹)",
        },
        {
          title: "NGR流失访谈NGR1",
          startTime: "2024-10-11 18:00:00",
          endTime: "2024-10-11 18:00:00",
          location: "端手游体验室(深圳-D1-0445)",
          creator: "luceyyang(杨琪丹)",
        },
      ],
    },
  ]);

  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="w-full bg-[#040D40] h-[90px]" />
      <div className="pt-[39px] pb-[63px] max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-base">我的座谈会 ({meetings.length})</span>
          <div className="relative bg-white">
            <img
              src={searchIcon}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-placeholde"
            />
            <input
              type="text"
              placeholder="请输入关键词"
              className="w-full pl-10 pr-3 py-2.5 border border-[#00000026] rounded-sm
                   focus:outline-none focus:border-focus focus:ring-2 focus:ring-focus/20
                   text-sm text-[(rgba(11,11,11,0.3))]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} {...meeting} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
