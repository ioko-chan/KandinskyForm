import React from 'react'
import css from '../../../styles/styles'

const { HeaderContainer, HeaderCSS } = css

const buttonCSS = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#B0F347'
}

const Header = () => {
    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.MenuContainer>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Header
