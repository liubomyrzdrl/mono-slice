import {
  fetchUsersActionStart,
  fetchUsersActionSuccess,
  fetchUsersActionFailed,
} from "./usersActions";
import { usersApi } from "../../api";

export function fetchUsersOperation() {
  return async function fetchUsersOperationThunk(dispatch) {
    try {
      dispatch(fetchUsersActionStart());
      const result = await usersApi.getUsers();
      dispatch(fetchUsersActionSuccess(result.data));
    } catch (error) {
      dispatch(fetchUsersActionFailed(error));
    }
  };
}
