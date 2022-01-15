import React from "react";
import "./style.css";

const NavigationMenu = () => {
    return (
        <div className="navigation-menu--fixed">
            <ul className="navigation-menu--list">
                <MenuComponent icon="profile-pic" label="Rafael Vargas" />
                <MenuComponent icon="friends" label="Friends" />
                <MenuComponent icon="groups" label="Groups" />
                <MenuComponent icon="saved" label="Saved" />
                <MenuComponent icon="marketplace" label="Marketplace" />
                <MenuComponent icon="watch" label="Watch" />
                <MenuComponent more={true} label="See more"  />
            </ul>
            <ul className="navigation-menu--list second">
                <h2>Your Shortcuts</h2>
                <MenuComponent groups="groups" icon="wolf" label="Friends" />
                <MenuComponent groups="groups" icon="wolf" label="Groups" />
                <MenuComponent groups="groups" icon="wolf" label="Saved" />
                <MenuComponent groups="groups" icon="wolf" label="Rafael Vargas" />
                <MenuComponent groups="groups" icon="wolf" label="Marketplace" />
                <MenuComponent groups="groups" more={true} label="See more"  />
            </ul>
            <footer>
                <FooterItem text="Privacy" />
                <FooterItem text="Terms" />
                <FooterItem text="Advertising" />
                <FooterItem text="Ad Choices" />
                <FooterItem text="Cookies" />
                <FooterItem text="More" />
                <FooterItem text="Meta © 2022" last={true} />
            </footer>
        </div>
    );
}

const MenuComponent = (props) => {
    return (
            <li>
                {!props.more &&
                    <img src={`${props.icon}.png`} alt="" className={props.groups} />
                }
                
                {props.more &&
                    <div className="more-icon">
                        <svg viewBox="0 0 16 16" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry jnigpg78 odw8uiq3"><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                    </div>
                }
                <p>{props.label}</p>
            </li>
    );
};

const FooterItem = (props) => {
    return (
        <>
        <p className={!props.last ? "" : "last-text"}>{props.text}</p>
        {!props.last &&
         <span>·</span>
        }
        </>
    )
    
}

export default NavigationMenu;