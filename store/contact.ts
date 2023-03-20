
///@ts-ignore
import { Module, ModuleAccessor } from 'vuex-module-accessor';
///@ts-ignore
import axios from 'axios'
// api



///@ts-ignore

///@ts-ignore
class ContactState {

}
///@ts-ignore
export class ContactModule extends Module<ContactState> {
    constructor() {
        super(ContactState);
    }


    ///@ts-ignore
    async fetchData() {
        const httpResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(httpResponse.data)
        return httpResponse.data

    }
    ///@ts-ignore

}
///@ts-ignore
export default new ModuleAccessor(new ContactModule(), 'contact/');