import Link from 'next/link';
import { Atoms } from '@/app/components/atoms';

export const Footer = () => {
  const contact = [
    { id: 1, value: '010-0000-0000' },
    { id: 2, value: 'aaaaa@naver.com' },
  ];

  const services = [
    { title: '해외 개발자 원격 채용', image: '/icons/code.webp' },
    { title: '외국인 원격 채용 (비개발)', image: '/icons/avatar.webp' },
    { title: '한국어 가능 외국인 채용', image: '/icons/kor.webp' },
    { title: '해외 개발자 활용 서비스', image: '/icons/settings.webp' },
  ];

  const information = [
    { title: '상호명', list: ['하이퍼하이어', 'Hyperhire India Private Limited'] },
    { title: '대표 CEO', list: ['김주현', 'Juhyun Kim'] },
    { title: '사업자등록번호 CIN', list: ['427-86-01187', 'U74110DL2016PTC290812'] },
    {
      title: '주소 ADDRESS',
      list: [
        '서울특별시 강남대로 479, 지하 1층 238호',
        'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
      ],
    },
  ];

  return (
    <footer className="bg-off-white w-full py-[40px]">
      <div className="container mx-auto px-[15px]">
        <div className="grid grid-cols-2 gap-3 sm:gap-[20px] lg:grid-cols-6 md:grid-cols-4">
          <div className="sm:col-span-2 col-span-2">
            <Link href="/" className="flex items-center">
              <Atoms.Image src="/images/hyperhire.webp" alt="hyperhire-logo" width={187} height={34} />
            </Link>
            <p className="text-dark text-[14px] pt-[15px] leading-[21px]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매 <br /> 칭해드립니다.
            </p>
            {contact.map((item) => (
              <h5 key={item.id} className="text-medium-gray text-[13px] pt-[10px] leading-[19.5px]">
                {item.value}
              </h5>
            ))}
          </div>
          {services.map((item) => (
            <div className="bg-white rounded-[12px] p-[16px]" key={item.title}>
              <div className="bg-[#EFF1F6] h-[40px] w-[40px] rounded-md flex items-center justify-center">
                <Atoms.Image src={item.image} alt={item.title} width={24} height={24} />
              </div>
              <ul className="pt-[15px]">
                <li className="mb-4 text-dark text-[14px] leading-[21px]">{item.title}</li>
                <li className="mb-4 text-medium-gray text-[14px] leading-[21px] flex gap-[5px]">
                  바로가기{' '}
                  <Atoms.Image
                    src="/icons/arrow-right.webp"
                    alt="arrow-right"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />{' '}
                </li>
              </ul>
            </div>
          ))}
          {information.map((item) => (
            <div key={item.title}>
              <ul className="pt-[25px]">
                <li className="mb-3 text-dark text-[12px] leading-[18px]">{item.title}</li>
                {item.list.map((val, index) => (
                  <li key={index} className="mb-3 text-medium-gray text-[13px] leading-[19.5px]">
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-[30px]">
          <h1 className="text-medium-gray text-[13px] leading-[19.5px]">ⓒ 2023 Hyperhire</h1>
        </div>
      </div>
    </footer>
  );
};
