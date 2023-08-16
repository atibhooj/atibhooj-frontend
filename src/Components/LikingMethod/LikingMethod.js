import { useQuery } from '@tanstack/react-query';

const LikingMethod = () => {
    const { serviceLoading, serviceError, data: serviceData, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('http://test.atibhooj.com/posts').then(
                (res) => res.json(),
            ),
    })
    return { serviceData };
};

export default LikingMethod;