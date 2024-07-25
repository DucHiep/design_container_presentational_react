import {create} from "zustand";

export interface ImageStore {
    urlImage: string,
    setUrlImage: (urlImage: string) => void
}

export const useImage = create<ImageStore>((set) => ({
    urlImage: '',
    setUrlImage: (urlImage) => set({ urlImage })
}))