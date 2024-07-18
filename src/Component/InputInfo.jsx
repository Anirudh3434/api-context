import '../App.css';
import { useState } from 'react';
import { useOffice } from '../Context/OfficeContext';

function InputInfo() {
    const { Office ,addEmployee } = useOffice();
    const [Ename, setEname] = useState('');
    const [Eid, setEid] = useState('');

    const date = new Date();
    const showTime = date.getHours().toString().padStart(2, '0') 
        + ':' + date.getMinutes().toString().padStart(2, '0');

        const employeeExists = Office.some((employee )=> employee.id === Eid);

    

    const add = (e) => {
        e.preventDefault(); 
       

           if(employeeExists){
            alert('Attendance already marked')
           }
           else{
            addEmployee({ id: Eid, name: Ename, loggedIn: true , time : showTime});
            setEid(''); 
            setEname(''); 
           }
    
    };

    return (
        <>
        <div className='Input-Container'>
            <img src="https://cdn2.iconfinder.com/data/icons/business-and-finance-299/128/Employee-1024.png" alt="Employee" width='150px' height='150px' />
            <form onSubmit={add}> 
                <label htmlFor="employee-id">Employee-ID</label>
                <br />
                <input
                    type="number"
                    required
                    value={Eid}
                    id="employee-id"
                    onChange={(e) => setEid(parseInt(e.target.value))}
                />
                <br />
                <label htmlFor="employee-name">Name</label>
                <br />
                <input
                    type="text"
                    required
                    value={Ename}
                    id="employee-name"
                    onChange={(e) => setEname(e.target.value)}
                />
                <button type="submit">Add</button> 
            </form>

    
        </div>
     
       </>
    );
}

export default InputInfo;
