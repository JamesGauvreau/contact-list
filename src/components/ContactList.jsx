//  TODO
//  Replace dummy data with API data
//  Finish "Fetching Data and useEffect"

import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const API_URL = `https://jsonplaceholder.typicode.com/users`;

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];
export default function ContactList() {
  const [contacts, setContacts] = useState(dummyContacts);

    //  Empty dependency array (below) means that the component will run this
    //  only once. "useEffect()" on its own will break the app.

console.log(`first contacts test`);
console.log(contacts);

  useEffect(()=>{
    async function fetchContacts() {
        try {
            const dog = await fetch(API_URL);
            const owner = await dog.json();
            console.log(`second contacts test`);
            console.log(contacts);
            setContacts(result);
            // fetch logic goes here
  } catch (error) {
    console.error(error);
  }
}
    fetchContacts()
}
  ,[])  

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}       {/* Above: We need to escape into Javascript { } and map over an array of contacts here. */}
      </tbody>
    </table>
  );
}