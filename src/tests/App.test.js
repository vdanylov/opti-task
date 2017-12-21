import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from '../components/App';
import { getStories } from '../redux/actions/storiesActions'
import StoriesContainer from '../components/StoriesContainer'
import StoryInfoComponent from '../components/StoryInfoComponent'
import store from '../redux/store/store'

const story = {
  by: 'jaytaylor',
  descendants: 44,
  id: 15955711,
  kids: [
    15955952,
    15955803,
    15955887,
    15956333,
    15956160,
    15955939,
    15956471,
    15956206,
    15956324,
    15956350,
    15955771
  ],
  score: 144,
  time: 1513632819,
  title: 'Older Adults\' Forgetfulness Tied to Faulty Brain Rhythms in Sleep',
  type: 'story',
  url: 'http://npr.org/sections/health-shots/2017/12/18/571120472/older-adults-forgetfulness-tied-to-faulty-brain-rhythms-in-sleep'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<App />', () => {
  expect.addSnapshotSerializer({
    test: val => val.by && val.score && val.title,
    print: val => `${val.by}  ${val.score}  ${val.title}`
  })

  it('Request data match test', () => {
    expect(getStories()).toMatchSnapshot();
  })

  it('Renders StoriesContainer', () => {
    const component = renderer.create(
      <StoriesContainer store={store} />
    )
    expect(component).toMatchSnapshot();
  })

  it('Renders StoriesContainer', () => {
    const component = renderer.create(
      <StoriesContainer store={store} />
    )
    expect(component).toMatchSnapshot();
  })

  it('Renders StoryInfoComponent', () => {
    const component = renderer.create(
      <StoryInfoComponent story={story} closeShowInfo={() => {}} />
    )
    expect(component).toMatchSnapshot();
  })
})

