import React from 'react';
import styled from 'styled-components';
import MediaCard from './MediaCard'

export const SectionContainer = styled.span`
    height: 28em;
`

export const SectionHeadingContainer = styled.div`
    text-align: center;
    padding-bottom: 1em;
`

const MediaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 2em;
    margin-right: 2em;
    padding-top: 3em;
    padding-bottom: 4em;
`

export default class NewsFeatureSection extends React.Component {
    render() {
        return (
            <SectionContainer>
                <SectionHeadingContainer>
                    <h2>As featured on</h2>
                </SectionHeadingContainer>
                <MediaContainer>
                    <MediaCard/>
                    <MediaCard/>
                    <MediaCard/>
                </MediaContainer>
                <a href="/news" >Read more about us in the news</a>
            </SectionContainer>
        )
    }
}