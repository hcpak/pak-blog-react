import React, { Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2 
  }
});

class App extends Component{ // component가 재사용률이 매우 낮아지고, hook란 것이 생겨서 이제 function 형태로 해도 state 함수를 쓸 수 있다.
  state = {
    customers: "",
    completed: 0
  }
  componentDidMount(){
    this.timer = setInterval(this.progress,20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err))
  }

  callApi = async () =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed} = this.state;
    this.setState({
      completed: completed >= 100 ? 0 : completed +1
    });
  }
  render(){
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>number</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c =>{
               return (<Customer key ={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender = {c.gender} job = {c.job} />) 
              }) : 
              <TableRow>
                <TableCell colspan="6" align ="center">
                  <CircularProgress className ={classes.progress} variant = "determinate" value ={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
