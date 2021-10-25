import React, {FunctionComponent, useEffect, useState} from 'react';
import axios from "axios";
import EditUser from "./EditUser";

type User = {
    id: number,
    name: string,
    username: string,
}

const UsersTable: FunctionComponent = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url)
            .then(response => setUsers(response.data));
    }, []);

    return (
        <div>
          {users.map(user => <div className="row" key={user.id}>
            <div className="col-md-6">
              <p><strong>Full Name:</strong> {user.name}</p>
              <p><strong>Username:</strong> {user.username}</p>
            </div>
            <div className="col-md-6">
              <EditUser/>
            </div>

          </div>)}
        </div>


    )
}

export default UsersTable;
