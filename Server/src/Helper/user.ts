interface Room {
    room: string
    pass: string
    id: string
    users: string[]
}

const accounts:Room[] = [];

export const joinUser = (name: string, room: string, pass: string): any => {
    accounts.forEach(item => {
        if (item.room === room && item.pass === pass) {
            item.users.push(name);
            return accounts
        } else {
            return  false
        }
    })
        // tslint:disable-next-line:no-console
    console.log(accounts)
}

export const makeRoom = (room: string, pass: string, id: string): any => {
    const users:string[] = []
    if (accounts.length !== 0 ) {
        accounts.forEach(item => {
            if(item.room !== room) {
                // tslint:disable-next-line:no-console
                console.log(room)
                const newRoom = {room, pass, id ,users}
                accounts.push(newRoom);
                return  true;
            } else {
                return false
            }
        })
    } else {
        const newRoom = {room, pass, id ,users}
        accounts.push(newRoom);
        return  true;
    }


// tslint:disable-next-line:no-console
console.log(accounts)
}