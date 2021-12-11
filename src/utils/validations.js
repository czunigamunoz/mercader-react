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
}

const validations = new Validations();
export default validations;