import React from "react";
import { Nav } from "react-bootstrap";
import { MdSpaceDashboard } from "react-icons/md";

export default function Navbars() {
    return (
        <Nav className="flex-column mt-2 mx-2">
            <Nav.Link href={`/`} className={`active`} >
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link>
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link>
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link>
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link>
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link>
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link>
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link>
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link>
                <span><MdSpaceDashboard size={22} color="white" /></span>
                <span>Dashboard</span>
            </Nav.Link>
        </Nav>
    )
}