'use client'

import { create } from 'zustand'

export const useSearchStore = create((set) => ({
  isOpen: false,
  query: '',
  openSearch: () => set({ isOpen: true, query: '' }),
  closeSearch: () => set({ isOpen: false, query: '' }),
  setQuery: (query) => set({ query }),
  toggleSearch: () => set((state) => ({ isOpen: !state.isOpen })),
}))
