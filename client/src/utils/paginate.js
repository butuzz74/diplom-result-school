export function paginate(items, pageNumber, pageSize, setActivePage) {
    if (!items.length) {
        return null;
    } else {
        const arrItems = [...items].splice(
            (pageNumber - 1) * pageSize,
            pageSize
        );
        if (arrItems.length) {
            return arrItems;
        } else {
            setActivePage(pageNumber - 1);
            return arrItems;
        }
    }
}
