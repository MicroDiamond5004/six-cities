import { AuthorizationStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getAuthCheckStatus = (state: State) => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;