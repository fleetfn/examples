import {FleetRequest, FleetResponse} from '@fleetfn/types';

export default (req: FleetRequest, res: FleetResponse) => {
    res.send({ message: 'ƒ Fleet TypeScript HTTP Endpoint!' });
};