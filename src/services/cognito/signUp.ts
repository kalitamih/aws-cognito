import { UserPool } from "./userPool";
import { logger } from "../../utils/logger";

export const signUp = (email, password) => {
    UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) console.error(err);
        logger.info(data);
    });
}

