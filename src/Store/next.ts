import {create} from 'zustand'


type Next ={
    quest: number
    setQuest : (newQuest: number) => void
}

export const useNextStore = create<Next>((set)=>({
    quest: 0,
    setQuest: (newQuest) => set({quest:newQuest})
}))