import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


it("should render RestaurantCard component with props data", () => {

    render(
        <BrowserRouter>
            <RestaurantCard resData={MOCK_DATA} />
        </BrowserRouter>
    )

    const name = screen.getByText('Burger King');
    expect(name).toBeInTheDocument()
})
