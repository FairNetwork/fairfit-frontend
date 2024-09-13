export const getGymFromRoute = (route: string) => {
    const startIndex = route.indexOf('/') + 1;
    const endIndex = route.indexOf('/', startIndex);

    if (endIndex === -1) {
        return route.substring(startIndex).toLowerCase();
    } else {
        return route.substring(startIndex, endIndex).toLowerCase();
    }
};

export const getOfferId = (search: string) => {
    const startIndex = search.indexOf('id=') + 3;
    const endIndex = search.indexOf('&', startIndex);

    if (endIndex === -1) {
        return search.substring(startIndex).toLowerCase();
    } else {
        return search.substring(startIndex, endIndex).toLowerCase();
    }
};

export const getGymId = () => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]); // Nimmt den Teil der URL nach dem "?"
    const gymId = urlParams.get('gymId');

    return gymId ?? 'fairfit';
};

export const getPathFromUrl = () => {
    const parsedUrl = new URL(window.location.href);

    const pathMatch = parsedUrl.pathname.match(/\/utility\/([^/?#]+)/);

    return pathMatch ? pathMatch[1] : 'impressum';
};
