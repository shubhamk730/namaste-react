import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should load Header component with login button", () => {

    // provide router as we use Link and store as we use redux
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    );

    // if there are multiple button, get a single button with name as property
    const loginBtn = screen.getByRole("button", { name: 'Login'});
    expect(loginBtn).toBeInTheDocument();
})

it("Should load Header component with 0 cart items", () => {

    // provide router as we use Link and store as we use redux
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    );

    // if there are multiple button, get a single button with name as property
    // const cartItems = screen.getByText('Cart - (0 items)')

    //writing regex
    const cartItems = screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument();
})

it("Should Change Login btn to Logout on click", () => {

    // provide router as we use Link and store as we use redux
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    );

    //writing regex
    const loginBtn = screen.getByRole("button", { name: 'Login'});
    fireEvent.click(loginBtn);

    
    const logoutBtn = screen.getByRole("button", { name: 'Logout'});
    expect(logoutBtn).toBeInTheDocument();
})