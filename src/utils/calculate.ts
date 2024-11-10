export const calculateBiggestTextWidth = (textList: string[]) => {
    const container = document.createElement('div');

    container.style.visibility = 'hidden';
    container.style.position = 'absolute';
    container.style.width = 'auto';
    container.style.whiteSpace = 'nowrap';
    container.style.display = 'block';

    textList.forEach((text) => {
        const element = document.createElement('div');

        element.innerText = text;

        container.appendChild(element);
    });

    document.body.appendChild(container);

    const width = container.offsetWidth;

    document.body.removeChild(container);

    return width;
};
