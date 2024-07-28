import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should render body component with search button and Search for KFC", async () => {

    // fails as fetch is part of browser and jest does not understand fetch, we need mock function for fetch
    //  When testing, code that causes React state updates should be wrapped into act(...):
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

    const cardsBeforeSearch = screen.getAllByTestId("restaurantCard");
    expect(cardsBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole("button",{ name: "Search"} )
    // const searchInput = screen.getByRole("textbox");
    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, { target: { value: "KFC"} })
    fireEvent.click(searchBtn);

    // screen should load 4 cards now
    const cardsAfterSearch = screen.getAllByTestId("restaurantCard")
    expect(cardsAfterSearch.length).toBe(1);

    expect(searchInput).toBeInTheDocument();

})