import React, {useCallback} from 'react';

const UseListing = () => {
    const [data, setData] = React.useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('https://house-lydiahallie.vercel.app/api/listings');
            const result = await response.json();
            if (!result) return;
            setData(result?.listings);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    React.useEffect(() => {
        fetchData()
    }, [fetchData]);

    return {
        data
    };
};

export default UseListing;