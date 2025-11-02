import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import './user.scss';
import Section from '../../section/Section';
import Icon from '../../icon/Icon';
import ContextMenu from '../../context-menu/ContextMenu';
import Button from '../../button/Button';

const User = () => {
    const [shouldShowMenu, setShouldShowMenu] = useState(false);
    const [position, setPosition] = useState({ top: 0, right: 0 });

    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!ref.current) return;

        const { right, bottom } = ref.current.getBoundingClientRect();
        const { width } = document.body.getBoundingClientRect();

        setPosition({ top: bottom + 12, right: width - right });
    }, []);

    return (
        <div className="user" ref={ref}>
            <Section className="user__section" disableHover onClick={() => setShouldShowMenu(true)}>
                <Icon icon="fas fa-user" onClick={() => {}} />
            </Section>

            <ContextMenu
                open={shouldShowMenu}
                position={position}
                onClose={() => setShouldShowMenu(false)}>
                <div className="user__menu">
                    <div className="user__menu__item" style={{ justifyContent: 'space-between' }}>
                        Plan <span>19,99€</span>
                    </div>
                    <div className="user__menu__item">Seite öffnen</div>
                    <div className="user__menu__line" />
                    <div className="user__menu__item" style={{ color: 'red' }}>
                        Löschen
                    </div>
                    <div className="user__menu__button">
                        <Button>Abmelden</Button>
                    </div>
                </div>
            </ContextMenu>
        </div>
    );
};

User.displayName = 'User';

export default User;
