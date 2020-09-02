import React from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'pak',
    'birthday': '950703',
    'gender': 'male',
    'job': 'student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'hyung',
    'birthday': '950703',
    'gender': 'male',
    'job': 'programmer'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'chul',
    'birthday': '950703',
    'gender': 'male',
    'job': 'student'
  },
]

function App(props) { // component가 재사용률이 매우 낮아지고, hook란 것이 생겨서 이제 function 형태로 해도 state 함수를 쓸 수 있다.
  const {classes} = props;
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
          {customers.map(c =>{ return (<Customer key ={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender = {c.gender} job = {c.job} />) })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
