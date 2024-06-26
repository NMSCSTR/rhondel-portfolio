import React, { useRef, useEffect } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  const handleTalkClick = () => {
    const zoomMeetingLink = 'https://zoom.us/j/7956492502; // Replace with your Zoom meeting link
    window.open(zoomMeetingLink, '_blank');
  };

  return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ========== logo ========== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              R
            </span>
            <div className="leading-[20px]">
              <h1 className="text-xl text-smallTextColor font-[700]">RhonDev</h1>
              <p className="text-smallTextColor text-[14px] font-[500]">Portfolio</p>
            </div>
          </div>
          {/* ========== logo end  ========== */}
          {/* ========== Menu start  ========== */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#about">About</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#services">Services</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#portfolio">Portfolio</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#contact">Contact</a></li>
            </ul>
          </div>
          {/* ========== Menu end  ========== */}
          {/* ========== Menu right  ========== */}
          <div className="flex items-center gap-4 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
            <button className="flex items-center gap-2" onClick={handleTalkClick}>
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>
            <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* ========== Menu end  ========== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
