import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/resMenuMock.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})



test("Should load restaurant menu compnent", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    const accordionHeader = screen.getByText("Recommended(20)");

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(20);

    const addBtns = screen.getAllByRole("button", { name: "Add +"})

    fireEvent.click(addBtns[0]);

    const cartItemsCount = screen.getByText("Cart - (1 items)")
    expect(cartItemsCount).toBeInTheDocument();

    const cartItems = screen.getAllByTestId("cartItem");
    console.log(cartItems.length);

})  