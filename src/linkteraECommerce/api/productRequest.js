import { baseService } from "./baseService"

export const productRequest = {
    getAllProducts: async () => {

        //Tüm ürünleri çekmeden önce servisle alakalı yapacağım özel işlemler olabilir.
        //Hataları loglamak

        try {
            let data =  await baseService.getAll('/products')
            return data;

        } catch (error) {
            console.log('/api/products error');
        }


    }
}