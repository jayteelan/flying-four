import React, {Component} from 'react'
import axios from 'axios'

class RoomButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        }
    }

    //TODO: Hardcoding axios pull for rooms data for now via :hotel_id = 3. Change to props when connected with Hotel component.
    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3001/hotels/3/rooms`) 
            this.setState({
                rooms: response.data.rooms
            })
        } catch (error) {
            console.error(error)
        }
    }

    render(){

        const {rooms} = this.state

        const renderRooms = rooms.map(room => {
            return(
                <div className="room-button">
                    <div className='room-button-header'>
                        <p>Unreal Deal</p>
                        <p>Book this and save 20% on your flight</p>
                    </div>
                    <div className="room-details-container">
                    <div className="room-details-left">
                        <p>Parlor Room with 1 Bed</p>
                        <p>1 Twin Bed</p>
                        <p>Room sleeps 1 guest</p>
                        <p className="free-wifi">Free Wifi</p>
                        <p className="show-info-link">Show room information</p>
                    </div>
                    <div className="room-details-right">
                        <p className="red">Only 1 room left at</p>
                        <p>$100.00</p>
                        <p>per night</p>
                        <p>Free cancellation</p>
                        <p>until Sun, May 31</p>
                    </div>
                    </div>
                    <button className="room-select-button">
                        Select
                    </button>
                </div>
            )
        })
        return(
            <div>
                {renderRooms}
            </div>
        )
    }

}

export default RoomButton