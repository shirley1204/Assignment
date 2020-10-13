import React, { Component } from "react";
import { connect } from "react-redux";
class Info extends Component {
  render() {
    const { isSelected, values } = this.props.drop;

    return (
      <React.Fragment>
        <div className="container mt-5">
          <div
            className={!isSelected ? "d-block" : "d-none"}
            style={{ border: "2px solid black " }}
          >
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages
            </h4>
          </div>
          <div>
            
        {values === "" ? (
              <div style={{ border: "2px solid black " }}>
                <h4>
                survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
                </h4>
              </div>
            ) : null}
          

        {values === "a" ? (
              <div style={{ border: "2px solid black " }}>
                <h4>
                  Mumbai, formerly Bombay, city, capital of Maharashtra state,
                  southwestern India. It is the country’s financial and
                  commercial centre and its principal port on the Arabian Sea.
                </h4>
              </div>
            ) : null}
            {values === "b" ? (
              <div style={{ border: "2px solid black " }}>
                <h4>
                  Delhi, city and national capital territory, north-central
                  India. The city of Delhi actually consists of two components:
                  Old Delhi, in the north, the historic city; and New Delhi, in
                  the south, since 1947 the capital of India, built in the first
                  part of the 20th century as the capital of British{" "}
                </h4>
              </div>
            ) : null}
            {values === "c" ? (
              <div style={{ border: "2px solid black " }}>
                <h4>
                  Kerala, southwestern coastal state of India. It is a small
                  state, constituting only about 1 percent of the total area of
                  the country. Kerala stretches for about 360 miles (580 km)
                  along the Malabar Coast, varying in width from roughly 20 to
                  75 miles (30 to 120 km). It is bordered by the states of
                  Karnataka (formerly Mysore) to the north and Tamil Nadu to the
                  east and by the Arabian Sea to the south and west; it also
                  surrounds Mahe, a segment of the state of Puducherry, on the
                  northwestern coast.
                </h4>
              </div>
            ) : null}
            {values === "d" ? (
              <div style={{ border: "2px solid black " }}>
                <h4>
                  Goa, state of India, comprising a mainland district on the
                  country’s southwestern coast and an offshore island. It is
                  located about 250 miles (400 km) south of Mumbai (Bombay). One
                  of India’s smallest states, it is bounded by the states of
                  Maharashtra on the north and Karnataka on the east and south
                  and by the Arabian Sea on the west. The capital is Panaji
                  (Panjim), on the north-central coast of the mainland district
                </h4>
              </div>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    drop: state.drop,
  };
}

export default connect(mapStateToProps)(Info);
