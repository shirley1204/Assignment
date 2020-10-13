import React, { Component } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  
} from "@material-ui/core";

import { connect } from "react-redux";
import { onSelect } from "../../Redux/Dropdown/DropdownAction";
import { withRouter } from "react-router-dom";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"",
    };
  }

  handleChange = (e) => {
    const { value } = this.state;
    this.setState({
      value: e.target.value,
    });
   

    this.props.onSelect(value);
  };

  render() {
    // const { classes} = this.props;
    // const { value } = this.state;

    return (
      <div className="container mt-5">
        <div className="row">
          <FormControl style={{ width: "150px" }}>
            <Select
              onChange={this.handleChange}
              className=" btn-primary btn-lg btn-block"
              
            >
              {/* <InputLabel >Options</InputLabel> */}
              <MenuItem value="a">FirstBox</MenuItem>
              <MenuItem value="b">SecondBox</MenuItem>
              <MenuItem value="c">ThirdBox</MenuItem>
              <MenuItem value="d">Fourthbox</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //fetching data from AuthReducer
    drop: state.drop,
  };
}

export default connect(mapStateToProps, { onSelect })(withRouter(Dropdown));
