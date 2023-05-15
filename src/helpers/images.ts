/**
 * Хелпер который помогает получить доступ к изображению
 *
 * @param {string} id - id cобытия
 * @param {string} folder - папка с которой доставать изображения
 * @returns {Object}
 */
export const getImages = (id: string, folder: string) => {
    return {
        bw:    `/images/${folder}/${id}.jpg`,
        hover: `/images/${folder}/${id}-hover.jpg`
    };
};
