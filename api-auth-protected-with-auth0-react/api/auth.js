import jwt from 'jsonwebtoken';

// Environment in fleet.json
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const AUTH0_CLIENT_PUBLIC_KEY = process.env.AUTH0_CLIENT_PUBLIC_KEY;

const isAuth = req => {
    const authorization = req.headers.authorization;

    if (!authorization || authorization.split(' ')[0] !== 'Bearer') {
        return false;
    } else {
        const token = authorization.split(' ')[1];

        const options = {
            audience: AUTH0_CLIENT_ID,
        };

        try {
            jwt.verify(token, AUTH0_CLIENT_PUBLIC_KEY, options);

            return true;
        } catch (_error) {
            return false;
        }
    }
}

export default (req, res) => {
    res
        .setHeader('Access-Control-Allow-Origin', '*')
        .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
        .setHeader('Access-Control-Allow-Headers', 'Authorization')
        .setHeader('Access-Control-Allow-Credentials', true)

    switch (req.method) {
        case 'POST': {
            if (isAuth(req)) {
                res.send({ message: 'ƒ Fleet API Protected + Auth0' });
            } else {
                res
                    .status(401)
                    .send('Unauthorized');
            }

            break;
        }
        default:
            res.send('');
            break;
    }
};