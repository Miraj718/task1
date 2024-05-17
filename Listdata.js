import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Listdata() {
 
    const [listdata, setlistdata] = useState([]);

    const fetchlist = () => {
        fetch("http://localhost:3000/productname")
            .then((response) => response.json())
            .then((data) => {
                setlistdata(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };


    useEffect(() => {
        fetchlist();
    }, []);


    const handonDelete = (id) => {
        fetch("http://localhost:3000/productname/" + id, {
            method: "DELETE"
        })
            .then(() => {
                setlistdata(listdata.filter(item => item.id !== id));
            })
            .catch(err => console.log(err));
    };

    const navigate = useNavigate();

    const handleonupdate = (id) => {
        navigate(`/edit/${id}`);
    }

  return (

    <div className='container'>
       <h2>List of date:-</h2>
            <table className="table">

                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Select Car</th>
                        <th scope="col">SKU NO</th>
                        <th scope="col">Display</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {listdata.map((listItem, index) => (

                        (
                            <tr key={listItem.id}>
                                {/* <th scope="row">{index + 1}</th> */}
                                <td>{listItem.id}</td>
                                <td>{listItem.name}</td>
                                <td>{listItem.select}</td>
                                <td>{listItem.text}</td>
                                <td>{listItem.checkbox ? "yes" : "no"}</td>
                                {/* <Link></Link> */}
                                {/* <td><button onClick={() => handleupdate(listItem.id)}>Update</button></td> */}
                                <td><button onClick={() => handonDelete(listItem.id)}>Delete</button></td>
                                <td><button className="text-dark" onClick={() => handleonupdate(listItem.id)}>Update</button></td>
                            </tr>
                        )
                    ))}
                </tbody>

            </table>
    </div>
  )
}
