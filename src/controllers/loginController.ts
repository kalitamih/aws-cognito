import { loginCognito } from '../services/cognito/login';

export const loginController = (req, res) => {
    const { email, password } = req.body;    
 
    loginCognito(email, password);  
}