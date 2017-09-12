import React from 'react';
import StepListItem from './step_list_item';
import StepListItemContainer from './step_list_item_container';

export default class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const stepListItems = this.props.steps.map(step => (
      <StepListItem key={step.id} step={step} />
    ));
    return (
      <div>
        <ul>
          {stepListItems}
        </ul>
      </div>
    );
  }
}
