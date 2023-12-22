
import { useQuery } from '@tanstack/react-query';
import useAxiosSecret from './useAxiosSecure';
const useTask = () => {
    const axiosSecure = useAxiosSecret();
    const { data: allTask = [], isPending: taskLoading, refetch: taskRefetch } = useQuery({
        queryKey: ['allTask'],
        queryFn: async () => {
            const res = await axiosSecure.get('/task');
            return res.data;
        }
    })

    return [allTask, taskLoading, taskRefetch]
};

export default useTask;

