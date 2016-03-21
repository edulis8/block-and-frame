import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import CreateEventContainer from '../../app/containers/CreateEventContainer';

describe('Create Event View: Create Event Spec', () => {
  before('render element to DOM', function () {
    this.component = TestUtils.renderIntoDocument(
      <CreateEventContainer />
    );

    window.localStorage.setItem('id', 1);
  });

  beforeEach('reset state', function () {
    this.component.setState({
      name: '',
      location: '',
      description: '',
      toBring: [],
    });
  });

  it('should render without problems', function () {
    expect(ReactDOM.findDOMNode(this.component)).to.exist;
  });

  it('should start with an empty state', function () {
    expect(this.component.state.name).to.be.empty;
    expect(this.component.state.location).to.be.empty;
    expect(this.component.state.description).to.be.empty;
    expect(this.component.state.toBring).to.be.empty;
  });

  it('should update state when changing name', function () {
    const nameInput = TestUtils.findRenderedDOMComponentWithClass(this.component, 'name-input');
    TestUtils.Simulate.change(nameInput, { target: { value: '!' } });
    expect(this.component.state.name).to.equal('!');
  });

  it('should update state when changing location', function () {
    const locationInput = TestUtils.findRenderedDOMComponentWithClass(this.component, 'location-input');
    TestUtils.Simulate.change(locationInput, { target: { value: '!' } });
    expect(this.component.state.location).to.equal('!');
  });

  it('should update state when changing description', function () {
    const descriptionInput = TestUtils.findRenderedDOMComponentWithClass(this.component, 'description-input');
    TestUtils.Simulate.change(descriptionInput, { target: { value: '!' } });
    expect(this.component.state.description).to.equal('!');
  });

  it('should update state when clicking to-bring button', function () {
    const toBringButton = TestUtils.findRenderedDOMComponentWithClass(this.component, 'to-bring-button');
    TestUtils.Simulate.click(toBringButton);
    TestUtils.Simulate.click(toBringButton);
    expect(this.component.state.toBring.length).to.equal(2);
  });

  it('should update state when changing to-bring item entry', function () {
    const toBringButton = TestUtils.findRenderedDOMComponentWithClass(this.component, 'to-bring-button');
    TestUtils.Simulate.click(toBringButton);
    const toBringItem = TestUtils.findRenderedDOMComponentWithClass(this.component, 'to-bring-item-0');
    TestUtils.Simulate.change(toBringItem, { target: { value: '!' } });
    expect(this.component.state.toBring[0].item).to.equal('!');
  });

  it('should update state when changing to-bring notes entry', function () {
    const toBringButton = TestUtils.findRenderedDOMComponentWithClass(this.component, 'to-bring-button');
    TestUtils.Simulate.click(toBringButton);
    const toBringNotes = TestUtils.findRenderedDOMComponentWithClass(this.component, 'to-bring-notes-0');
    TestUtils.Simulate.change(toBringNotes, { target: { value: '!' } });
    expect(this.component.state.toBring[0].notes).to.equal('!');
  });

  it('should update state when checkboxing to-bring entry', function () {
    const toBringButton = TestUtils.findRenderedDOMComponentWithClass(this.component, 'to-bring-button');
    TestUtils.Simulate.click(toBringButton);
    const toBringCheckbox = TestUtils.findRenderedDOMComponentWithClass(this.component, 'to-bring-checkbox-0');
    TestUtils.Simulate.change(toBringCheckbox, { target: { checked: true } });
    expect(this.component.state.toBring[0].bringer).to.equal(1);
    TestUtils.Simulate.change(toBringCheckbox, { target: { checked: false } });
    expect(this.component.state.toBring[0].bringer).to.equal(null);
  });
});
