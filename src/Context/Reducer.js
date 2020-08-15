export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	spotify: null,
	discover_weekly: null,
	top_artists: null,
	//=====Removed After Debugging====
	//token: 'BQA6N6z_FtLWbmipZNafjzMncwbcblzD3egip6MZjZ82sMZ1uSIaglvG0cQfM9DTiGPSSiKs1VnnokNcZEaJ3_noLnhDEufjyteRNVb99FybC6UwftDLbuSC5EHyWDcSC3AVhxfc1iEFCFo4HHe-_LBWoPVqc2iikLJi4nYviH4SxJVAxXai'
};

const reducer = (state, action) => {
console.log(action); 
	switch(action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			}
		case "SET_PLAYLISTS":
		    return {
		    	...state,
		    	playlists: action.playlists,
		    }
		case "SET_DISCOVERWEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,				
			}

		default:
			return state;
	}
}

export default reducer;