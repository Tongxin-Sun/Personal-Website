import React from 'react';
import ImageGallery from 'react-image-gallery'; 
import {MdPhotoSizeSelectActual} from 'react-icons/md';

const images = [
    {
    original: 'images/bubble-sort-insertion-sort-time-complexity-comparison.png',
    thumbnail: 'images/bubble-sort-insertion-sort-time-complexity-comparison.png',
    description: `Bubble sort and insertion sort comparison (2022)`,
    originalHeight: '450px',
    },
    {
    original: 'images/colored-pencil-drawing-chinese-literature-figure-daiyu.jpg',
    thumbnail: 'images/colored-pencil-drawing-chinese-literature-figure-daiyu.jpg',
    description: `Colored pencil drawing chinese literature figure 'Daiyu' (2019)`,
    originalHeight: '450px',
    },
    {
    original: 'images/colored-pencil-drawings-chinese-literature-figures-baodai.jpg',
    thumbnail: 'images/colored-pencil-drawings-chinese-literature-figures-baodai.jpg',
    description: `Colored pencil drawing chinese literature figures 'Baodai' (2019)`,
    originalHeight: '450px',
    },
    {
    original: 'images/danmaku-study-2019.png',
    thumbnail: 'images/danmaku-study-2019.png',
    description: `Danmaku study result table (2019)`,
    originalHeight: '450px',
    },
    {
    original: 'images/diy-notebook-design.jpg',
    thumbnail: 'images/diy-notebook-design.jpg',
    description: `DIY notebook design (2019)`,
    originalHeight: '450px',
    },
    {
    original: 'images/knitted-baby-hat.jpg',
    thumbnail: 'images/knitted-baby-hat.jpg',
    description: `A knitted baby hat (2021)`,
    originalHeight: '450px',
    },
    {
    original: 'images/lego-flower.jpg',
    thumbnail: 'images/lego-flower.jpg',
    description: `A lego flower (2022)`,
    originalHeight: '450px',
    },
    {
    original: 'images/line-segment-calculator-python.png',
    thumbnail: 'images/line-segment-calculator-python.png',
    description: `Sample output of a line segment calculator program in Python (2022)`,
    originalHeight: '450px',
    },
    {
    original: 'images/mancala-game-python.png',
    thumbnail: 'images/mancala-game-python.png',
    description: `Sample output of a Mancala game program in Python (2022)`,
    originalHeight: '450px',
    },
    {
    original: 'images/twitter-network-analysis-paris-attack-2016.png',
    thumbnail: 'images/twitter-network-analysis-paris-attack-2016.png',
    description: `Network analysis study of twitter during Paris Attack (2016)`,
    originalHeight: '450px',
    },
];

function GalleryPage() {
    return (
        <>
            <h2><MdPhotoSizeSelectActual/>GALLERY</h2>
            <p>A list of projects that I have accomplished.</p>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
    );
}
 
export default GalleryPage;