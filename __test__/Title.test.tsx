import { render } from "@testing-library/react-native";

import Title from "@/src/components/Title";
import React from "react";

describe("<Title />", () => {
  it("Renderiza el titulo de la pagina", () => {
    const customTitle = "Github Users";

    const { getByText } = render(<Title title={customTitle} />);

    const renderedText = getByText(customTitle);

    expect(renderedText).toBeTruthy();
  });
});
