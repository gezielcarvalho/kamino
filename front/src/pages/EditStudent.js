import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class EditStudent extends Component {

    state = {
        id: '',
        name: '',
        course: '',
        email: '',
        phone: '',
    }

    async componentDidMount() {

        const studentId = this.props.match.params.id;
        const res = await axios.get(`http://localhost:8000/api/edit-student/${studentId}`);
        if (res.status === 200) {
            this.setState({...res.data.student});
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateStudent = async (e) => {
        e.preventDefault();
        const studentId = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-student/${studentId}`, this.state);
        console.log(res.data.message);

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>
                                    Edit Students
                                    <Link to={'/'} className='btn btn-primary btn-sm float-end'>Back</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.updateStudent}>
                                    <div className='form-group mb-3'>
                                        <label>Name</label>
                                        <input type="text" name="name" value={this.state.name} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Course</label>
                                        <input type="text" name="course" value={this.state.course} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Email</label>
                                        <input type="text" name="email" value={this.state.email} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Phone</label>
                                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className='form-group mb-3'>

                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditStudent);