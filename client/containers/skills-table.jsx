import React from 'react';

export default class SkillsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  render() {
    return (
      <div className="skills-table-container">
        <div className="skills-table-column-1">I am column one</div>
        <div className="skills-table-column-2">I am column two</div>
      </div>

    );
  }

}
