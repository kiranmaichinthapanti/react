import axios from 'axios';

import { useState, useEffect } from 'react';


function Voter() {
    const[voterInfo, setVoterInfo] = useState([]);

    useEffect(() => {
        fetchVoterInfo();
    }, []);

    const fetchVoterInfo = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/voters');
            setVoterInfo(data);
        } catch(error) {

        }
    }
    return (
        <div className = "container mt-4">
            <h1 className="text-center mb-4">Voters List</h1>
            <div className="row">
                {voterInfo.map((voter) => (
                    <div className="col-md-4 mb-4" key={voter.voterId}>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">{voter.name}</h5>
                                <p className="card-text">
                                    <strong>ID:</strong>{voter.voterId} <br/>
                                    <strong>Age:</strong>{voter.age} <br/>
                                    <strong>City:</strong>{voter.city} <br/>
                                    <strong>Status:</strong>{" "}
                                    <span className={ voter.hasVoted ? "badge bg-success" : "badge bg-danger" }> {voter.hasVoted ? "Voted" : "Not Voted"}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Voter;