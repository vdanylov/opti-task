import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { getStories } from '../redux/actions/storiesActions'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<App />', () => {
  expect.addSnapshotSerializer({
    test: val => val.by && val.score && val.title,
    print: val => `4{val.by}  4{val.score}  4{val.title}`
  })
  it('Reqest data match test', () => {
    expect(getStories()).toMatchSnapshot();
  })
})