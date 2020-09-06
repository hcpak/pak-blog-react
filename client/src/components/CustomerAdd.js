import React from 'react';
import {post } from 'axios';

class CustomerAdd extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: null,
            userName: '',
            gender: '',
            birthday: '',
            job: '',
            fileName: ''
        }
    }
    handleFormSubmit = (e) =>{
        e.preventDefault() // 데이터가 서버로 전달하는데 오류가 발생하지 않도록 한다.
        this.addCustomer()
            .then((response) =>{
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
    }
    handleFileChange = (e) =>{
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }
    handleValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    addCustomer = () =>{
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type': 'multipart/form-data' // 전달하는 데이터에 파일이 추가되어 있으면 설정해야함.
            }
        }
        return post(url, formData,config);
    }
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>add customer</h1>
                profile image: <input type="file" name ="file" file={this.state.file} value = {this.state.fileName} onChange = {this.handleFileChange}/><br/>
                name: <input type="text" name = "userName" value ={this.state.userName} onChange={this.handleValueChange} /> <br/>
                birthday: <input type = "text" name="birthday"  value = {this.state.birthday} onChange = {this.handleValueChange}/><br/>
                gender: <input type="text" name = "gender" value = {this.state.gender} onChange = {this.handleValueChange} /><br/>
                job: <input type="text" name = "job" value = {this.state.job} onChange = {this.handleValueChange} /><br/>
                <button type = "submiot">add</button>
            </form>
        )
    }
}

export default CustomerAdd;