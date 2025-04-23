export const useMenu = () => {
    const isOpen = useState('menuIsOpen', () => false)

    return {
        isOpen,
    }
}