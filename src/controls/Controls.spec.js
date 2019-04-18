// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'; 

import Controls from './Controls';

describe('<Controls />', () => {
    it.skip('renders without crashing', () => {
        render(<Controls />);
  })
})