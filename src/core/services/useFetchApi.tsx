import { useState } from "react";

const useFetchHook = (data: {name: string | null, cellphone: string | null, school: string | null }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const sendDataToApi = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await fetch('https://guide-api.openlablatam.com/public/api/contact-academia', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Error al enviar los datos');
        }
        setError(null);
        setIsSuccess(true);
      } catch (error) {
        setError('Error al enviar los datos');
      } finally {
        setIsLoading(false);
      }
    };

    return { isLoading, error, isSuccess, sendDataToApi };
  };

  export default useFetchHook;