import { AxiosError } from "axios";

export class ErrorHandler {
  static handleError(error: unknown): string {
    if (error instanceof AxiosError) {
      if (error.code === AxiosError.ERR_BAD_REQUEST) {
        console.log(error.code);
        return `Error: No se ha podido establecer comunicación, intente en unos minutos`;
      }

      return `Error: Error de conexión`;
    }
    if (error instanceof Error) {
      // Errores estándar de JavaScript
      return `Error: ${error.message}`;
    } else if (typeof error === "string") {
      // Errores en formato de string
      return `Error: ${error}`;
    } else if (typeof error === "object" && error !== null) {
      // Errores personalizados con un objeto genérico
      return `Error desconocido: ${JSON.stringify(error)}`;
    }
    return "Ha ocurrido un error inesperado.";
  }
}
