import React from 'react';
import styled from 'styled-components';
import MediaCard from './MediaCard'

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
            <div className="centred-container">
                <div><h2>As featured on</h2></div>
                <MediaContainer>
                    <MediaCard/>
                    <MediaCard/>
                    <MediaCard/>
                </MediaContainer>
                <a href="/news" >Read more about us in the news</a>
            </div>
        )
    }
}