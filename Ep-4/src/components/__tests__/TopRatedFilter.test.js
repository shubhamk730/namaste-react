import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockRestaurantListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("Shoulder render top rated restaurants on click of button", async () => {

    // render the body component, using act 
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

    const restaurantCardsBeforeFilter = screen.getAllByTestId("restaurantCard");
    expect(restaurantCardsBeforeFilter.length).toBe(8);

    const filterBtn = screen.getByRole("button", { name: "Top Rated Restaurants" })
    fireEvent.click(filterBtn);

    const restaurantCardsAfterFilter = screen.getAllByTestId("restaurantCard");
    expect(restaurantCardsAfterFilter.length).toBeLessThanOrEqual(8);


})
