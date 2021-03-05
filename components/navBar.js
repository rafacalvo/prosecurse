import Link from 'next/link'

export default function NavBar() {
  const openNav = () => {
    document.getElementById('topNav').style.top = '0'
    document.body.style.transition = 'position ease 500ms'
  }

  const closeNav = () => {
    document.getElementById('topNav').style.top = '-100%'
    document.body.style.transition = 'position ease 500ms'
  }

  return (
    <nav className='nav'>
      {/* Desktop Navbar */}
      <div className='nav__desktop hide-for-mobile pall-1 container flex flex-jc-sb flex-ai-c'>
        <Link href='/'>
          <a className='logo'>Prosecurse </a>
        </Link>
        <div className='desk-links'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/team'>
            <a>Team</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className='nav__mobile hide-for-desktop flex flex-jc-sb flex-ai-c py-2 px-2'>
        <Link href='/'>
          <a className='logo'>Prosecurse </a>
        </Link>
        <a className='nav-ham' onClick={openNav}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='#252b42'
            className='bi bi-list'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
            />
          </svg>
        </a>
      </div>

      <div
        id='topNav'
        className='topnav hide-for-desktop flex flex-fd-c flex-ai-c'>
        <div className='mobile-header flex flex-jc-c flex-ai-c'>
          <Link href='/'>
            <a className='logo'>Prosecurse </a>
          </Link>
          <a onClick={closeNav}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='42'
              height='42'
              fill='#252b42'
              className='bi bi-x'
              viewBox='0 0 16 16'>
              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
            </svg>{' '}
          </a>
        </div>
        <div className='mobile-links flex flex-js-sb flex-fd-c'>
          <Link href='/'>
            <a onClick={closeNav}>Home </a>
          </Link>
          <Link href='/about'>
            <a onClick={closeNav}>About </a>
          </Link>
          <Link href='/team'>
            <a onClick={closeNav}>Team </a>
          </Link>
          <Link href='/contact'>
            <a onClick={closeNav}>Contact </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
