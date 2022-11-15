import PrevIcon from '@/components/icons/PrevIcon';
import NextIcon from '@/components/icons/NextIcon';

import imgProdutc1 from '@/assets/images/image-product-1.jpg';
import imgProdutc2 from '@/assets/images/image-product-2.jpg';
import imgProdutc3 from '@/assets/images/image-product-3.jpg';
import imgProdutc4 from '@/assets/images/image-product-4.jpg';

import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg';
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg';
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg';
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg';
import { useState } from 'react';

const ARRAY_IMGS = [imgProdutc1, imgProdutc2, imgProdutc3, imgProdutc4];

export default () => {
	const [imgIndex, setImgIndex] = useState(0);

	const handleClickPrev = () => {
		imgIndex === 0
			? setImgIndex(ARRAY_IMGS.length - 1)
			: setImgIndex(imgIndex - 1);
	};

	const handleClickNext = () => {
		imgIndex === ARRAY_IMGS.length - 1
			? setImgIndex(0)
			: setImgIndex(imgIndex + 1);
	};
	return (
		<section className='grid md:grid-cols-4 md:gap-4'>
			<div className='relative col-span-4 '>
				<img
					src={ARRAY_IMGS[imgIndex]}
					alt='img 1'
					className='aspect-[16/12]'
				/>
				;
				<div className='absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4'>
					<button
						onClick={handleClickPrev}
						className='grid h-10 w-10 place-items-center rounded-full bg-white'
					>
						<PrevIcon />
					</button>
					<button
						onClick={handleClickNext}
						className='grid h-10 w-10 place-items-center rounded-full bg-white'
					>
						<NextIcon />
					</button>
				</div>
			</div>
			<img src={imgProductSmall1} alt='' className='hidden md:block' />
			<img src={imgProductSmall2} alt='' className='hidden md:block' />
			<img src={imgProductSmall3} alt='' className='hidden md:block' />
			<img src={imgProductSmall4} alt='' className='hidden md:block' />
		</section>
	);
};
