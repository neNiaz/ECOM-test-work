import { memo, useCallback } from "react";
import { IUser } from "features/users/models/User";
import styles from "./user-list-item.module.css";

interface IUserListItemProps {
  user: IUser;
  onDelete: (id: number) => void;
}

const UserListItemComponent: React.FC<IUserListItemProps> = ({
  user,
  onDelete,
}) => {
  const handleDelete = useCallback(() => {
    onDelete(user.id);
  }, [onDelete, user.id]);

  return (
    <li className={styles["user-list-item"]}>
      {user.avatar && (
        <img
          className={styles["user-list-item__avatar"]}
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          width={50}
          height={50}
        />
      )}
      <span className={styles["user-list-item__name"]}>
        {user.first_name} {user.last_name}
      </span>
      <button
        className={styles["user-list-item__delete-button"]}
        onClick={handleDelete}
      >
        Удалить
      </button>
    </li>
  );
};

export const UserListItem = memo(UserListItemComponent);
