import React from "react";
import {render ,screen, cleanup} from '@testing-library/react';
import SideBar from "../components/SideBar"
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
    cleanup();
})


it('render should be perfectly', () => {
    render(<SideBar/>)
})



it('should render SideBar Component', () => {
    render(<SideBar />);
    const SideBarElement = screen.getByTestId('Sidebar_1');
    expect(SideBarElement).toHaveTextContent('Cryptocurrency By Market Cap');

})