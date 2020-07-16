import fetch from 'node-fetch';

export default async (req, res) => {
    res.send(await fetch('https://raw.githubusercontent.com/fleetfn/examples/master/list.json').then(res => res.json()));
}