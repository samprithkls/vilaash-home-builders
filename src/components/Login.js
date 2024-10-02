import React, {useState} from 'react';
import {GrClose} from 'react-icons/gr';
import {MdOutlineDeleteOutline} from 'react-icons/md';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import '../assets/styles/login.css';

const Login = () => {

    //auth state
    const [auth, setAuth] = useState(false);
    const [messages, setMessages] = useState([]);
    const getMessages = async () => {
        const result = await axios.get('http://localhost/vilaash/api/message.php');
        setMessages(result.data.messages);
    }

    const [error, setError] = useState('');
    const [hidden, setHidden] = useState(true);
    const [addAdmin, setAddadmin] = useState(true);
    const onLogin = async () => {

        if(document.getElementById('exampleInputEmail1').value.length===0 || document.getElementById('exampleInputPassword1').value.length===0) {
            alert('Login credentials cannot be blank');
        }
        else {
            let formData = new FormData();
            formData.append('username', document.getElementById('exampleInputEmail1').value);
            const credentials = await axios.post('http://localhost/vilaash/api/user.php', formData);
            
            if(credentials.status===200 && document.getElementById('exampleInputPassword1').value === credentials.data) {
                getMessages();
                setAuth(true);
            }
            
            else if(credentials.data==='Username does not exist') {
                setHidden(false);
                setError('The username entered does not exist.');
            }

            else {
                setHidden(false);
                setError('The credentials are invalid. Please enter the correct credentials.');
            }
        }
    }

    const onAdd = async() => {

        if(document.getElementById('recipient-email').value.length===0 || document.getElementById('recipient-username').value.length===0 ||
           document.getElementById('recipient-password').value.length===0) {
            alert('Please enter all the fields');
        }
        else {
            let formData = new FormData();
            formData.append('email', document.getElementById('recipient-email').value);
            formData.append('username', document.getElementById('recipient-username').value);
            formData.append('password', document.getElementById('recipient-password').value);
            
            const result = await axios.post('http://localhost:80/vilaash/api/admin.php', formData);
            if(result.status===200) {
                setAddadmin(false);
            }
        }
    }

    const onDelete = async(email, message) => {
        if(window.confirm("Are you sure you want to delete this message?")) {
            let formData = new FormData();
            formData.append("email", email);
            formData.append("message", message);
            const result = await axios.post("http://localhost:80/vilaash/api/delete.php", formData);
            console.log(result);
            getMessages();
        }
    }

    return (
        <div>
        { 
        auth===false ?
            <div className='div-login-form container'>
                <h1 style={{textAlign: 'center', marginTop: '6%'}}>Admin Login Panel</h1>
                <div className='parent-form'>
                <div className="alert alert-warning" hidden={hidden}>
                    {error}
                    <GrClose size={18} className='alert-close' onClick={() => setHidden(true)}/>
                </div>
                    <form className='login-form' onSubmit={(event) => event.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className='form-label' style={{fontWeight: 500}}>Username <span style={{color: 'red'}}>*</span></label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className='form-label' style={{fontWeight: 500}}>Password <span style={{color: 'red'}}>*</span></label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your Password" />
                        </div>
                        <center><button type="submit" className="btn btn-primary" onClick={onLogin}>Submit</button></center>
                    </form>
                </div>
            </div>
        :
            <div className='container'>
                <h1 style={{textAlign: 'center', marginTop: '4%'}}>Admin Dashboard <button type='button' className='logout-btn btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</button></h1>
                <div className='row parent-admin-add'>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                        <button type="button" className="btn btn-danger admin-add btn-md" data-bs-toggle="modal" data-bs-target="#exampleModal1">Add admin</button>
                        <ReactHTMLTableToExcel 
                            table="data"
                            filename={new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getYear()}
                            sheet="Sheet1"
                            buttonText="Export to excel"
                            className="btn btn-success excel"
                        />
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                        
                    </div>
                    <div className="alert alert-success admin-success" hidden={addAdmin}>
                        {'Admin added successfully.'}
                        <GrClose size={18} onClick={() => setAddadmin(true)} style={{float: 'right'}} />
                    </div>       
                </div>
                <h5 style={{marginTop: '5%'}}>{`There are ${messages.length} messages/queries.`}</h5>

                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add new admin</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(event) => event.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Email <span style={{color: 'red'}}>*</span></label>
                                <input type="email" className="form-control email" id="recipient-email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">Username <span style={{color: 'red'}}>*</span></label>
                                <input type="text" className="form-control username" id="recipient-username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">Password <span style={{color: 'red'}}>*</span></label>
                                <input type="password" className="form-control password" id="recipient-password" />
                            </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onAdd}>Add admin</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Logout Confirmation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to logout? Once you hit yes you cannot access the messages again.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setAuth(false)}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-bordered table-hover" id="data">
                    
                    <caption>List of messages sent through contact form.</caption>
                    <thead className="thead-dark">
                        <tr>
                        <th style={{width: '3%'}} scope="col">#</th>
                        <th style={{width: '15%'}} scope="col">Email</th>
                        <th style={{width: '15%'}} scope="col">Full Name</th>
                        <th style={{width: '12%'}} scope="col">Mobile Number</th>
                        <th style={{width: '28%'}} scope="col">Message</th>
                        <th style={{width: '2%'}} scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        messages !== undefined ?
                        messages.map((item, index) => {
                            return (
                            <tr key={index+1}>
                                <th scope="row">{index+1}</th>
                                <td>{item.email}</td>
                                <td>{item.fullname}</td>
                                <td>{item.mobile}</td>
                                <td>{item.message}</td>
                                <td><center>{<MdOutlineDeleteOutline size={20} onClick={() => onDelete(item.email,item.message)}/>}</center></td>
                            </tr>
                            );
                        })
                        : null
                        }
                    </tbody>
                </table>
            </div>
        }
        </div>
    );
}

export default Login;