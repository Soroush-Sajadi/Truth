interface Room {
    room: string
    pass: string
    users: string[]
}

const accounts:Room[] = [];

export const joinUser = (name: string, room: string, pass: string) => {
    accounts.forEach(item => {
        if (item.room === room && item.pass === pass) {
            item.users.push(name);
            return {added: true}
        } else {
            return {error: false}
        }
    })
}

export const makeRoom = (room: string, pass: string) => {
    const users:string[] = []
    accounts.forEach(item => {
        if(item.room !== room) {
            const newRoom = {room: room, pass: pass, users: users}
            accounts.push(newRoom);
            return {added: true};
        } else {
            return {error: false}
        }
    })
}