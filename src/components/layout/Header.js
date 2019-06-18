import React, { Component } from 'react'
import { Link, prefixURL } from "next-prefixed";
import Menu from "./Menu";

class Header extends Component {
    state = {
        menuIsOpen: false
    };

   constructor() {
     super();
     this.toggleMenu = this.toggleMenu.bind(this);
  }

    toggleMenu() {
        this.setState(prevState => ({
            menuIsOpen: !prevState.menuIsOpen
        }));
    }


    render() {
    const { menuIsOpen } = this.state;

    return (
        <nav>
            <div className="flex flex-row justify-between items-center px-4 py-6 border-b border-gray-200 sm:px-6 md:py-16 md:px-8 xl:px-16">
                <div>
                    <button 
                        onClick={this.toggleMenu} 
                        className={ `hamburger hamburger--squeeze ${this.state.menuIsOpen ? 'is-active' : ''}` } 
                        type="button"
                        aria-label="Menu"
                        aria-controls="navigation"
                        aria-expanded={this.state.menuIsOpen}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                        <span className="hamburger-label font-semibold text-gray-900">Menu</span>
                    </button>
                </div>
                <div class="logo">
                    <Link href="/">
                        <a>
                            <img className="w-8 md:w-16 lg:w-20" src={prefixURL("/static/img/kkontichfc.svg")} alt="K. Kontich F.C." />
                        </a>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="font-semibold text-gray-900 uppercase">
                        <li className="inline-block pr-12">
                            <Link href="/nieuws/overzicht/">
                                <a>Match center</a>
                            </Link>
                        </li>
                        <li className="inline-block pr-12">
                            <Link href="/nieuws/overzicht/">
                                <a>Webshop</a>
                            </Link>
                        </li>
                        <li className="inline-block">
                            <Link href="/nieuws/overzicht/">
                                <a>Sponsors</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        <div 
            id="navigation"
            className={ `${this.state.menuIsOpen ? 'open' : 'closed'}` }
        >
            <Menu />
        </div>
    </nav>
    );
    }
}

export default Header;