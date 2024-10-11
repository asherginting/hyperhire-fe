'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Atoms } from '@/app/components/atoms';

interface DropdownButtonProps {
  toggleDropdown: () => void;
  dropdownOpen: boolean;
}

interface DropdownItemProps {
  text: string;
  isBordered?: boolean;
}

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  return (
    <nav className="container mx-auto px-[15px]">
      <div className="flex justify-between items-center py-[15px]">
        <Link href="/" className="flex items-center">
          <Atoms.Image src="/images/hyperhire-logo.webp" alt="hyperhire-logo" width={114} height={21} />
        </Link>
        <div className="hidden sm:flex gap-[20px]">
          <DropdownButton toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
          <h2 className="text-white text-[16px] leading-[24px] cursor-pointer">해외 개발자 활용 서비스</h2>
        </div>
        <ContactButton />
      </div>
    </nav>
  );
};

const DropdownButton = ({ toggleDropdown, dropdownOpen }: DropdownButtonProps) => (
  <div className="relative">
    <button onClick={toggleDropdown} className="text-white text-[16px] leading-[24px] flex items-center">
      채용
      <span className={`ml-1 transform transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
    </button>
    {dropdownOpen && <DropdownMenu />}
  </div>
);

const DropdownMenu = () => (
  <div className="absolute top-full left-0 w-[240px] mt-2 bg-white shadow-md rounded">
    <ul className="py-2">
      <DropdownItem text="채용" />
      <DropdownItem text="해외 개발자 원격 채용" isBordered />
      <DropdownItem text="외국인 원격 채용 (비개발 직군)" isBordered />
      <DropdownItem text="한국어 가능 외국인 채용" isBordered />
    </ul>
  </div>
);

const DropdownItem = ({ text, isBordered }: DropdownItemProps) => (
  <li className={`px-4 py-2 cursor-pointer text-charcoal-blue ${isBordered ? 'border-t-[1px] border-[#F2F4F7]' : ''}`}>
    {text}
  </li>
);

const ContactButton = () => (
  <button className="sm:block hidden bg-white text-blue py-1.5 px-5 rounded-[8px] text-[16px] leading-[24px]">
    문의하기
  </button>
);
