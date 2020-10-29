"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRoom = exports.joinUser = void 0;
const accounts = [];
exports.joinUser = (name, room, pass) => {
    accounts.forEach(item => {
        if (item.room === room && item.pass === pass) {
            item.users.push(name);
            return accounts;
        }
        else {
            return false;
        }
    });
    // tslint:disable-next-line:no-console
    console.log(accounts);
};
exports.makeRoom = (room, pass, id) => {
    const users = [];
    if (accounts.length !== 0) {
        accounts.forEach(item => {
            if (item.room !== room) {
                // tslint:disable-next-line:no-console
                console.log(room);
                const newRoom = { room, pass, id, users };
                accounts.push(newRoom);
                return true;
            }
            else {
                return false;
            }
        });
    }
    else {
        const newRoom = { room, pass, id, users };
        accounts.push(newRoom);
        return true;
    }
    // tslint:disable-next-line:no-console
    console.log(accounts);
};
//# sourceMappingURL=user.js.map