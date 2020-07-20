import { helloSignAccountInfo } from '../services/helloSign/currentAccount';

export const helloSignController = async (req, res) => {
    await helloSignAccountInfo();
}