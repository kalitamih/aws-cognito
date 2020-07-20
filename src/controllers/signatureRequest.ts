import { signatureRequest } from '../services/helloSign/signatureRequest';

export const signatureRequestController = async (req, res) => {
    signatureRequest();
}