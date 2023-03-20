
///@ts-ignore
import { Module, ModuleAccessor } from 'vuex-module-accessor';
///@ts-ignore
import axios from 'axios'
// api



///@ts-ignore

///@ts-ignore
class NewsState {

}
///@ts-ignore
export class NewsModule extends Module<NewsState> {
    constructor() {
        super(NewsState);
    }


    ///@ts-ignore
    async getWords() {
        const httpResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(httpResponse.data)
        return httpResponse.data

    }
    ///@ts-ignore

}
///@ts-ignore
export default new ModuleAccessor(new NewsModule(), 'news/');