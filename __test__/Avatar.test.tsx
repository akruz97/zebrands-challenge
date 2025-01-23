import { render } from "@testing-library/react-native";

import Avatar from "@/src/components/Avatar";
import React from "react";

describe("<Avatar />", () => {
  it("Renderiza la imagen de perfil con la URL enviada", () => {
    const testImageUrl: string =
      "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?cs=srgb&dl=pexels-olly-943084.jpg&fm=jpg";

    const { getByTestId } = render(<Avatar urlImage={testImageUrl} />);

    const image = getByTestId("avatar-user");

    expect(image.props.source).toEqual({ uri: testImageUrl });
  });
});
