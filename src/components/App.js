import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = { videos : [], selectedVideo: null };

    componentDidMount() {
        this.handleTextSubmit('current news')
    };

    handleTextSubmit = (text) => {
        Youtube.get('/search',{
            params: { q: text }
        }).then(res => res.data.items)
        .then(videos => this.setState({
            videos,
            selectedVideo: videos[0]
        }))
        .catch( err => JSON.stringify(err))

    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return(
            <div className="ui container">
                <SearchBar
                onFormSubmit={this.handleTextSubmit}
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                            video={this.state.selectedVideo}
                            />
                        </div>
                        <div className="five wide column">
                            <VideoList
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}



export default App;