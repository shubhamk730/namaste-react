import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {

    // beforeAll(() => {
    //     console.log("Runs before all test cases");
    // })

    // beforeEach(() => {
    //     console.log("Runs before each test case");
    // })
    // afterEach(() => {
    //     console.log("Runs after each test case");
    // })

    // afterAll(() => {
    //     console.log("Runs after all test case");
    // })

    // test = it, it is alias of test
    // use either "it" or 'test'
    it("should load contact us component", () => {

        // component rendered on jsdom
        render(<Contact />);
    
        //try to check whether the elements(h1, p, input) are rendered or not
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    })
    
    it("should load button in contact us component", () => {
    
        // component rendered on jsdom
        render(<Contact />);
    
        //try to check whether the elements(h1, p, input) are rendered or not
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    
    })
    
    test("should load input name in contact us component", () => {
    
        // component rendered on jsdom
        render(<Contact />);
    
        //try to check whether the elements(h1, p, input) are rendered or not
        // const button = screen.getByRole("button");
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    
    })
    
    test("should load 2 input box in contact us component", () => {
    
        // component rendered on jsdom
        render(<Contact />);
    
        //try to check whether the elements(h1, p, input) are rendered or not
        // const button = screen.getByRole("button");
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
        // console.log(inputBoxes)
    
    })

})

