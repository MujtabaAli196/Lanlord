import React from 'react';
import { Card,Table } from 'react-bootstrap';

// import component
import InvoiceLoop from "./InvoiceLoop";

// import images
import arrow from "../../../images/circlearrow.svg";

const Invoice = () => {
    // InvoiceLoopArray
    const InvoiceLoopArray =[
        {
            key:"0",
            invoice_no:"INV-0012",
            prefrence:"November",
            date:"02 Feb 2021",
            duedate:"06 Feb 2021",
            amount:"$2,000",
            btnbg:"purplebg me-3",
            btntext:"Pay Now",
            alticon:"icon",
            imgarrow:arrow,
        },
        {
            key:"1",
            invoice_no:"INV-0012",
            prefrence:"November",
            date:"02 Feb 2021",
            duedate:"06 Feb 2021",
            amount:"$2,000",
            btnbg:"greenbg",
            btntext:"Paid",
            // imgarrow:arrow,
        },
    ]
    return (
        <>
            <div className="main_head mb-4">
                <h4>Invoice</h4>
            </div>
            {/*  */}
            <Card>
                <Card.Body>
                    <Table hover responsive className="data_table">
                        <thead>
                            <tr>
                                <th>Invoice No.</th>
                                <th>Referance</th>
                                <th>Date</th>
                                <th>Due Date</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {InvoiceLoopArray.map((val) =>{
                                return(
                                    <InvoiceLoop
                                        key={val.key}
                                        invoice_no={val.invoice_no}
                                        prefrence={val.prefrence}
                                        date={val.date}
                                        duedate={val.duedate}
                                        amount={val.amount}
                                        btnbg={val.btnbg}
                                        btntext={val.btntext}
                                        imgarrow={val.imgarrow}
                                        alticon={val.alticon}
                                    />
                                )
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}

export default Invoice;
