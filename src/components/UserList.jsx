import axios from 'axios';
import { useState, useEffect } from 'react';
import LoadingIndicator from './LoadingIndicator';
import '../styles/UserList.css'
import ErrorDisplay from './ErrorDisplay';
import Header from './Header';

export default function UserList() {
    //initialize list of users
    const [data, setData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    //initialize loading and error boolean
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    //fetch data
    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(url);
            setData(res.data);
        }
        //catch and display error message
        catch (err) {
            setError(true);
        }
        finally {
            setLoading(false);
        }
    }
  
    //auto fetch data when render
    useEffect(() => {
      fetchData();
    }, [])

    // display loading indicator if it is loading
    if (loading) {
        return <LoadingIndicator />
    }
    // display error message if there is an error
    else if (error) {
        return <ErrorDisplay setError={setError}/>
    }
    else return (
      <>
        <Header />
        <table>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email adress</th>
            </tr>
            {/* display list of users */}
            {
            data.map((item, index) => {
                return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                </tr>
                )
            })
            }
        </table>
      </>
    );
  };