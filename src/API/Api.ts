import axios from "axios"

export default async function getSearch(search:string, products:any) {
    const { data }: any = await axios.get(`https://dummyjson.com/products/search?q=${search}&limit=12&skip=0`) 
    .catch(error => {console.log('Ошибка: ' + error);
    })
    console.log(data);
    products(data.products)
}
export const getProducts = async(products:any, skip:number, limit:number) => {
    const { data }: any = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .catch(error => {console.log('Ошибка: ' + error);
    })
    products(data.products);
    
}
export const sortByName = async(sortBy:string, products:any, asc:string) => {
    const { data }: any = await axios.get(`https://dummyjson.com/products?sortBy=${sortBy}&order=${asc}&limit=12`)
    .catch(error => {console.log('Ошибка: ' + error);
    })  
    products(data.products)           
    console.log(data);
    

}

export const getById = async(id:number, singleId:any) => {
    const { data }: any = await axios.get(`https://dummyjson.com/products/${id}`)
    .catch(error => {console.log('Ошибка: ' + error);
    })
    console.log(data)  
    singleId(data)               

}


