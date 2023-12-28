import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function useApi({url} : {url: string}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(false);
        (async () => {
            try {
                setLoading(false);

                if(!url) {
                    setError("Please provide valid url!")
                    return ;
                }

                const {data} = await axios.get(url);

                if(!data) {
                    setData([])
                    setError("No Data available!");
                    return
                }

                setData(data);
                setError('');
                
            } catch (error ) {

                const data = error as AxiosError;
                setError(data.message)
            } finally {
                setLoading(false);
            }
            

        })()

    }, [url])

    
  return {loading, error, data}
}
