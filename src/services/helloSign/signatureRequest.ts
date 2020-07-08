import { helloSign } from "./initialize";
import path from "path";

const options = {
    test_mode : 1,
    title : 'Kalita Mikhail',
    subject : 'The NDA we talked about',
    message : 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
    signers : [
        {
        email_address : 'kalita2007@yandex.ru',
        name : 'Mikhail Kalita',
        order : 0,
        },
        {
        email_address : 'm.kalita@webspace.by',
        name : 'Kalita Mikhail',
        order : 1,
        }
    ],
    cc_email_addresses : ['mkalita1991@gmail.com'],
    files : [path.join(__dirname, "/autobyography.rtf")],
    metadata : {
        clientId : '1234',
        custom_text : 'NDA #9'
    }
};

export const signatureRequest = async () => {
    const result = await helloSign.signatureRequest.send(options);
    console.log(result);
};
