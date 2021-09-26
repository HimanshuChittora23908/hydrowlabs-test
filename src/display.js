import React from 'react'

export default function display() {
var res = JSON.parse(localStorage.getItem("details"));
    return (
        <div className="bg-blue-100 h-screen flex my-auto">
    <div className="block mx-auto my-auto md:m-auto xl:m-auto w-11/12 px-4 md:w-1/2 xl:w-1/4 md:px-8 xl:px-8 bg-white border-2 border-gray-200 py-10 rounded-3xl">
    {res ? res.map((item, index) => {
                return (
                    <div key={index} className="text-center">
                        <h1 className="font-bold">Name</h1>
                        <h1>{item.name}</h1>
                        <h1 className="font-bold pt-4">Designation</h1>
                        <h1>{item.designation}</h1>
                        <h1 className="font-bold pt-4">Language</h1>
                        <h1>{item.lang}</h1>
                    </div>
                )
            }) : "No Login"}
    </div>
    </div>
    )
}