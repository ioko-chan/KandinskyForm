import styled from 'styled-components'

const css = {
    HeaderContainer: styled.header`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 250px;
        background-color: #fff0f5;
    `,
    ContentContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        position: relative;
        background-color: #fff0f5;
    `,
    FooterContainer: styled.footer`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #fff0f5;
    `,
    HeaderCSS: {
        Logo: styled.div`
        font-size: 34px;
        color: #B0F347;
        `,
        MenuContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        `
    }
}

export default css