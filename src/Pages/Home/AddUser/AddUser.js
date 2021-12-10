import React, { useState } from "react";

const AddUser = ({isLoading, setIsLoading}) => {
  const [userData, setUserData] = useState({});
  
  const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;

      const newUserData = {...userData}
      newUserData[field] = value;
      setUserData(newUserData);
  }

  const handleUser = (e) => {
      e.preventDefault();
      userData.status = true;

      fetch('http://localhost:5000/profile', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
      .then(res => res.json())
      .then(data => {
          if(data.insertedId){
              alert("Successfully Added the user")
              setIsLoading(!isLoading);
          }
      })
  }

  return (
    <div>
      <form onSubmit={handleUser} className="p-4 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-bold text-3xl text-gray-800">Add User</h2>
            <p className="text-gray-500 mb-6">Add your favourite user</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        id="name"
                        className="h-10 font-semibold border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Date</label>
                      <input
                        type="date"
                        onBlur={handleOnBlur}
                        name="date"
                        id="date"
                        className="h-10 font-semibold border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
