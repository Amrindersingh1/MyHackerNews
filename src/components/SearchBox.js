import React from "react";
import TextField from "@material-ui/core/TextField";


export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  handleSubmit(e) {
    this.props.onSubmit(e);
  }

  render() {
    return (
      <form id="searchBox" noValidate autoComplete="off" onSubmit = {this.handleSubmit}>
        <TextField
          value={this.props.value}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={this.handleChange}
          
        />
      </form>
    );
  }
}
