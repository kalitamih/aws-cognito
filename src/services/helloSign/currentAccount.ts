import { helloSign } from './initialize';

export const helloSignAccountInfo = async () => {
    const result = await helloSign.account.get();
    console.log(result);
}