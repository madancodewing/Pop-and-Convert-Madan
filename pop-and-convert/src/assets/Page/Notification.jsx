import Table from "../Component/Table"
import Button from "../Component/Button"
import { useState } from "react";

const Notification = () => {
    const [searchAction, setSearchAction] = useState("");

    return (
        <div className="container">
            <div className="header flex justify-between align-middle">
                <h1 className="font-bold text-lg">All Notification</h1>
                <div className="form flex gap-5 ">
                    <input type="text" className="border py-2 px-3" placeholder="What are you looking for..." value={searchAction} onChange={(e) =>setSearchAction(e.target.value)} />
                    <Button text='Add Notification' />
                </div>
            </div>
            <Table searchAction={searchAction} />
        </div>
    )
}

export default Notification

