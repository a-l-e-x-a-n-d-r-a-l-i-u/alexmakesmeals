import React from 'react';
import styled from 'styled-components';

export const SectionContainer = styled.span` 
    display: flex;
    justify-content: center;
    padding-left: 2em;
    padding-right: 2em;
`
export const Image = styled.img`
    height: 8em;
`

export default function LogoTile(props) {
    return (
        <SectionContainer>
            <Image src={props.image} />
        </SectionContainer>
    )
}