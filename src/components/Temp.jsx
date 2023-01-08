import Fire from "../assets/fire.svg"
import Snow from "../assets/snowflake.svg"
function Temp() {
  return (
    <div className="card-wrapper">
      <h3 className="card-head">Temperature</h3>
      <div className="txt-block">
        <div id="big-21" className="big-txt">
          21
          <span id="big-degree" className="degree">
            °C
          </span>
        </div>
        <div className="small-txt-block">
          <h4 className="small-top-txt">
            <span>
              <img src={Fire} />
            </span>
            &nbsp; 93&nbsp;
            <span className="degree">°C</span>
          </h4>
          <hr />
          <h4 className="small-bottom-txt">
            <span>
              <img src={Snow} />
            </span>
            &nbsp; 61&nbsp;
            <span className="degree">°C</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Temp
