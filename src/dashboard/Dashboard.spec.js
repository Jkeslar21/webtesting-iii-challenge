// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    })

    it('when closed gate clicked, (Display: open) becomes (Display: closed), "closed gate" btn becomes open gate btn {lock Gate btn becomes enabled}', () => {
        const { getByText } = render(<Dashboard />);
        const btn = getByText(/close gate/i);
        fireEvent.click(btn);
        getByText(/closed/i);
        getByText(/open gate/i);
        
    })

    it('when "open gate" is clicked immediately following a click of "close gate" (Display: closed) => (Display: open) ', () => {
        const { getByText } = render(<Dashboard />);
        const btn = getByText(/close gate/i);
        fireEvent.click(btn);
        const btn2 = getByText(/open gate/i);
        fireEvent.click(btn2);
        getByText(/open/i);
        
    })

    it('After "close gate" button is clicked, when lock gate clicked, (Display: Unlocked) becomes (Display: locked), "lock gate" btn becomes "unlock gate" btn {open gate becomes disabled}', () => {
        const { getByText } = render(<Dashboard />);
        const btn = getByText(/close gate/i);
        const btn2 = getByText(/lock gate/i)
        fireEvent.click(btn);
        fireEvent.click(btn2)
        getByText(/locked/i);
        getByText(/unlock gate/i);
        
    })

    it('After closing the gate and locking the door...when you click "unlock gate" the (Display: locked) => Display: Unlocked) and btn "unlock gate" => btn "lock gate" ', () => {
        const { getByText } = render(<Dashboard />);
        const btn = getByText(/close gate/i);
        const btn2 = getByText(/lock gate/i)
        fireEvent.click(btn);
        fireEvent.click(btn2)
        const btn3 = getByText(/unlock gate/i)
        fireEvent.click(btn3)
        getByText(/unlocked/i)
        getByText(/lock gate/i)
        
    })

})