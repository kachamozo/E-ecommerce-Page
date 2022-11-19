import { useEffect, useRef, useState } from 'react';
import PrevIcon from '@/components/icons/PrevIcon';
import NextIcon from '@/components/icons/NextIcon';

export default ({
	ARRAY_IMGS = [],
	ARRAY_IMGS_SMALL = [],
	isOpenModal = false,
	handleOpenModal = null,
	handleCloseModal = null,
	...props
}) => {
	const [imgIndex, setImgIndex] = useState(0);
	const btnSlider = useRef(null);

	useEffect(() => {
		if (isOpenModal) return btnSlider.current.classList.remove('md:hidden');
	}, [isOpenModal]);

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
		<section {...props}>
			{isOpenModal && (
				<button onClick={handleCloseModal} className='text-right md:col-span-4'>
					cerrar
				</button>
			)}
			<div className='relative  col-span-4 '>
				<img
					src={ARRAY_IMGS[imgIndex]}
					alt='img 1'
					className='aspect-[16/13] w-full md:aspect-[16/18] md:cursor-pointer md:rounded-md'
					onClick={handleOpenModal}
				/>

				<div
					ref={btnSlider}
					className='absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden'
				>
					<button
						onClick={handleClickPrev}
						className='grid h-10 w-10 place-items-center rounded-full bg-white '
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
			{ARRAY_IMGS_SMALL.map((imgSmall, i) => {
				return (
					// se crea un span para hacer hover a las imagenes por que nose puede colocar un hover directo a la etiqueta img
					<div
						key={i}
						onClick={() => {
							setImgIndex(i);
						}}
						className='relative cursor-pointer overflow-hidden rounded-md'
					>
						<img
							src={imgSmall}
							alt=''
							className='hidden md:block md:rounded-md'
						/>
						<span
							className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
								i === imgIndex && 'bg-[rgba(255,255,255,0.5)]'
							}`}
						></span>
					</div>
				);
			})}
		</section>
	);
};
