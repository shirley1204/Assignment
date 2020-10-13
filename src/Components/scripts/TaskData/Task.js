import React, { Component } from "react";
import axios from "axios";
import Headernav from "../../Reuseable/Headernav";

import {
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  TextField,
  Backdrop,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalContainer: {
    padding: 15,
    width: "50%",
    backgroundColor: "white",
  },
  AddResourceText: {
    textAlign: "center",
  },
});

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: false,
      open: false,

      title: "",
      completed: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        this.setState({
          todos: res.data.splice(0, 5),
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
        console.log(err);
      });
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeCheckbox = (e) =>{
    const{completed} = this.state;
    this.setState({
      completed:!completed
    })
  }

  _onSubmit = () => {
    const { title, completed} = this.state;
    // let id = this.state.todos.length + 1;
    // console.log(this.state.todos.length);
    let newid = this.state.todos.length + 1;
    // console.log(newid);
    this.setState({
      // ...this.state.todos,
      todos: [
        ...this.state.todos,
        {
          title: title,
          id: newid,
          completed:completed
        },
      ],
    });
    this.setState({ open: false });
  };
   _onDelete = (id) => {
    console.log(id);
    const filterlist = this.state.todos.filter(item => item.id !== id);
   this.setState({todos: filterlist});
     };
   

  render() {
    const { loading, data } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Headernav />
        {loading ? (
          <Typography variant="h2" className="mt-5">
            Loading
          </Typography>
        ) : (
          <div className="container mt-5">
            {data === null ? null : (
              <React.Fragment>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Completed Status</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.todos.map((todo) => (
                        <TableRow key={todo.id}>
                          <TableCell component="th" scope="row">
                            {todo.id}
                          </TableCell>
                          <TableCell align="center">{todo.title}</TableCell>
                          <TableCell align="center">
                            {todo.completed.toString()}
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              onClick={this._onDelete.bind(this, todo.id)}
                              variant="contained"
                              color="secondary"
                            >
                              Delete
                            </Button>
                          </TableCell>
                          <br />
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </React.Fragment>
            )}
            <br />
            <br />
            <Button
              className="mt -5"
              variant="contained"
              color="primary"
              onClick={this.handleOpen}
            >
              Add Task
            </Button>
            <div>
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={this.state.open}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <div className={classes.modalContainer}>
                  <Typography variant="h4" className={classes.AddResourceText}>
                    ADD Task
                  </Typography>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <TextField
                          id="standard-basic"
                          label="Task Title"
                          color="primaryText"
                          type="text"
                          name="title"
                          value={this.state.title}
                          onChange={this._onHandleChange}
                          style={{ marginRight: "5%" }}
                        />
                        <br />
                        <div className="row mt-4">
                        <span>
                          <label>Completed Status : 
                            <input className="ml-3"
                              type="checkbox"
                              value={this.state.completed}
                              defaultChecked={this.state.completed}
                            onChange={this.handleChangeCheckbox}
                            />
                            {this.props.text}
                          </label>
                        </span>
                        </div>

                        <div className="row mt-3">
                          <div className="col-md-4"></div>
                          <div className="col-md-4">
                            <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              style={{ alignSelf: "center" }}
                              onClick={this._onSubmit}
                            >
                              Submit
                            </Button>
                          </div>
                          <div className="col-md-4"></div>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Task);
