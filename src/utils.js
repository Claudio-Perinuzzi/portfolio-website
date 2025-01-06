/* 
Takes a relative path and appends it to the base url of the website
Returns the absolute URL of an asset file
Makes it easier to dynamically import images
*/
export const getImageUrl = (relPath) => {
    return new URL(`/assets/${relPath}`, import.meta.url).href;
}