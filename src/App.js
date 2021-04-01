import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/covid-2.jpg";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });

    console.log(country);
  };

  render() {
    const { data, country } = this.state;
    console.log("i'm here", data);
    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="covid19" />

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <p>
          Made with ♡ by <i>Nishant</i>
        </p>
      </div>
    );
  }
}

export default App;
