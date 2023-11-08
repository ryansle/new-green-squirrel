'use client';

// Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MenuCard } from '@/components/menu';

// Utilities
import { gallery } from '@/lib/constants';

type ViewerProps = {
  slides: number;
};

const Viewer = (props: ViewerProps) => {
  const { slides } = props;

  return (
    <Swiper
      className='p-4'
      slidesPerView={slides}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {gallery.map((item) => (
        <SwiperSlide key={item.title}>
          <MenuCard href={item.href} title={item.title} imageUrl={item.imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Gallery = () => {
  return (
    <div>
      <h2 className='text-center mt-4 font-semibold text-2xl'>
        Carrying Only the Finest...
      </h2>

      <div className='flex mt-2 block sm:hidden'>
        <Viewer slides={2} />
      </div>

      <div className='flex mt-2 hidden sm:block xl:hidden'>
        <Viewer slides={3} />
      </div>

      <div className='flex mt-2 hidden xl:block'>
        <Viewer slides={4} />
      </div>
    </div>
  );
};

export { Gallery };
