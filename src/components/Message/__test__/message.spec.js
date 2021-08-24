import { render, screen } from "@testing-library/react";
import { Message } from "../message";


describe("Message", () => {
    it("matches snapshot", () => {
        const msg = render(<Message />);

        expect(msg).toMatchSnapshot();
    });
});