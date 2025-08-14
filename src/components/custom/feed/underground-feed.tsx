import { SearchBar } from "./search-bar"
import { Feed } from "./feed"

export default function UndergroundFeed() {

	return (
		<div className="flex flex-col items-center w-full border-t overflow-y-scroll py-4 border-background-muted">
			<SearchBar />
			<Feed />
		</div>
	)
}
