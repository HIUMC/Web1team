export const useSessionStorage = (key: string) => {
    const setItem = (value: unknown) => {
        try {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error)
        }
    };

    const getItem = () => {
        try {
            const item = window.sessionStorage.getItem(key);

            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.log(e);
        }
    };

    const removeItem = () => {
        try {
            window.sessionStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    };

    return {setItem, getItem, removeItem};
};