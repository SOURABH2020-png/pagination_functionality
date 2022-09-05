import React from "react";
import Navbars from "./Navbars";

export default function Sidebar() {
    return(
        <section className="sidebar__main ">
            <div className="p-3 d-flex justify-content-between align-items-center">
                <div className="main_profile d-flex align-items-center gap-3">
                    <div className="profile"></div>
                    <div><h6 className="text-primary m-0">WOW</h6> </div>
                </div>
                <div>
                    Back
                </div>
            </div>

            <Navbars/>

        </section>
    )
}