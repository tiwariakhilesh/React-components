import React, { Component } from "react";

class Table extends Component {
  state = {
    Items: [
      { rollno: 1, class: 1, totalMarks: 400 },
      { rollno: 1, class: 1, totalMarks: 400 },
      { rollno: 1, class: 1, totalMarks: 400 },
      { rollno: 1, class: 1, totalMarks: 400 },
      { rollno: 1, class: 1, totalMarks: 400 }
    ]
  };

  th = headings => {
    var head = Object.keys(headings).map((elm, i) => {
      return <th key={i}>{elm}</th>;
    });
    head.unshift(<th>Select</th>);
    return head;
  };
  radioButton = id => {
    return <input type="radio" id={`radio_${id}`} />;
  };
  render() {
    let tdElement = el => {
      return Object.keys(el).map((elm, i) => {
        return <td key={i}>{el[elm]}</td>;
      });
    };
    let container = this.state.Items.map((el, i) => {
      let radio = this.radioButton(i);
      return (
        <tr key={i}>
          <td>{radio}</td>
          {tdElement(el)}
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{this.th(this.state.Items[0])}</tr>
        </thead>
        <tbody>{container}</tbody>
      </table>
    );
  }
}
export default Table;
