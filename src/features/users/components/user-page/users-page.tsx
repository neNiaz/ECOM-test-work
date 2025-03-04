import { useEffect, useState, useCallback } from "react";
import { UserListItem } from "../user-list-item";
import { useFetch } from "shared/hooks/useFetch";
import { IUser } from "features/users/models/User";
import { USERS_API_URL } from "features/users/constants/constants.ts";

interface IUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}

export const UsersPage: React.FC = () => {
  const { data, loading, error } = useFetch<IUsersResponse>(`${USERS_API_URL}`);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (data && data.data) {
      setUsers(data.data);
    }
  }, [data]);

  const handleDelete = useCallback((id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </ul>
  );
};
