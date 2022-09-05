import React from "react"
import AuthLayout from "../components/Layout"
import CardHero from "./CardHero"
import Tables from "./Tables"

export default function Dashboard() {
    return (
        <AuthLayout>
            <CardHero />
            <div className="bunting-bg rounded px-3 py-2 mt-4">
                <Tables />
            </div>
        </AuthLayout>
    )
}