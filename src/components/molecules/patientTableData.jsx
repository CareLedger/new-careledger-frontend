import React from "react";
import girl from "../../assets/girl1.jpg";
import girl1 from "../../assets/girrl.jpg";
import man from "../../assets/man1.jpg";
import { useRouter } from "next/router";
import Image from "next/image";

const tableData = [
  {
    id: 1,
    media: girl,
    patientId: "P0001",
    name: "Amaka Peter",
    age: 32,
    address: "123 Main Street",
    number: "09075545678",
    date: "19th May 2023",
  },
  {
    id: 2,
    media: girl1,
    patientId: "P0002",
    name: "Jane Frank",
    age: 45,
    address: "456 yaba street lagos",
    number: "08034568755",
    result: "Lab Results",
    date: "19th May 2023",
  },
  {
    id: 2,
    media: man,
    patientId: "P0003",
    name: "Tosin Tobi",
    age: 45,
    address: "45 Orun rd, Uyo",
    number: "09087654234",
    date: "19th May 2023",
  },

  {
    id: 2,
    media: man,
    patientId: "P0004",
    name: "Stephanie",
    age: 45,
    address: "36 brass Aba",
    number: "07046732890",
    date: "19th March 2023",
  },

  {
    id: 2,
    media: man,
    patientId: "P0005",
    name: "Usman Aminu",
    age: 45,
    address: "Serti, Taraba",
    number: "09067895432",
    date: "19th April 2023",
  },
];

function PatientTableData({ handleSetOpen }) {
  const navigate = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700 mt-5 overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              Media
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              Patient ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              Date created
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              View Profile
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#00b4b6] uppercase tracking-wider">
              Update Record
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-700">
          {tableData.map((item, ind) => {
            return (
              <tr
                key={item.id}
                className={`${
                  ind % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                } cursor-pointer`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={item.media}
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.patientId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-400">
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.age}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.number}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-transparent border border-[#00b4b6] text-white py-1 px-3 rounded-[7px] "
                    onClick={() => navigate.push("/profile")}
                  >
                    View
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">
                    <button
                      className="bg-[#00b4b6] text-white py-1 px-3 rounded-[7px] "
                      onClick={handleSetOpen}
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTableData;
