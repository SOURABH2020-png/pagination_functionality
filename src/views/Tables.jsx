import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import SearchSelectbar from "./SearchSelectbar";


export default function Tables() {

    const [dataValue, setDataValue] = useState([]);
    const [selectDate, setSelectDate] = useState();


    const [pages, setpages] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [limit, setLimit] = useState(10);
    const [skipCount, setSkipCount] = useState(0);

    const dataCards = async () => {
        try {
            const response = await axios.get("https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01", {
                payload: {
                    todate: selectDate,
                    
                    limit,
                    skipCount
                }
            })
            const { data, status } = response;
            if (status == 200) {
                setDataValue(data.data.data);
                setTotalRecords(data.data.total_documents)
            }
            console.log(response, "oooo")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dataCards()
    }, [selectDate, limit, skipCount])

    console.log(selectDate)
    return (
        <>
            <SearchSelectbar setLimit={setLimit} selectDate={selectDate} setSelectDate={setSelectDate} />
            <section className="custom_table">
                <table className="w-100">
                    <thead>
                        <tr>
                            <th className="text-start">Date</th>
                            <th>Day Installs</th>
                            <th>Plateform</th>
                            <th>Day Uninstalls</th>
                            <th>PlateForm</th>
                            <th>Churn Rate</th>
                            <th>Churn Plateform</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataValue.map((element, key) => (
                                <tr key={key}>
                                    <td className="text-start">{moment(element?.created_At).format("D MMM, ddd")}</td>
                                    <td>{element.totalinstall}</td>
                                    <td>
                                        <span>{element.ios_install}</span> <br />
                                        <span>{element.android_install}</span>
                                    </td>
                                    <td>{element.totaluninstall}</td>
                                    <td>
                                        <span>{element.ios_install}</span> <br />
                                        <span>{element.android_install}</span>
                                    </td>
                                    <td>{element.totalchurn}</td>
                                    <td>
                                        <span>{element.ios_churn}</span> <br />
                                        <span>{element.android_churn}</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

            <section className="custom_pagination mt-4">
                <Pagination
                    innerClass="pagination-custom pagination"
                    activePage={pages}
                    prevPageText="Prev"
                    nextPageText="Next"
                    itemClass={"page-item"}
                    linkClass="page-link"
                    pageRangeDisplayed={10}
                    itemsCountPerPage={limit}
                    totalItemsCount={totalRecords}
                    onChange={(pageNumber) => { setSkipCount(Number(pageNumber - 1) * limit); setpages(pageNumber) }}
                />
            </section>
        </>
    )
}