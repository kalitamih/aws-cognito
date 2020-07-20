import { UserPoolId, ClientId } from "../../constants";
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId,
    ClientId
};
  
export const UserPool = new CognitoUserPool(poolData);