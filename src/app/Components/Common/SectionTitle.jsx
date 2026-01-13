import safeParse from '@/lib/utils/safeHtmlParser';
import Image from 'next/image';

const SectionTitle = ({Title,SubTitle}) => {
    return (
        <div>
          <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
          {safeParse(SubTitle)} <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
          </div>
          <h2 className="title wow fadeInUp" data-wow-delay=".4s">{safeParse(Title)}</h2>
        </div>
    );
};

export default SectionTitle;