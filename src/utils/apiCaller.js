import axios from "axios";
import * as Config from "./../constants/Config";

export default function callApi(endpoint, method = "GET", body) {
  return (
    axios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body,
    })
      // .then((res) => {
      //   console.log(res.data);
      //   this.setState({
      //     products: res.data,
      //   });
      // })
      .catch((err) => {
        console.log(err);
      })
  );
}
