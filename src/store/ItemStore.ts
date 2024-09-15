import { create } from "zustand";


interface IItemStore{
    limit:number
    id:number
    currentPage:number
    offset:number
    setId: (title:number) => void
    setCurrentPage:(title:number) => void
    setOffset:(title:number) => void
}


export const useStr = create<IItemStore>((set:any, get:any) => ({
    limit: 12,
    offset: 0,
    currentPage: 1,
    id:0,
    setId: (title) => set({id:title}),
    setCurrentPage: (title) => set({currentPage:title}),
    setOffset: (title) => set({offset:title}),
}))