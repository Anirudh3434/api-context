import '../App.css';
import { useOffice } from '../Context/OfficeContext';

function AttendanceList({ employee }) {

    const {removeEmployee} = useOffice()

const remove = () =>{
        removeEmployee(employee.id)
}

    return (
        <div className="List-Container">
            <img src="https://cdn2.iconfinder.com/data/icons/business-and-finance-299/128/Employee-1024.png" alt="Employee" width='100px' height='100px' />
            <span> <b>NAME:</b> {employee.name}</span>
            <span><b>ID:</b> {employee.id}</span>
            <span><b>LoggedIn time:</b>{employee.time}</span>
            <button onClick={remove}>Log Out</button>
        </div>
    );
}

export default AttendanceList;
