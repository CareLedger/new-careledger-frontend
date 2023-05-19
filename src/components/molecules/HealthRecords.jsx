import { useState } from "react";
import SideSlide from "./SideSlide";
import { people } from "@/data/people";

export default function HealthRecords() {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState();

  const openRecord = (record) => {
    setSelectedRecord(record);
    setOpen(true);
  };
  const closeRecord = () => {
    setOpen(false);
    // setSelectedRecord([])
  };
  return (
    <div className="p-4 lg:p-10  text-white  rounded-md ">
      <SideSlide record={selectedRecord} open={open} setOpen={closeRecord} />
      <h3 className="text-lg  my-4 font-medium lg:text-xl">
        Health Records Updates with Comments
      </h3>
      <ul role="list" className="divide-y divide-gray-600">
        {people.map((person) => (
          <li
            key={person.email}
            onClick={() => openRecord(person)}
            className="flex justify-between gap-x-6 py-5 cursor-pointer Gmorphism px-4"
          >
            <div className="flex gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-[#00b4b6]">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-white">{person.role}</p>
              {person.updated ? (
                <p className="mt-1 text-xs leading-5 text-[#00b4b6]">
                  Updated At{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.updated}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
