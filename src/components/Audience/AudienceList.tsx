import { TableBody } from "@components/Shared/TableBody";
import { TableHeader } from "@components/Shared/TableHeader";
import { FC } from "react";

const columns = ["Profile", "Bio", "Publications", "Followers", "Following", "Comments", "Mirrors", "Collects"];

export const AudienceList: FC<any> = ({ data }) => {
  console.log("Data", data)
  return (
    <div className="w-full px-4 lg:px-0">
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-700">
                <TableHeader columns={columns} />
                <TableBody pages={data.pages} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
