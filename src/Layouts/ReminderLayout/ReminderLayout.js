import React from "react";
import "./ReminderLayout.css";
import { Row, Col, Form, Input, Button, Space, notification } from "antd";

function ReminderLayout(props) {
    const initialState = {
        name: [],
    };
    

const list = document.getElementsByClassName("list")[0];
const newReminder = document.getElementById("newReminder");


    

    return (
        <div class="container">
            <div class="col">
                <div class="title">
                    <h1>Today</h1>
                    <button id="newReminder">+</button>
                </div>
                <ul class="list">

                </ul>
            </div>
        </div>
    );
}

export default ReminderLayout;

