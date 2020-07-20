import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { UserPool } from "./userPool";

export const loginCognito = (email, password) => {

    const user = new CognitoUser({
        Username: email,
        Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    });

    user.authenticateUser(authDetails, {
        onSuccess: data => {
       
        },

        onFailure: err => {
        
        },
        
        newPasswordRequired: data => {
          
        }
    });
}