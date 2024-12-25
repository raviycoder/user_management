"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useUsers } from "@/hooks/useUsers";

const page = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-40 h-40">
          <svg
            fill="#787878FF"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="6" width="2.8" height="12">
              <animate
                begin="spinner_Diec.begin+0.4s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="spinner_Diec.begin+0.4s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
            <rect x="5.8" y="6" width="2.8" height="12">
              <animate
                begin="spinner_Diec.begin+0.2s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="spinner_Diec.begin+0.2s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
            <rect x="10.6" y="6" width="2.8" height="12">
              <animate
                id="spinner_Diec"
                begin="0;spinner_dm8s.end-0.1s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="0;spinner_dm8s.end-0.1s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
            <rect x="15.4" y="6" width="2.8" height="12">
              <animate
                begin="spinner_Diec.begin+0.2s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="spinner_Diec.begin+0.2s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
            <rect x="20.2" y="6" width="2.8" height="12">
              <animate
                id="spinner_dm8s"
                begin="spinner_Diec.begin+0.4s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="spinner_Diec.begin+0.4s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
          </svg>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-red-500 ">Error fetching data</h1>
      </div>
    );
  return (
    <div className="container mx-auto py-10 w-full flex flex-col justify-center items-center h-screen my-16">
        <h1 className="text-3xl font-bold text-center">Users List</h1>
      <div className="flex max-w-6xl">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
