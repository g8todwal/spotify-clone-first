import React from 'react';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import '../../CSS/Header.css';
import { useDataLayerValue } from '../../Context/DataLayer'

const Header = () => {
	const [{ user }, dispatch] = useDataLayerValue();


	return (
		<div className="header">
			<div className="header_left">
				<SearchIcon />
		        <input
		          placeholder="Search for Artists, Songs, or Podcasts "
		          type="text"
		        />
			</div>

			<div className="header_right">
				<Avatar alt={user?.display_name} src={user?.images[0].url} />
				<h5>{user?.display_name}</h5>
			</div>

		</div>
	)
}

export default Header;