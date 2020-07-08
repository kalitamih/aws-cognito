import { signUp } from '../services/cognito/signUp';

export const registerController = (req, res) => {
  const { email, password, confirmedPassword } = req.body;  

  if (password !== confirmedPassword) {
    throw new Error('passwords do not match');
  }

  signUp(email, password);  
}