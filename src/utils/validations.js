class Validations {

    empty(...args){
        for (let arg of args){
            if (arg?.length === 0 || arg === "") return true;
        }
        return false;
    }

    email(email){
        return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    greaterThan80(text){
        return text.length > 80;
    }

    greaterThan50(text){
        return text.length > 50;
    }

    isNumber(text){
        return typeof Number(text) === "number" && Number(text) > 0;
    }

    isLink(text){
        return /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi.test(text)
    }
}

const validations = new Validations();
export default validations;