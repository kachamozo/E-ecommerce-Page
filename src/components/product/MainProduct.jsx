import SlideProduct from '@/components/product/SlideProduct';
import DetailsProduct from '@/components/product/DetailsProduct';

function MainProduct() {
	return (
		<main className='grid grid-cols-1 gap-8 md:grid-cols-2'>
			<SlideProduct />
			<DetailsProduct />
		</main>
	);
}

export default MainProduct;
