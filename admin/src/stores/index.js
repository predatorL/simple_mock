import common from './common';
import index from './index';
import record from './record';
import trade from './trade';
import user from './user';

let stores = {
    common,
    index,
    record,
    trade,
    user,
}

let targets = {};
Object.entries(stores).map(([field, obj]) => {
    targets[`${field}Store`] = obj;
});

export default targets;


