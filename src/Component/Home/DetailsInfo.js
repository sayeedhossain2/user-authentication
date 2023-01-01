import React from "react";

const handleDelete = (allinfo) => {
  const agree = window.confirm(`Are you sure You want to delete `);
  if (agree) {
    // console.log("deleting success");
    fetch(`http://localhost:5000/companyInfor/${allinfo._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
        }
      });
  }
};

const DetailsInfo = ({ allinfo, setConpanyInfo }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={allinfo.logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="font-bold">{allinfo.name}</td>
      <td className="font-bold">{allinfo.userid}</td>
      <th>
        <td>{allinfo.password}</td>
      </th>
      <th>
        <label
          onClick={() => setConpanyInfo(allinfo)}
          htmlFor="details-info-company"
          className="btn btn-active btn-primary  hover:bg-indigo-800 duration-300"
        >
          Edit
        </label>
      </th>
      <th>
        <button
          onClick={() => handleDelete(allinfo)}
          className="btn btn-active btn-secondary hover:bg-pink-700 duration-300"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default DetailsInfo;
