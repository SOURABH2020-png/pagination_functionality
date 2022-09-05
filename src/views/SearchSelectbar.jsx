import React from "react";

export default function SearchSelectbar({ setSelectDate, selectDate, setLimit }) {
    return (
        <div className="d-flex align-items-center justify-content-between my-3">
            <div>
                <span>show:- </span>
                <select name="limit" id="limit" onChange={(e) => setLimit(e.target.value)} className="ms-2">
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                </select>
                <span> Entries</span>
            </div>

            <div>
                {/* <span className="border px-2"> */}
                <input type="date"
                    placeholder="Select Duration"
                    className="border-0 text-white bg-transparent "
                    onChange={(e) => setSelectDate(e.target, selectDate)}

                />
                {/* </span> */}
            </div>
        </div>
    )
}