import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const USER_ENDPOINT = 'https://randomuser.me/api/?results=20';

function userRequest() {
  return axios.get(USER_ENDPOINT).then((results) => results.data.results);
}

const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: userRequest,
    staleTime: 2000,
    // refetchInterval: 3000,
  });

export default useUsers;
