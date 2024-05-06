import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Menu2() {
  const [activeBtn, setActiveBtn] = useState(true);
  const ChangeState = (event: any) => {
    event === "event" ? setActiveBtn(true) : setActiveBtn(false);
  };

  const [events, setEvents] = useState([]);
  const [ideas, setIdeas] = useState([]);

  const fetchEventsData = async () => {
    const res = await axios.get("/api/get_events");
    setEvents(res.data);
  };

  const fetchIdeaData = async () => {
    const res = await axios.get("/api/get_ideas");
    setIdeas(res.data);
  };

  useEffect(() => {
    fetchEventsData();
    fetchIdeaData();
  }, []);

  const renderList = (data: any) => {
    return data.map((item: { _id: any; title: string; time: string }) => {
      return (
        <Link href={"/"} key={item._id} className="hover:text-blue-500">
          <ul>
            <li className="p-2">
              <p className="text-sm">{item.title}</p>
              <span className="text-gray-500 text-xs italic">{item.time}</span>
              <hr />
            </li>
          </ul>
        </Link>
      );
    });
  };

  return (
    <div>
      <div className="flex border-solid border-2 border-gray-200 px-2 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <button
          onClick={() => ChangeState("event")}
          className={`px-2 mt-2 py-2 font-bold text-xs  ${
            activeBtn
              ? `border-solid border-2 border-gray-200 rounded-tl-lg rounded-tr-lg text-blue-600 border-b-0 bg-white`
              : ""
          }`}
        >
          Sự kiện nổi bật
        </button>
        <button
          onClick={() => ChangeState("idea")}
          className={`px-2 mt-2 py-2 font-bold text-xs  ${
            !activeBtn
              ? `border-solid border-2 border-gray-200 rounded-tl-lg rounded-tr-lg text-blue-600 border-b-0 bg-white`
              : ""
          }`}
        >
          Ý kiến chỉ đạo
        </button>
      </div>
      <div className="h-96 overflow-y-auto">
        {" "}
        {activeBtn ? renderList(events) : renderList(ideas)}
      </div>
    </div>
  );
}
