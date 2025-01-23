import { fireEvent, render } from "@testing-library/react-native";

import InputSearch from "@/src/components/InputSearch";
import React from "react";

describe("<InputSearch />", () => {
  it("Renderiza el input de búsqueda", () => {
    const placeholder = "Escribe aquí";

    // Renderizamos el componente
    const { getByPlaceholderText } = render(
      <InputSearch placeholder={placeholder} />
    );

    // Verificamos que el placeholder esté presente
    const input = getByPlaceholderText(placeholder);
    expect(input).toBeTruthy();
  });

  it("actualiza el valor cuando el usuario escribe", () => {
    const placeholder = "Escribe aquí";
    const mockOnChangeText = jest.fn();
    const testValue = "Hola, mundo";

    // Renderizamos el componente con un onChangeText simulado
    const { getByPlaceholderText } = render(
      <InputSearch placeholder={placeholder} onChangeText={mockOnChangeText} />
    );

    const input = getByPlaceholderText(placeholder);

    // Simulamos que el usuario escribe en el input
    fireEvent.changeText(input, testValue);

    // Verificamos que se llamó el manejador con el valor correcto
    expect(mockOnChangeText).toHaveBeenCalledWith(testValue);
  });

  it("muestra el valor inicial correctamente", () => {
    const value = "Texto inicial";

    // Renderizamos el componente con un valor inicial
    const { getByDisplayValue } = render(<InputSearch text={value} />);

    // Verificamos que el valor inicial sea renderizado
    const input = getByDisplayValue(value);
    expect(input).toBeTruthy();
  });
});
