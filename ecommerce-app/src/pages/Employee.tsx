interface EmployeeData {
    id: number;
    name: string;
    role: string;
    department: string;
    salary: number | string;
    location: string;
}

interface EmployeeProps{
    emp: EmployeeData;
}

function Employee(props: EmployeeProps) {
    const { emp, deleteEmp } = props;
    console.log(deleteEmp);
    return (
       <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm h-100 rounded-4">

                {/* Header */}
                <div className="card-body pb-2">

                <div className="d-flex justify-content-between align-items-start">
                    <div>
                    <h5 className="fw-bold mb-1 text-dark">{emp.name}</h5>
                    <p className="text-muted small mb-2">{emp.role}</p>
                    </div>

                    <span className="badge bg-light text-dark border">
                    ID: {emp.id}
                    </span>
                </div>

                <hr className="my-2" />

                {/* Details */}
                <div className="small">

                    <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Department</span>
                    <span className="fw-medium">{emp.department}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Location</span>
                    <span className="fw-medium">{emp.location}</span>
                    </div>

                    <div className="d-flex justify-content-between">
                    <span className="text-muted">Salary</span>
                    <span className="fw-bold text-success">
                        ₹ {emp.salary}
                    </span>
                    </div>

                </div>

                </div>

                {/* Footer */}
                <div className="card-footer bg-white border-0 pt-0">
                <button className="btn btn-outline-danger btn-sm w-100" onClick={() => deleteEmp(emp.id)}>
                    Delete Employee
                </button>
                </div>

            </div>
        </div>
       
    )
}

export default Employee;