import React from 'react'
import Image from '../../comps/Image'
import Card from '../../comps/Card'
import css from '../../../styles/styles'

const { ContentContainer } = css

const Content = () => {
    return (
        <React.Fragment>
            <ContentContainer>
                <Image></Image>
                <Card></Card>
            </ContentContainer>
        </React.Fragment>
    )
}

export default Content
