import React, { Component } from 'react';
import RemoveForm from '../Forms/RemoveForm';
import CharacterSubmissionForm from '../Forms/CharacterSubmissionForm'
import GameSubmissionForm from '../Forms/GameSubmissionForm'
import AttackSubmissionForm from '../Forms/AttackSubmissionForm'
import ScenarioSubmissionForm from '../Forms/ScenarioSubmissionForm'
import { ModalButtonHeightSet, ModalButtonClick, OutsideModal, ModalCloseX } from './ModalScripts.js'


export default class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: ""
    };
    this.reportClicked.bind(this);
    this.submissionClicked.bind(this);
  }
  componentDidMount(){

  }
  reportClicked(){
    this.setState({form: "report"});
    document.getElementById('reportButton').style.backgroundColor = "darkgrey";
    document.getElementById('submissionButton').style.backgroundColor = "lightgrey";
  }

  submissionClicked(){
      this.setState({form: "submission"});
      document.getElementById('submissionButton').style.backgroundColor = "darkgrey";
      document.getElementById('reportButton').style.backgroundColor = "lightgrey";
  }

  render () {
    var form = this.state.form;
    return (
      <div id="EditFormModal" onClick={ (e) => OutsideModal(e)}>
        <div id="ModalForm" className="center">
          <div id="ModalClose" onClick={ModalCloseX} >
            <svg className="svg-cross" viewBox="0 0 100 100">
              <line x1="20" x2="80" y1="20" y2="80" strokeWidth="20" strokeLinecap="round"></line>
              <line x1="20" x2="80" y1="80" y2="20" strokeWidth="20" strokeLinecap="round"></line>
            </svg>
          </div>
          <div id="forms">
            <div id="reportButton" className="form">
              <h1 onClick={this.reportClicked.bind(this)}>Remove</h1>
            </div>
            <div id="submissionButton" className="form">
              <h1 onClick={this.submissionClicked.bind(this)}>Submission</h1>
            </div>
          </div>
          <div id="form">
            {
            form == "report" ?
            (<RemoveForm page={this.props.page} game={this.props.game} character={this.props.character}/>) :
            form == "submission" && this.props.page == "characters" ?
            (<CharacterSubmissionForm />):
            form == "submission" && this.props.page == "games" ?
            (<GameSubmissionForm />):
            form == "submission" && this.props.page == "attacks" ?
            (<AttackSubmissionForm />):
            form == "submission" && this.props.page == "scenarios" ?
            (<ScenarioSubmissionForm />):
            null
            }
          </div>
        </div>
      </div>
    );
  }
}