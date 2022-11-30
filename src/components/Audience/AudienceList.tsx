import { TableHeader } from "@components/Shared/TableHeader";
import { FC } from "react";

const people = [
  {
    name: "Stani",
    bio: "Chief Mezcal Officer @LensProtocol & @AaveAave",
    publications: "5.762",
    totalFollowers: "38.428",
    totalFollowing: "1.928",
    handle: "stani.lens",
    role: "Member",
    stats: {
      totalComments: 248,
      totalMirrors: 761,
      totalCollects: 875
    },
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

const columns = ["Profile", "Bio", "Publications", "Followers", "Following", "Comments", "Mirrors", "Collects"];

export const AudienceList: FC = () => {
  return (
    <div className="w-full px-4 lg:px-0">
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-700">
                <TableHeader columns={columns} />
                <tbody className="divide-y divide-gray-700 bg-gray-800">
                  {people.map((person) => (
                    <tr key={person.handle}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-100">{person.name}</div>
                            <div className="text-primary-500 font-semibold">@{person.handle}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-sm text-gray-500">
                        <div className="text-gray-100 truncate w-48">{person.bio}</div>
                      </td>
                      <td className="whitespace-nowrap py-4 text-sm text-left text-gray-500">
                        <div className="text-gray-100">{person.publications}</div>
                      </td>
                      <td className="whitespace-nowrap py-4 text-sm text-left text-gray-100">
                      <div className="text-gray-100">{person.totalFollowers}</div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 text-left text-sm font-medium sm:pr-6">
                        <div className="text-gray-100">{person.totalFollowing}</div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 text-left text-sm font-medium sm:pr-6">
                        <div className="text-gray-100">{person.stats.totalComments}</div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 text-left text-sm font-medium sm:pr-6">
                        <div className="text-gray-100">{person.stats.totalMirrors}</div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 text-left text-sm font-medium sm:pr-6">
                        <div className="text-gray-100">{person.stats.totalCollects}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
