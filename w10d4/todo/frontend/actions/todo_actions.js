export const RECIEVE_TODO = "RECIEVE_TODO"

export const receiveTodo = (todo) => {
    return {
        type: RECIEVE_TODO,
        title, // title: title
        body, // body: body
        done: false
    }
}
