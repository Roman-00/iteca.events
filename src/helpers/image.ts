/**
 * Хелпер который помогает получить доступ к изображению
 *
 * @param {string} id - id cобытия
 * @param {string} folder - папка с которой доставать изображения
 * @returns {Object}
 */
export const getImages = (id: string, folder: string) => {
    const trimmedId = id.replace(/\d+/g, '');

    return {
        bw:    `/images/${folder}/${trimmedId}.jpg`,
        hover: `/images/${folder}/${trimmedId}-hover.jpg`
    };
};
