import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";
import DetailsInfo from "./DetailsInfo";
import { BounceLoader } from "react-spinners";
import { authContext } from "../../context/AuthProvider/AuthProvider";

const Home = () => {
  const { loading } = useContext(authContext);
  const [conpanyInfo, setConpanyInfo] = useState(null);
  const [isChange, setIsChange] = useState(true);

  const { data = [] } = useQuery({
    queryKey: ["alldetails", isChange],
    queryFn: () =>
      fetch("https://job-task-server-nu.vercel.app/alldetails").then((res) =>
        res.json()
      ),
  });

  if (loading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <BounceLoader color="#36d7b7" />
      </h1>
    );
  }

  return (
    <div>
      <h2 className="text-4xl mb-10 font-bold mt-3 text-purple-700">
        Total Company: {data.length}
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>User ID</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {data.map((allinfo) => (
              <DetailsInfo
                key={allinfo._id}
                allinfo={allinfo}
                setConpanyInfo={setConpanyInfo}
                setIsChange={setIsChange}
                isChange={isChange}
              ></DetailsInfo>
            ))}
          </tbody>

          {conpanyInfo && (
            <DetailsModal
              conpanyInfo={conpanyInfo}
              setConpanyInfo={setConpanyInfo}
            ></DetailsModal>
          )}
        </table>
      </div>
    </div>
  );
};

export default Home;
