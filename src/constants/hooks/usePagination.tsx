import { useState, useEffect } from "react";
import { ErrorHandler } from "@/src/utils/errorHandler";

interface UsePaginationResult<T> {
  data: T[]; // Los datos paginados
  isLoading: boolean; // Indicador de carga
  error: string | null; // Mensaje de error (si ocurre)
  currentPage: number; // Página actual
  //totalPages: number; // Total de páginas (si es conocido)
  goToPage: (page: number) => void; // Cambiar a una página específica
  nextPage: () => void; // Ir a la siguiente página
  prevPage: () => void; // Ir a la página anterior
  loadingMore: boolean;
}

interface UsePaginationOptions<T> {
  name?: string;
  initialPage?: number; // Página inicial (default: 1)
  fetcher: (name: string, page: number) => Promise<{ data: T[] }>; // Función de carga de datos
}

export function usePagination<T>({
  name = "",
  initialPage = 1,
  fetcher,
}: UsePaginationOptions<T>): UsePaginationResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const loadPage = async (page: number) => {
    if (page === 1) {
      setIsLoading(true);
    } else {
      setLoadingMore(true);
    }
    // setIsLoading(true);

    setError(null);
    try {
      const response = await fetcher(name, page);

      if (page === 1) {
        setIsLoading(false);
        setData([...response.data]);
        return;
      } else {
        const [firstItem] = response.data;
        if (data.findIndex((item) => item?.id === firstItem?.id) !== -1) {
          return;
        }
        setLoadingMore(false);
        setData([...data, ...response.data]);
      }
    } catch (err) {
      const errorMessage = ErrorHandler.handleError(err);
      setError(errorMessage);
      setData([]);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setLoadingMore(false);
    }
  };

  const goToPage = (page: number) => {
    if (page > 0) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  useEffect(() => {
    if (!name.length) {
      setData([]);
      setError(null);
      return;
    }
    loadPage(currentPage);
  }, [currentPage, name]);

  return {
    data,
    isLoading,
    loadingMore,
    error,
    currentPage,
    goToPage,
    nextPage,
    prevPage,
  };
}
