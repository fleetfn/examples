export default (req, res) => {
    // The environment variables are exposed via process.env.
    // process.env.EMAIL_API_KEY

    res.send({ message: 'ƒ Fleet Env Variables!' });
};