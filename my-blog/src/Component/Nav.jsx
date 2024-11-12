import Link from 'next/link'
import './style.css'
import './globals.css'
    
export default function Nav () {
  const navItems = [
    { href: "/", text: "Home", buttonClass: "contactButton" },
    { href: "/projects", text: "Projects", buttonClass: "contactButton" },
    { href: "/contact", text: "Contact", buttonClass: "contactButton" }
  ];

  return (
    <div className="Nav-container">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <a>
                <button className={item.buttonClass}>
                  {item.text}
                  <div className="iconButton">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
