// Test away!

import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'; 

import Display from './Display';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
  })

    it('renders a div with unlocked', () => {
        const {getByText} = render(<Display />)

        getByText(/locked/i)
    })

    it('renders a div with open', () => {
        const {getByText} = render(<Display />)

        getByText(/open/i)
    })

}) 