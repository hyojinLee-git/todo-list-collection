import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("처음 렌더링되면 Tasks라는 제목이 나온다.", () => {
    render(<App />);

    const element = screen.getByText("Tasks");
    expect(element).toBeInTheDocument();
});
