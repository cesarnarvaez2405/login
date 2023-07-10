const API = import.meta.env.VITE_BACKEND_API;

export const get = (path) => {

    return (

        fetch(API + path).then(result => result.json())
        .catch(err => console.error(err))
    )

}