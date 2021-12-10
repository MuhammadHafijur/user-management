import React from "react";

const PausedProfiles = ({ profiles, handleStatus, handleDelete }) => {
  const pauseList = profiles.filter((profile) => profile.status === false);

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center text-gray-800 font-bold">
          Paused Profile List
        </h1>
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        Created at
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pauseList.map((profile) => (
                      <tr key={profile._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <a href="/" className="block relative">
                                <img
                                  alt="profil"
                                  src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=122"
                                  className="mx-auto object-cover rounded-full h-10 w-10 "
                                />
                              </a>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {profile.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            12/09/2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {profile.status === true && (
                            <button
                              onClick={() => handleStatus(profile._id)}
                              className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">active</span>
                            </button>
                          )}
                          {profile.status === false && (
                            <button
                              onClick={() => handleStatus(profile._id)}
                              className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">paused</span>
                            </button>
                          )}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => handleDelete(profile._id)}
                            className="relative inline-block px-3 py-1 font-semibold text-red-600 hover:text-red-800 leading-tight"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">delete</span>
                          </button>
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
    </div>
  );
};

export default PausedProfiles;
