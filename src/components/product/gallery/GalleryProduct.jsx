import SlideProduct from '@/components/product/gallery/SlideProduct';
import { useState } from 'react';

const GalleryProduct = ({ ARRAY_IMGS, ARRAY_IMGS_SMALL }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleOpenModal = () => {
		window.innerWidth > 767 && setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	return (
		<div className=''>
			<SlideProduct
				ARRAY_IMGS={ARRAY_IMGS}
				ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
				className='grid md:grid-cols-4 md:gap-4'
				handleOpenModal={handleOpenModal}
			/>
			{isOpenModal && (
				<>
					<SlideProduct
						ARRAY_IMGS={ARRAY_IMGS}
						ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
						isOpenModal={isOpenModal}
						className='hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:max-w-md md:-translate-x-1/2  md:-translate-y-1/2 md:grid-cols-4 md:gap-4'
						handleCloseModal={handleCloseModal}
					/>
					{/* para difuminar el fondo(bg) tb se puede usar blackdrop-blur-xl */}
					{/* se cierra el modal cuando haces click en cualquier parte. Opcional */}
					<span
						className='fixed top-0 left-0 h-full w-full bg-black/70'
						onClick={handleCloseModal}
					></span>
				</>
			)}
		</div>
	);
};
export default GalleryProduct;
