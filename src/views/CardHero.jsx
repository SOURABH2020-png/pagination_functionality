import axios from "axios"
import React, { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { GrInstallOption } from "react-icons/gr";


export default function CardHero() {

    const [dataValue, setDataValue] = useState();

    const dataCards = async () => {
        try {
            const response = await axios.get("https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14")
            const { data, status } = response;
            if (status == 200) {
                setDataValue(data.data);
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(dataValue)

    useEffect(() => {
        dataCards()
    }, [])

    const data = [
        {
            option: `${dataValue?.totalInstall}`,
            nameValue: "App Installed"
        },
        {
            option: `${dataValue?.activeinstall}`,
            nameValue: "Active Installs"
        },
        {
            option: `${dataValue?.churn}%`,
            nameValue: "Churn Rate"
        },
        {
            option: `${dataValue?.totaluninstall}`,
            nameValue: "App Un-install"
        },
        {
            option: `${dataValue?.aliveappusers}`,
            nameValue: "Alive Apps users"
        },
        {
            option: `${dataValue?.alivechurn}%`,
            nameValue: "Alive Churn Rate"
        }
    ]


    return (
        <section className="mt-4 bunting-bg rounded py-3">
            <Container fluid>
                <Row>
                    {
                        data.map((element, key) => (
                            <Col md={4} key={key} >
                                <Card className="border-0 rounded-0 my-1">
                                    <Card.Body>
                                        <div className="d-flex gap-3 align-items-center">
                                            <div className="profile d-flex align-items-center justify-content-center">
                                                <span className="text-dark pb-1"><GrInstallOption size={22} /></span>
                                            </div>
                                            <div className="line-h-23">
                                                <p className="fs-20 m-0 fw-bold">{element.option}</p>
                                                <small className="fs-15 fw-bold">{element.nameValue}</small>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}