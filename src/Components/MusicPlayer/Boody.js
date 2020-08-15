import React from 'react';
import Header from './Header';
import '../../CSS/Boody.css';
import { useDataLayerValue } from '../../Context/DataLayer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './Body/SongRow';

const Body = ({spotify}) => {

	const [{ discover_weekly }, dispatch] = useDataLayerValue();


	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body_info">
				<img src={discover_weekly?.images[0].url} alt="" />
				<div className="body_text">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly </h2>
					<p>{discover_weekly?.description}</p>
					<p>
						<strong><span>{discover_weekly?.owner.display_name}</span> {" "}.{" "}
						<span className="disc_more">{discover_weekly?.followers.total} Likes</span></strong>
					</p>
				</div>
			</div>
			<div className="body_songs">
				<div className="body_icons">
		          <PlayCircleFilledIcon
		            className="body_shuffle"
		          />
		          <FavoriteIcon fontSize="large" />
		          <MoreHorizIcon />
		        </div>
		        {discover_weekly?.tracks.items.map(item => (
		        	<SongRow track={item.track} />
		        ))}
			</div>
		</div>
	)
}

export default Body;