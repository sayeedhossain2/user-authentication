import React from "react";
import Swal from "sweetalert2";

const DetailsModal = ({
  conpanyInfo,
  setConpanyInfo,
  setIsChange,
  isChange,
}) => {
  const { name, userid, password, _id } = conpanyInfo;

  console.log(name, userid);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const userid = form.userid.value;
    const password = form.Password.value;

    // console.log(name, userid, password);

    const alldata = {
      name,
      userid,
      password,
    };

    fetch(`https://job-task-server-nu.vercel.app/companyUpdate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(alldata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setIsChange(!isChange);
          Swal.fire("Good job!", "Updated Successfully!", "success");
        }
      });
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="details-info-company"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setConpanyInfo(null)}
            htmlFor="details-info-company"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleUpdate}>
            {/* item-1 */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                className="input input-bordered"
              />
            </div>

            {/* item-2 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User ID</span>
              </label>
              <input
                type="text"
                defaultValue={userid}
                name="userid"
                className="input input-bordered"
              />
            </div>

            {/* item-3 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                defaultValue={password}
                name="Password"
                className="input input-bordered"
              />
            </div>

            <input
              className="btn btn-primary mt-6"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
      {/* Put this part before </body> tag */}
    </div>
  );
};

export default DetailsModal;
