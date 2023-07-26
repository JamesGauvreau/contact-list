import React from "react";



export default function ContactList() {

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">ContactList</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    // Map over data here
                    // We will escape into Javascript { } and map over an array of contacts here.
                }
            </tbody>
        </table>
    );
}