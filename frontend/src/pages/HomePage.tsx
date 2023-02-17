import Header from "../components/header/Header";
import SearchForm from "../components/search/SearchForm";
import Navbar from "../components/navbar/Navbar";
import "./HomePage.css";

export default function SearchPage(props: any) {
	return (
		<>
			<Navbar />
			<div className="container-fluid" id="SearchPage">
				<div id="search-content">
					<Header />
					<SearchForm
						onCitySelection={props.onCitySelection}
						onServiceSelection={props.onServiceSelection}
						navigateToResults={props.navigateToResults}
					/>
				</div>
				<div id="search-content-shadow"></div>
			</div>
		</>
	);
}